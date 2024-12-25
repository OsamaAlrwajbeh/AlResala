using AlResalah.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using CMSCore;
using CMS.Config;
using CMS.Helpers;
using CMS.Managers;
using CMS;
using System.Text;
using System.Collections.Generic;
using DocumentFormat.OpenXml.Office2010.Excel;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Configuration;
  using MimeKit;
using MailKit.Net.Smtp;
using System.Web.Mvc;
using DocumentFormat.OpenXml.Office2016.Drawing.ChartDrawing;
namespace AlResalah.Controllers
{
    public class HomeController : KensoftControllerCore
    {
        private static EmailConfiguration _emailConfig;


        private IStringLocalizer<SharedResource> _sharedLocalizer;

 
        public HomeController(IStringLocalizer<SharedResource> sharedLocalizer,  ILogger<HomeController> logger  ,EmailConfiguration emailConfig)
        {
            _sharedLocalizer = sharedLocalizer;

            _emailConfig = emailConfig;

        }
       
       
        public IActionResult Index()
        {

            Console.Write(Request.Path);
            Console.Write(Request.PathBase);
            foreach (var item in Request.RouteValues.Values)
            {
                Console.Write(item + "/");
            }
            //managers
            ArticleManager amgr = new ArticleManager(ConnectionString);
            StaticPageManager pmgr = new StaticPageManager(ConnectionString);

            // getting data inside main article
            //section 1
            ArticleType MainArticleDataS1 = amgr.GetArticleType("10016", CurrentLanguage);
            ViewBag.MainArticleDataS1 = MainArticleDataS1;
            ViewBag.Video = pmgr.GetStaticPage(30049, CurrentLanguage);


            //getting data inside single sub article
            ViewBag.WelcomeBtnS1 = amgr.GetArticle("40087", CurrentLanguage);

            ViewBag.Paragraph1S1 = amgr.GetArticle("40088", CurrentLanguage);

            ViewBag.Paragraph2S1 = amgr.GetArticle("40089", CurrentLanguage);


            //section 2
            ViewBag.MainArticleDataS2 = amgr.GetArticleType("10017", CurrentLanguage);

            //get items inside parent article
            ViewBag.ArticleItemsS2 = amgr.GetArticleTypeArticles("10017", CurrentLanguage, 1, 10).OrderBy(x => x.Date).ToList();


            //section 3
            ViewBag.MainArticleDataS3 = amgr.GetArticleType("10018", CurrentLanguage);
            ViewBag.ArticleItemsS3 = amgr.GetArticleTypeArticles("10018", CurrentLanguage, 1, 10).OrderBy(x => x.Date).ToList();

            //section 4
            ViewBag.MainArticleDataS4 = amgr.GetArticleType("10019", CurrentLanguage);
            ViewBag.ParagraphS4 = amgr.GetArticle("40092", CurrentLanguage);
            ViewBag.ButtonS4 = amgr.GetArticle("40093", CurrentLanguage);

            // section 5
            ViewBag.MainArticleDataS5 = amgr.GetArticleType("10020", CurrentLanguage);
            ViewBag.ArticleItemsS5 = amgr.GetArticleTypeArticles("10020", CurrentLanguage, 1, 10).OrderBy(x => x.Date).ToList();

            return View();
        }




        public void SendEmail(string from, string to, string subject, string body, IFormFile attachments = null)
        {
            var SiteURL = Environment.GetEnvironmentVariable("WebsiteUrl");
            var mes = body; //string.Format(_sharedLocalizer["EmailTemplate"], body, SiteURL, subject);
            var message = new Message(new string[] { to }, subject, mes, attachments);
            MimeMessage emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress(_emailConfig.From, _emailConfig.From));
            emailMessage.To.AddRange(message.To);
            emailMessage.Subject = message.Subject;

            BodyBuilder bodyBuilder = new BodyBuilder();
            bodyBuilder.HtmlBody = mes;
            bodyBuilder.TextBody = mes;
            byte[] fileBytes;

            if (message.Attachment != null)
            {


                using (var ms = new MemoryStream())
                {
                    message.Attachment.CopyTo(ms);
                    fileBytes = ms.ToArray();
                }
                bodyBuilder.Attachments.Add(message.Attachment.FileName, fileBytes, ContentType.Parse(message.Attachment.ContentType));

            }

            emailMessage.Body = bodyBuilder.ToMessageBody();

