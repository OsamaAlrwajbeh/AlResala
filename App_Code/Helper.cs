using Microsoft.Extensions.Localization;
using MimeKit;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;
using System.Security.Cryptography;
using System.Text;
using   AlResalah.Models  ;

namespace AlResalah.App_Code
{
    //public class Helper
    //{

    //    private static IStringLocalizer<SharedResource> _sharedLocalizer;
    //    private static EmailConfiguration _emailConfig;

    //    public Helper(IStringLocalizer<SharedResource> sharedLocalizer, EmailConfiguration emailConfig)
    //    {
    //        _sharedLocalizer = sharedLocalizer;
    //        _emailConfig = emailConfig;

    //    }

    //    private static Guid _simiAdminGroup = new Guid("66666666-6666-6666-6666-666666666666");
    //    public static Guid simiAdminGroup { get { return _simiAdminGroup; } }

 
    //    public class Message
    //    {
    //        public List<MailboxAddress> To { get; set; }
    //        public string Subject { get; set; }
    //        public string Content { get; set; }

    //        public IFormFile Attachment { get; set; }

    //        //public Message(IEnumerable<string> to, string subject, string content)
    //        //{
    //        //    To = new List<MailboxAddress>();
    //        //    To.AddRange(to.Select(x => new MailboxAddress(x,to.ToString())));
    //        //    Subject = subject;
    //        //    Content = content;
    //        //}

    //        public Message(IEnumerable<string> to, string subject, string content, IFormFile attachment = null)
    //        {
    //            To = new List<MailboxAddress>();

    //            var Addressdata = to.Select(x => new MailboxAddress("TajAlsafa", to.First()));
    //            To.AddRange(Addressdata);


    //            Subject = subject;
    //            Content = content;
    //            Attachment = attachment;
    //        }
    //    }





    //    public static void SendEmail(string from, string to, string subject, string body)
    //    {
    //        var SiteURL = Environment.GetEnvironmentVariable("WebsiteUrl");
    //        var mes = string.Format(_sharedLocalizer["EmailTemplate"], SiteURL, body, subject);
    //        var message = new Message(new string[] { to }, subject, mes);

    //        MimeMessage emailMessage = new MimeMessage();
    //        emailMessage.From.Add(new MailboxAddress("", _emailConfig.From));
    //        emailMessage.To.AddRange(message.To);
    //        emailMessage.Subject = message.Subject;
    //        emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Text) { Text = message.Content };
    //        using (var client = new SmtpClient())
    //        {
    //            try
    //            {
    //                client.Connect(_emailConfig.SmtpServer, _emailConfig.Port, true);
    //                client.AuthenticationMechanisms.Remove("XOAUTH2");
    //                client.Authenticate(_emailConfig.UserName, _emailConfig.Password);
    //                client.Send(emailMessage);
    //            }
    //            catch
    //            {
    //                //log an error message or throw an exception or both.
    //                throw;
    //            }
    //            finally
    //            {
    //                client.Disconnect(true);
    //                client.Dispose();
    //            }
    //        }
    //    }
    //}
}
