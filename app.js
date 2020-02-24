require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require('nodemailer');

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const date = new Date();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "taltzabari48@gmail.com",
      pass: process.env.APP_PASSWORD
    }
});

app.get("/", function(req, res) {
    if(req.headers["accept-language"].slice(0,2) === "he") {
        res.redirect("/he-il");
    } else if(req.headers["accept-language"].slice(0,2) === "en") {
        res.redirect("/en-us");
    } else {
        res.redirect("/en-us");
    }
});

app.get("/:language", function(req, res) {
    let language = req.params.language;
    let header = "";
    let headTitle = "";
    let aboutHeader = "";
    let aboutParagraph = "";
    let skillsHeader = "";
    let skillsFirstCardHeader = "";
    let skillsFirstCardParagraph = "";
    let skillsSecondCardHeader = "";
    let skillsSecondCardParagraph = "";
    let skillsThirdCardHeader = "";
    let skillsThirdCardParagraph = "";
    let workHeader = "";
    let workText = "";
    let workParagraph = "";
    let workFooter = "";
    let contactHeader = "";
    let contactParagraphFirst = "";
    let contactParagraphSecond = "";
    let contactInputName = "";
    let contactInputEmail = "";
    let contactInputPhone = "";
    let contactButton = "";
    let githubText = "";
    if(language === "en-us") {
        header = "partials/headerEn";
        headTitle = "CONNECT YOUR BUSINESS ONLINE!";
        aboutHeader = "About Myself";
        aboutParagraph = "A skilled Full-Stack Web Developer, who likes challenges and puzzles, knows how to work with the most advanced tools on the market. I love coding and I'm a hard worker who wants to get as much experience as possible. You know how your website should look? Awsome! let me build it for you!";
        skillsHeader = "My Skills";
        skillsFirstCardHeader = "HTML/CSS/JS";
        skillsFirstCardParagraph = "Basic components of a websites that can create beautiful things in the right hands";
        skillsSecondCardHeader = "Node.js";
        skillsSecondCardParagraph = "A library with milions of tools that takes websites to a whole other level";
        skillsThirdCardHeader = "React.js";
        skillsThirdCardParagraph = "Advance tool that helps creating web apps, used by all the big websites like facebook, you can see web apps that I have created below";
        workHeader = "The Daymaker App";
        workText = "work-text";
        workParagraphFirst = "Here You can see my first project:";
        workParagraphSecond = "This is a full-stack web app that I have built. It has a full functioning data-base and already been deployed and reciving users. It's a user freindly todo list web app, where you can keep all your assignments for the day and even plan for future days.";
        workFooter = "See for Your Self";
        contactHeader = "Contact Me";
        contactParagraphFirst = "Want me to build your new website? you have made the right decision";
        contactParagraphSecond = "fill this form:";
        contactInputName = "*Full Name";
        contactInputEmail = "*Email";
        contactInputPhone = "Phone Number";
        contactButton = "Send My Info";
        githubText = "My GitHub Account";
    } else if(language === "he-il"){
        header = "partials/headerHe";
        headTitle = "חבר את העסק שלך לאינטרנט";
        aboutHeader = "מי אני";
        aboutParagraph = "מתכנת מוכשר בסביבת האינטרנט, שאוהב אתגרים. אני יודע לעבוד עם הכלים המתקדמים ביותר בשוק. אני אוהב לקודד ורוצה להשיג כמה שיותר נסיון בתחום. יודעים איך אתם רוצים שיראה האתר שלכם? מעולה! תנו לי לבנות אותו!";
        skillsHeader = "הכישורים שלי";
        skillsFirstCardHeader = "React.js";
        skillsFirstCardParagraph = "כלי מתקדם שעוזר ליצור אפלקציות רשת בקלות ובאיכות גבוהה, אתרים גדולים כמו פייסבוק משתמשים בו בתדירות גבוהה, אתם יכולים לראות אפלקציות רשת שאני בניתי למטה";
        skillsSecondCardHeader = "Node.js";
        skillsSecondCardParagraph = "סיפרייה עם מליוני כלים שיכולים לקחת כל אתר לרמה אחרת לגמרי";
        skillsThirdCardHeader = "HTML/CSS/JS";
        skillsThirdCardParagraph = "כלים בסיסיים שמרכיבים את האתר מאפס, שיכולים ליצור דברים מדהימים בידיים הנכונות";
        workHeader = "אפליקציית ה- Daymaker";
        workText = "work-text-he";
        workParagraphFirst = "כאן אתם יכולים לראות הפרוייקט הראשון שלי:";
        workParagraphSecond = "זו אפליקציית רשת עם פרונט-אנד ובק-אנד שאני בניתי. כבר יש לה דאטה-בייס פעיל והיא כבר מקבלת משתמשים. זו אפליקצייה ידידותית למשתמש שמאפשרת ליצור רישמת מטלות, באפליקצייה תוכלו לעקוב אחרי המטלות היומיומיות שלכם ואפילו לתכנן לעתיד.";
        workFooter = "ראו בעצמכם";
        contactHeader = "צרו קשר";
        contactParagraphFirst = "רוצים שאבנה את האתר שלכם? הגעתם להחלטה הנכונה";
        contactParagraphSecond = "מלאו את הטופס:";
        contactInputName = "*שם מלא";
        contactInputEmail = "*אימייל";
        contactInputPhone = "מספר טלפון";
        contactButton = "שלח פרטים";
        githubText = "חשבון ה- GitHub שלי";
    } else {
        return res.redirect("/gotLost/404");
    }
    res.render("home", {
        header: header,
        headTitle: headTitle,
        aboutHeader: aboutHeader,
        aboutParagraph: aboutParagraph,
        skillsHeader: skillsHeader,
        skillsFirstCardHeader: skillsFirstCardHeader,
        skillsFirstCardParagraph: skillsFirstCardParagraph,
        skillsSecondCardHeader: skillsSecondCardHeader,
        skillsSecondCardParagraph: skillsSecondCardParagraph,
        skillsThirdCardHeader: skillsThirdCardHeader,
        skillsThirdCardParagraph: skillsThirdCardParagraph,
        workHeader: workHeader,
        workText: workText,
        workParagraphFirst: workParagraphFirst,
        contactParagraphSecond: contactParagraphSecond,
        workFooter: workFooter,
        contactHeader: contactHeader,
        contactParagraphFirst: contactParagraphFirst,
        contactParagraphSecond: contactParagraphSecond,
        contactInputName: contactInputName,
        contactInputEmail:contactInputEmail,
        contactInputPhone: contactInputPhone,
        contactButton: contactButton,
        githubText: githubText,
        year: date.getFullYear() 
    });
});

