using Microsoft.AspNetCore.Mvc.Razor;
using AlResalah.Models;
using AlResalah.App_Code;
using System.Web.Mvc;
using CMS;


var builder = WebApplication.CreateBuilder(args);

////Session Config
//builder.Services.AddDistributedMemoryCache();

//lang#
builder.Services.AddLocalization(options => options.ResourcesPath = "Resources");

builder.Services.AddControllersWithViews(options => options.Filters.Add<MenuActionFilter>()).AddDataAnnotationsLocalization().AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix, options => options.ResourcesPath = "Resources");
builder.Services.AddMvc();

var emailConfig = builder.Configuration.GetSection("EmailConfiguration").Get<EmailConfiguration>();
builder.Services.AddSingleton(emailConfig);
//builder.Services.AddTransient<IHelper, Helper>();


//connection string
//Environment.SetEnvironmentVariable("constr", builder.Configuration.GetConnectionString("DefaultConnection"));

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromSeconds(10);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

var app = builder.Build();

var supportedCultures = new[] { "en", "ar" };
var localizationOptions = new RequestLocalizationOptions().SetDefaultCulture(supportedCultures[0])
    .AddSupportedCultures(supportedCultures)
    .AddSupportedUICultures(supportedCultures);
app.UseRequestLocalization(localizationOptions);











Environment.SetEnvironmentVariable("constr", builder.Configuration.GetConnectionString("DefaultConnection"));
Environment.SetEnvironmentVariable("DefaultLanguage", builder.Configuration.GetSection("CMSSettings")["DefaultLanguage"]);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.UseSession();

//app.MapControllerRoute(
//    name: "default",
//    pattern: "{lang}/{controller=Home}/{action=Index}/{id?}", 
//    defaults: new { controller = "Home", action = "Index" , lang = "en" }
//    );

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
               name: "culture default",
               constraints: new { lang = @"^[A-Za-z]{2,2}$" },
               pattern: "{lang}/{controller=Home}/{action=Index}",
               defaults: new { lang = "ar" });

    endpoints.MapControllerRoute(
    name: "default lang",
    pattern: "{lang}/{controller=Home}/{action=Index}/{id}/{name}",
    defaults: new { controller = "Home", action = "Index", lang = "ar", id = UrlParameter.Optional, name = UrlParameter.Optional });

    endpoints.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id}/{name}",
    defaults: new { controller = "Home", action = "Index", lang = "ar", id = UrlParameter.Optional, name = UrlParameter.Optional });
});

app.Run();