            using (var client = new SmtpClient())
            {
                try
                {
                    client.Connect(_emailConfig.SmtpServer, _emailConfig.Port, false);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    client.Authenticate(_emailConfig.UserName, _emailConfig.Password);
                    client.Send(emailMessage);

                }
                catch
                {
                    //log an error message or throw an exception or both.
                    throw;
                }
                finally
                {
                    client.Disconnect(true);
                    client.Dispose();
                }
            }
        }






       
        public IActionResult AboutUs()
        {
            //managers
            ArticleManager amgr = new ArticleManager(ConnectionString);


            Article Message= amgr.GetArticle("40133", CurrentLanguage);
            ViewBag.Message = Message;
			Article Vision = amgr.GetArticle("40132", CurrentLanguage);
            ViewBag.Vision = Vision;


            ViewBag.TitleAboutUs = amgr.GetArticleType("10021", CurrentLanguage);

            //statistics section
            Article NumCtSudents = amgr.GetArticle("40106", CurrentLanguage);
            ViewBag.NumCtSudents = NumCtSudents;

            Article PrcOutstanding = amgr.GetArticle("40105", CurrentLanguage);
            ViewBag.PrcOutstanding = PrcOutstanding;

            Article NumGrades = amgr.GetArticle("40104", CurrentLanguage);
            ViewBag.NumGrades = NumGrades;

            //Article News
            List<Article> News = amgr.GetArticleTypeArticles("10020", CurrentLanguage);
            ViewBag.News = News;
            ViewBag.TitleNews = amgr.GetArticleType("10020", CurrentLanguage);


            List <Article> statSection = amgr.GetArticleTypeArticles("10026", CurrentLanguage);

            ViewBag.statSection = statSection;

            return View();
        }

    
        public IActionResult OurTeam()

        {
            ArticleManager amgr = new ArticleManager(ConnectionString);
            //title main OurTeam
            ViewBag.OurTeamTitle = amgr.GetArticleType("10030", CurrentLanguage);
            //data info OurTeam
            List<Article> DescriptionOurTeam = amgr.GetArticleTypeArticles("10030", CurrentLanguage);
            ViewBag.DescriptionOurTeam = DescriptionOurTeam;

            return View();
        }

       
        public IActionResult Administration()
        {
            ArticleManager amgr = new ArticleManager(ConnectionString);
            // title main Administration
            ViewBag.TitleAdmin = amgr.GetArticleType("10031", CurrentLanguage);
           
            // data info Administration
            List<Article> DescriptionAdministration = amgr.GetArticleTypeArticles("10031", CurrentLanguage);
            ViewBag.DescriptionAdministration = DescriptionAdministration;


            return View();
        }
        
        public IActionResult Divisions()




        {


            ArticleManager amgr = new ArticleManager(ConnectionString);
            //title main Divisions
            ViewBag.TitleDivisions = amgr.GetArticleType("10027", CurrentLanguage);
            // data info Divisions
            List<Article> divisions = amgr.GetArticleTypeArticles("10027", CurrentLanguage);
            ViewBag.divisions = divisions;



            return View();
        }
        
        public IActionResult Gallery()
        {

            StaticPageManager Pmgr = new StaticPageManager(ConnectionString);
            ArticleManager amgr = new ArticleManager(ConnectionString);
            
            ViewBag.TitleGallery = amgr.GetArticleType("10028", CurrentLanguage);


            List<Article> Gallery = amgr.GetArticleTypeArticles("10028", CurrentLanguage);

            ViewBag.Gallery = Gallery;





         





            return View();
        }
       
        public IActionResult ContactUs()
        {

            StaticPageManager Pmgr = new StaticPageManager(ConnectionString);
            ArticleManager amgr = new ArticleManager(ConnectionString);
            List<StaticPage> staticPages = new List<StaticPage>();


            try
            {
                //insta

                staticPages.Add(Pmgr.GetStaticPage(30048, CurrentLanguage));
                //Tel
                staticPages.Add(Pmgr.GetStaticPage(30047, CurrentLanguage));
                //wats
                staticPages.Add(Pmgr.GetStaticPage(30046, CurrentLanguage));
                //facebook
                staticPages.Add(Pmgr.GetStaticPage(30045, CurrentLanguage));
                //email
                staticPages.Add(Pmgr.GetStaticPage(30029, CurrentLanguage));
                //mobile
                staticPages.Add(Pmgr.GetStaticPage(30028, CurrentLanguage));
                //adress
                staticPages.Add(Pmgr.GetStaticPage(30027, CurrentLanguage));

               
            }
            catch (Exception e){}



            return View(staticPages);
        }

        [Microsoft.AspNetCore.Mvc.HttpPost()]
       
