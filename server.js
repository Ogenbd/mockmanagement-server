const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.json());


var emails = [
  { id: 0, subject: 'Hey', body: 'Bootstrapping responsive SpaceTeam food-truck actionable insight bootstrapping cortado pivot latte ship it disrupt grok. Pivot iterate co-working thinker-maker-doer physical computing user story pivot parallax minimum viable product convergence. Experiential co-working entrepreneur hacker piverate piverate driven thinker-maker-doer agile venture capital.', isRead: false, isSelected: false },
  { id: 1, subject: 'Super Urgent', body: 'Co-working pitch deck thought leader waterfall is so 2000 and late long shadow user centered design SpaceTeam ideate convergence minimum viable product ship it experiential food-truck. Hacker minimum viable product fund human-centered design thinker-maker-doer human-centered design user story pivot unicorn.', isRead: false, isSelected: false },
  { id: 2, subject: 'You should be...', body: 'Waterfall is so 2000 and late co-working Steve Jobs user story integrate fund big data earned media responsive', isRead: false, isSelected: false },
  { id: 3, subject: 'Learn JS in 5 days flat or your money back', body: 'Pitch deck iterate cortado earned media user story cortado affordances Steve Jobs paradigm bootstrapping intuitive experiential integrate. Workflow entrepreneur co-working long shadow agile venture capital food-truck minimum viable product personas sticky note disrupt engaging. Prototype moleskine workflow bootstrapping disrupt convergence viral grok Steve Jobs. Pair programming ', isRead: false, isSelected: false },
  { id: 4, subject: 'Yo', body: 'Pitch deck innovate thought leader thought leader parallax thought leader viral pair programming responsive pair programming physical computing parallax engaging. Actionable insight venture capital quantitative vs. qualitative co-working convergence big data pair programming venture capital', isRead: false, isSelected: false },
  { id: 5, subject: 'Nigerian Prince', body: 'Physical computing human-centered design thinker-maker-doer user centered design hacker paradigm ship it co-working. Waterfall is so 2000 and late 360 campaign viral waterfall is so 2000 and late ideate paradigm venture capital user centered design parallax pivot physical computing waterfall is so 2000 and late.', isRead: false, isSelected: false },
  { id: 6, subject: 'Let\'s get coffee', body: 'Affordances convergence pitch deck unicorn thought leader thought leader Steve Jobs food-truck. Workflow food-truck intuitive earned media bootstrapping user centered design earned media long shadow cortado 360 campaign', isRead: false, isSelected: false },
  { id: 7, subject: 'Aaron <> Elon', body: 'Latte SpaceTeam long shadow Steve Jobs minimum viable product innovate Steve Jobs minimum viable product. Experiential affordances responsive actionable insight iterate thinker-maker-doer pair programming piverate quantitative vs. qualitative integrate disrupt. Iterate pivot pair programming parallax innovate agile', isRead: false, isSelected: false },
];

