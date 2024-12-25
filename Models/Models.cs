using Microsoft.Extensions.Localization;
using MimeKit;
using System.Security.Cryptography;
using System.Text;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;
 namespace AlResalah.Models
{
     
        public class EmailConfiguration
        {
            public string From { get; set; }
            public string To { get; set; }
            public string SmtpServer { get; set; }
            public int Port { get; set; }
            public string UserName { get; set; }
            public string Password { get; set; }
        }

    public class Message
    {
        public List<MailboxAddress> To { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }

        public IFormFile Attachment { get; set; }

        //public Message(IEnumerable<string> to, string subject, string content)
        //{
        //    To = new List<MailboxAddress>();
        //    To.AddRange(to.Select(x => new MailboxAddress(x,to.ToString())));
        //    Subject = subject;
        //    Content = content;
        //}

        public Message(IEnumerable<string> to, string subject, string content, IFormFile attachment = null)
        {
            To = new List<MailboxAddress>();

            var Addressdata = to.Select(x => new MailboxAddress("Alresalh", to.First()));
            To.AddRange(Addressdata);


            Subject = subject;
            Content = content;
            Attachment = attachment;
        }
    }











}
