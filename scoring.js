export const CATS = {
    urgency: ["Urgency & pressure", "#d99a00"],
    cred: ["Credential theft", "#e5484d"],
    pretext: ["Fake pretext", "#e07b39"],
    money: ["Money request", "#d6409f"],
    threat: ["Threats", "#a63fb5"],
    bait: ["Too good to be true", "#3b82c4"],
    secret: ["Secrecy & off-platform", "#7c5cf0"],
    link: ["Suspicious link", "#d9480f"],
    sender: ["Sender", "#0d9488"],
    brand: ["Trusted-name claim", "#7a7467"],
    pii: ["Personal info request", "#d946ef"],
    file: ["Suspicious attachment", "#ef4444"],
    homoglyph: ["Look-alike characters", "#f97316"]
};

export const BR = /\b(sbi|hdfc|icici|axis bank|kotak|paytm|phonepe|google pay|amazon|flipkart|netflix|income tax|irs|aadhaar|uidai|trai|rbi|fedex|dhl|india post|bluedart|paypal|microsoft|apple|customs|police|cbi|customer care)\b/i;

export const R = [
    // English rules
    ["cred", .6, /(?<!never\s+|do not\s+|don't\s+|dont\s+)(share|send|enter|provide|confirm|verify|tell|give|reply with|submit)\b[^.\n]{0,40}\b(otp|cvv|pin|password|passcode|card number|aadhaar|pan|seed phrase|recovery phrase|upi pin)\b/,"Asks for a secret code or credential","No real bank, company or government body ever asks you to share an OTP, PIN or password."],
    ["pii", .5, /\b(aadhaar|pan card|pan number|card number|cvv|expiry date|date of birth|mother'?s maiden name)\b/,"Asks for personal or financial details","Real organisations never ask for these via text or email."],
    ["file", .6, /\b(\.exe|\.apk|\.scr|\.bat|\.cmd|\.zip|\.rar|\.7z|\.iso|\.dmg|\.pkg|\.vbs|\.js)\b/i,"Suspicious attachment or file","Executable or compressed files are a common way to deliver malware."],
    ["urgency", .3, /\b(urgent(ly)?|immediately|right away|within \d+ ?(hours?|hrs?|minutes?|mins?)|expires? (today|soon|in)|last (chance|warning)|act now|final notice|today only|hurry|asap|limited time)\b/,"Manufactured urgency","Scammers rush you so you act before you think."],
    ["threat", .42, /\b(account (will be |has been |is )?(suspended|blocked|closed|locked|deactivated|frozen)|(legal|police) action|arrest(ed)?|warrant|court (case|notice)|sim (will be )?(blocked|deactivated)|disconnect(ed|ion)|penalty)\b/,"Threat of loss or punishment","Fear is the oldest scam lever. Genuine notices don't threaten you by text."],
    ["pretext", .35, /\b(kyc|verify your (account|identity|details)|update your (kyc|pan|details|account|information)|confirm your (account|identity)|re-?activate|unusual (activity|sign[- ]?in)|suspicious (activity|login))\b/,"Account-verification pretext","“Verify now” messages are the classic phishing opener."],
    ["bait", .45, /\b(you(['’]ve| have| are) (won|been selected|been chosen)|congratulations|lottery|lucky (draw|winner)|prize|jackpot|cashback of|claim your (reward|prize|gift|refund)|free (gift|iphone|recharge)|refund (is )?(pending|waiting))\b/,"Unexpected reward","You can't win a contest you never entered."],
    ["money", .5, /\b(gift ?cards?|itunes|google play card|bitcoin|btc|usdt|crypto(currency)?|wire transfer|western union|moneygram|upi (collect|request)|scan (the )?qr|processing fee|registration fee|security deposit|advance (fee|payment)|customs (fee|duty|charges?)|pay (a )?(small )?fee)\b/,"Asks for an unusual payment","Upfront fees, gift cards, crypto and QR “receive money” tricks are how scammers cash out."],
    ["bait", .42, /\b(work from home|earn (up to )?(₹|rs\.?|inr|\$)? ?\d[\d,]*\s?(per|a|\/) ?(day|hour|week)|no experience (needed|required)|data entry job|task(s)? (to|and) earn|like (and|&) (subscribe|review))\b/,"Too-good-to-be-true job","Easy money for no skill is a recruitment-scam signature."],
    ["bait", .45, /\b(guaranteed (income|returns?|profit)|double your (money|investment)|\d{2,3}% (returns?|profit) (daily|weekly|monthly)|risk[- ]free|insider tip|trading group)\b/,"Guaranteed-return investment","No legitimate investment guarantees profit."],
    ["secret", .3, /\b(keep this (secret|between us|to yourself)|don't tell (anyone|your bank|family|the police)|do not tell (anyone|your bank)|this is confidential|between you and me)\b/,"Asks for secrecy","Scammers isolate you so no one can warn you."],
    ["secret", .15, /\b(contact|message|text|whatsapp|telegram|call)\b[^.\n]{0,30}\+?\d[\d\s-]{9,}/,"Pushes you to an off-platform number","Moving you to a private chat removes the platform's protections."],
    ["brand", .12, BR,"Names a trusted brand or authority","Not a red flag alone — but impersonation needs a trusted name. Check whether it fits the rest of the message."],
    ["pretext", .15, /\bdear (customer|user|sir|madam|account holder|valued (customer|member))\b/,"Generic greeting","Real providers usually know your name."],
    ["homoglyph", .4, /[а-яА-Я]/,"Look-alike characters (homoglyphs)","Foreign characters can be used to fake a legitimate domain or name."],

    // --- HINDI / HINGLISH RULES ---
    ["cred", .6, /(otp|ओटीपी)\s*(bhej|bhejo|share|भेज|बताओ|दो|भेजो|करें)/i, "OTP मांगा जा रहा है (Asks for OTP)", "कोई भी असली बैंक या कंपनी कभी OTP नहीं मांगती।"],
    ["cred", .6, /(pin|पिन|password|पासवर्ड|cvv)\s*(bhej|bhejo|share|भेज|बताओ|दो|डालो)/i, "PIN/पासवर्ड मांगा जा रहा है (Asks for PIN/password)", "अपना PIN या पासवर्ड कभी किसी से साझा न करें।"],
    ["urgency", .3, /(turant|तुरंत|jaldi|जल्दी|abhi|अभी|aaj hi|आज ही|last chance|आखिरी मौका)/i, "तुरंत कार्रवाई का दबाव (Urgency in Hindi/Hinglish)", "जल्दबाजी में फैसला न लें।"],
    ["threat", .42, /(account\s*(block|band|बंद|ब्लॉक)|block\s*ho\s*jayega|खाता\s*(बंद|ब्लॉक)|sim\s*(block|band)|legal action|कानूनी कार्रवाई|police|पुलिस|giraftar|गिरफ्तार)/i, "खाता बंद होने या कानूनी कार्रवाई की धमकी (Threat in Hindi)", "असली सूचनाएं SMS से धमकी नहीं देतीं।"],
    ["pretext", .35, /(kyc|केवाईसी|केवायसी)\s*(update|karein|करें|update karo|अपडेट)/i, "KYC अपडेट का बहाना (KYC pretext)", "KYC हमेशा बैंक की आधिकारिक ऐप या शाखा से करें।"],
    ["pretext", .35, /(verify|वेरिफाई|सत्यापित)\s*(karein|karo|करें|your account|अपना खाता)/i, "खाता सत्यापित करने का बहाना (Verify pretext)", "लिंक पर क्लिक करके खाता सत्यापित न करें।"],
    ["money", .5, /(paise|पैसे|paisa|रुपये|₹)\s*(bhej|bhejo|transfer|भेज|ट्रांसफर|jama|जमा)/i, "पैसे भेजने का अनुरोध (Money request in Hindi)", "अनजान को पैसे न भेजें।"],
    ["money", .5, /(upi|यूपीआई)\s*(se|से)\s*(bhej|bhejo|transfer|भेज|ट्रांसफर)/i, "UPI से पैसे भेजने का अनुरोध (UPI request)", "UPI से अनजान को पैसे न भेजें।"],
    ["money", .5, /(processing fee|प्रोसेसिंग फीस|registration fee|रजिस्ट्रेशन फीस|security deposit|सिक्योरिटी डिपॉजिट|advance|एडवांस)/i, "प्रोसेसिंग/रजिस्ट्रेशन फीस (Upfront fee)", "असली नौकरी या इनाम के लिए पहले पैसे नहीं देने होते।"],
    ["secret", .3, /(kisi ko mat batao|किसी को मत बताओ|kisi ko na batao|किसी को न बताओ|secret rakho|सीक्रेट रखो|gupt rakho|गुप्त रखो)/i, "गोपनीयता बनाए रखने का अनुरोध (Asks for secrecy in Hindi)", "धोखेबाज़ आपको अलग-थलग करते हैं ताकि कोई चेतावनी न दे सके।"],
    ["bait", .45, /(inaam|इनाम|jeeta|जीता|lottery|लॉटरी|winner|विजेता|free|मुफ्त|gift|गिफ्ट|cashback|कैशबैक)/i, "इनाम या मुफ्त उपहार का लालच (Reward bait in Hindi)", "जो लॉटरी आपने नहीं खेली, वो आपने नहीं जीती।"],
    ["bait", .42, /(ghar baithe|घर बैठे|work from home|kamai|कमाई|earn|कमाओ|no experience|बिना अनुभव|data entry|डेटा एंट्री)/i, "घर बैठे कमाई का लालच (Job bait in Hindi)", "आसान पैसे का लालच एक आम घोटाला है।"],
    ["bait", .45, /(guaranteed return|गारंटीड रिटर्न|double paisa|डबल पैसा|profit|मुनाफा|trading group|ट्रेडिंग ग्रुप)/i, "गारंटीड निवेश का लालच (Investment bait in Hindi)", "कोई भी असली निवेश मुनाफे की गारंटी नहीं देता।"],
    ["threat", .5, /(digital arrest|डिजिटल अरेस्ट|cbi|सीबीआई|police|पुलिस)\s*(call|कॉल|video|वीडियो)/i, "डिजिटल अरेस्ट की धमकी (Digital arrest threat)", "कोई भी एजेंसी वीडियो कॉल पर गिरफ्तार नहीं करती।"]
];

const BRANDS={sbi:["sbi.co.in","onlinesbi.sbi","sbi.bank.in"],hdfc:["hdfcbank.com","hdfc.com"],icici:["icicibank.com"],axis:["axisbank.com"],kotak:["kotak.com"],paytm:["paytm.com"],phonepe:["phonepe.com"],amazon:["amazon.in","amazon.com"],flipkart:["flipkart.com"],netflix:["netflix.com"],paypal:["paypal.com"],microsoft:["microsoft.com"],apple:["apple.com"],google:["google.com"],facebook:["facebook.com"],instagram:["instagram.com"],whatsapp:["whatsapp.com","wa.me"],fedex:["fedex.com"],dhl:["dhl.com"],indiapost:["indiapost.gov.in"],incometax:["incometax.gov.in"],uidai:["uidai.gov.in"]};
const SHORT=/^(bit\.ly|tinyurl\.com|t\.co|goo\.gl|cutt\.ly|rb\.gy|is\.gd|shorturl\.at|ow\.ly|tiny\.cc)$/;
const SUS=/\.(xyz|top|click|icu|buzz|vip|link|live|site|online|cc|zip|mov|tk|ml|ga|cf|gq|rest|monster|work|support)$/;
const FREE=/^(gmail|yahoo|outlook|hotmail|rediffmail|proton)\./;
export const URLRE=/(?:https?:\/\/|www\.)[^\s<>"'‘’“”)]+|\b(?:bit\.ly|tinyurl\.com|t\.co|goo\.gl|cutt\.ly|rb\.gy|is\.gd|shorturl\.at|wa\.me)\/[^\s]+|\b[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:xyz|top|click|icu|buzz|vip|link|live|site|online|cc|zip|mov|tk|ml|ga|cf|gq|rest|monster)\b[^\s]*/gi;

export function hostBrand(h){const seg=h.split(/[.\-]/);for(const k in BRANDS){if(seg.some(s=>s===k||(s.startsWith(k)&&s.length<=k.length+8))&&!BRANDS[k].some(o=>h===o||h.endsWith("."+o)))return k}return null}

export function urlSignals(raw){
    const S=[];let u;
    try{u=new URL(/^https?:\/\//i.test(raw)?raw:"https://"+raw)}
    catch(e){return{host:raw,S:[["link",.05,"Malformed or incomplete URL","The link can't be parsed. It might be a typo or a broken link, which is a minor red flag."]]}}
    const h=u.hostname.toLowerCase(),add=(w,t,y)=>S.push(["link",w,t,y]);
    if(/^\d{1,3}(\.\d{1,3}){3}$/.test(h))add(.6,"Link points to a raw IP address","Legitimate services use domain names, not numbers.");
    if(SHORT.test(h))add(.35,"Shortened link hides the destination","You can't see where it really leads.");
    if(h.includes("xn--"))add(.5,"Look-alike (punycode) domain","Foreign characters can imitate real brand names.");
    if(u.username)add(.5,"Credentials-in-URL trick","Text before the @ is a decoy; the real site comes after it.");
    if(/^http:\/\//i.test(raw))add(.2,"Not using HTTPS","Sensitive pages should always be encrypted.");
    if(SUS.test(h))add(.35,"Risky domain ending","Cheap endings like .xyz or .top are heavily used for throwaway scam sites.");
    if(h.split(".").length>=5)add(.25,"Excessive subdomains","Long chains of subdomains disguise the real domain.");
    if((h.match(/-/g)||[]).length>=3)add(.25,"Hyphen-stuffed domain","Scam domains often chain words with hyphens.");
    const b=hostBrand(h);if(b)add(.65,`Imitates “${b}”`,`This domain is not an official ${b} address, yet uses its name.`);
    if(/(login|signin|verify|secure|update|kyc|wallet|claim|bonus|reward|refund|confirm)/.test(h))add(.25,"Urgent keywords in the domain","Words like “verify” or “secure” in a domain are a phishing habit.");
    else if(/(login|signin|verify|kyc|claim|refund|otp)/.test(u.pathname.toLowerCase()))add(.1,"Login or claim page in the path","Check that the site itself is the official one.");
    if(raw.length>110)add(.1,"Unusually long link","Long links hide tracking and redirect tricks.");
    return{host:h,S}
}

const nor=a=>1-a.reduce((p,w)=>p*(1-w),1);

export function analyze(text,sender){
    const F=[],M=[],L=[];
    R.forEach(([cat,w,re,title,why])=>{
        const g=new RegExp(re.source,"gi");let m,n=0,first;
        while((m=g.exec(text))){n++;first=first||m[0];M.push({s:m.index,e:m.index+m[0].length,cat,title});if(!m[0].length)g.lastIndex++}
        if(n)F.push({cat, baseW:w, title,why,ev:first})
    });
    const lt=text.replace(/[^A-Za-z]/g,"");if(lt.length>=25&&lt.replace(/[^A-Z]/g,"").length/lt.length>.5)F.push({cat:"urgency",baseW:.15,title:"Shouting in capitals",why:"ALL CAPS is used to create panic.",ev:"mostly capital letters"});
    if((text.match(/!/g)||[]).length>=3)F.push({cat:"urgency",baseW:.1,title:"Excessive exclamation marks",why:"Hype and alarm punctuation is common in scam copy.",ev:"!!!"});
    [...new Set((text.match(URLRE)||[]).map(u=>u.replace(/[.,;:!?]+$/,"")))].slice(0,8).forEach(u=>{
        const{host,S}=urlSignals(u);const i=text.indexOf(u);if(i>=0)M.push({s:i,e:i+u.length,cat:"link",title:"Link"});
        const otherSignals = F.filter(f => f.cat !== 'link').length > 0;
        S.forEach(([cat,w,title,why])=>{
            if ((title.includes("HTTPS") || title.includes("Shortened")) && !otherSignals) return;
            F.push({cat,baseW:w,title,why,ev:host});
        });
        L.push({u,host,score:Math.round(nor(S.map(x=>x[1]))*100)})
    });
    if(sender){
        const s=sender.trim().toLowerCase(),em=s.match(/@([a-z0-9.-]+\.[a-z]{2,})/),h=em?em[1]:(/^[a-z0-9.-]+\.[a-z]{2,}$/.test(s)?s:null);
        if(!h&&/^\+?[\d\s-]{10,}$/.test(s)&&BR.test(text))F.push({cat:"sender",baseW:.25,title:"Brand message from a mobile number",why:"Banks and couriers send alerts from registered sender IDs, not personal numbers.",ev:sender});
        if(h){
            const b=hostBrand(h);
            if(b)F.push({cat:"sender",baseW:.6,title:`Sender imitates “${b}”`,why:"The sender's domain is not official for that brand.",ev:h});
            else if(SUS.test(h))F.push({cat:"sender",baseW:.3,title:"Sender uses a risky domain",why:"Throwaway domain endings are common in phishing.",ev:h});
            else if(FREE.test(h)&&BR.test(text))F.push({cat:"sender",baseW:.35,title:"Brand message from a free mailbox",why:"Companies write from their own domain, not Gmail or Yahoo.",ev:h})
        }
    }

    const CAT_MAX = { urgency: 25, links: 25, financial: 20, secrecy: 15, otp: 15, threat: 15, pretext: 10, bait: 15, sender: 20, brand: 5, cred: 15, secret: 10, money: 15, pii: 15, file: 15, homoglyph: 10 };
    const SPEC_MAP = { urgency:"urgency", link:"links", financial:"financial", money:"financial", cred:"otp", otp:"otp", secret:"secrecy", threat:"urgency", pretext:"urgency", bait:"financial", sender:"sender", brand:"brand", pii:"otp", file:"financial", homoglyph:"urgency" };
    
    let finalScore = 0;
    let catTotals = { urgency:0, links:0, financial:0, secrecy:0, otp:0 };
    let seenInCat = { urgency:new Set(), links:new Set(), financial:new Set(), secrecy:new Set(), otp:new Set() };

    let findingsOutput = [];

    F.forEach(f => {
        const specCat = SPEC_MAP[f.cat] || 'urgency';
        const cap = CAT_MAX[specCat] || 20;
        let points = Math.round(f.baseW * 100);

        if (seenInCat[specCat].has(f.title)) return;
        seenInCat[specCat].add(f.title);

        if (catTotals[specCat] + points > cap) {
            points = cap - catTotals[specCat];
        }
        if (points <= 0) return;

        catTotals[specCat] += points;
        findingsOutput.push({ ...f, pointsAwarded: points, specCategory: specCat });
    });

    finalScore = Object.values(catTotals).reduce((a,b) => a+b, 0);
    
    let label = "Low"; let color = "var(--grn)";
    if (finalScore >= 60) { label = "High"; color = "var(--red)"; }
    else if (finalScore >= 30) { label = "Medium"; color = "var(--amb)"; }

    F.sort((a,b)=>b.baseW-a.baseW);

    return { 
        F: findingsOutput,
        M, 
        L, 
        score: finalScore,
        label: label,
        color: color,
        breakdown: catTotals
    };
}

export const LV = [[30,"Low","var(--grn)","Low risk"], [60,"Medium","var(--amb)","Medium risk"], [101,"High","var(--red)","High risk"]];