var events = [
    {
        "created": 1478090304000,
        "duration": 9000000,
        "id": 235292442,
        "name": "Cassandra and Scylla Real Life Experience by Kenshoo & MyHeritage  ",
        "status": "upcoming",
        "time": 1482336000000,
        "updated": 1479054296000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 131,
        "venue": {
            "id": 4761372,
            "name": "Kenshoo",
            "lat": 32.106529235839844,
            "lon": 34.83524703979492,
            "repinned": false,
            "address_1": "HaBarzel 6",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1456749346000,
            "name": "Tech-Talk-Teach",
            "id": 19641607,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Tech-Talk-Teach",
            "who": "Members"
        },
        "link": "https://www.meetup.com/Tech-Talk-Teach/events/235292442/",
        "manual_attendance_count": 0,
        "description": "<p><b>Agenda: </b><br/>18:00 – 18:30- Gathering (food and drinks)<br/>18:30 – 19:15- Scylla and Cassandra at Kenshoo- Noam Hasson, Big Data Team Leader @ Kneshoo<br/>19:30-20:15- PeopleStore - blazing fast 2.5 billion profiles storage- Ran Peled, Chief Architect @MyHeritage</p> <p>\n\n<b>\"Scylla and Cassandra at Kenshoo\"</b></p> <p><b>Abstract: </b><br/>Kenshoo is the industry leader in digital marketing and has run Cassandra for quite some time now. The Kenshoo team was interested in Scylla not just due to performance but for ease of administration. It is important to be able to run all of the background operations a sophisticated database keeps under the hood. Kenshoo engineer Noam Hasson demonstrates the speed of compaction and repair of Scylla verse Cassandra. Eventually Noam shows that three Scylla VMs can handle the load of 40 physical Cassandra machines.</p> <p><b>Bio: </b><br/>Noam Hasson has over 12 years of web development experience, and is currently the in-house big data expert at Kenshoo, a global software company that is the sole leader in bid management software and social advertising platforms. Previously, Noam was a web developer with StartApp, a global monetization and advertising mobile network. Prior to that, Noam was a co-founder and CEO of SociaLayer.com, an Israel-based software startup focusing on cutting-edge solutions and web technologies. Earlier in his career, Noam was the CTO of Mekusharim, a leading provider of social networking media solutions.</p> <p><b>\"PeopleStore - blazing fast 2.5 billion profiles storage\"</b></p> <p><b>Abstract: </b><br/>MyHeritage is home to 82 million users with 2.5 billion rich personal profiles in their family trees, stored on complex and highly optimized MySQL infrastructure. As we started encountering scalability and performance issues, we have built a new data store, based on Cassandra, Mesos+Docker, and Hadoop, that is highly scalable and blazing fast. In this meetup we will share the architecture, design considerations and lessons learned. Among the complexities we will cover is the challenge to load the system while data is changing, keeping a MySQL source-of-truth and Cassandra in synch, errors handling and monitoring.</p> <p><b>Bio: </b><br/>Ran Peled is Chief Architect at MyHeritage, with over 30 years of software development experience, and expertise in large-scale Internet applications.</p> ",
        "visibility": "public"
    },
    {
        "created": 1480953324000,
        "duration": 7200000,
        "id": 236044873,
        "name": "כשהרכב שלנו יודע עלינו הכל",
        "status": "upcoming",
        "time": 1482336000000,
        "updated": 1480972871000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 36,
        "venue": {
            "id": 7538822,
            "name": "Dublin Irish Pub",
            "lat": 32.16050720214844,
            "lon": 34.80963134765625,
            "repinned": false,
            "address_1": "4 Aryeh Shenkar Street",
            "city": "Herzliya",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1382453299000,
            "name": "HAC - Herzliya Accelerator Center",
            "id": 10796142,
            "join_mode": "open",
            "lat": 32.16999816894531,
            "lon": 34.84000015258789,
            "urlname": "Herzliya-Accelerator-Center-Meetup",
            "who": "Entrepreneurs"
        },
        "link": "https://www.meetup.com/Herzliya-Accelerator-Center-Meetup/events/236044873/",
        "description": "<p>**ההרשמתכם לאירוע מובטחת רק באמצעות הלינק **</p> <p><br/><a href=\"https://www.eventbrite.com/e/29814720632\"><a href=\"https://www.eventbrite.com/e/29814720632\" class=\"linkified\">https://www.eventbrite.com/e/29814720632</a></a></p> <p><br/>תחום 'הרכב המחובר' הוא אחד הנושאים המעניינים והמרתקים כיום, בעידן האינטרנט של הדברים, נוכח היקף השימוש ברכב ברמה היומיומית ומספר הרכבים בעולם.</p> <p><br/>כיום הרכבים שלנו הם מחשב על גלגלים ולא רק מנוע על גלגלים כפי שהיו בעבר, הרכב שלנו אוסף עלינו מידע רב ויודע לנטר ולנתח את הפעילות וההרגלים שלנו. פתיחת דלתות וחלונות בעזרת שעון חכם והתאמה אוטומטית של הטמפרטורה והמוסיקה לפי ההעדפות שלנו, מתבצעים בטכנולוגיה המבוססת פלטפורמת ענן המפשטת בהצלחה פעולות יומיומיות מורכבות.</p> <p>כאמור החוויה הדיגיטלית מתחילה לפני הכניסה לרכב וממשיכה אחרי היציאה כשהמעבר שקוף לצרכן. פעולות יומיומיות כמו מציאת חנייה ותשלום עבורה, תדלוק וקניית אוכל מהיר יכולות להתבצע ישירות מהרכב או באמצעות סמארטפון שמחובר לרכב, והן מעניקות חוויה מושלמת למשתמש.</p> <p>במהלך המיטאפ יתקיים פאנל מומחים בהשתתפות: ד\"ר מיכל לפידות- מנהלת מרכז החדשנות General Motors ישראל, ד\"ר שאול רייכמן- מנהל מרכז החדשנות Renault ישראל, עמית קרפ- סגן נשיאBessemer Venture Partners והדר פודה- מנהלת פיתוח עסקי של יחידת הסטארט-אפים, Deloitte Israel.</p> <p>שלוש חברות סטרטאפ, המפתחות פתרונות שונים עבור עולם הרכב המקושר, יציגו את מוצריהם ביניהן, יעל ריבקינד- מנהלת שותפויות בחברת otonomo, אורי שעשוע- מייסד ומנהל מוצר בחברתNeura, גל אהרון- מייסדת חברת Engie.</p> <p>בואו לשמוע ממיטב המומחים והסטארטאפים בתחום על ההשפעה של המהפכה הדיגיטלית בעולם הרכב וההשפעה שלהם על החיים האורבניים, הביטוח, שרותי מסחר, ממשק מול יצרניות הרכב ועוד.</p> ",
        "visibility": "public"
    },
    {
        "created": 1416703426000,
        "id": "xdssclyvqbcc",
        "name": "she codes(tau) - Weekly HackNight",
        "status": "upcoming",
        "time": 1482336000000,
        "updated": 1416703426000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 3,
        "venue": {
            "id": 20681282,
            "name": "Tel Aviv University ",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "Shrieber Building, room # 309",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1400061316000,
            "name": "she codes(tau);",
            "id": 14448062,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "she-codes-tau",
            "who": "Coders"
        },
        "link": "https://www.meetup.com/she-codes-tau/events/236069406/",
        "description": "<p>Our HackNight is a 3-4 hours freestyle coding session in which developers are invited to work on any coding project they like, or learn a new language, while enjoying the hacking atmosphere, and network with other women developers.</p> <p>\n\n\nBring your laptop, and an idea for a coding project. If you don't have an idea, we will help you choose one. Feel free to work on your school-related projects as well.</p> <p>\n\n\nIf you're just starting off with coding, come, and we'll help you choose tutorials and learn further. Feel free to share with your develop(h)er friends.</p> <p><br/>We can't wait to see you :), don't forget your laptop!</p> <p><br/>**snacks will be available** :D</p> ",
        "visibility": "public"
    },
    {
        "created": 1481805548000,
        "duration": 10800000,
        "id": "236256569",
        "name": "Innovative Scaling Solutions",
        "status": "upcoming",
        "time": 1482336000000,
        "updated": 1482157781000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 125,
        "venue": {
            "id": 23846222,
            "name": "Bitan 26, Namal Tel Aviv",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "Yosef Yakutieli 4, Tel Aviv",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1387171943000,
            "name": "Meetups at Wix",
            "id": 11468592,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "at-wix",
            "who": "Members"
        },
        "link": "https://www.meetup.com/at-wix/events/236256569/",
        "description": "<p>Israel has been titled as a start up nation, but new startups worldwide are increasing drastically, and more scaling challenges are introduced. These startups, don’t always remain small, as some grow quickly, struggling to hold on to that innovation mentality. There are also large companies that are trying to learn from startups, how to stay relevant in the field.</p> <p>This meetup will discuss the innovative scaling solutions by AWS and Wix and the culture and technologies to support such solutions. Please note the lectures will be given in Hebrew.</p> <p><b>Schedule:</b></p> <p>18:00 - 18:30 - Drinks and food</p> <p>18:30 - 19:15 - Scaling Wix to over 90M users</p> <p>19:15 - 19:30 - Break</p> <p>19:30 - 20:15 - Scaling Your Business in Amazon Style</p> <p>20:15 - More drinks!</p> <p>\n\n\n\n<b>Scaling Wix to over 90M users - Yoav Abrahami<br/></b></p> <p>Over the first 10 years of Wix, Wix infrastructure has gone a number of transformations, starting as a monolithic application server with MySQL, evolving to a service based architecture with with diverse infrastructure. Over this 10 years journey, we have learned a thing or two - some DOs and some DON'Ts.</p> <p>In this presentation I will go over the evolution of Wix architecture, with the different transformations we have done to support Wix at scale. We will share some of our insights about building a web infrastructure for over 90M users</p> <p>Bio:</p> <p>Yoav Abrahami is the Chief Architect at Wix.com, working with developers and operations on building wix future products as well as accelerating and improving development processes. Prior to joining Wix.com, Yoav was an Architect at Amdocs Cramer OSS division. Yoav has a MS in Physics and BS in Computer Science from Tel Aviv University.</p> <p><b>Scaling Your Business in Amazon Style -  Guy Ernest</b></p> <p>In Amazon we are very passionate about helping our customers grow to become the next Amazon, Netflix, IronSource or Waze. We learned so much from our own experience and from the experience of many of our customers, and we love to share this experience with others.</p> <p>We see many small startups that are growing very quickly and struggling to keep the startup (=innovation) mentality. We also see many big companies that are trying to learn from startups how to stay relevant in a competitive market. It is more about agility, independence, smart application, collaboration, and the culture and technologies that can support it.</p> <p>In this lecture, I will share my personal experience and Amazon experience in solving scale problems. Machine learning is one of these scale solutions, and it is also the reason we broken down Amazon to very small two-pizza teams, and the tools that we give to these teams to have superpowers to innovate fast.</p> <p>Bio:</p> <p>Guy Ernest is the Principal Business Development Manager, Machine Learning at AWS. He joined Amazon more than 4 years ago as a solution architect and helped in building the technical team of AWS in Israel. 2 years ago, he moved to Amazon HQ in Seattle to work as a solution architect for Amazon.com, helping one of the largest companies on the planet to use the cloud better. He recently moved to a business development role in one of my passions of machine learning and deep learning, and helping customers to adopt “ML first” strategies.He also spent 25 years in various technical roles in the IDF, in his own startups and some big companies.</p> ",
        "how_to_find_us": "Bitan 26 is located across from Japanika",
        "visibility": "public"
    },
    {
        "created": 1480840809000,
        "id": "236018920",
        "name": "Hack the future of Japanese Stars! [SUBARU Pre-Hac Event] - Free Event",
        "rsvp_limit": 140,
        "status": "upcoming",
        "time": 1482337800000,
        "updated": 1482304553000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 122,
        "venue": {
            "id": 21632102,
            "name": "Samurai House in Israel",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "2F,Nahalat Binyamin St 52",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1407124248000,
            "name": "Samurai House in Israel",
            "id": 16172912,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Samurai-House-in-Israel",
            "who": "samurais"
        },
        "link": "https://www.meetup.com/Samurai-House-in-Israel/events/236018920/",
        "description": "<p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/3/c/3/4/600_456615412.jpeg\" /></p> <p>\n\n\n<b>If you're futuristic geek that loves technology, designer, and car lover then we are looking for you!<br/>Build an idea for the future of cars, test it with SUBARU R&D mentors and win a flight to Japan!</b></p> <p><b>The meetup will explain the purpose of the hackathon by SUBARU guys!<br/></b><br/><b>About SUBARU:</b></p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/7/e/9/5/600_456572405.jpeg\" /></p> <p>Subaru is the automotive division of Fuji Heavy Industries Ltd.(FHI), a multifaceted transport equipment manufacturer active on the global stage under three key pillars: Subaru Automobile Business; Aerospace Company; Industrial Products company Since the Subaru 360 was released in 1958, Subaru has been consistently aiming to produce vehicles that offer high safety in all road conditions, excellent driving performance, and intelligent packaging. This concept is applied to each and every vehicle that Subaru produces. Subaru's symmetrical All Wheel Drive (AWD) was developed as an extension of this concept. And the powertrain has been designed to be perfectly symmetrical left and right with the compact, low center of gravity Horizontally-Opposed Engine (SUBARU BOXER) at its heart. Subaru believes that these technologies enable owners to control their vehicles exactly as they intend to, and it is this level of ideal performance that Subaru is striving for. And this is backed with reliable driving performance in any weather and road conditions. Driving safety is also fine-tuned to exceptional levels together with crash safety and prevention safety.</p> <p><br/><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/7/e/b/4/600_456572436.jpeg\" /></p> <p><a href=\"http://www.subaru-global.com/technology/safety/preventivesafety.html\"><a href=\"http://www.subaru-global.com/technology/safety/preventivesafety.html\" class=\"linkified\">http://www.subaru-global.com/technology/safety/preventivesafety.html</a></a></p> <p><b><br/></b></p> <p><b>Meetup Agenda:</b></p> <p>• <b>18:30 - 19:00 Reception </b></p> <p>• <b>19:00 - 19:10 Samurai Intro</b></p> <p>• <b>19:00-20:00 SUBARU hackathon info </b></p> <p>• <b>20:00-20:15 Q&A</b></p> <p>• <b>20:15-20:45 Networking with Pizza & Beer!</b></p> <p><b>January 31th - February 1st 2017  [Hackathon Details]:</b></p> <p>The event will focus on what will be the future of cars 25 years from now in the next fields:<br/>>>> Innovation Safety - New ideas are welcome.<br/>>>> Accumulation of data - how to use data for the benefit of the driver in the future.<br/>>>> Hack Future of eyesight - How to utilize the current SUBARU technology to 25 years from now.</p> <p>When:<br/>January 31th- February 1st, 2017</p> <p>Who can apply:<br/>If you futuristic geek that loves technology, designer, and car lover then we are looking for you!<br/>Only teams can sign up and should include no less than 2 and no more than 5 members.<br/>Teams with designers or organic startups/teams will have more chances to get on board! Teams:<br/>We are looking for 15 talented team (application can be as an organic team or as a startup) that will combine new innovative ideas with the company's electronic sensors that will be presented in the announcement event.</p> <p>Apply here:</p> <p><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSfh_qP8w_78MRz4EEzaEmxdW9o7K_Cu4lF4DRceOvhraPjsBg/viewform\"><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSfh_qP8w_78MRz4EEzaEmxdW9o7K_Cu4lF4DRceOvhraPjsBg/viewform\" class=\"linkified\">https://docs.google.com/forms/d/e/1FAIpQLSfh_qP8w_78MRz4EEzaEmxdW9o7K_Cu4lF4DRceOvhraPjsBg/viewform</a></a></p> <p>Prize:<br/>The winning team will win a flight to Tokyo, Japan and will meet with SUBARU management to explore new directions for future cooperation. Support:<br/>During the event SUBARU's engineers and the judgment team will be of help and guide you.</p> <p>Place:<br/>Rise, Tel-Aviv<br/><a href=\"https://www.google.com/maps/place/Rise+Tel+Aviv/@32.0647189,34.7721668,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b7d6123e697:0x645fed6027fb8464!8m2!3d32.0647144!4d34.7743555\" class=\"linkified\">https://www.google.com/maps/place/Rise+Tel+Aviv/@32.0647189,34.7721668,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b7d6123e697:0x645fed6027fb8464!8m2!3d32.0647144!4d34.7743555</a></p> ",
        "visibility": "public"
    },
    {
        "created": 1482140759000,
        "duration": 4500000,
        "id": "236332201",
        "name": "OnoVation # 60: Project Management - from limited to mass production",
        "status": "upcoming",
        "time": 1482339600000,
        "updated": 1482140759000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 1,
        "venue": {
            "id": 24901932,
            "name": "Ono Academic College, MBA Building, Room 205",
            "lat": 32.05152130126953,
            "lon": 34.85787582397461,
            "repinned": false,
            "address_1": "נהר הירדן 2",
            "city": "Qiryat Ono",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1350483697000,
            "name": "Onovation - Ono Academic College eClub",
            "id": 5434022,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.849998474121094,
            "urlname": "Ginnovation-and-Ono-Academic-College-eClub",
            "who": "(Potential) Entrepreneurs"
        },
        "link": "https://www.meetup.com/Ginnovation-and-Ono-Academic-College-eClub/events/236332201/",
        "manual_attendance_count": 0,
        "description": "<p>מפגש מספר 60 של מועדון היזמות של הקריה האקדמית אונו<br/>המפגש יתקיים ביום ד' ה- 21 לדצמבר 2016 בשעה 19:00בבניין רולן אולם 205</p> <p>נושא המפגש<br/>ניהול פרוייקטים – מעבר מייצור מוגבל לייצור המוני</p> <p>סדר היום למפגש<br/>18:45-19:00 התכנסות<br/>19:00-19:15: סיכום הנושאים של ההרצאה הקודמת (רועי מן, מנכ\"ל DaPulse)<br/>19:15-20:15: יגאל עזרא, מנכ\"ל קולור-צ'יפ<br/>20:15: סיכום</p> <p>על חברת ColorChip:<br/>ColorChip היא חברה ישראלית שהוקמה ב-2001 עם רעיון מהפכני עבור תקשורת נתונים. במשך השנתיים האחרונות החברה קיבלה חוזי ענק מגדולות החברות בעולם והרחיבה את הפעילות מ- 40 עובדים ל- 200 עובדים וממפעל ייצור אחד ביקנעם לעוד מפעל גדול בתאילנד. החברה היום מוערכת במעל 500 מיליון דולר וממשיכה לצמוח.</p> <p>על המרצה:<br/>מר יגאל עזרא התחיל ב- ColorChip כמנהל הפיתוח העיסקי ואחרי כמעט 3 שנים בתפקיד, התמנה למנכ\"ל החברה, תפקיד אותו הוא ממלא ב2.5 שנים האחרונות. אלו אותן השנים בהן החברה כמעט נסגרה ואחר כך הפכה לאחת החברות הבולטות והחזקות בשוק חברות ההזנק הישראליות.<br/>בטרם הגיעו ל-ColorChip היה ראש חטיבת האסטרטגיה ב- Amdocs. לפני כן, שהה בארה\"ב והיה מנהל פיתוח עסקי בכיר ב- VeriSign.<br/>יגאל בעל תואר שני במנהל עסקים מאוניברסיטת Emory ובעל תואר ראשון בכלכלה וחשבונאות מאוניברסיטת בן גוריון. על ההרצאה<br/>בהרצאה, מר יגאל עזרא יתאר את האתגרים השונים הקשורים בניהול פרוקייטים בחברת ColorChip. ההרצאה תתמקד במיוחד בנושאים הקשורים בניהול תקציבים, ניהול כוח אדם, ניהול הייצור וניהול סיכונים בעת גדילה בהזמנות, חידושים טכנולוגיים, והקמת אתר פעילות חדש ומרוחק (במקרה זה, תאילנד).</p> ",
        "visibility": "public"
    },
    {
        "created": 1480512809000,
        "id": "235929311",
        "name": "Collaboration between big corporations and startups - lessons learned and how to",
        "status": "upcoming",
        "time": 1482422400000,
        "updated": 1480512809000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 36,
        "venue": {
            "id": 24802763,
            "name": "CITYHUB",
            "lat": 32.06376266479492,
            "lon": 34.771156311035156,
            "repinned": false,
            "address_1": "אחד העם 28",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1480437873000,
            "name": "CITYHUB TLV",
            "id": 21311845,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "CITYHUB-TLV",
            "who": "Members"
        },
        "link": "https://www.meetup.com/CITYHUB-TLV/events/235929311/",
        "description": "<p>Join us for a beer & casual talk with Monika Rozalska how will focus on collaboration between big corporations and startups - lessons learned and how to actually succeed\".Monika will share the best practices, case studies and experiences.</p> <p>\n\nCREATORS is a comprehensive ideation program that connects multinational corporations and experienced entrepreneurs </p> ",
        "visibility": "public"
    },
    {
        "created": 1482312363000,
        "id": "236372196",
        "name": "Christmastime in the City (Free)",
        "status": "upcoming",
        "time": 1482634800000,
        "updated": 1482312363000,
        "utc_offset": -18000000,
        "waitlist_count": 0,
        "yes_rsvp_count": 4,
        "venue": {
            "id": 24953298,
            "name": "The Little Easy",
            "lat": 34.04754638671875,
            "lon": -118.25025939941406,
            "repinned": false,
            "address_1": "216 W 5th St",
            "city": "Los Angeles",
            "country": "us",
            "localized_country_name": "USA",
            "zip": "",
            "state": "CA"
        },
        "group": {
            "created": 1258123610000,
            "name": "Meetup API Testing Sandbox",
            "id": 1556336,
            "join_mode": "open",
            "lat": 40.70000076293945,
            "lon": -73.98999786376953,
            "urlname": "Meetup-API-Testing",
            "who": "Developers"
        },
        "link": "https://www.meetup.com/Meetup-API-Testing/events/236372196/",
        "manual_attendance_count": 0,
        "description": "<p><b>3</b> people are RSVPd through other meetup groups!</p> <p><b>!!ATTENTION!! I'M NOT THE HOST OF THIS MEETUP!</b> The name of the host is <b>UnOrganizer</b> and their meetup is below <img src=\"http://photos3.meetupstatic.com/photos/member/3/a/8/8/thumb_261674984.jpeg\" /> <a href=\"https://www.meetup.com/ijustmovedtola/members/201204503/\"><b>Click here to contact them if you have any questions!</b></a></p> <p><br/><b>==========MEETUP DESCRIPTION==========<br/></b></p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/1/9/6/f/600_456846511.jpeg\" /></p> <p>You are cordially invited to join Lionel at the most anticipated event of the year: the 5th Annual Christmastime in the City. This swanky, sexy cocktail party takes place at The Little Easy, evoking a bit of ole New Orleans. In attendance will be L.A.'s most eligible bachelors and bachelorettes. Adding to the festive atmosphere will be the house DJ spinning awesome sounds. Enjoy handcrafted cocktails and nosh on delicious bites. Seductive and inviting, The Little Easy is the perfect rendezvous for Christmas Eve. This is a joint event with mega-group<a href=\"http://www.meetup.com/losangelesfreeconcerts/\"> LA Free Concerts</a> so you can expect a large turnout.</p> <p><br/>It's perfectly okay to come by yourself--we'll share the magic of Christmas together.</p> <p><br/>Carpool SIGN UP<a href=\"https://www.prepatrip.com/t/si9k6r\"> HERE</a>. Or<a href=\"https://www.uber.com/invite/uberlafc1\"> Uber</a>,<a href=\"https://www.lyft.com/invite/LAFC1\"> Lyft</a>,<a href=\"http://socaltransport.org/tm_pub_start.php\"> Metro</a>. Metered street parking or park at<a href=\"http://www.laparks.org/pershingsquare\"> Pershing Square</a> $6. Is your birthday in December? We want to celebrate with you. Send Lionel a message (<a href=\"https://secure.meetup.com/messages/?new_convo=true&member_id=4594736&name=Lionel\">click</a>). Dress code: Festive Attire (<a href=\"http://www.emilypost.com/everyday-manners/your-personal-image/69-attire-guide-beach-casual-to-white-tie-\">click</a>). No cover. No host bar. Table seating requires purchase. Food and beverages at your own expense. 21 and over. Members who cancel last minute or flake will be marked as No Show. You must have a<a href=\"http://help.meetup.com/customer/portal/articles/615549-add-a-photo-to-my-profile\">recognizable photo</a> on your profile.</p> ",
        "how_to_find_us": "\"City sidewalks, busy sidewalks, dressed in holiday style. In the air there's a feeling of Christmas\"",
        "visibility": "public_limited"
    },
    {
        "created": 1480340829000,
        "duration": 4500000,
        "id": "235878977",
        "name": "OnoVation Meetup 61: Entrepreneurship - the good the bad and the ugly",
        "status": "upcoming",
        "time": 1482676200000,
        "updated": 1482140514000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 14,
        "venue": {
            "id": 24921570,
            "name": "Ono Academic College, MBA Building, Room 207",
            "lat": 32.05152130126953,
            "lon": 34.85787582397461,
            "repinned": false,
            "address_1": "נהר הירדן 2",
            "city": "Qiryat Ono",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1350483697000,
            "name": "Onovation - Ono Academic College eClub",
            "id": 5434022,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.849998474121094,
            "urlname": "Ginnovation-and-Ono-Academic-College-eClub",
            "who": "(Potential) Entrepreneurs"
        },
        "link": "https://www.meetup.com/Ginnovation-and-Ono-Academic-College-eClub/events/235878977/",
        "description": "<p>מפגש מספר 61 של מועדון היזמות של הקריה האקדמית אונו<br/>ביום א' ה- 25 לדצמבר 2016 בשעה 16:30 בבניין גרפינקל אולם 207</p> <p>נושא המפגש<br/>יזמות – הטוב, הרע והמכוער</p> <p>סדר היום למפגש<br/>16:15-16:30 התכנסות<br/>16:30-17:45: יזמות – הטוב, הרע והמכוער - גיא ציפורי</p> <p>על ההרצאה<br/>אז בחרת בחיים של יזם? מצוין. אבל מאיפה מתחילים?<br/>גיא יספר על התשוקה שלו ליזמות ועל הדברים שהוא מבין היום והיה רוצה לדעת כשיצא לדרכו היזמית לפני 10 שנים. איך השיעורים שלמד השפיעו על מסלול היזמות שלו והאם בכלל ניתן להעביר אותם ליזם אחר.<br/>דרך סיפורים מהמסע האישי שלו ישתף איך נראים חייו של יזם, איך מוצאים רעיון ואיך יודעים אם הוא טוב, את מי לשתף, איך מגייסים כסף, אילו הפתעות מחכות בדרך ועוד.</p> <p>על המרצה:<br/>גיא ציפורי חוגג השנה עשור של יזמות טכנולוגית. בשנת 2007 היה חלק מצוות ההקמה של iMedix רשת חברתית רפואית שבשיאה כללה 150 מיליון משתמשים בחודש (קצת יותר ממה שהיה לפייסבוק באותה שנה). בהמשך הקים שני סטארטאפים: Visionize שנמכרה ל-AVG ב-2011 ו- StreamRall שנמכרה לחברת ironSource בקיץ האחרון. בימים אלו מבשל גיא עם שותפיו את הסטארטאפ הבא.</p> <p><br/>המפגש מתקיים במסגרת הקורס יזמות עסקית בקריה האקדמית אונו<br/>לכן הכניסה להרצאה תתאפשר רק בין 16:15 ל- 16:30</p> ",
        "visibility": "public"
    },
    {
        "created": 1469910854000,
        "duration": 12600000,
        "id": "pgwswlyvqbhc",
        "name": "she codes(tlv); Weekly Hacknight",
        "rsvp_limit": 20,
        "status": "upcoming",
        "time": 1482683400000,
        "updated": 1470224785000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 18,
        "venue": {
            "id": 21316162,
            "name": "Google Campus TLV, Electra tower, 34th floor",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "98 Yigal Alon st, Tel Aviv",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1402746262000,
            "name": "she codes(tlv);",
            "id": 15079162,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "she-codes-tlv",
            "who": "Coders"
        },
        "link": "https://www.meetup.com/she-codes-tlv/events/232998657/",
        "manual_attendance_count": 0,
        "description": "<p>Our HackNight is a 3-4 hours freestyle coding session in which developers are invited to work on any coding project they like, learn to code, or learn a new language, while enjoying the hacking atmosphere, and network with other women developers.</p> <p>Bring your laptop, and an idea for a coding project. If you don't have an idea, we will help you choose one.</p> <p>If you're just starting off with coding, come, and we'll help you choose tutorials and learn further. We have experts on various subjects who will be happy to help you learn and answer your questions.</p> <p>Feel free to share with your developer friends</p> <p>**Don't forget your laptop & headphones**</p> ",
        "visibility": "public"
    },
    {
        "created": 1460672343000,
        "id": "tqvmslyvqbhc",
        "name": "bicycle workshop",
        "status": "upcoming",
        "time": 1482688800000,
        "updated": 1460672343000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 1,
        "venue": {
            "id": 13933482,
            "name": "TAMI",
            "lat": 32.171016693115234,
            "lon": 34.85884094238281,
            "repinned": false,
            "address_1": "Kibbutz Galuyot 45",
            "address_2": "Studio #106, 3rd Floor ",
            "city": "Tel Aviv",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1380728634000,
            "name": "Tel Aviv Makers (TAMI)",
            "id": 10521552,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Tel-Aviv-Makers-TAMI",
            "who": "Hackers"
        },
        "link": "https://www.meetup.com/Tel-Aviv-Makers-TAMI/events/236057642/",
        "description": "<p>We will try to  learn how to fix a bicycle.<br/>You may bring along the bike or a wheel and we can tackle it together.<br/>The idea is to try to rebuild or fix the old parts and re-use them, whenever possible.<br/>There are tools, support and very few parts at the space.</p> ",
        "visibility": "public"
    },
    {
        "created": 1481206586000,
        "duration": 7200000,
        "id": "236114111",
        "name": "Opportunities in the African Energy Markets",
        "rsvp_limit": 90,
        "status": "upcoming",
        "time": 1482764400000,
        "updated": 1482297380000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 79,
        "venue": {
            "id": 24650353,
            "name": "Google campus",
            "lat": 32.08530044555664,
            "lon": 34.781768798828125,
            "repinned": false,
            "address_1": "98 Yigal Alon st. floor 34, Electra",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1342893376000,
            "name": "IoT and Smart Energy",
            "id": 4360512,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Israel-Smart-Energy",
            "who": "Members"
        },
        "link": "https://www.meetup.com/Israel-Smart-Energy/events/236114111/",
        "description": "<p> <b>Opportunities in African IOT & Energy Markets</b></p> <p><br/>This session will provide a view on the opportunities in the emerging Africans markets with first hand experience on  how to approach those markets and overcome possible challenges. </p> <p><br/><b><a href=\"http://brightmerge.com/about-us/team/daniel-schwab/\">Daniel Schwab</a></b> Founder and CEO of Brightmerge, developer of micro-grids in Africa, and the founder of Kayema Energy Solutions, an integrator of renewable energy solutions in Africa. </p> <p><b><a href=\"https://www.linkedin.com/in/sybendak\">Shirley Ben-Dak</a> </b>Head of Global Initiatives at SUiTS, engaged in smart cities solutions in Africa.</p> <p><b><a href=\"http://gigawattglobal.com/our-team/\">Nathanael</a></b><b><a href=\"http://gigawattglobal.com/our-team/\"> Johnson </a></b>Project Manager for off-grid electrification projects in Burundi at Gigawatt Global.</p> <p>After the session, we invite you to join our Celebratory Hanukkah Candle lighting and Sufganiyot, taking place at the same location.</p> <p>--------------------------------------------------------------------</p> ",
        "how_to_find_us": "Small Event Space, 98 Yigal Alon St, Floor 34, Electra Building, Tel Aviv",
        "visibility": "public"
    },
    {
        "created": 1481550669000,
        "duration": 9000000,
        "fee": {
            "accepts": "cash",
            "amount": 15,
            "currency": "USD",
            "description": "per person",
            "label": "price",
            "required": false
        },
        "id": "236191396",
        "name": "ספיד נטוורקינג לאזור ירושלים מיוחד לחנוכה, 26.12.16",
        "status": "upcoming",
        "time": 1482764400000,
        "updated": 1481550718000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 3,
        "venue": {
            "id": 24880080,
            "name": "מטבחי אלפנט",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "רח' בית הדפוס 7",
            "city": "ירושלים",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1369829980000,
            "name": "Freelance Israel",
            "id": 8691492,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Freelance-Israel",
            "who": "Freelancers"
        },
        "link": "https://www.meetup.com/Freelance-Israel/events/236191396/",
        "description": "<p>ברוכים הבאים לנטוורקינג לאזור ירושלים של מפגשי נטוורקינג ויין<br/>למפגש הקרוב מוזמנים בעלי עסקים קטנים ובינוניים, עצמאיים מכל תחום, יזמים, סטארטאפיסטים המעוניינים ליצור שיתופי פעולה מניבים עם בעלי עסקים נוספים.<br/>המיקום - אלפנט מטבחים</p> <p>ההרשמה באתר אין אפשרות לשלם במקום.</p> <p>לוח זמנים<br/>17:00 – הגעה, רישום ומינגלינג, שתייה ונשנוש קל<br/>17:30 – הדלקת נרות<br/>17:35 – התכנסות, דברי פתיחה והצגה עצמית, 2 דקות לכל אחד מהנוכחים<br/>18:15 – הפסקה קצרה<br/>18:30 – ספיד נטוורקינג עסקי! – בכל מעגל יהיו 3-4 בעלי עסקים, לכל אחד 2.5 דקות להציג את העסק. מומלץ להביא דוגמאות לעבודות וכמובן כרטיסי ביקור.<br/>19:15 – קביעת פגישות<br/>19:30 – סיום</p> <p>קהל היעד: בעלי עסקים קטנים ובינוניים, עצמאיים מכל תחום, יזמים, סטארטאפיסטים המעוניינים ליצור שיתופי פעולה מניבים עם בעלי עסקים נוספים.</p> <p>הצוות המוביל את המפגש לאזור ירושלים:<br/>אלון אביאני - מאמן עסקי למצוינות<br/>איריס שחר - אלפנט מטבחים</p> <p>מחכים לראותכם!<br/>בברכה, צוות מפגשי נטוורקינג ויין - ההנאה בעסקים</p> ",
        "how_to_find_us": "http://bit.ly/NETWORKINGJLM",
        "visibility": "public"
    },
    {
        "created": 1482049672000,
        "duration": 5400000,
        "id": "236312882",
        "name": "Overcoming the fear of Investment Agreement, By Yaniv Izardel",
        "status": "upcoming",
        "time": 1482766200000,
        "updated": 1482049672000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 22,
        "venue": {
            "id": 24562397,
            "name": "LIGHTHOUSE RAANANA",
            "lat": 32.19559860229492,
            "lon": 34.88053512573242,
            "repinned": false,
            "address_1": "החרושת 14-16",
            "city": "Ra'anana",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1463943110000,
            "name": "Lighthouse Community of Entrepreneurs",
            "id": 19982998,
            "join_mode": "open",
            "lat": 32.189998626708984,
            "lon": 34.880001068115234,
            "urlname": "Lighthouse-Community-of-Entrepreneurs",
            "who": "Members"
        },
        "link": "https://www.meetup.com/Lighthouse-Community-of-Entrepreneurs/events/236312882/",
        "description": "<p><img src=\"http://photos4.meetupstatic.com/photos/event/c/3/6/1/600_456950017.jpeg\" /></p> <p>Main Issues:</p> <p>General background;</p> <p>Types of Investors: Angles vs. VCs;</p> <p>Types of agreements: Investment Agreement vs. Convertible Loan Agreement;</p> <p>Initial document: Term Sheet/Letter of Intent;</p> <p>Main Issues in the Investment Agreement:</p> <p>· Company's valuation and ESOP Pool;</p> <p>· Representations and warranties and survival thereof;</p> <p>· Preferred rights to the Investors;</p> <p>· Directors' appointment;</p> <p>· Protective covenants (<a>major decisions by Shareholders and Board</a>);</p> <p>· Founders' agreement to work with the Company for minimum term (Reverse Vesting/Repurchase);</p> <p>· Founders' lock-up;</p> <p>· Anti-dilution protection for the Investors;</p> <p>· Dividend/Liquidation Preference;</p> <p>· Transferability of Shares;</p> <p>· Closing terms;</p> <p>· Indemnification and D&O Insurance;</p> <p>· Confidentiality, IP Rights and Non-compete.</p> ",
        "visibility": "public"
    },
    {
        "created": 1481699006000,
        "duration": 9000000,
        "id": "236231961",
        "name": "The Art of Clean Code - she codes;Coding Skills Event",
        "rsvp_limit": 120,
        "status": "upcoming",
        "time": 1482769800000,
        "updated": 1481699089000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 92,
        "venue": {
            "id": 21316162,
            "name": "Google Campus TLV, Electra tower, 34th floor",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "98 Yigal Alon st, Tel Aviv",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1402746262000,
            "name": "she codes(tlv);",
            "id": 15079162,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "she-codes-tlv",
            "who": "Coders"
        },
        "link": "https://www.meetup.com/she-codes-tlv/events/236231961/",
        "description": "<p>Soon</p> ",
        "visibility": "public"
    },
    {
        "created": 1481574498000,
        "id": "236200637",
        "name": "Arduino Programming Techniques #4: On memory, pointers, arrays, and bytes.",
        "status": "upcoming",
        "time": 1482771600000,
        "updated": 1482079065000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 17,
        "venue": {
            "id": 13933482,
            "name": "TAMI",
            "lat": 32.171016693115234,
            "lon": 34.85884094238281,
            "repinned": false,
            "address_1": "Kibbutz Galuyot 45",
            "address_2": "Studio #106, 3rd Floor ",
            "city": "Tel Aviv",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1380728634000,
            "name": "Tel Aviv Makers (TAMI)",
            "id": 10521552,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Tel-Aviv-Makers-TAMI",
            "who": "Hackers"
        },
        "link": "https://www.meetup.com/Tel-Aviv-Makers-TAMI/events/236200637/",
        "description": "<p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/d/e/5/0/600_453776912.jpeg\" /></p> <p>*** Please note that that due to the date change the lecture will takes place at the TAMI hackerspace and not at Campus Tel Aviv (Google) as initially planned.</p> <p>This time we will explore things we can do with memory, pointers, arrays, and memory buffers.</p> <p>We will revisit the run-time environment, and learn about PROGMEM, and EEPROM.</p> <p><br/>We will learn how to manipulate memory buffers, and see where that is useful.</p> <p>We'll explore the strange relations in C/C++ between pointers and arrays, and what does it mean for multidimensional arrays.</p> <p>We will learn about pointer arithmetic, sizeof, memset, memcpy, memmove, strcpy, strncpy.</p> <p>We will learn about placement new, for C++, and also how to create pointer-like classes.</p> <p>We will try to overcome the heap fragmentation problem, which prevents us to use dynamic allocation in routine operations.</p> ",
        "visibility": "public"
    },
    {
        "created": 1481186887000,
        "duration": 7200000,
        "id": "236111216",
        "name": "\"Startupist\"­­? Learn how to raise money",
        "rsvp_limit": 30,
        "status": "upcoming",
        "time": 1482856200000,
        "updated": 1482182539000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 22,
        "venue": {
            "id": 24937841,
            "name": "Regus -Ramat Hachayal",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "3 Hanehoshet St, Building B, 7th floor, Tel Aviv, Tel Aviv-Yafo",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1462266342000,
            "name": "Gold Ventures Incubator",
            "id": 19910714,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "GOLD-VENTURES-INCUBATOR",
            "who": "Golds"
        },
        "link": "https://www.meetup.com/GOLD-VENTURES-INCUBATOR/events/236111216/",
        "description": "<p>Ever wondered what's the first thing you should do in order to raise money for your business?</p> <p>What funding method is right for you? ​ How can you get as fast as possible to a working MVP? ​ And how equity crowdfunding is re-shaping the future of business funding?</p> <p><img src=\"http://photos3.meetupstatic.com/photos/event/6/c/9/c/600_456687804.jpeg\" /></p> <p>Due to limited space, please verify your attendance e-mailing this address:</p> <p>[masked]</p> <p>​</p> <p>Join us at Regus - Ramat Hachayal , 27th of December, 18:30</p> <p>​​</p> <p>On the Agenda:</p> <p>1​8:30- 19:00<br/>Networking and snacks</p> <p>​19:00 - 20:00</p> <p>Kobi Kalderon from GVI will give his notes about business plan canvasing and how to get from Idea ​to MVP to your first paying customer in a short period with minimal funding.</p> <p>Adv. Nir Ofer will give his insights about the vital role professional \"Finders\" have in the industry and how you can leverage their connections in-order to raise capital from corporate and private investors.</p> <p>Eilam Osri from PipelBiz will explain about the​ new​ funding options available for ​entrepreneurs and business owner​s and how you can enjoy the extra benefits this new options ​give you.</p> <p>20:00 - 20:30<br/>Questions & Answers</p> ",
        "visibility": "public"
    },
    {
        "created": 1416703426000,
        "id": "xdssclyvqblc",
        "name": "she codes(tau) - Weekly HackNight",
        "status": "upcoming",
        "time": 1482940800000,
        "updated": 1416703426000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 2,
        "venue": {
            "id": 20681282,
            "name": "Tel Aviv University ",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "Shrieber Building, room # 309",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1400061316000,
            "name": "she codes(tau);",
            "id": 14448062,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "she-codes-tau",
            "who": "Coders"
        },
        "link": "https://www.meetup.com/she-codes-tau/events/236353018/",
        "description": "<p>Our HackNight is a 3-4 hours freestyle coding session in which developers are invited to work on any coding project they like, or learn a new language, while enjoying the hacking atmosphere, and network with other women developers.</p> <p>\n\n\nBring your laptop, and an idea for a coding project. If you don't have an idea, we will help you choose one. Feel free to work on your school-related projects as well.</p> <p>\n\n\nIf you're just starting off with coding, come, and we'll help you choose tutorials and learn further. Feel free to share with your develop(h)er friends.</p> <p><br/>We can't wait to see you :), don't forget your laptop!</p> <p><br/>**snacks will be available** :D</p> ",
        "visibility": "public"
    },
    {
        "created": 1468677615000,
        "id": "232661706",
        "name": "Innovation and creativity methods for startups - Apply them to differentiate!",
        "status": "upcoming",
        "time": 1482942600000,
        "updated": 1482147290000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 102,
        "venue": {
            "id": 21352552,
            "name": "Campus TLV",
            "lat": 32.060001373291016,
            "lon": 34.7599983215332,
            "repinned": false,
            "address_1": "98 Yigal Alon st.",
            "address_2": "Floor 34rd (Electra Tower)",
            "city": "Tel-Aviv",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1360946293000,
            "name": "Lean Startup - Tel Aviv",
            "id": 7194012,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Lean-Startup-Tel-Aviv",
            "who": "Entrepreneurs"
        },
        "link": "https://www.meetup.com/Lean-Startup-Tel-Aviv/events/232661706/",
        "description": "<p>How important is it for a startup to be creative and innovative?</p> <p>Yes,<b> perfect execution</b> is a must for big startup success, but in a competitive market -  <b>innovation</b> can really set you apart from your competitors in a way that will create a significant competitive advantage.</p> <p>In this interactive meetup, I'm very happy to host <a href=\"https://www.linkedin.com/in/eyalzohar\">Eyal Zohar</a> who will share with us methods to help us be creative. He'll combine creative games, FUN and will demonstrate practical innovation tools - \"The Bad idea\", \"1000 dwarfs\", \"7wh\".</p> <p><br/>The presentation will be held in Hebrew.</p> <p>For more about Eyal's Creativity Lectures see <a href=\"http://www.eyal-creative.co.il/\">here</a>.</p> <p>\n\nAs an \"appetizer\" for the event - here's a riddle:</p> <p>I  X  =  6</p> <p><br/>Please add one line to make the equation right.</p> <p>The one who will suggest the highest number of creative answers will get a creative prize :-)</p> <p>\n\n\n\nHope to see you there,</p> <p>Shoham</p> ",
        "visibility": "public"
    },
    {
        "created": 1479717453000,
        "duration": 7200000,
        "id": "235728335",
        "name": "A Key to Success: Maximize Benefits of Offshore Outsourcing [Free Event]",
        "rsvp_limit": 120,
        "status": "upcoming",
        "time": 1482944400000,
        "updated": 1479982772000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 28,
        "venue": {
            "id": 21632102,
            "name": "Samurai House in Israel",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "2F,Nahalat Binyamin St 52",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1407124248000,
            "name": "Samurai House in Israel",
            "id": 16172912,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Samurai-House-in-Israel",
            "who": "samurais"
        },
        "link": "https://www.meetup.com/Samurai-House-in-Israel/events/235728335/",
        "description": "<p><img src=\"http://photos1.meetupstatic.com/photos/event/6/0/d/f/600_456324799.jpeg\" /></p> <p><b>About the Session:</b></p> <p><br/>The meet- up will focus on the key factors to success while using offshore outsourcing programming services. </p> <p>We will discuss the differences between offshore companies, when to outsource, what to outsource and how to do it right.</p> <p><b><br/></b></p> <p><b>About the Speaker:</b></p> <p>Tzahi is the co-founder and VP marketing of Titanium Software. </p> <p>Tzahi has more than 25 years of experience in software envelopment and entrepreneurship.</p> <p><img src=\"http://photos4.meetupstatic.com/photos/event/5/c/5/e/600_456263646.jpeg\" /></p> <p>Titanium Software is a leading offshore development company, based in Israel and Moldova. Titanium has 45 developers for WEB development, Mobile development and Unity3d game development.</p> <p><b>Titanium Website: <a href=\"http://www.titanium-soft.co.il/\">www.titanium-soft.co.il</a></b></p> <p>\n\n\n<img src=\"http://photos3.meetupstatic.com/photos/event/5/c/6/f/600_456263663.jpeg\" /></p> <p><b>Event Schedule:</b></p> <p><br/><b>19:00</b>- Reception.</p> <p><b>19:30</b>- Samurai Introduction.</p> <p><b>19:45</b>- \"A Key  to Success: Maximize Benefits of Offshore Outsourcing\"</p> <p>* Definitions and types of outsourcing: Pros & Cons.</p> <p>* Why Outsource?</p> <p>* Major offshore Countries - Pros & Cons.</p> <p>* Criteria to select offshore partner.</p> <p>* Offshore Models and Procedures: E2E projects and Agile projects.</p> <p>* Recommendations for successful offshore outsourcing</p> <p>* Summary</p> <p><b>20:45</b>- Networking.</p> <p><br/><b><br/></b></p> <p><b>* Entrance is free of charge.</b></p> <p><b>* The Session will be held in English.</b></p> <p><b><a href=\"https://www.facebook.com/SamuraiHouseInIsrael/\">Link to our Facebook Page</a></b></p> ",
        "visibility": "public"
    },
    {
        "created": 1480586995000,
        "duration": 7200000,
        "id": "235954471",
        "name": "Co-Founders Speed Dating & Pitching event - by 8200 EISP",
        "status": "upcoming",
        "time": 1482944400000,
        "updated": 1481322743000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 227,
        "venue": {
            "id": 21352552,
            "name": "Campus TLV",
            "lat": 32.060001373291016,
            "lon": 34.7599983215332,
            "repinned": false,
            "address_1": "98 Yigal Alon st.",
            "address_2": "Floor 34rd (Electra Tower)",
            "city": "Tel-Aviv",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1351416612000,
            "name": "8200 EISP - Entrepreneurship and Innovation Support Program",
            "id": 5592412,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "8200-EISP",
            "who": "Entrepreneurs"
        },
        "link": "https://www.meetup.com/8200-EISP/events/235954471/",
        "description": "<p><img src=\"http://photos3.meetupstatic.com/photos/event/e/8/4/e/600_456719470.jpeg\" /></p> <p>** PLEASE NOTE: The talk will be held in Hebrew **</p> <p><br/>If you are looking for co-founders or connections in general; if you want to pitch your start-up/product/service/skills/etc. or if you just want to come and watch an entertaining, rapid-fire event, then this is THE one to attend.</p> <p>** The event is hosted by the 8200 EISP accelerator. The event is being sponsored by Maverick Ventures.</p> <p>So, who should register? Only if you are -</p> <p>- An entrepreneur with an idea that is looking for a co-founder; fill in your start-up and description here: <a href=\"https://goo.gl/forms/Q40YCnkWcmM5Tiii1\"><a href=\"https://goo.gl/forms/Q40YCnkWcmM5Tiii1\" class=\"linkified\">https://goo.gl/forms/Q40YCnkWcmM5Tiii1</a></a></p> <p>- Entrepreneurs at heart that are looking for a start-up to join.</p> <p>AGENDA:</p> <p>19:00-pm – Get together, snacks and drinks</p> <p>19:30-pm – Few words from the organizers</p> <p>19:40-pm - STRICTLY '60 second' speed pitching*</p> <p>20:45-pm - 'Dating' and socializing</p> <p><br/>*Suggested breakdown for 60-second pitches (Remember: practice makes perfect!): </p> <p>20s - Who you are. </p> <p>20s - What you do/are working on. </p> <p>20s - Who/what you are looking for.</p> <p>This event is free!</p> <p>\n\n\n**Event Sponsor: Maverick Ventures</p> <p>Maverick Ventures is a boutique venture capital fund based in Tel Aviv focusing on growth stage Israel-related technology ventures. The fund has made 12 investments in the last year and a half, investing on average between $1-3 Million dollars in companies with existing proven traction. The fund is run by former entrepreneurs with a track record and is backed solely by hand-picked private strategic investors from around the world, whom are proactively helpful in growth through their own networks. For more information please visit <a>www.maverick.vc.</a></p> <p>**8200 EISP</p> <p>8200 EISP was the first start-up accelerator in Israel, founded in late 2011. Our vision is to harness the vast network of 8200 alumni in order to promote early stage, first-time entrepreneurs from all industries. This is our way as alumni of 8200 to give back to the Israeli society.</p> <p><br/>80% of the program alumni are currently leading their start-up as founders. Our alumni raised seed funding and beyond of over $400M in total and employ more than 450 people in Israel and overseas.</p> <p><br/><a href=\"http://www.eisp.org.il/en/home\"><a href=\"http://www.eisp.org.il/en/home\" class=\"linkified\">http://www.eisp.org.il/en/home</a></a> is funded and supported by our partners, all leaders in their respective fields. Our partners include Bank Hapoalim (the largest bank in Israel), EY Israel, law firms Naschitz Brandes Amir and Pearl Cohen Zedek Latzer Baratz, the BRM Group, Star Farm Ventures, Battery Ventures, AOL Israel, Nextage, Matrix (8300), Elron and WeWork Israel.</p> <p><br/>Follow us:</p> <p>Facebook - תוכנית היזמות של יוצאי 8200 - EISP</p> <p>Meetup - <a href=\"http://www.meetup.com/8200-EISP/\"><a href=\"http://www.meetup.com/8200-EISP/\" class=\"linkified\">http://www.meetup.com/8200-EISP/</a></a></p> ",
        "visibility": "public"
    },
    {
        "created": 1480617528000,
        "duration": 10800000,
        "id": "235963558",
        "name": "Entrepreneurship steps from the CTO's point of view",
        "status": "upcoming",
        "time": 1483027200000,
        "updated": 1480617528000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 7,
        "venue": {
            "id": 24802763,
            "name": "CITYHUB",
            "lat": 32.06376266479492,
            "lon": 34.771156311035156,
            "repinned": false,
            "address_1": "אחד העם 28",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1480437873000,
            "name": "CITYHUB TLV",
            "id": 21311845,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "CITYHUB-TLV",
            "who": "Members"
        },
        "link": "https://www.meetup.com/CITYHUB-TLV/events/235963558/",
        "manual_attendance_count": 0,
        "description": "<p>join us for beer & casual talk w/ Guy that will describe his steps as a CTO of HYPR from the begining through fundraising</p> <p>HYPR :Real-Time Social Analytics for Influencer of the World</p> ",
        "visibility": "public"
    },
    {
        "created": 1480958652000,
        "duration": 12600000,
        "id": "236047028",
        "name": "מפגש פיתוח",
        "rsvp_limit": 30,
        "status": "upcoming",
        "time": 1483029000000,
        "updated": 1480958692000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 16,
        "venue": {
            "id": 24253750,
            "name": "Linnovate office, ",
            "lat": 32.084930419921875,
            "lon": 34.83522415161133,
            "repinned": false,
            "address_1": "Migdaley Shekel, fifth floor, Jabutinski 168",
            "city": "Bney Brak",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1369095053000,
            "name": "Open Source and Free Software in Israel",
            "id": 8572852,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Open-Source-and-Free-Software-in-Israel",
            "who": "Members"
        },
        "link": "https://www.meetup.com/Open-Source-and-Free-Software-in-Israel/events/236047028/",
        "description": "<p>מוזמנים לבוא לעבוד על כל מה שהוא קוד פתוח</p> ",
        "how_to_find_us": "קומה 5, אחרי המשרדים של תאגדי המים של בני ברק",
        "visibility": "public"
    },
    {
        "created": 1481818368000,
        "fee": {
            "accepts": "paypal",
            "amount": 8,
            "currency": "USD",
            "description": "per person",
            "label": "price",
            "required": true
        },
        "id": "236259326",
        "name": "לכבוד חנוכה- סדנת סביבונים בהדפסה בתלת מימד להורים וילדים בבת ים",
        "rsvp_limit": 16,
        "status": "upcoming",
        "time": 1483029000000,
        "updated": 1481818493000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 1,
        "venue": {
            "id": 23587886,
            "name": "XLN Bat-Yam",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "בית ספר שזר, רחוב הרב ניסנבאום 66",
            "city": "Bat Yam",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1366300065000,
            "name": "XLN  - The places for makers",
            "id": 8120852,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "XLNXLN",
            "who": "Makers"
        },
        "link": "https://www.meetup.com/XLNXLN/events/236259326/",
        "description": "<p>לכבוד חנוכה אנחנו מזמינים אתכם הורים וילדים  </p> <p><b>למפגש של:</b></p> <p>חשיפה והיכרות עם אחד התחומים החדשניים והמתפתחים בעולם הטכנולוגיה.</p> <p>מטרת הסדנה היא חשיפה  והקניית ידע ליצירת מודלים להדפסה, להכיר את עולם ההדפסה בתלת מימד, פרויקטים מרחבי העולם, פיתוחים עתידיים והפעלת מדפסות ביתיות.</p> <p>במסגרת הסדנא נבנה סביבונים לכבוד חנוכה שניתן להדפיסם בתלת מימד!</p> <p>*כל משתתף יצא עם מתנה מודפסת</p> <p><b>מבנה הסדנה</b><b>:</b></p> <p>הסדנה היא מפגש חוויתי המשלב חשיפה והיכרות עם עולם מדפסות התלת מימד והתנסות מעשית ע\"י המשתתפים. במהלך הסדנא נכיר סוגי מדפסות  ונלמד איך הן עובדות , כיצד מתפעלים אותן , איך מייצרים מודל תלת מימדי להדפסה ואיך שולחים אותו למדפסת.</p> <p><b>קהל יעד</b><b>:</b></p> <p> הורים וילדים (מעל גיל 8) שמעוניינים להשתתף בסדנא חוויתית </p> <p>*אין צורך בידע קודם</p> <p><b>ציוד נדרש:</b> מחשב נייד ועכבר</p> <p><b>משך הסדנא:</b> כשעתיים</p> <p><b>עלות:</b>  50 ש\"ח לאדם</p> <p>תשלום מקדמה דרך האתר -30 ₪ יתר הסכום- 20 ₪ יגבו ביום הסדנא</p> <p>למי שמגיע עם יתר מילד אחד- 50% הנחה על ילד נוסף</p> <p><b>*לתושבי בת-ים תשלום על דמי הרישום בלבד (מקדמה)</b></p> <p><b>הגעה:</b></p> <p>בת-ים XLN מרכז</p> <p>נמצא ברחוב הרב ניסנבאום 66 בחטיבת הביניים שז\"ר. מרחק 3 דקות הליכה מקניון בת ים. נמצא בבניין המעבדות שבתוך חטיבת הביניים, בין מגרשי הכדורסל והכדורגל</p> <p>*חניה ברחוב הרב לוזון 6</p> <p><b>הקורס מוגבל ל-15 משתתפים(הורים וילדים יחד) ומותנה ברישום מראש- כל הקודם זוכה</b><b>.</b></p> <p><b>הסדנא </b>מחייבת רישום מראש ותשלום דמי רישום</p> <p>לשאלות ופרטים ניתן לפנות לשני-</p> <p><a href=\"mailto:[masked]\">[masked]</a></p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/9/a/9/0/600_444339568.jpeg\" /></p> ",
        "visibility": "public"
    },
    {
        "created": 1477844989000,
        "id": "235220218",
        "name": "New Year's Android & IOS All-Night Hackathon",
        "status": "upcoming",
        "time": 1483030800000,
        "updated": 1477845422000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 16,
        "venue": {
            "id": 24834380,
            "name": "Nexmii Offices ",
            "lat": 32.189849853515625,
            "lon": 34.86319351196289,
            "repinned": false,
            "address_1": " HaNessi'im Street (43) ",
            "city": "Ra'anana",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1475952805000,
            "name": "Nexmii",
            "id": 20653761,
            "join_mode": "open",
            "lat": 32.189998626708984,
            "lon": 34.880001068115234,
            "urlname": "Nexmii",
            "who": "Miembros"
        },
        "link": "https://www.meetup.com/Nexmii/events/235220218/",
        "description": "<p><img src=\"http://photos2.meetupstatic.com/photos/event/e/a/3/600_455583747.jpeg\" /></p> <p>Hey Guys , </p> <p><br/><b>Nexmii</b> wants to invite you to <b>New Year's Android & IOS All-Night Hackathon</b>  If you are an <b>IOS or Android Developer</b> come join us Thursday , <b>29th of December</b> to an all-night coding session</p> <p><b>Teams</b> of <b>2-4</b> members </p> <p>If you are alone we will hook you up with a Team.</p> <p><b>Requirements</b> :</p> <p>You need to<b> apply</b> for the Hackathon by filling up the following form : </p> <p><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSdk5I2Y-Q-q0A6zOM_mvAuMrAz7eY771RVSc3b_chwCEIQ1fw/viewform?c=0&w=1\" class=\"linkified\">https://docs.google.com/forms/d/e/1FAIpQLSdk5I2Y-Q-q0A6zOM_mvAuMrAz7eY771RVSc3b_chwCEIQ1fw/viewform?c=0&w=1</a></p> <p><br/>Free Pizza , Coffee and Beer !</p> ",
        "visibility": "public"
    },
    {
        "created": 1480250411000,
        "duration": 9000000,
        "id": "235856432",
        "name": "Employee Stock Options: Terms and Valuation",
        "status": "upcoming",
        "time": 1483284600000,
        "updated": 1481118242000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 95,
        "venue": {
            "id": 24267342,
            "name": "Tel Aviv Stock Exchange - conference center ",
            "lat": 32.06440353393555,
            "lon": 34.77033233642578,
            "repinned": false,
            "address_1": "2 Ahuzat Bayit St, Tel Aviv",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1426583382000,
            "name": "The Do's and Don'ts of Smart Capital Raising",
            "id": 18507571,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "The-Dos-and-Donts-of-Smart-Capital-Raising",
            "who": "Cap Table Hackers"
        },
        "link": "https://www.meetup.com/The-Dos-and-Donts-of-Smart-Capital-Raising/events/235856432/",
        "description": "<p><b>Description:</b></p> <p>Do you plan to hire more employees in the near future and grant them stock options, but don't know what the common trends and strategies in the market are?</p> <p>Do you know what your stock options' value is, today or at any time? </p> <p>And do you know what your stock options are worth, specifically if you need liquidity and want to sell them to a willing buyer through a secondary market platform or during an exit event (M&A or IPO)?</p> <p>If any of these questions apply, this event is for you! Join us to learn how to manage and valuate your company’s equity, tax tracks and all the secrets and myths surrounding it. This is a <b>MUST EVENT</b> for <b>founders</b>, <b>entrepreneurs</b>, <b>CFOs</b>, and <b>tech startups</b>!</p> <p><b>In this meetup, we will:</b></p> <p>- Look at what stock options are, and who is entitled to receive them.</p> <p>- Analyze what the most common tax track is, and why you need a trustee.</p> <p><br/>- Review the five most common mistakes startups make.</p> <p>- Analyze and simulate how to valuate your stock options at any time. </p> <p><b>Agenda:</b></p> <p>17:30-18:00: Registration and Networking</p> <p>18:00-18:45: Terms of Options to Employees and Service Providers </p> <p>18:45-19:30: Valuation of Employee Stock Options</p> <p>19:30-19:45: Q&A</p> <p><b>Confirmed panelists include:</b></p> <p><a href=\"https://il.linkedin.com/in/amitcohen100\"></a><a href=\"https://il.linkedin.com/in/odelia-pollak-5401793\">Odelia Pollak</a>, Adv. – CEO of ESOP Management and Trust Services Ltd. (www.esop.co.il)</p> <p><a href=\"https://www.linkedin.com/in/raphael-meyara-06925813\">Raphael Meyara</a>, Valuation Expert and CEO at AlgoValue (www.algovalue.com) </p> <p>\n\n\n<b>In Cooperation with:</b></p> <p><a href=\"https://www.xnes.co.il/\">ESOP Excellence</a></p> <p><img src=\"http://photos4.meetupstatic.com/photos/event/8/7/2/2/600_456394594.jpeg\" /></p> <p>AlgoValue - <a href=\"http://www.algovalue.com/\">Online Valuation and Cap Table Analysis Platform</a><a href=\"http://www.algovalue.com/\"></a></p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/c/8/7/0/600_441771312.jpeg\" /></p> <p><a href=\"http://thefloorhub.com/\">The Floor - The First Fintech Hub in Israel</a></p> <p><img src=\"http://photos3.meetupstatic.com/photos/event/1/5/e/2/600_456665602.jpeg\" /></p> <p>IATI - <a href=\"http://www.iati.co.il/\">Israel Advanced Technology Industry</a></p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/c/8/8/a/600_441771338.jpeg\" /></p> <p><a href=\"http://www.iati.co.il/\"></a></p> <p><a href=\"http://www.iati.co.il/\"></a></p> <p><a href=\"http://www.iati.co.il/\"></a></p> <p><a href=\"http://www.iati.co.il/\"></a></p> <p>Gvahim -<a href=\"http://thehivebygvahim.org/\">The Hive by Gvahim</a></p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/d/0/9/e/600_441773406.jpeg\" /></p> ",
        "visibility": "public"
    },
    {
        "created": 1475405198000,
        "id": "234566034",
        "name": "Java 8 Lambda Expressions in Depth",
        "rsvp_limit": 250,
        "status": "upcoming",
        "time": 1483288200000,
        "updated": 1482266668000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 210,
        "venue": {
            "id": 24268273,
            "name": "Google Campus",
            "lat": 32.08530044555664,
            "lon": 34.781768798828125,
            "repinned": false,
            "address_1": "98 Yigal Alon st., Electra tower, floor 34th, Events Zone Space",
            "city": "Tel Aviv",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1470207259000,
            "name": "life michael meetups",
            "id": 20274249,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "life-michael",
            "who": "Members"
        },
        "link": "https://www.meetup.com/life-michael/events/234566034/",
        "description": "<p>With the emergence of Java 8, we can use lambda expression in our code. Whether we develop an application for the android platform, a Java EE application or a simple Java SE application, our code can become shorter. </p> <p>This meetup will be dedicated for understanding the way lambda expressions work in Java. Throughout the meetup we will code together multiple different code samples and use them for gaining the most possible in-depth understanding. Throughout the meetup we will take a look at classic core Java code samples as well as code samples taken from the android domain. </p> <p>This meetup is for Java experienced developers who are not familiar with lambda expressions. Most of the meetup will be dedicated for understanding the way lambda expressions work in Java. </p> ",
        "visibility": "public"
    },
    {
        "created": 1482132647000,
        "duration": 7200000,
        "id": "236331299",
        "name": "מפגש חשיפה ליזמים עסקיים חברתיים בתחום תזונה ואורח חיים בריא – במשרדי שטראוס",
        "status": "upcoming",
        "time": 1483360200000,
        "updated": 1482143349000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 17,
        "venue": {
            "id": 24951460,
            "name": "משרדי שטראוס",
            "lat": 32.08403778076172,
            "lon": 34.8565788269043,
            "repinned": false,
            "address_1": "הסיבים 49",
            "city": "פתח תקווה",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1273648309000,
            "name": "Impact Hub Tel Aviv - TECH on BEER",
            "id": 1644280,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Tel-Aviv-Nightowls",
            "who": "Techies"
        },
        "link": "https://www.meetup.com/Tel-Aviv-Nightowls/events/236331299/",
        "manual_attendance_count": 0,
        "description": "<p>קבוצת שטראוס ו- 360 החממה לעסקים חברתיים פותחים מסלול האצה ייחודי ליזמים בתחום התזונה ואורח חיים בריא.<br/>אתם מוזמנים להגיש מועמדות לחממה ולהגיע למפגש חשיפה במשרדי שטראוס. למי זה מתאים ? אם אתם<br/>עסקים ״רגילים״ שרוצים יותר<br/>אם אתם ארגון עסקי, לא הגדרתם את עצמכם כעסק חברתי, אך בפעילותכם אתם מייצרים / שואפים לייצר השפעה חיובית על החברה ועושים שימוש בתזונה ואורח חיים בריא כמנוף לכך.</p> <p>אם אתם<br/>עמותות עם מנגנון עסקי<br/>אם אתם עמותה שפיתחה מנגנון עסקי ליצירת הכנסה, והפעילות ממוקדת בקידום תזונה ואורח חיים בריא או שהפעילות ניעדה לייצר השפעה חיובית על החברה ועושה שימוש בתזונה ואורח חיים בריא – כחלק מהפתרון לבעיה החברתית.</p> <p>אם אתם<br/>עסקים חברתיים קיימים<br/>אם אתם עסק חברתי שפועל במטרה לייצר השפעה חיובית על החברה ועושה שימוש בתזונה ואורח חיים בריא – כחלק מהפתרון לבעיה החברתית.</p> <p>קבוצת שטראוס חוברת לחממה כדי להאיץ ולפתח מיזמים בתחום התזונה ואורח החיים הבריא. קבוצת שטראוס תעניק למיזמים עסקיים חברתיים בחממה ליווי מקצועי, כלים, know -how במטרה לאפשר לעסקים חברתיים אלו לפרוץ ולהגדיל את השפעתם החברתית.</p> <p>לפרטים נוספים, וקבלת הזדמנות להציג את המיזם שלכם בפני נציגי שטראוס<br/><a href=\"http://bit.ly/2hL1HSY\" class=\"linkified\">http://bit.ly/2hL1HSY</a></p> <p>ההשתתפות במפגש כרוכה בהרשמה מראש !</p> ",
        "visibility": "public"
    },
    {
        "created": 1479379299000,
        "duration": 5400000,
        "id": "235644164",
        "name": "Christopher Columbus’ Adventure- A Fascinating Case Study for Entrepreneurs",
        "status": "upcoming",
        "time": 1483369200000,
        "updated": 1479739874000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 18,
        "venue": {
            "id": 24562397,
            "name": "LIGHTHOUSE RAANANA",
            "lat": 32.19559860229492,
            "lon": 34.88053512573242,
            "repinned": false,
            "address_1": "החרושת 14-16",
            "city": "Ra'anana",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1463943110000,
            "name": "Lighthouse Community of Entrepreneurs",
            "id": 19982998,
            "join_mode": "open",
            "lat": 32.189998626708984,
            "lon": 34.880001068115234,
            "urlname": "Lighthouse-Community-of-Entrepreneurs",
            "who": "Members"
        },
        "link": "https://www.meetup.com/Lighthouse-Community-of-Entrepreneurs/events/235644164/",
        "description": "<p><img src=\"http://photos1.meetupstatic.com/photos/event/7/2/6/9/600_456269289.jpeg\" /></p> <p>We will analyze Columbus' adventure according to parameters which remained unchanged throughout the last 520 years - the need, the business case, technological feasibility, the team, etc. We will see what happens when the founder fails to perform basic mathematical calculations, chooses the wrong investors, and makes basic legal mistakes, consequently leaving him penniless.</p> <p><br/>In other words - If you don't want to end up like Columbus (or if you DO want to) – you shouldn't miss this session.</p> <p>\n\n\nOri Choshen has 15 years' experience in management, BD, marketing, entrepreneurship & VC.</p> <p>Ori is currently VLX Ventures' CEO. Prior to joining VLX, Ori was the VP BD of Xenia VC, Co-founder of Aniba, Director of BD with SanDisk (as part of the company’s $1.6 Bn acquisition of M-Systems in 2006). Prior to M-Systems, Ori managed the Terminal Equipment Department at the marketing division of Orange Israel, and was a member inof Hutchison’s global handset group. Prior to that, Ori served 3 years as an Investment Manager in PFC, Orange’s VC subsidiary.</p> ",
        "visibility": "public"
    },
    {
        "created": 1481185098000,
        "duration": 7200000,
        "id": "236110979",
        "name": "Your Yearly Review of Customer Experience and Support",
        "status": "upcoming",
        "time": 1483372800000,
        "updated": 1482234301000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 9,
        "venue": {
            "id": 24228220,
            "name": "Campus Tel Aviv (34th floor) ",
            "lat": 32.0700798034668,
            "lon": 34.79414367675781,
            "repinned": false,
            "address_1": "98 Yigal Alon  Tel Aviv ",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1453022576000,
            "name": "Creating Exceptional Customer Experience - Israel Branch",
            "id": 19352755,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Creating-Exceptional-Customer-Experience-Israel-Branch",
            "who": "Success Champions"
        },
        "link": "https://www.meetup.com/Creating-Exceptional-Customer-Experience-Israel-Branch/events/236110979/",
        "description": "<p>Hi everyone,</p> <p>We have had a small hiatus with our meetings. Now it's time to get us going again. <b>This Meetup is all about YOU</b>. It needs your interaction to make it work. However, the gains for a little giving will be a lot of taking.</p> <p>Think of any challenges and successes you have had in the last year regarding the customer experience and/or customer support in your company. Did you implement a new way of working? Did your company suddenly grow? Did you implement a new platform? Do you have challenges you still haven't solved?</p> <p>The structure will be as follows:</p> <p>* A number of small 5-10 minute presentation (with or without slides) regarding the last 12 months' experiences. <br/><b>Please contact me if you can be one of the presenters.</b> All company sizes relevant.</p> <p>* A group discussion about how others in the group may offer different ideas about how to succeed in the challenges discussed.</p> <p>We will finish off with a brief discussion of what's ahead for us in 2017. </p> <p>Much thanks,</p> <p>Steve Wiseman</p> ",
        "visibility": "public"
    },
    {
        "created": 1481545181000,
        "id": "236190420",
        "name": "3 Hours intro session - Fullstack Coding Bootcamp",
        "rsvp_limit": 20,
        "status": "upcoming",
        "time": 1483372800000,
        "updated": 1481545368000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 19,
        "venue": {
            "id": 24480927,
            "name": "misterBIT",
            "lat": 32.317596435546875,
            "lon": 34.90311813354492,
            "repinned": false,
            "address_1": "Habonim 4",
            "city": "Ramat Gan",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1419324917000,
            "name": "The Future is made in Javascript",
            "id": 18269867,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "The-Future-is-Javascript",
            "who": "Javascripters"
        },
        "link": "https://www.meetup.com/The-Future-is-Javascript/events/236190420/",
        "description": "<p>אנחנו שמחים להכריז על פתיחת מחזור נוסף!</p> <p>מה לומדים?</p> <p>טכנולוגיות ווב - צד לקוח וצד שרת (Fullstack). בקורס נלמד JavaScript, HTML, CSS, SASS, Angular, Vue.js, Node.js, ועוד - הסילבוס המלא באתר.</p> <p>הקבלה מותנית בהגעה לערב הפתוח, הגשת אתגר פתיחה בלימוד עצמי, ולאחריו מבחן וראיון - כך נוכל (אתה ואנחנו) לוודא שאתה פונה למקצוע שאתה הולך לאהוב ולהצליח בו.</p> <p>התוכנית כוללת מסלול לימודים האורך 12 שבועות של לימוד יומיומי אינטנסיבי המשלב הרבה תרגול, עבודה בצוותים וליווי של מנטורים עם ניסיון רב בעולם התכנות.</p> <p>למתאימים תוצע עבודה במיסטרביט <a href=\"http://misterbit.co.il/\" class=\"linkified\">http://misterbit.co.il/</a>, חברת פרויקטים מצליחה, בה ימשיכו ללמוד ולהתמקצע בחסות מנטורים. לשאר העומדים בתנאי הקורס נעזור בהשמה, יש לא מעט חברות שמחכות לבוגרי הקורס.</p> <p>******הערב הפתוח*******</p> <p>שיעור של שעתיים עם המדריך הראשי ירון ביטון על אחת הטכנולוגיות שנלמד בקורס; בעקבותיו יקבלו המשתתפים אתגר לבית, אותו עליהם להגיש תוך שבוע על מנת להתקבל לקורס.</p> <p>השתתפות בערב פתוח היא חובה לכל מי שרוצה להתקבל.</p> <p>הצעדים הבאים</p> <p>· להרשמה לערב הפתוח שלחו מייל ל admin@misterbit.co.il עם אישור הגעה ומספר הטלפון שלכם או הרשמו דרך האתר: coding-academy.org</p> <p>· למידע נוסף על ההכשרה, פנו לאתר coding-academy.org ועברו על הסילבוס.</p> <p>נשמח לראותכם,</p> ",
        "how_to_find_us": "קומה 3",
        "visibility": "public"
    },
    {
        "created": 1481557380000,
        "duration": 9000000,
        "fee": {
            "accepts": "cash",
            "amount": 15,
            "currency": "USD",
            "description": "per person",
            "label": "price",
            "required": false
        },
        "id": "236193347",
        "name": "אתגרי התיירות שזקוקים לטכנולוגיה במפגש לתיירות והיזמות, 03.01.17",
        "status": "upcoming",
        "time": 1483455600000,
        "updated": 1481563487000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 3,
        "venue": {
            "id": 24854413,
            "name": "מרקספייס רמת החייל",
            "lat": 32.113548278808594,
            "lon": 34.8424186706543,
            "repinned": false,
            "address_1": "דבורה הנביאה 121",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1369829980000,
            "name": "Freelance Israel",
            "id": 8691492,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Freelance-Israel",
            "who": "Freelancers"
        },
        "link": "https://www.meetup.com/Freelance-Israel/events/236193347/",
        "description": "<p>חברים יקרים,שמחנו מאוד להיענות יפה במפגש האחרון ונשמח לראותכם שוב במפגש הקרוב, אנחנו ממליצים להקדים ולהבטיח את מקומכם בהקדם האפשרי, אין אפשרות לשלם במקום.</p> <p>להלן הפרטים של המפגש הבא:לחצו כאן להרשמה: bit.ly/1MG7znb </p> <p>המיקום - מרקספייס עתידים</p> <p> לוח זמנים:</p> <p>17:00 – הגעה, רישום ומינגלינג, קפה ונשנוש</p> <p>17:30 – התכנסות, דברי פתיחה והצגה עצמית של 90 שניות לכל משתתף</p> <p>.18:20 - הפסקה קצרה</p> <p>18:40 – הרצאה בנושא: מה הם אתגרי התיירות שזקוקים לפתרונות טכנולוגיים. המרצה: נועם אשד, מנכ\"ל CTO L.T.D</p> <p>19:15 – מינגלינג וקביעת פגישות</p> <p>19:30 – סיום</p> <p>קהל היעד: יזמים, אפליקציות בתחום, סוכני נסיעות, מתפעלי תיירות, מורי דרך, משווקי תיירות, מנהלי שיווק ומכירות מהתחום, מלונאים, תיירנים, יזמי תיירות, ספקי תיירות, חברות הסעות, אטרקציות ועוד. לתשומת לבכם – מספר המקומות מוגבל והרישום נעשה בהרשמה מראש דרך ההזמנה האינטרנטית בלבד, אין אפשרות לשמור מקום. </p> <p>לחצו כאן להרשמה: bit.ly/1MG7znb </p> <p>צוות המפגש: אלי ווגמן - מורה דרך ויזם תיירות מחכים לראותכם!בברכה, צוות מפגשי נטוורקינג ויין - ההנאה בעסקים</p> ",
        "how_to_find_us": "http://bit.ly/NetworkingTourism",
        "visibility": "public"
    },
    {
        "created": 1481207215000,
        "duration": 9000000,
        "id": "236114208",
        "name": "How to & Highlights from the AWS re:Invent 2016",
        "rsvp_limit": 120,
        "status": "upcoming",
        "time": 1483457400000,
        "updated": 1481207715000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 32,
        "venue": {
            "id": 24672873,
            "name": "RISE / MINDSPACE TEL AVIV",
            "lat": 32.06471252441406,
            "lon": 34.774356842041016,
            "repinned": false,
            "address_1": "54 Ahad Ha'am Street",
            "city": "Tel Aviv",
            "country": "IL",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1427227528000,
            "name": "AWS Cloud Experts",
            "id": 18518652,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "AWS-Cloud-Experts",
            "who": "AWS Experts"
        },
        "link": "https://www.meetup.com/AWS-Cloud-Experts/events/236114208/",
        "description": "<p><img src=\"http://photos4.meetupstatic.com/photos/event/7/7/b/b/600_456690651.jpeg\" /></p> <p><b>Space is limited, must RSVP here</b>: <a href=\"https://www.eventbrite.co.uk/e/how-to-highlights-from-the-aws-reinvent-2016-tickets-30119566434\" class=\"linkified\">https://www.eventbrite.co.uk/e/how-to-highlights-from-the-aws-reinvent-2016-tickets-30119566434</a></p> <p>Did you miss this year's AWS re:Invent? That's okay because we were there taking notes in order to bring the hottest news in cloud computing back home to you. </p> <p>The re:Invent is the biggest AWS event of the year, packed with new products, services, features, updates, customer success stories and a lot of inspiration. In order to get the most out of your AWS environment, we have summarized the most important announcements and tools you need to know. Join us and find out which technologies to look out for in the next year and learn how to get started with the latest AWS services.</p> <p><b>Agenda</b></p> <p><b>17:30- 18:30- Registration, Meet an AllCloud Architect, Pizza & Beer</b></p> <p><b>18:30- 19:30- Highlights & How to from AWS re:Invent 2016 by AllCloud CTO, Lahav Savir</b></p> <p><b>19:30- 20:00- More Networking with AllCloud Architects</b></p> ",
        "how_to_find_us": "Mindspace at Ahad Ha'am 54 in Tel Aviv",
        "visibility": "public"
    },
    {
        "created": 1481449680000,
        "fee": {
            "accepts": "paypal",
            "amount": 14,
            "currency": "USD",
            "description": "per person",
            "label": "price",
            "required": true
        },
        "id": "236170230",
        "name": "!יפן- לא יקר כמו שחשבתם",
        "rsvp_limit": 43,
        "status": "upcoming",
        "time": 1483462800000,
        "updated": 1481449680000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 22,
        "venue": {
            "id": 21632102,
            "name": "Samurai House in Israel",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "2F,Nahalat Binyamin St 52",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1407124248000,
            "name": "Samurai House in Israel",
            "id": 16172912,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "Samurai-House-in-Israel",
            "who": "samurais"
        },
        "link": "https://www.meetup.com/Samurai-House-in-Israel/events/236170230/",
        "description": "<p><img src=\"http://photos2.meetupstatic.com/photos/event/2/1/a/e/600_442148622.jpeg\" /></p> <p>\n\n\n\n\n\n<b>?תמיד חלמתם לנסוע ליפן, וויתרתם כי זה \"יקר מדי \"</b></p> <p><br/>!אז זהו, שלא</p> <p>יפן הינה, בעיני, המדינה המרתקת ביותר בעולם ונראה כי בני האדם מבזבזים הון על בניית חלליות, לגילוי פלנטות רחוקות, כשבסה\"כ הם רק צריכים לרכוש כרטיס טיסה לטוקיו!</p> <p>בהרצאה אציג תכנית מומלצת לטיול ביפן של בין 10 ימים ל-3 שבועות, תוך מתן עצות שימושיות לניצול הזמן בצורה מיטבית, והכל- בעלות שיכולה להתאים לכל מטייל, הן התרמילאי ההרפתקן והן הסולידי. אדבר גם על:<br/>טוקיו, עיר האורות האמיתית של העולם: היכן ללון, היכן לאכול ולבלות, אתרים מומלצים, מקומות שתשפשפו עיניים כשתראו והרבה טיפים שווים.</p> <p>הצעה ל-7 ימים מחוץ לטוקיו, תוך ניצול מקסימלי של ה JR PASS: מסלול אופטימלי ויעדים מומלצים.</p> <p>מתי לנסוע? עונות מומלצות עם האתרים והפסטיבלים המתאימים לכל עונה.</p> <p>כמה, באמת, עולה יום מחיה בטוקיו ומחוצה לה?<br/>מנהגים מיוחדים אליהם יש לשים לב והבדלים תרבותיים.</p> <p>דברים שיש \"רק ביפן\" . (יש המון!)<br/>דרכי הגעה מומלצות ליפן<br/>ועוד.<br/>הנאה מובטחת!<br/>אודות המרצה: עירית דבי, חייתה ביפן, עבדה ב\"סוני\" , נמצאת על הקו ישראל- יפן משנת 2000, תציג בפניכם את יפן כיעד מרתק, ובו בעת גם נגיש וידידותי למטייל.</p> <p><b>כניסה תעלה כ-14$ ויש להזמין כרטיסים לפני האירוע</b></p> <p><b> לו\"ז: </b><br/>19:00-19:05- קבלת פנים<br/>19:05-21:00- הרצאה ונטוורקינג</p> <p><b>Speaker </b><br/>Irit Dabby,founder of Yapanit.com<br/><a><a href=\"http://www.yapanit.com/index.php/HE/</a>\" class=\"linkified\">http://www.yapanit.com/index.php/HE/</a></a>;</p> <p><br/>מדיניות ביטולים:</p> <p>אי הגעה לאירוע ללא הודעה מוקדמת לא תהווה עילה להחזר כספי.</p> ",
        "visibility": "public"
    },
    {
        "created": 1480500999000,
        "duration": 5400000,
        "id": "235926861",
        "name": "Ace your first meeting with a VC by Ran Levitzky, Carmel Ventures",
        "status": "upcoming",
        "time": 1483515000000,
        "updated": 1480500999000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 55,
        "venue": {
            "id": 24562397,
            "name": "LIGHTHOUSE RAANANA",
            "lat": 32.19559860229492,
            "lon": 34.88053512573242,
            "repinned": false,
            "address_1": "החרושת 14-16",
            "city": "Ra'anana",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1463943110000,
            "name": "Lighthouse Community of Entrepreneurs",
            "id": 19982998,
            "join_mode": "open",
            "lat": 32.189998626708984,
            "lon": 34.880001068115234,
            "urlname": "Lighthouse-Community-of-Entrepreneurs",
            "who": "Members"
        },
        "link": "https://www.meetup.com/Lighthouse-Community-of-Entrepreneurs/events/235926861/",
        "description": "<p><img src=\"http://photos2.meetupstatic.com/photos/event/c/c/c/d/600_456472429.jpeg\" /></p> <p>Many startups come to meet with VCs and miss an opportunity coming unprepared. Come and learn how VC works, and how to best present your startup on your first meeting with a VC, what should your presentation include? What should you say? What shouldn’t you say?</p> <p>\n\n\nRan Levitzky is a Principal at Carmel Ventures. He joined Carmel in 2015, bringing with him over a decade of experience in strategy, product management, and R&D in both large corporations and startups across Israel, the UK, and the USA. Before joining Carmel, Ran served as Product Strategy Manager for Amdocs, where he led initiatives in identifying future opportunities across new domains. Prior to Amdocs, Ran served as Senior Product Manager at an image recognition startup. During his MBA studies in London, Ran worked for Google at its London office and before moving to London, he worked at Microsoft’s strategic R&D Center in Herzliya. Ran holds a BA in Computer Science, magna cum laude, from the Interdisciplinary Center in Herzliya and an MBA from London Business School.</p> ",
        "visibility": "public"
    },
    {
        "created": 1478679811000,
        "duration": 7200000,
        "id": "235458380",
        "name": "Hitting the Wall- How to clear financial hurdles in the race for startup success",
        "status": "upcoming",
        "time": 1483516800000,
        "updated": 1478679811000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 62,
        "venue": {
            "id": 23812675,
            "name": "Google Campus TLV",
            "lat": 0,
            "lon": 0,
            "repinned": false,
            "address_1": "Yigal Alon 98, Electra Tower,34 Floor, Events Zone Space",
            "city": "Tel Aviv-Yafo",
            "country": "il",
            "localized_country_name": "Israel"
        },
        "group": {
            "created": 1334741880000,
            "name": "SpeedMind - Funding Innovation and beyond",
            "id": 3692852,
            "join_mode": "open",
            "lat": 32.06999969482422,
            "lon": 34.77000045776367,
            "urlname": "SpeedMind-Funding-Innovation-and-beyond",
            "who": "SpeedMinders"
        },
        "link": "https://www.meetup.com/SpeedMind-Funding-Innovation-and-beyond/events/235458380/",
        "description": "<p>Hitting the wall is a term used in endurance sports that means running out of energy. Careful planning before and monitoring during a race is key to avoiding this.</p> <p>Startups have a lot in common with endurance sports, including the need to strategize, monitor and thus avoid “hitting the wall”.</p> <p>So, how do we clear these hurdles along the way to startup success? How do we manage not to hit the financial wall and run out of cash?</p> <p>\n\n\nOded Zaltsman, <a href=\"http://sagentmanagement.com/SagentWP/\">Sagent</a> Israel CEO and an endurance sports enthusiast, will share his experience as CFO of an Israeli-US company and provide valuable insights, case studies and tools demonstrating how to maximize your prospects for success and avoid hitting the wall.</p> <p><b>Topics will include:</b></p> <p><b>·  Financial planning and fundraising </b></p> <p><b>·  Cash management</b></p> <p><b>·  Hedging your funds</b></p> <p><b>·  Expansion strategy</b></p> <p><b>·  and more</b></p> <p><b><a href=\"http://sagentmanagement.com/SagentWP/\">Sagent </a></b>is a leading US-Israeli financial management and tax services firm. We provide tech companies of all development stages a unique, yet essential service - often lacking within firms - of high-level financial management, combined with strategic advisory. </p> <p><a href=\"http://sagentmanagement.com/SagentWP/\">Sagent </a>proven, hands-on expertise will -</p> <p>·  enhance financial management,</p> <p>·  form a solid financial-operational infrastructure that will enable efficient scaling into the next business stage,</p> <p>·  optimize resources, allowing for longer runtime, and</p> <p>·  boost fundraising prospects and set the stage for long term success </p> <p><b>Please note, the session will be held in Hebrew</b></p> <p><br/>For more information about this upcoming event, please contact Bella Miller at: </p> <p>[masked] ,[masked]</p> <p><b>The event is free, but pre-registration is required. </b></p> ",
        "visibility": "public"
    }
]

