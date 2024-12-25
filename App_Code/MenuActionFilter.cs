using CMS;
using CMS.Managers;
using CMSCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
//using DocumentFormat.OpenXml.Spreadsheet;
using AlResalah.Models;
using System.Diagnostics;
using System.Web;
using Microsoft.AspNetCore.Http;
//using DocumentFormat.OpenXml.Office2010.Excel;

namespace AlResalah.App_Code
{
    public class MenuActionFilter : IActionFilter
    {



        public void OnActionExecuting(ActionExecutingContext context)
        {
            var x = ((Microsoft.AspNetCore.Mvc.Controllers.ControllerActionDescriptor)context.ActionDescriptor).ActionName;
            context.HttpContext.Session.SetString("ActionName", context.HttpContext.Session.GetString("ActionName") + "  " + x.Substring(0, 2));
            Controller controller = context.Controller as Controller;
            controller.ViewBag.Language = context.HttpContext.Session.Get<CMS.Language>("lang") != null ? context.HttpContext.Session.Get<CMS.Language>("lang") : new CMS.Language() { ID = "2" };
            var connectionString = Environment.GetEnvironmentVariable("constr");
            MenuManager mMgr = new MenuManager(connectionString);
            controller.ViewBag.TopMenuItems = mMgr.GetSubMenuItems("63", controller.ViewBag.Language);
            // sub menu items for nav
            controller.ViewBag.AboutItems = mMgr.GetSubMenuItems("2081", controller.ViewBag.Language);
            controller.ViewBag.DivisionsItems = mMgr.GetSubMenuItems("2085", controller.ViewBag.Language);
            controller.ViewBag.AdmissionItems = mMgr.GetSubMenuItems("2090", controller.ViewBag.Language);
            // footer items
            controller.ViewBag.FooterItems = mMgr.GetSubMenuItems("2061", controller.ViewBag.Language);
            //footer sub items
            controller.ViewBag.FooterPagesItems = mMgr.GetSubMenuItems("2076", controller.ViewBag.Language);

            ArticleManager amgr = new ArticleManager(connectionString);
            StaticPageManager pmgr = new StaticPageManager(connectionString);
            Language language = new Language();

            Language lang = controller.ViewBag.Language;


            // description data for nav submenus
            controller.ViewBag.AboutDescription = amgr.GetArticleType("10021", lang);
            controller.ViewBag.DivisionsDescription = amgr.GetArticleType("10027", lang);
            controller.ViewBag.AdmissionDescription = amgr.GetArticleType("10023", lang);


            controller.ViewBag.Address = pmgr.GetStaticPage(30027, lang);
            controller.ViewBag.Email = pmgr.GetStaticPage(30029, lang);
            controller.ViewBag.Telephone = pmgr.GetStaticPage(30047, lang);
            controller.ViewBag.Mobile = pmgr.GetStaticPage(30028, lang);
            controller.ViewBag.Facebook = pmgr.GetStaticPage(30045, lang);
            controller.ViewBag.Instagram = pmgr.GetStaticPage(30048, lang);




            // get items inside projects
            //List<Article> projects = amgr.GetArticleTypeArticles("10049", lang, 1, 3).OrderBy(x => x.Date).ToList();


            //List<Product> projects = pMgr.GetProducts("70328", null, lang, page, 3, out totalPages, null, null, null, null, null, minprice, maxprice, null, true, null, null, null, null);
            //List<Article> projects = amgr.GetArticleTypeArticles("10049", lang, 1, 3).OrderBy(x => x.Date).ToList();
            //controller.ViewBag.projects = projects;
        }
        public void OnActionExecuted(ActionExecutedContext context)
        {
            //To do : after the action executes
        }
    }
}