app.post("/email", function(req, res) {

    let mailContent = 
        "name: " + req.body.fullName +
        " email: " + req.body.email +
        " phone number: " + req.body.phoneNumber
    ;

    const mailOptions = {
        from: "taltzabari48@gmail.com",
        to: "taltzabari48@gmail.com",
        subject: "New Client!",
        text: mailContent
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        }
    });

    let reqOrigin = req.headers.referer;
    let directionIndex = reqOrigin.search("/en-us");
    if(directionIndex === -1) {
        directionIndex = reqOrigin.search("/he-il");
    }
    let direction = reqOrigin.slice(directionIndex, (directionIndex + 6));
    direction = direction + "/#contact";
    res.redirect(direction);
    
});

app.get("*", function(req, res) {

    let header = "";
    let lead = "";
    let text = "";
    let button = "";
  
    if(req.headers["accept-language"].slice(0,2) === "he") {
      lead = "!?איך הלכתם לאיבוד";
      text = "תנו לי לעזור לכם לחזור לחוף מבטחים";
      button = "חזרה לעמוד הבית";
      res.render("404", { header: header, lead: lead, text: text, button: button });
    } else if(req.headers["accept-language"].slice(0,2) === "en") {
      lead = "How did you got lost!?";
      text = "Let me help you get back to a safe place";
      button = "Homepage";
      res.render("404", { header: header, lead: lead, text: text, button: button });
    } else {
      header = "partials/headerEn";
      lead = "How did you got lost!?";
      text = "Let me help you get back to a safe place";
      button = "Homepage";
      res.render("404", { lead: lead, text: text, button: button });
    }
  });

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");  
});