// *** EMAIL REST API ***

// LIST
app.get('/email', (req, res) => {
  res.json(emails);
})

// DELETE
app.delete('/email/:id', (req, res) => {
  const id = +req.params.id;
  emails = emails.filter(email => email.id !== id);
  res.json({ msg: 'Deleted' });
})

// CREATE
app.post('/email', (req, res) => {
  const email = req.body;
  email.id = findNextEmailId();
  emails.push(email);
  res.json({ msg: 'email was added!' });
  res.end();
})

// UPDATE
app.put('/email', (req, res) => {
  const email =  req.body; 
  emails.forEach(currEmail => {
  if(currEmail.id === email.id) currEmail.isRead = true});
  res.json({msg: 'Email was updated!'});
})

function findNextEmailId() {
  var maxId = 0;
  emails.forEach(email => {
    if (email.id > maxId) maxId = email.id;
  });
  return maxId + 1;
}

// *** EVENTS REST API ***

// LIST
app.get('/events', (req, res) => {
  res.json(events)
})

// READ
app.get('/events/:id', (req, res) => {
  const id = +req.params.id;
  const event = events.find(currEvent => currEvent.id === id);
  res.json(event)
})

// DELETE
app.delete('/events/:id', (req, res) => {
  const id = +req.params.id;
  events = events.filter(currEvent => currEvent.id !== id);
})

// CREATE
app.post('/events', (req, res) => {
  const event = req.body;
  event.id = findNextEventId();
  events.push(event);
  res.end('Event was added!');
})

// UPDATE
app.put('/events', (req, res) => {
  const event =  req.body; 
  events = events.map(currEvent => (currEvent.id === event.id)? event: currEvent);
  res.json({msg: 'Item was updated!'});
})

app.listen(3003, () => {
  console.log('REST API listening on port 3003!')
})

function findNextEventId() {
  var maxId = 0;
  events.forEach(event => {
    if (events.id > maxId) maxId = events.id;
  });
  return maxId + 1;
}