        public IActionResult ContactUs([FromForm] ContactUsRequest request)
                      {
            Dictionary<string, object> response = new Dictionary<string, object>();
            string from = _emailConfig.From.ToString();
                string to = _emailConfig.From.ToString();
                string description = request.Description.ToString();
                var message = string.Format("<div style=\"background-image:initial;background-position:initial;background-size:initial;background-repeat:initial;background-origin:initial;background-clip:initial;padding:3%;text-align:center\"> <div style=\"font-weight:500\"> <p dir=\"ltr\" class=\"MsoNormal\">  <img src=\"://.........\" height=\"120\" style=\"text-align:start;background-color:rgb(251,251,251)\" class=\"CToWUd a6T\" data-bit=\"iit\" tabindex=\"0\"> <div class=\"a6S\" dir=\"ltr\" style=\"opacity: 0.01; left: 402.578px; top: 125.109px;\"><div id=\":pu\" class=\"T-I J-J5-Ji aQv T-I-ax7 L3 T-I-KL a5q\" role=\"button\" tabindex=\"0\" aria-label=\"تحميل المرفق \" data-tooltip-class=\"a1V\" data-tooltip=\"تنزيل\"><div class=\"akn\"><div class=\"aSK J-J5-Ji aYr\"></div></div></div></div></span></p> <p dir=\"ltr\" class=\"MsoNormal\"><span style=\"font-family:Roboto;font-size:large\">Contact Us </span><img alt=\"\" style=\"font-family:Roboto;font-size:large\"></p> <p dir=\"ltr\" style=\"color: red;\" class=\"MsoNormal\">New Message From " + request.FullName.ToUpper().ToString() + "<span lang=\"AR-JO\"><font face=\"Roboto\" size=\"4\"><br><br><br></font></span></p> <div align=\"center\"> <center> <table dir=\"ltr\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\"> <tbody> <tr> <td width=\"197\" valign=\"top\"> <br> <p class=\"MsoNormal\" align=\"center\" dir=\"ltr\"><span lang=\"EN-US\" dir=\"LTR\" style=\"font-size:12.0pt\">Full Name</span><span dir=\"ltr\"></span><span dir=\"ltr\"></span><span lang=\"EN-US\"><span dir=\"ltr\"></span><span dir=\"ltr\"></span> </span><span lang=\"AR-JO\"></span></p> <br> </td> <td width=\"245\" valign=\"top\"> <br> <p class=\"MsoNormal\" align=\"center\" dir=\"ltr\"><span lang=\"AR-JO\">&nbsp;</span>  " + request.FullName.ToString() + " </p> <br> </td> </tr> <tr> <td width=\"197\" valign=\"top\"> <br> <p class=\"MsoNormal\" align=\"center\" dir=\"ltr\"><span lang=\"EN-US\" dir=\"LTR\" style=\"font-size:12pt\">Email</span><span lang=\"AR-JO\"></span></p> <br> </td> <td width=\"245\" valign=\"top\"> <br> <p class=\"MsoNormal\" align=\"center\" dir=\"ltr\"><span lang=\"EN-US\" dir=\"LTR\" style=\"font-size:12pt\"> " + request.Email.ToString() + "</span><span lang=\"AR-JO\"></span></p> <br> </td> </p>  </tr> <tr> <td width=\"197\" valign=\"top\"> <br> <p class=\"MsoNormal\" align=\"center\" dir=\"ltr\"><span lang=\"EN-US\" dir=\"LTR\" style=\"font-size:12pt\">Message</span><span lang=\"AR-JO\"></span></p> <br> </td> <td width=\"245\" valign=\"top\"> <br> <p class=\"MsoNormal\" align=\"center\" dir=\"ltr\"><span lang=\"EN-US\" dir=\"LTR\" style=\"font-size:12pt\"> " + description + " </span><span lang=\"AR-JO\"></span></p> <br> </td> </tr> </tbody> </table> </center> </div> <div align=\"right\"> <div align=\"right\"><br></div> </div> </div> </div>");

            SendEmail(from, to, description, message, null);

            try 
            {

                response.Add("Success", "success");
                response.Add("Done", "Done");
                response.Add("Message", "Message Sent Successfully");
            }
            catch 
            {
                response.Add("Success", "Ops !");
                response.Add("Message", "Something Went Wrong, Please Try Again Later.");
                response.Add("Done", "error");
                Ok("Failed To Send Request");
            }






            return Ok(response) ;
        }



      
        public IActionResult Careers()
        {
            return View();
        }


        [Microsoft.AspNetCore.Mvc.HttpPost]
        public IActionResult Careers(string FullName, string Email, string CountryOfResidence, string TypeOfJob, string Phone, string DateOfBirth, string YearsOfExperience, string CurrentJob,  string Graduation, string Universcity, string Academic_specialization, string Salary, string Nationality , IFormFile file)
        {
            
            Dictionary<string, object> response = new Dictionary<string, object>();

            string from = _emailConfig.From.ToString();
            string to = _emailConfig.From.ToString();
            var message = string.Format("<table border=\"2\" style=\"width: 100%;\"> <tr> <td colspan=\"2\" style=\"color: #9f9f9f;\">Contact Message</td> </tr> <tr> <td style=\"width:60%;\">FullName</td> <td>\"" + FullName + "\"</td> </tr> <tr> <td>Email</td> <td>\"" + Email + "\"</td> </tr>  <tr> <td>Country Of Residence</td> <td>\"" + CountryOfResidence + "\"</td> </tr>  <tr> <td>Date Of Birth</td> <td>\"" + DateOfBirth + "\"</td> </tr> <tr> <td>Years Of Experience</td> <td>\"" + YearsOfExperience + "\"</td> </tr> <tr> <td>Nationality</td> <td>\"" + Nationality + "\"</td> </tr> <tr> <td>Current Job</td> <td>\"" + CurrentJob + "\"</td> </tr> <tr> <td>\r\nUniversity</td> <td>\"" + Universcity + "\"</td> </tr> <tr> <td>Salary</td> <td>\"" + Salary + "\"</td> </tr> <tr> <td>Graduation rate</td> <td>\"" + Graduation + "\"</td> </tr> <tr> <td>Academic specialization</td> <td>\"" + Academic_specialization + "\"</td> </tr><tr> <td>Phone</td> <td>\"" + Phone + "\"</td><tr> <td>Type Of Job</td> <td>\"" + TypeOfJob + "\"</td> </tr> </tr></table>");

            SendEmail(from, to, FullName, message, file);
            {
                response.Add("Success", "Ops !");
                response.Add("Message", "Something Went Wrong, Please Try Again Later.");
                response.Add("Done", "error");
                Ok("Failed To Send Request");
            }


            return Ok(response);

        }




      
        public IActionResult Admission()

        {

            ArticleManager amgr = new ArticleManager(ConnectionString);

            List<Article> Admissions = amgr.GetArticleTypeArticles("10023", CurrentLanguage);
            ViewBag.Admissions = Admissions;
            ViewBag.TitleAdmissions = amgr.GetArticleType("10023", CurrentLanguage);

            return View();
        }

        public IActionResult AdmissionPage(String id,String name)
        {
            ArticleManager amgr = new ArticleManager(ConnectionString);
            
            if (string.IsNullOrEmpty(id))
            {
                return Redirect("/{lang}/Admission");
            }

            ViewBag.id = id;

            // get data inside sub article
            Article subArticle = amgr.GetArticle(id, CurrentLanguage);
            ViewBag.subArticle = subArticle;


            if (subArticle.ID == null || subArticle.Typs[0].ID != "10023")
            {
                return Redirect("/{lang}/Admission");
            }









            return View();
        }

       
        public IActionResult Grade(String id,String name)
        {

            ArticleManager amgr = new ArticleManager(ConnectionString);

            if (string.IsNullOrEmpty(id))
            {
                return Redirect("/{lang}/Divisions");
            }

            ViewBag.id = id;

            // get data inside sub article
            Article subArticle = amgr.GetArticle(id, CurrentLanguage);
            ViewBag.GradeArticle = subArticle;


            if (subArticle.ID == null || subArticle.Typs[0].ID != "10027")
            {
                return Redirect("/{lang}/Divisions");
            }







            return View();
        }

        
        public IActionResult News()
        {

            ArticleManager amgr = new ArticleManager(ConnectionString);


            //Article News
            List<Article> News = amgr.GetArticleTypeArticles("10020", CurrentLanguage);
            ViewBag.News = News;
            ViewBag.TitleNews = amgr.GetArticleType("10020", CurrentLanguage);



            // data Event
            List<Article> Events = amgr.GetArticleTypeArticles("10029", CurrentLanguage);
			ViewBag.Events = Events;
            ViewBag.TitleEvents = amgr.GetArticleType("10029", CurrentLanguage);


            Article TitleEventsAndNews = amgr.GetArticle("40101", CurrentLanguage);
            ViewBag.TitleEventsAndNews = TitleEventsAndNews;





            return View();
        }

        
        public IActionResult NewsDetails(string id,String name)
        {


            ArticleManager amgr = new ArticleManager(ConnectionString);

            if (string.IsNullOrEmpty(id))
            {
                return Redirect("/{lang}/News");
            }

            ViewBag.id = id;

			Article subArticle = amgr.GetArticle(id, CurrentLanguage);
            ViewBag.subArticle = subArticle;

			return View();
        }

      
        public IActionResult Event(string id, string name)
        {
	

            ArticleManager amgr = new ArticleManager(ConnectionString);


            if (string.IsNullOrEmpty(id))
            {
                return Redirect("/{lang}/News");
            }

            ViewBag.id = id;

            // get data inside sub article
            Article subArticle = amgr.GetArticle(id, CurrentLanguage);
            ViewBag.subArticle = subArticle;
            return View();
        }




        
        public IActionResult Privacy()
        {
            return View();
        }
        
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}