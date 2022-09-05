const htmlTemplate = `<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<title>[Review Type]</title>

<style id="dynCom" type="text/css"><!-- --></style>
<script language="JavaScript"><!--
function msoCommentShow(anchor_id, com_id)
{
	if(msoBrowserCheck()) 
		{
		c = document.all(com_id);
		a = document.all(anchor_id);
		if (null != c && null == c.length && null != a && null == a.length)
			{
			var cw = c.offsetWidth;
			var ch = c.offsetHeight;
			var aw = a.offsetWidth;
			var ah = a.offsetHeight;
			var x  = a.offsetLeft;
			var y  = a.offsetTop;
			var el = a;
			while (el.tagName != "BODY") 
				{
				el = el.offsetParent;
				x = x + el.offsetLeft;
				y = y + el.offsetTop;
				}
			var bw = document.body.clientWidth;
			var bh = document.body.clientHeight;
			var bsl = document.body.scrollLeft;
			var bst = document.body.scrollTop;
			if (x + cw + ah / 2 > bw + bsl && x + aw - ah / 2 - cw >= bsl ) 
				{ c.style.left = x + aw - ah / 2 - cw; }
			else 
				{ c.style.left = x + ah / 2; }
			if (y + ch + ah / 2 > bh + bst && y + ah / 2 - ch >= bst ) 
				{ c.style.top = y + ah / 2 - ch; }
			else 
				{ c.style.top = y + ah / 2; }
			c.style.visibility = "visible";
}	}	}
function msoCommentHide(com_id) 
{
	if(msoBrowserCheck())
		{
		c = document.all(com_id);
		if (null != c && null == c.length)
		{
		c.style.visibility = "hidden";
		c.style.left = -1000;
		c.style.top = -1000;
		} } 
}
function msoBrowserCheck()
{
	ms = navigator.appVersion.indexOf("MSIE");
	vers = navigator.appVersion.substring(ms + 5, ms + 6);
	ie4 = (ms > 0) && (parseInt(vers) >= 4);
	return ie4;
}
if (msoBrowserCheck())
{
	document.styleSheets.dynCom.addRule(".msocomanchor","background: infobackground");
	document.styleSheets.dynCom.addRule(".msocomoff","display: none");
	document.styleSheets.dynCom.addRule(".msocomtxt","visibility: hidden");
	document.styleSheets.dynCom.addRule(".msocomtxt","position: absolute");
	document.styleSheets.dynCom.addRule(".msocomtxt","top: -1000");
	document.styleSheets.dynCom.addRule(".msocomtxt","left: -1000");
	document.styleSheets.dynCom.addRule(".msocomtxt","width: 33%");
	document.styleSheets.dynCom.addRule(".msocomtxt","background: infobackground");
	document.styleSheets.dynCom.addRule(".msocomtxt","color: infotext");
	document.styleSheets.dynCom.addRule(".msocomtxt","border-top: 1pt solid threedlightshadow");
	document.styleSheets.dynCom.addRule(".msocomtxt","border-right: 2pt solid threedshadow");
	document.styleSheets.dynCom.addRule(".msocomtxt","border-bottom: 2pt solid threedshadow");
	document.styleSheets.dynCom.addRule(".msocomtxt","border-left: 1pt solid threedlightshadow");
	document.styleSheets.dynCom.addRule(".msocomtxt","padding: 3pt 3pt 3pt 3pt");
	document.styleSheets.dynCom.addRule(".msocomtxt","z-index: 100");
}
// --></script>
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:Helvetica;
	panose-1:2 11 6 4 2 2 2 2 2 4;}
@font-face
	{font-family:Courier;
	panose-1:2 7 4 9 2 2 5 2 4 4;}
@font-face
	{font-family:"Tms Rmn";
	panose-1:2 2 6 3 4 5 5 2 3 4;}
@font-face
	{font-family:Helv;
	panose-1:2 11 6 4 2 2 2 3 2 4;}
@font-face
	{font-family:"New York";
	panose-1:2 4 5 3 6 5 6 2 3 4;}
@font-face
	{font-family:System;
	panose-1:0 0 0 0 0 0 0 0 0 0;}
@font-face
	{font-family:Wingdings;
	panose-1:5 0 0 0 0 0 0 0 0 0;}
@font-face
	{font-family:"MS Mincho";
	panose-1:2 2 6 9 4 2 5 8 3 4;}
@font-face
	{font-family:Batang;
	panose-1:2 3 6 0 0 1 1 1 1 1;}
@font-face
	{font-family:SimSun;
	panose-1:2 1 6 0 3 1 1 1 1 1;}
@font-face
	{font-family:PMingLiU;
	panose-1:2 2 5 0 0 0 0 0 0 0;}
@font-face
	{font-family:"MS Gothic";
	panose-1:2 11 6 9 7 2 5 8 2 4;}
@font-face
	{font-family:Dotum;
	panose-1:2 11 6 0 0 1 1 1 1 1;}
@font-face
	{font-family:SimHei;
	panose-1:2 1 6 0 3 1 1 1 1 1;}
@font-face
	{font-family:MingLiU;
	panose-1:2 2 5 9 0 0 0 0 0 0;}
@font-face
	{font-family:Mincho;
	panose-1:2 2 6 9 4 3 5 8 3 5;}
@font-face
	{font-family:Gulim;
	panose-1:2 11 6 0 0 1 1 1 1 1;}
@font-face
	{font-family:Century;
	panose-1:2 4 6 4 5 5 5 2 3 4;}
@font-face
	{font-family:"Angsana New";
	panose-1:2 2 6 3 5 4 5 2 3 4;}
@font-face
	{font-family:"Cordia New";
	panose-1:2 11 3 4 2 2 2 2 2 4;}
@font-face
	{font-family:Mangal;
	panose-1:2 4 5 3 5 2 3 3 2 2;}
@font-face
	{font-family:Latha;
	panose-1:2 0 4 0 0 0 0 0 0 0;}
@font-face
	{font-family:Sylfaen;
	panose-1:1 10 5 2 5 3 6 3 3 3;}
@font-face
	{font-family:Vrinda;
	panose-1:0 0 4 0 0 0 0 0 0 0;}
@font-face
	{font-family:Raavi;
	panose-1:2 0 5 0 0 0 0 0 0 0;}
@font-face
	{font-family:Shruti;
	panose-1:2 0 5 0 0 0 0 0 0 0;}
@font-face
	{font-family:Sendnya;
	panose-1:0 0 4 0 0 0 0 0 0 0;}
@font-face
	{font-family:Gautami;
	panose-1:2 0 5 0 0 0 0 0 0 0;}
@font-face
	{font-family:Tunga;
	panose-1:0 0 4 0 0 0 0 0 0 0;}
@font-face
	{font-family:"Estrangelo Edessa";
	panose-1:0 0 0 0 0 0 0 0 0 0;}
@font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:"Yu Gothic";
	panose-1:2 11 4 0 0 0 0 0 0 0;}
@font-face
	{font-family:DengXian;
	panose-1:2 1 6 0 3 1 1 1 1 1;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;}
@font-face
	{font-family:"Calibri Light";
	panose-1:2 15 3 2 2 2 4 3 2 4;}
@font-face
	{font-family:"Palatino Linotype";
	panose-1:2 4 5 2 5 5 5 3 3 4;}
@font-face
	{font-family:Verdana;
	panose-1:2 11 6 4 3 5 4 4 2 4;}
@font-face
	{font-family:"Arial Unicode MS";
	panose-1:2 11 6 4 2 2 2 2 2 4;}
@font-face
	{font-family:"DengXian Light";
	panose-1:2 1 6 0 3 1 1 1 1 1;}
@font-face
	{font-family:"Segoe UI Emoji";
	panose-1:2 11 5 2 4 2 4 2 2 3;}
@font-face
	{font-family:Barlow;}
@font-face
	{font-family:"Wingdings 3";
	panose-1:5 4 1 2 1 8 7 7 7 7;}
@font-face
	{font-family:"Yu Gothic Light";
	panose-1:2 11 3 0 0 0 0 0 0 0;}
@font-face
	{font-family:Hack;}
@font-face
	{font-family:"Yu Mincho";}
@font-face
	{font-family:"Times New Roman \(Body CS\)";}
@font-face
	{font-family:"Segoe UI";
	panose-1:2 11 5 2 4 2 4 2 2 3;}
@font-face
	{font-family:"Encode Sans Semi Expanded";}
@font-face
	{font-family:"Segoe UI Symbol";
	panose-1:2 11 5 2 4 2 4 2 2 3;}
@font-face
	{font-family:"\@Yu Gothic Light";}
@font-face
	{font-family:"\@Yu Mincho";}
@font-face
	{font-family:"\@MS Mincho";
	panose-1:2 2 6 9 4 2 5 8 3 4;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
h1
	{mso-style-link:"Heading 1 Char";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:12.0pt;
	margin-left:35.45pt;
	text-indent:-35.45pt;
	line-height:110%;
	page-break-before:always;
	page-break-after:avoid;
	font-size:18.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
h2
	{mso-style-link:"Heading 2 Char";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:42.55pt;
	text-indent:-42.55pt;
	line-height:110%;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
h3
	{mso-style-link:"Heading 3 Char";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:12.0pt;
	margin-left:42.55pt;
	text-indent:-42.55pt;
	line-height:110%;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
h4
	{mso-style-link:"Heading 4 Char";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:42.55pt;
	text-indent:-42.55pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
h5
	{mso-style-link:"Heading 5 Char";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:42.55pt;
	text-indent:-42.55pt;
	line-height:110%;
	page-break-after:avoid;
	font-size:11.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
h6
	{mso-style-link:"Heading 6 Char";
	margin-top:2.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:42.55pt;
	text-indent:-42.55pt;
	line-height:110%;
	page-break-after:avoid;
	font-size:11.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#004CB9;
	font-weight:normal;}
p.MsoHeading7, li.MsoHeading7, div.MsoHeading7
	{mso-style-link:"Heading 7 Char";
	margin-top:2.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	line-height:110%;
	page-break-after:avoid;
	font-size:11.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#004CB9;
	font-style:italic;}
p.MsoHeading8, li.MsoHeading8, div.MsoHeading8
	{mso-style-link:"Heading 8 Char";
	margin-top:10.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:39.7pt;
	text-align:justify;
	text-indent:-39.7pt;
	line-height:107%;
	page-break-after:avoid;
	font-size:10.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#404040;}
p.MsoHeading9, li.MsoHeading9, div.MsoHeading9
	{mso-style-link:"Heading 9 Char";
	margin-top:10.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:39.7pt;
	text-align:justify;
	text-indent:-39.7pt;
	line-height:107%;
	page-break-after:avoid;
	font-size:10.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#404040;
	font-style:italic;}
p.MsoToc1, li.MsoToc1, div.MsoToc1
	{margin-top:3.0pt;
	margin-right:0in;
	margin-bottom:3.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoToc2, li.MsoToc2, div.MsoToc2
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:42.55pt;
	text-indent:-22.1pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoToc3, li.MsoToc3, div.MsoToc3
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:22.1pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoFootnoteText, li.MsoFootnoteText, div.MsoFootnoteText
	{mso-style-link:"Footnote Text Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	font-size:8.0pt;
	font-family:"Calibri",sans-serif;}
p.MsoCommentText, li.MsoCommentText, div.MsoCommentText
	{mso-style-link:"Comment Text Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoHeader, li.MsoHeader, div.MsoHeader
	{mso-style-link:"Header Char";
	margin:0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoFooter, li.MsoFooter, div.MsoFooter
	{mso-style-link:"Footer Char";
	margin:0in;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoCaption, li.MsoCaption, div.MsoCaption
	{margin-top:6.0pt;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	text-align:center;
	font-size:9.0pt;
	font-family:"Calibri",sans-serif;
	color:#040477;
	font-style:italic;}
p.MsoTof, li.MsoTof, div.MsoTof
	{margin:0in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
span.MsoFootnoteReference
	{vertical-align:super;}
span.MsoEndnoteReference
	{vertical-align:super;}
p.MsoEndnoteText, li.MsoEndnoteText, div.MsoEndnoteText
	{mso-style-link:"Endnote Text Char";
	margin:0in;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListBullet, li.MsoListBullet, div.MsoListBullet
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:35.45pt;
	text-indent:-35.45pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListBulletCxSpFirst, li.MsoListBulletCxSpFirst, div.MsoListBulletCxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:35.45pt;
	text-indent:-35.45pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListBulletCxSpMiddle, li.MsoListBulletCxSpMiddle, div.MsoListBulletCxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:35.45pt;
	text-indent:-35.45pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListBulletCxSpLast, li.MsoListBulletCxSpLast, div.MsoListBulletCxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:35.45pt;
	text-indent:-35.45pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoList2, li.MsoList2, div.MsoList2
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:28.3pt;
	text-indent:-14.15pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoList2CxSpFirst, li.MsoList2CxSpFirst, div.MsoList2CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:28.3pt;
	text-indent:-14.15pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoList2CxSpMiddle, li.MsoList2CxSpMiddle, div.MsoList2CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:28.3pt;
	text-indent:-14.15pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoList2CxSpLast, li.MsoList2CxSpLast, div.MsoList2CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:28.3pt;
	text-indent:-14.15pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoTitle, li.MsoTitle, div.MsoTitle
	{mso-style-name:"Title\,CCX Cover Page Title";
	mso-style-link:"Title Char\,CCX Cover Page Title Char";
	margin:0in;
	font-size:36.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#75AEFF;
	letter-spacing:-.5pt;
	font-weight:bold;}
p.MsoTitleCxSpFirst, li.MsoTitleCxSpFirst, div.MsoTitleCxSpFirst
	{mso-style-name:"Title\,CCX Cover Page TitleCxSpFirst";
	mso-style-link:"Title Char\,CCX Cover Page Title Char";
	margin:0in;
	font-size:36.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#75AEFF;
	letter-spacing:-.5pt;
	font-weight:bold;}
p.MsoTitleCxSpMiddle, li.MsoTitleCxSpMiddle, div.MsoTitleCxSpMiddle
	{mso-style-name:"Title\,CCX Cover Page TitleCxSpMiddle";
	mso-style-link:"Title Char\,CCX Cover Page Title Char";
	margin:0in;
	font-size:36.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#75AEFF;
	letter-spacing:-.5pt;
	font-weight:bold;}
p.MsoTitleCxSpLast, li.MsoTitleCxSpLast, div.MsoTitleCxSpLast
	{mso-style-name:"Title\,CCX Cover Page TitleCxSpLast";
	mso-style-link:"Title Char\,CCX Cover Page Title Char";
	margin:0in;
	font-size:36.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#75AEFF;
	letter-spacing:-.5pt;
	font-weight:bold;}
p.MsoBodyText, li.MsoBodyText, div.MsoBodyText
	{mso-style-name:"Body Text\,block\,bt\,body text\,fmsbodytext\,Heading 3 text\,Heading 3 text1\,Heading 3 text2\,Heading 3 text3\,Heading 3 text4\,Body Text x\,Body Text 1\,NoticeText-List\,t1\,taten_body\,Body text\,body\,b-heading 1\/heading 2\,bd\,heading1body-heading2body\,b14\,BD\,Text\,B";
	mso-style-link:"Body Text Char\,block Char1\,bt Char1\,body text Char1\,fmsbodytext Char1\,Heading 3 text Char1\,Heading 3 text1 Char1\,Heading 3 text2 Char1\,Heading 3 text3 Char1\,Heading 3 text4 Char1\,Body Text x Char1\,Body Text 1 Char1\,NoticeText-List Char1\,t1 Char1\,bd Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	text-align:justify;
	line-height:105%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinue, li.MsoListContinue, div.MsoListContinue
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:14.15pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinueCxSpFirst, li.MsoListContinueCxSpFirst, div.MsoListContinueCxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:14.15pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinueCxSpMiddle, li.MsoListContinueCxSpMiddle, div.MsoListContinueCxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:14.15pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinueCxSpLast, li.MsoListContinueCxSpLast, div.MsoListContinueCxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:14.15pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinue2, li.MsoListContinue2, div.MsoListContinue2
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:28.3pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinue2CxSpFirst, li.MsoListContinue2CxSpFirst, div.MsoListContinue2CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:28.3pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinue2CxSpMiddle, li.MsoListContinue2CxSpMiddle, div.MsoListContinue2CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:28.3pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinue2CxSpLast, li.MsoListContinue2CxSpLast, div.MsoListContinue2CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:28.3pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinue3, li.MsoListContinue3, div.MsoListContinue3
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:42.45pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinue3CxSpFirst, li.MsoListContinue3CxSpFirst, div.MsoListContinue3CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:42.45pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinue3CxSpMiddle, li.MsoListContinue3CxSpMiddle, div.MsoListContinue3CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:42.45pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListContinue3CxSpLast, li.MsoListContinue3CxSpLast, div.MsoListContinue3CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:42.45pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoSubtitle, li.MsoSubtitle, div.MsoSubtitle
	{mso-style-link:"Subtitle Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:14.0pt;
	font-family:"Calibri Light",sans-serif;
	color:white;
	font-weight:bold;}
a:link, span.MsoHyperlink
	{font-family:"MS Mincho";
	color:black;
	font-weight:bold;
	text-decoration:underline;}
a:visited, span.MsoHyperlinkFollowed
	{color:#0151AD;
	text-decoration:underline;}
p
	{margin-right:0in;
	margin-left:0in;
	font-size:12.0pt;
	font-family:"Times New Roman",serif;}
p.MsoCommentSubject, li.MsoCommentSubject, div.MsoCommentSubject
	{mso-style-link:"Comment Subject Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;
	font-weight:bold;}
p.MsoAcetate, li.MsoAcetate, div.MsoAcetate
	{mso-style-link:"Balloon Text Char";
	margin:0in;
	font-size:9.0pt;
	font-family:"Segoe UI",sans-serif;
	color:black;}
span.MsoPlaceholderText
	{font-family:"Calibri",sans-serif;
	color:gray;}
p.MsoNoSpacing, li.MsoNoSpacing, div.MsoNoSpacing
	{mso-style-link:"No Spacing Char";
	margin:0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoRMPane, li.MsoRMPane, div.MsoRMPane
	{margin:0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#040477;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
	{mso-style-name:"List Paragraph\,List Paragraph - bullet\,List - bullet";
	mso-style-link:"List Paragraph Char\,List Paragraph - bullet Char\,List - bullet Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.5in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst
	{mso-style-name:"List Paragraph\,List Paragraph - bullet\,List - bulletCxSpFirst";
	mso-style-link:"List Paragraph Char\,List Paragraph - bullet Char\,List - bullet Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle
	{mso-style-name:"List Paragraph\,List Paragraph - bullet\,List - bulletCxSpMiddle";
	mso-style-link:"List Paragraph Char\,List Paragraph - bullet Char\,List - bullet Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast
	{mso-style-name:"List Paragraph\,List Paragraph - bullet\,List - bulletCxSpLast";
	mso-style-link:"List Paragraph Char\,List Paragraph - bullet Char\,List - bullet Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.5in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.MsoQuote, li.MsoQuote, div.MsoQuote
	{mso-style-link:"Quote Char";
	margin-top:10.0pt;
	margin-right:42.55pt;
	margin-bottom:6.0pt;
	margin-left:42.55pt;
	text-indent:-21.3pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;
	font-style:italic;}
p.MsoIntenseQuote, li.MsoIntenseQuote, div.MsoIntenseQuote
	{mso-style-link:"Intense Quote Char";
	margin-top:.25in;
	margin-right:42.55pt;
	margin-bottom:.25in;
	margin-left:42.55pt;
	text-align:center;
	line-height:110%;
	border:none;
	padding:0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;
	font-style:italic;}
span.MsoSubtleEmphasis
	{color:#404040;
	font-style:italic;}
span.MsoIntenseEmphasis
	{color:#75AEFF;
	font-style:italic;}
span.MsoIntenseReference
	{font-family:"Calibri",sans-serif;
	font-variant:small-caps;
	color:#75AEFF;
	letter-spacing:.25pt;
	font-weight:bold;}
span.MsoBookTitle
	{letter-spacing:.25pt;
	font-weight:bold;
	font-style:italic;}
p.MsoTocHeading, li.MsoTocHeading, div.MsoTocHeading
	{margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:12.0pt;
	margin-left:0in;
	line-height:110%;
	page-break-after:avoid;
	font-size:18.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
p.Code, li.Code, div.Code
	{mso-style-name:Code;
	mso-style-link:"Code Char";
	margin-top:0in;
	margin-right:14.2pt;
	margin-bottom:6.0pt;
	margin-left:14.2pt;
	line-height:110%;
	background:#F2F2F2;
	border:none;
	padding:0in;
	font-size:11.0pt;
	font-family:Hack;
	color:black;}
span.CodeChar
	{mso-style-name:"Code Char";
	mso-style-link:Code;
	font-family:Hack;
	background:#F2F2F2;}
p.Callout, li.Callout, div.Callout
	{mso-style-name:Callout;
	margin-top:0in;
	margin-right:7.95pt;
	margin-bottom:6.0pt;
	margin-left:7.95pt;
	line-height:110%;
	background:#E3EEFF;
	border:none;
	padding:0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-Bullets, li.Table-Bullets, div.Table-Bullets
	{mso-style-name:"Table - Bullets";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsCxSpFirst, li.Table-BulletsCxSpFirst, div.Table-BulletsCxSpFirst
	{mso-style-name:"Table - BulletsCxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsCxSpMiddle, li.Table-BulletsCxSpMiddle, div.Table-BulletsCxSpMiddle
	{mso-style-name:"Table - BulletsCxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsCxSpLast, li.Table-BulletsCxSpLast, div.Table-BulletsCxSpLast
	{mso-style-name:"Table - BulletsCxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-NumberedList, li.Table-NumberedList, div.Table-NumberedList
	{mso-style-name:"Table - Numbered List";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.25in;
	text-indent:-.25in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-NumberedListCxSpFirst, li.Table-NumberedListCxSpFirst, div.Table-NumberedListCxSpFirst
	{mso-style-name:"Table - Numbered ListCxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	text-indent:-.25in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-NumberedListCxSpMiddle, li.Table-NumberedListCxSpMiddle, div.Table-NumberedListCxSpMiddle
	{mso-style-name:"Table - Numbered ListCxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	text-indent:-.25in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-NumberedListCxSpLast, li.Table-NumberedListCxSpLast, div.Table-NumberedListCxSpLast
	{mso-style-name:"Table - Numbered ListCxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.25in;
	text-indent:-.25in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.AppendixHeading1, li.AppendixHeading1, div.AppendixHeading1
	{mso-style-name:"Appendix Heading 1";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:12.0pt;
	margin-left:.25in;
	text-indent:-.25in;
	line-height:110%;
	page-break-before:always;
	page-break-after:avoid;
	font-size:18.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
span.Heading1Char
	{mso-style-name:"Heading 1 Char";
	mso-style-link:"Heading 1";
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
p.AppendixHeading6, li.AppendixHeading6, div.AppendixHeading6
	{mso-style-name:"Appendix Heading 6";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:1.5in;
	text-indent:-.25in;
	line-height:110%;
	page-break-after:avoid;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#040477;}
span.Heading6Char
	{mso-style-name:"Heading 6 Char";
	mso-style-link:"Heading 6";
	font-family:"Calibri Light",sans-serif;
	color:#004CB9;}
p.AppendixHeading2, li.AppendixHeading2, div.AppendixHeading2
	{mso-style-name:"Appendix Heading 2";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.5in;
	text-indent:-.25in;
	line-height:110%;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
span.Heading2Char
	{mso-style-name:"Heading 2 Char";
	mso-style-link:"Heading 2";
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
p.AppendixHeading3, li.AppendixHeading3, div.AppendixHeading3
	{mso-style-name:"Appendix Heading 3";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:12.0pt;
	margin-left:.75in;
	text-indent:-.25in;
	line-height:110%;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
span.Heading3Char
	{mso-style-name:"Heading 3 Char";
	mso-style-link:"Heading 3";
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
p.AppendixHeading4, li.AppendixHeading4, div.AppendixHeading4
	{mso-style-name:"Appendix Heading 4";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:1.0in;
	text-indent:-.25in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
span.Heading4Char
	{mso-style-name:"Heading 4 Char";
	mso-style-link:"Heading 4";
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
p.AppendixHeading5, li.AppendixHeading5, div.AppendixHeading5
	{mso-style-name:"Appendix Heading 5";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:1.25in;
	text-indent:-.25in;
	line-height:110%;
	page-break-after:avoid;
	font-size:11.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
span.Heading5Char
	{mso-style-name:"Heading 5 Char";
	mso-style-link:"Heading 5";
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
p.Table-Triangle, li.Table-Triangle, div.Table-Triangle
	{mso-style-name:"Table - Triangle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;}
p.Table-TriangleCxSpFirst, li.Table-TriangleCxSpFirst, div.Table-TriangleCxSpFirst
	{mso-style-name:"Table - TriangleCxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;}
p.Table-TriangleCxSpMiddle, li.Table-TriangleCxSpMiddle, div.Table-TriangleCxSpMiddle
	{mso-style-name:"Table - TriangleCxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;}
p.Table-TriangleCxSpLast, li.Table-TriangleCxSpLast, div.Table-TriangleCxSpLast
	{mso-style-name:"Table - TriangleCxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;}
p.Table-Text, li.Table-Text, div.Table-Text
	{mso-style-name:"Table - Text";
	margin:0in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.NumberedList, li.NumberedList, div.NumberedList
	{mso-style-name:"Numbered List";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.NumberedListCxSpFirst, li.NumberedListCxSpFirst, div.NumberedListCxSpFirst
	{mso-style-name:"Numbered ListCxSpFirst";
	margin:0in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.NumberedListCxSpMiddle, li.NumberedListCxSpMiddle, div.NumberedListCxSpMiddle
	{mso-style-name:"Numbered ListCxSpMiddle";
	margin:0in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.NumberedListCxSpLast, li.NumberedListCxSpLast, div.NumberedListCxSpLast
	{mso-style-name:"Numbered ListCxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-Text-RightAlign, li.Table-Text-RightAlign, div.Table-Text-RightAlign
	{mso-style-name:"Table - Text - Right Align";
	margin:0in;
	text-align:right;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-Text-Small, li.Table-Text-Small, div.Table-Text-Small
	{mso-style-name:"Table - Text - Small";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:3.9pt;
	margin-left:0in;
	line-height:110%;
	font-size:9.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
span.CCXBoldSubheading
	{mso-style-name:"CCX Bold Subheading";
	font-family:"Calibri",sans-serif;
	color:black;
	position:relative;
	top:0pt;
	letter-spacing:0pt;
	font-weight:bold;}
span.Italic-Character
	{mso-style-name:"Italic - Character";
	font-family:"Calibri",sans-serif;
	color:black;
	font-style:italic;}
span.Subscript-Character
	{mso-style-name:"Subscript - Character";
	font-family:"Calibri",sans-serif;
	color:black;
	vertical-align:sub;}
span.Superscript-Character
	{mso-style-name:"Superscript - Character";
	font-family:"Calibri",sans-serif;
	color:black;
	vertical-align:super;}
span.Highlight-Character
	{mso-style-name:"Highlight - Character";
	font-family:"Calibri",sans-serif;
	color:black;
	border:none;
	background:yellow;}
span.TechnicalTerm
	{mso-style-name:"Technical Term";
	font-family:Hack;
	color:black;
	background:#F2F2F2;}
span.TitleChar
	{mso-style-name:"Title Char\,CCX Cover Page Title Char";
	mso-style-link:"Title\,CCX Cover Page Title";
	font-family:"Calibri Light",sans-serif;
	color:#75AEFF;
	letter-spacing:-.5pt;
	font-weight:bold;}
span.QuoteChar
	{mso-style-name:"Quote Char";
	mso-style-link:Quote;
	font-style:italic;}
span.IntenseQuoteChar
	{mso-style-name:"Intense Quote Char";
	mso-style-link:"Intense Quote";
	font-style:italic;}
p.Level1-TC, li.Level1-TC, div.Level1-TC
	{mso-style-name:"Level 1 - T&C";
	mso-style-link:"Level 1 - T&C Char";
	margin-top:.25in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:35.45pt;
	text-indent:-35.45pt;
	border:none;
	padding:0in;
	font-size:8.0pt;
	font-family:"Arial",sans-serif;
	color:black;}
span.Level1-TCChar
	{mso-style-name:"Level 1 - T&C Char";
	mso-style-link:"Level 1 - T&C";
	font-family:"Arial",sans-serif;
	color:black;}
p.Level2-TC, li.Level2-TC, div.Level2-TC
	{mso-style-name:"Level 2 - T&C";
	mso-style-link:"Level 2 - T&C Char";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:106.35pt;
	text-indent:-35.45pt;
	font-size:8.0pt;
	font-family:"Arial",sans-serif;
	color:black;}
span.Level2-TCChar
	{mso-style-name:"Level 2 - T&C Char";
	mso-style-link:"Level 2 - T&C";
	font-family:"Arial",sans-serif;
	color:black;}
p.Level3-TC, li.Level3-TC, div.Level3-TC
	{mso-style-name:"Level 3 - T&C";
	mso-style-link:"Level 3 - T&C Char";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:70.9pt;
	text-indent:-35.45pt;
	font-size:8.0pt;
	font-family:"Arial",sans-serif;
	color:black;
	font-weight:bold;}
span.Level3-TCChar
	{mso-style-name:"Level 3 - T&C Char";
	mso-style-link:"Level 3 - T&C";
	font-family:"Arial",sans-serif;
	color:black;
	font-weight:bold;}
p.Level4-TC, li.Level4-TC, div.Level4-TC
	{mso-style-name:"Level 4 - T&C";
	mso-style-link:"Level 4 - T&C Char";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	font-size:8.0pt;
	font-family:"Arial",sans-serif;
	color:black;
	font-weight:bold;}
span.Level4-TCChar
	{mso-style-name:"Level 4 - T&C Char";
	mso-style-link:"Level 4 - T&C";
	font-family:"Arial",sans-serif;
	color:black;
	font-weight:bold;}
p.TableHeader, li.TableHeader, div.TableHeader
	{mso-style-name:"Table Header";
	margin:0in;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:white;
	font-weight:bold;}
p.CCXBullets, li.CCXBullets, div.CCXBullets
	{mso-style-name:"CCX Bullets";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXBulletsCxSpFirst, li.CCXBulletsCxSpFirst, div.CCXBulletsCxSpFirst
	{mso-style-name:"CCX BulletsCxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXBulletsCxSpMiddle, li.CCXBulletsCxSpMiddle, div.CCXBulletsCxSpMiddle
	{mso-style-name:"CCX BulletsCxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXBulletsCxSpLast, li.CCXBulletsCxSpLast, div.CCXBulletsCxSpLast
	{mso-style-name:"CCX BulletsCxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXTicks, li.CCXTicks, div.CCXTicks
	{mso-style-name:"CCX Ticks";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXTicksCxSpFirst, li.CCXTicksCxSpFirst, div.CCXTicksCxSpFirst
	{mso-style-name:"CCX TicksCxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXTicksCxSpMiddle, li.CCXTicksCxSpMiddle, div.CCXTicksCxSpMiddle
	{mso-style-name:"CCX TicksCxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXTicksCxSpLast, li.CCXTicksCxSpLast, div.CCXTicksCxSpLast
	{mso-style-name:"CCX TicksCxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:14.2pt;
	text-indent:-14.2pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXTriangle, li.CCXTriangle, div.CCXTriangle
	{mso-style-name:"CCX Triangle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXTriangleCxSpFirst, li.CCXTriangleCxSpFirst, div.CCXTriangleCxSpFirst
	{mso-style-name:"CCX TriangleCxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXTriangleCxSpMiddle, li.CCXTriangleCxSpMiddle, div.CCXTriangleCxSpMiddle
	{mso-style-name:"CCX TriangleCxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXTriangleCxSpLast, li.CCXTriangleCxSpLast, div.CCXTriangleCxSpLast
	{mso-style-name:"CCX TriangleCxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXNumberedList, li.CCXNumberedList, div.CCXNumberedList
	{mso-style-name:"CCX Numbered List";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXNumberedListCxSpFirst, li.CCXNumberedListCxSpFirst, div.CCXNumberedListCxSpFirst
	{mso-style-name:"CCX Numbered ListCxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXNumberedListCxSpMiddle, li.CCXNumberedListCxSpMiddle, div.CCXNumberedListCxSpMiddle
	{mso-style-name:"CCX Numbered ListCxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.CCXNumberedListCxSpLast, li.CCXNumberedListCxSpLast, div.CCXNumberedListCxSpLast
	{mso-style-name:"CCX Numbered ListCxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:17.85pt;
	text-indent:-17.85pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.HeadingNoNumbering, li.HeadingNoNumbering, div.HeadingNoNumbering
	{mso-style-name:"Heading No Numbering";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:12.0pt;
	margin-left:0in;
	line-height:110%;
	page-break-before:always;
	page-break-after:avoid;
	font-size:18.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
p.CCXSectionIntro, li.CCXSectionIntro, div.CCXSectionIntro
	{mso-style-name:"CCX Section Intro";
	margin-top:8.0pt;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:12.0pt;
	font-family:"Calibri",sans-serif;
	color:#040477;}
p.CCX-CoverInfo-Standout, li.CCX-CoverInfo-Standout, div.CCX-CoverInfo-Standout
	{mso-style-name:"CCX - Cover Info - Standout";
	mso-style-link:"CCX - Cover Info - Standout Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	text-align:center;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:white;
	text-transform:uppercase;
	letter-spacing:.5pt;
	font-weight:bold;}
span.CCX-CoverInfo-StandoutChar
	{mso-style-name:"CCX - Cover Info - Standout Char";
	mso-style-link:"CCX - Cover Info - Standout";
	font-family:"Calibri",sans-serif;
	color:white;
	text-transform:uppercase;
	letter-spacing:.5pt;
	font-weight:bold;}
p.CCX-CoverPage-Footer, li.CCX-CoverPage-Footer, div.CCX-CoverPage-Footer
	{mso-style-name:"CCX - Cover Page - Footer";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:white;
	text-transform:uppercase;}
span.FooterChar
	{mso-style-name:"Footer Char";
	mso-style-link:Footer;}
p.CCX-CoverPage-Title, li.CCX-CoverPage-Title, div.CCX-CoverPage-Title
	{mso-style-name:"CCX - Cover Page - Title";
	margin:0in;
	font-size:36.0pt;
	font-family:"Calibri Light",sans-serif;
	color:white;
	letter-spacing:-.5pt;
	font-weight:bold;}
p.CCX-CoverPage-TitleCxSpFirst, li.CCX-CoverPage-TitleCxSpFirst, div.CCX-CoverPage-TitleCxSpFirst
	{mso-style-name:"CCX - Cover Page - TitleCxSpFirst";
	margin:0in;
	font-size:36.0pt;
	font-family:"Calibri Light",sans-serif;
	color:white;
	letter-spacing:-.5pt;
	font-weight:bold;}
p.CCX-CoverPage-TitleCxSpMiddle, li.CCX-CoverPage-TitleCxSpMiddle, div.CCX-CoverPage-TitleCxSpMiddle
	{mso-style-name:"CCX - Cover Page - TitleCxSpMiddle";
	margin:0in;
	font-size:36.0pt;
	font-family:"Calibri Light",sans-serif;
	color:white;
	letter-spacing:-.5pt;
	font-weight:bold;}
p.CCX-CoverPage-TitleCxSpLast, li.CCX-CoverPage-TitleCxSpLast, div.CCX-CoverPage-TitleCxSpLast
	{mso-style-name:"CCX - Cover Page - TitleCxSpLast";
	margin:0in;
	font-size:36.0pt;
	font-family:"Calibri Light",sans-serif;
	color:white;
	letter-spacing:-.5pt;
	font-weight:bold;}
p.CCX-CoverPageLogo, li.CCX-CoverPageLogo, div.CCX-CoverPageLogo
	{mso-style-name:"CCX - Cover Page Logo";
	mso-style-link:"CCX - Cover Page Logo Char";
	margin-top:.75in;
	margin-right:0in;
	margin-bottom:42.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:white;}
span.CCX-CoverPageLogoChar
	{mso-style-name:"CCX - Cover Page Logo Char";
	mso-style-link:"CCX - Cover Page Logo";
	font-family:"Calibri",sans-serif;
	color:white;}
p.CCX-CoverPagePre-Subtitle, li.CCX-CoverPagePre-Subtitle, div.CCX-CoverPagePre-Subtitle
	{mso-style-name:"CCX - Cover Page Pre-Subtitle";
	mso-style-link:"CCX - Cover Page Pre-Subtitle Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:24.0pt;
	font-family:"Calibri Light",sans-serif;
	color:white;
	font-weight:bold;}
span.CCX-CoverPagePre-SubtitleChar
	{mso-style-name:"CCX - Cover Page Pre-Subtitle Char";
	mso-style-link:"CCX - Cover Page Pre-Subtitle";
	font-family:"Calibri Light",sans-serif;
	color:white;
	font-weight:bold;}
span.SubtitleChar
	{mso-style-name:"Subtitle Char";
	mso-style-link:Subtitle;
	font-family:"Calibri Light",sans-serif;
	color:white;
	font-weight:bold;}
p.CCX-End-Bullets, li.CCX-End-Bullets, div.CCX-End-Bullets
	{mso-style-name:"CCX - End - Bullets";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:#75AEFF;}
p.CCX-End-BulletsCxSpFirst, li.CCX-End-BulletsCxSpFirst, div.CCX-End-BulletsCxSpFirst
	{mso-style-name:"CCX - End - BulletsCxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:#75AEFF;}
p.CCX-End-BulletsCxSpMiddle, li.CCX-End-BulletsCxSpMiddle, div.CCX-End-BulletsCxSpMiddle
	{mso-style-name:"CCX - End - BulletsCxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:#75AEFF;}
p.CCX-End-BulletsCxSpLast, li.CCX-End-BulletsCxSpLast, div.CCX-End-BulletsCxSpLast
	{mso-style-name:"CCX - End - BulletsCxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:#75AEFF;}
p.CCX-End-Header, li.CCX-End-Header, div.CCX-End-Header
	{mso-style-name:"CCX - End - Header";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:107%;
	font-size:18.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#75AEFF;}
p.CCX-End-Header2, li.CCX-End-Header2, div.CCX-End-Header2
	{mso-style-name:"CCX - End - Header 2";
	margin:0in;
	line-height:107%;
	font-size:10.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#75AEFF;}
p.CCX-End-Paragraph, li.CCX-End-Paragraph, div.CCX-End-Paragraph
	{mso-style-name:"CCX - End - Paragraph";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:107%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:white;}
p.CCX-End-Subtitle, li.CCX-End-Subtitle, div.CCX-End-Subtitle
	{mso-style-name:"CCX - End - Subtitle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:17.0pt;
	font-family:"Calibri",sans-serif;
	color:white;}
p.CCX-Frontmatter-LegalBold, li.CCX-Frontmatter-LegalBold, div.CCX-Frontmatter-LegalBold
	{mso-style-name:"CCX - Frontmatter - Legal Bold";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:white;
	font-weight:bold;}
p.CCX-Frontmatter-LegalText, li.CCX-Frontmatter-LegalText, div.CCX-Frontmatter-LegalText
	{mso-style-name:"CCX - Frontmatter - Legal Text";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:white;}
p.CCX-Frontmatter-Text, li.CCX-Frontmatter-Text, div.CCX-Frontmatter-Text
	{mso-style-name:"CCX - Frontmatter - Text";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	text-align:center;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:white;}
p.CCX-Frontmatter-Title, li.CCX-Frontmatter-Title, div.CCX-Frontmatter-Title
	{mso-style-name:"CCX - Frontmatter - Title";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:3.0in;
	margin-left:0in;
	text-align:center;
	line-height:110%;
	font-size:20.0pt;
	font-family:"Calibri",sans-serif;
	color:white;}
span.HeaderChar
	{mso-style-name:"Header Char";
	mso-style-link:Header;}
span.Heading7Char
	{mso-style-name:"Heading 7 Char";
	mso-style-link:"Heading 7";
	font-family:"Calibri Light",sans-serif;
	color:#004CB9;
	font-style:italic;}
span.Footer-Centre-Raised
	{mso-style-name:"Footer - Centre - Raised";
	font-family:"Calibri",sans-serif;
	color:#75AEFF;
	position:relative;
	top:-1.0pt;}
p.CCXHeader, li.CCXHeader, div.CCXHeader
	{mso-style-name:"CCX Header";
	margin-top:12.0pt;
	margin-right:0in;
	margin-bottom:34.0pt;
	margin-left:0in;
	text-align:right;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:#75AEFF;
	text-transform:uppercase;}
p.FauxHeading2, li.FauxHeading2, div.FauxHeading2
	{mso-style-name:"Faux Heading 2";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:14.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
span.CommentTextChar
	{mso-style-name:"Comment Text Char";
	mso-style-link:"Comment Text";}
span.CommentSubjectChar
	{mso-style-name:"Comment Subject Char";
	mso-style-link:"Comment Subject";
	font-weight:bold;}
p.FauxHeading1, li.FauxHeading1, div.FauxHeading1
	{mso-style-name:"Faux Heading 1";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:18.0pt;
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
span.BodyTextChar
	{mso-style-name:"Body Text Char\,block Char1\,bt Char1\,body text Char1\,fmsbodytext Char1\,Heading 3 text Char1\,Heading 3 text1 Char1\,Heading 3 text2 Char1\,Heading 3 text3 Char1\,Heading 3 text4 Char1\,Body Text x Char1\,Body Text 1 Char1\,NoticeText-List Char1\,t1 Char1\,bd Char";
	mso-style-link:"Body Text\,block\,bt\,body text\,fmsbodytext\,Heading 3 text\,Heading 3 text1\,Heading 3 text2\,Heading 3 text3\,Heading 3 text4\,Body Text x\,Body Text 1\,NoticeText-List\,t1\,taten_body\,Body text\,body\,b-heading 1\/heading 2\,bd\,heading1body-heading2body\,b14\,BD\,Text\,B";
	font-family:"MS Mincho";}
p.Title1, li.Title1, div.Title1
	{mso-style-name:"Title 1";
	margin-top:6.0pt;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:105%;
	font-size:18.0pt;
	font-family:"Calibri",sans-serif;
	color:#040477;}
p.Instructions, li.Instructions, div.Instructions
	{mso-style-name:Instructions;
	mso-style-link:"Instructions Char";
	margin-top:6.0pt;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	text-align:justify;
	line-height:115%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:#009EFF;}
span.InstructionsChar
	{mso-style-name:"Instructions Char";
	mso-style-link:Instructions;
	font-family:"Yu Mincho",serif;
	color:#009EFF;}
p.Notes, li.Notes, div.Notes
	{mso-style-name:Notes;
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:105%;
	border:none;
	padding:0in;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;
	font-style:italic;}
span.FootnoteTextChar
	{mso-style-name:"Footnote Text Char";
	mso-style-link:"Footnote Text";
	font-family:"Yu Mincho",serif;
	color:windowtext;}
span.BIOTableSubheading
	{mso-style-name:"BIO Table Subheading";
	font-family:"Calibri",sans-serif;
	color:#75AEFF;
	position:relative;
	top:0pt;
	letter-spacing:0pt;
	font-weight:bold;}
p.CCX-ProposalBodyText, li.CCX-ProposalBodyText, div.CCX-ProposalBodyText
	{mso-style-name:"CCX - Proposal Body Text";
	margin-top:6.0pt;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	text-align:justify;
	line-height:105%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Subheading2, li.Subheading2, div.Subheading2
	{mso-style-name:"Subheading 2";
	margin-top:6.0pt;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:105%;
	font-size:14.0pt;
	font-family:"Calibri",sans-serif;
	color:#040477;}
p.BulletsBullets, li.BulletsBullets, div.BulletsBullets
	{mso-style-name:"Bullets \(Bullets\)";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:42.55pt;
	text-indent:-21.3pt;
	line-height:105%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#040477;}
p.BulletsBulletsCxSpFirst, li.BulletsBulletsCxSpFirst, div.BulletsBulletsCxSpFirst
	{mso-style-name:"Bullets \(Bullets\)CxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:42.55pt;
	text-indent:-21.3pt;
	line-height:105%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#040477;}
p.BulletsBulletsCxSpMiddle, li.BulletsBulletsCxSpMiddle, div.BulletsBulletsCxSpMiddle
	{mso-style-name:"Bullets \(Bullets\)CxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:42.55pt;
	text-indent:-21.3pt;
	line-height:105%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#040477;}
p.BulletsBulletsCxSpLast, li.BulletsBulletsCxSpLast, div.BulletsBulletsCxSpLast
	{mso-style-name:"Bullets \(Bullets\)CxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:42.55pt;
	text-indent:-21.3pt;
	line-height:105%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#040477;}
span.CCXLBlueSubheading
	{mso-style-name:"CCX L Blue Subheading";
	font-family:"Calibri",sans-serif;
	color:#75AEFF;
	position:relative;
	top:0pt;
	letter-spacing:0pt;
	font-weight:bold;}
p.BulletsTriangular, li.BulletsTriangular, div.BulletsTriangular
	{mso-style-name:"Bullets \(Triangular\)";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:.5in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.BulletsTriangularCxSpFirst, li.BulletsTriangularCxSpFirst, div.BulletsTriangularCxSpFirst
	{mso-style-name:"Bullets \(Triangular\)CxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.BulletsTriangularCxSpMiddle, li.BulletsTriangularCxSpMiddle, div.BulletsTriangularCxSpMiddle
	{mso-style-name:"Bullets \(Triangular\)CxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.BulletsTriangularCxSpLast, li.BulletsTriangularCxSpLast, div.BulletsTriangularCxSpLast
	{mso-style-name:"Bullets \(Triangular\)CxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:.5in;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
span.Bold-Character
	{mso-style-name:"Bold - Character";
	font-family:"Calibri Light",sans-serif;
	color:#040477;
	font-weight:bold;}
p.Table-BulletsBullets, li.Table-BulletsBullets, div.Table-BulletsBullets
	{mso-style-name:"Table - Bullets \(Bullets\)";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:.5in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsBulletsCxSpFirst, li.Table-BulletsBulletsCxSpFirst, div.Table-BulletsBulletsCxSpFirst
	{mso-style-name:"Table - Bullets \(Bullets\)CxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsBulletsCxSpMiddle, li.Table-BulletsBulletsCxSpMiddle, div.Table-BulletsBulletsCxSpMiddle
	{mso-style-name:"Table - Bullets \(Bullets\)CxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsBulletsCxSpLast, li.Table-BulletsBulletsCxSpLast, div.Table-BulletsBulletsCxSpLast
	{mso-style-name:"Table - Bullets \(Bullets\)CxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:.5in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
span.Heading8Char
	{mso-style-name:"Heading 8 Char";
	mso-style-link:"Heading 8";
	font-family:"Calibri Light",sans-serif;
	color:#404040;}
span.Heading9Char
	{mso-style-name:"Heading 9 Char";
	mso-style-link:"Heading 9";
	font-family:"Calibri Light",sans-serif;
	color:#404040;
	font-style:italic;}
span.BalloonTextChar
	{mso-style-name:"Balloon Text Char";
	mso-style-link:"Balloon Text";
	font-family:"Segoe UI",sans-serif;}
p.BulletsTicks, li.BulletsTicks, div.BulletsTicks
	{mso-style-name:"Bullets \(Ticks\)";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.BulletsTicksCxSpFirst, li.BulletsTicksCxSpFirst, div.BulletsTicksCxSpFirst
	{mso-style-name:"Bullets \(Ticks\)CxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.BulletsTicksCxSpMiddle, li.BulletsTicksCxSpMiddle, div.BulletsTicksCxSpMiddle
	{mso-style-name:"Bullets \(Ticks\)CxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.BulletsTicksCxSpLast, li.BulletsTicksCxSpLast, div.BulletsTicksCxSpLast
	{mso-style-name:"Bullets \(Ticks\)CxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsTicks, li.Table-BulletsTicks, div.Table-BulletsTicks
	{mso-style-name:"Table - Bullets \(Ticks\)";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:21.3pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsTicksCxSpFirst, li.Table-BulletsTicksCxSpFirst, div.Table-BulletsTicksCxSpFirst
	{mso-style-name:"Table - Bullets \(Ticks\)CxSpFirst";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:21.3pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsTicksCxSpMiddle, li.Table-BulletsTicksCxSpMiddle, div.Table-BulletsTicksCxSpMiddle
	{mso-style-name:"Table - Bullets \(Ticks\)CxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:21.3pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsTicksCxSpLast, li.Table-BulletsTicksCxSpLast, div.Table-BulletsTicksCxSpLast
	{mso-style-name:"Table - Bullets \(Ticks\)CxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:21.3pt;
	text-indent:-21.25pt;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
span.Faded-Character
	{mso-style-name:"Faded - Character";
	color:#A6A6A6;}
span.EndnoteTextChar
	{mso-style-name:"Endnote Text Char";
	mso-style-link:"Endnote Text";
	font-family:"Calibri",sans-serif;}
p.Table-BulletsTriangular, li.Table-BulletsTriangular, div.Table-BulletsTriangular
	{mso-style-name:"Table - Bullets \(Triangular\)";
	margin-top:2.0pt;
	margin-right:0in;
	margin-bottom:2.0pt;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsTriangularCxSpFirst, li.Table-BulletsTriangularCxSpFirst, div.Table-BulletsTriangularCxSpFirst
	{mso-style-name:"Table - Bullets \(Triangular\)CxSpFirst";
	margin-top:2.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsTriangularCxSpMiddle, li.Table-BulletsTriangularCxSpMiddle, div.Table-BulletsTriangularCxSpMiddle
	{mso-style-name:"Table - Bullets \(Triangular\)CxSpMiddle";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Table-BulletsTriangularCxSpLast, li.Table-BulletsTriangularCxSpLast, div.Table-BulletsTriangularCxSpLast
	{mso-style-name:"Table - Bullets \(Triangular\)CxSpLast";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:2.0pt;
	margin-left:21.25pt;
	text-indent:-21.25pt;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
span.NoSpacingChar
	{mso-style-name:"No Spacing Char";
	mso-style-link:"No Spacing";}
p.AlignRight, li.AlignRight, div.AlignRight
	{mso-style-name:"Align Right";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	text-align:right;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.AlignCentre, li.AlignCentre, div.AlignCentre
	{mso-style-name:"Align Centre";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	text-align:center;
	line-height:110%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.Lede, li.Lede, div.Lede
	{mso-style-name:Lede;
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:110%;
	font-size:17.0pt;
	font-family:"Calibri",sans-serif;
	color:black;}
p.SignatureBox, li.SignatureBox, div.SignatureBox
	{mso-style-name:"Signature Box";
	margin-top:16.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	font-size:10.0pt;
	font-family:"Arial",sans-serif;}
p.Table, li.Table, div.Table
	{mso-style-name:Table;
	margin-top:3.0pt;
	margin-right:0in;
	margin-bottom:3.0pt;
	margin-left:0in;
	text-align:justify;
	font-size:10.0pt;
	font-family:"Arial",sans-serif;
	layout-grid-mode:line;}
p.level3, li.level3, div.level3
	{mso-style-name:level3;
	margin-top:5.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:70.9pt;
	text-indent:-35.45pt;
	font-size:10.0pt;
	font-family:"Arial",sans-serif;}
span.ListParagraphChar
	{mso-style-name:"List Paragraph Char\,List Paragraph - bullet Char\,List - bullet Char";
	mso-style-link:"List Paragraph\,List Paragraph - bullet\,List - bullet";}
span.BodyTextChar1
	{mso-style-name:"Body Text Char1\,block Char\,bt Char\,body text Char\,fmsbodytext Char\,Heading 3 text Char\,Heading 3 text1 Char\,Heading 3 text2 Char\,Heading 3 text3 Char\,Heading 3 text4 Char\,Body Text x Char\,Body Text 1 Char\,NoticeText-List Char\,t1 Char\,taten_body Char";
	font-family:"Arial",sans-serif;}
span.GreenHighlight
	{mso-style-name:"Green Highlight";
	border:none windowtext 1.0pt;
	padding:0in;
	background:lime;}
p.paragraph, li.paragraph, div.paragraph
	{mso-style-name:paragraph;
	margin-right:0in;
	margin-left:0in;
	font-size:12.0pt;
	font-family:"Times New Roman",serif;}
span.normaltextrun
	{mso-style-name:normaltextrun;}
span.eop
	{mso-style-name:eop;}
p.TableColumnHeader, li.TableColumnHeader, div.TableColumnHeader
	{mso-style-name:"Table Column Header";
	margin:0in;
	line-height:110%;
	font-size:10.0pt;
	font-family:"Calibri",sans-serif;
	color:#75AEFF;}
span.msoIns
	{mso-style-name:"";
	text-decoration:underline;
	color:teal;}
span.msoDel
	{mso-style-name:"";
	text-decoration:line-through;
	color:red;}
.MsoChpDefault
	{font-family:"Calibri",sans-serif;
	color:black;}
.MsoPapDefault
	{margin-bottom:6.0pt;
	line-height:110%;}
 /* Page Definitions */
 @page WordSection1
	{size:595.3pt 841.9pt;
	margin:70.9pt 70.9pt 70.9pt 70.9pt;}
div.WordSection1
	{page:WordSection1;}
@page WordSection2
	{size:595.05pt 842.0pt;
	margin:107.8pt 1.0in 71.75pt 1.0in;}
div.WordSection2
	{page:WordSection2;}
@page WordSection3
	{size:595.3pt 841.9pt;
	margin:107.75pt 1.0in 1.0in 1.0in;}
div.WordSection3
	{page:WordSection3;}
 /* List Definitions */
 ol
	{margin-bottom:0in;}
ul
	{margin-bottom:0in;}
-->
</style>

</head>

<body bgcolor=white lang=EN-US link=black vlink="#0151AD" style='word-wrap:
break-word'>

<div class=WordSection1>

<p class=SignatureBox><span style='position:relative;z-index:-1895825381'><span
style='position:absolute;left:-99px;top:-150px;width:797px;height:1127px'><img
width=797 height=1127 src="http://127.0.0.1:5500/STA%20Proposal%20Template_files/image001.jpg"></span></span><span
style='position:relative;z-index:251657233'><span style='position:absolute;
left:0px;top:-62px;width:232px;height:62px'><a href="https://cybercx.com.au/"><img
border=0 width=232 height=62 src="http://127.0.0.1:5500/STA%20Proposal%20Template_files/image002.png"
title=""></a></span></span><span style='position:relative;z-index:-1895826420'><span
style='position:absolute;left:4px;top:-49px;width:232px;height:62px'><a
href="https://cybercx.com.au/"><img border=0 width=232 height=62
src="http://127.0.0.1:5500/STA%20Proposal%20Template_files/image002.png" title=""></a></span></span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<br clear=ALL>

<table class=MsoTable15Plain3 border=0 cellspacing=0 cellpadding=0 align=left
 style='border-collapse:collapse;margin-left:-2.25pt;margin-right:-2.25pt'>
 <tr>
  <td width=604 valign=top style='width:453.0pt;padding:0in 0in 0in 0in'>
  <p class=MsoTitle style='margin-bottom:.25in'>[Review Type]</p>
  </td>
 </tr>
 <tr>
  <td width=604 valign=top style='width:453.0pt;padding:0in 0in 0in 0in'>
  <p class=MsoTitle><span lang=EN-AU style='font-size:24.0pt'>Proposal</span></p>
  </td>
 </tr>
 <tr>
  <td width=604 valign=top style='width:453.0pt;padding:0in 0in 0in 0in'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=604 valign=top style='width:453.0pt;padding:0in 0in 0in 0in'>
  <p class=MsoSubtitle style='line-height:normal'><span lang=EN-AU
  style='color:#75AEFF'>Opportunity ID: </span><span lang=EN-AU
  style='color:white'><span style='color:#75AEFF'>[Opportunity ID]</span></span></p>
  <p class=MsoSubtitle style='line-height:normal'><span lang=EN-AU>Prepared by
  CyberCX on behalf of</span></p>
  </td>
 </tr>
 <tr>
  <td width=604 valign=top style='width:453.0pt;padding:0in 0in 0in 0in'>
  <p class=MsoSubtitle style='line-height:normal'><span lang=EN-AU>[Client Long
  Name]<w:PTab Alignment="RIGHT" RelativeTo="MARGIN" Leader="NONE"></w:PTab></span></p>
  </td>
 </tr>
 <tr>
  <td width=604 valign=top style='width:453.0pt;padding:0in 0in 0in 0in'>
  <p class=CCX-CoverPage-Footer><span lang=EN-AU>Date: [Publish Date]</span></p>
  </td>
 </tr>
 <tr>
  <td width=604 valign=top style='width:453.0pt;padding:0in 0in 0in 0in'>
  <p class=CCX-CoverPage-Footer><span lang=EN-AU>Version 1.0</span></p>
  </td>
 </tr>
</table>

<p class=CCX-CoverPage-Footer><span lang=EN-AU><w:PTab Alignment="RIGHT"
 RelativeTo="MARGIN" Leader="NONE"></w:PTab></span></p>

<p class=CCX-CoverPage-Footer><span lang=EN-AU>&nbsp;</span></p>

<p class=CCX-CoverPage-Footer><span lang=EN-AU>&nbsp;</span></p>

<p class=CCX-CoverPage-Footer><span lang=EN-AU>&nbsp;</span></p>

<span lang=EN-AU style='font-size:11.0pt;line-height:110%;font-family:"Calibri",sans-serif'><br
clear=all style='page-break-before:always'>
</span>

<p class=MsoNormal><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
color:white;text-transform:uppercase'>&nbsp;</span></p>

<p class=MsoSubtitle align=center style='text-align:center'><span lang=EN-AU
style='text-transform:uppercase;font-weight:normal'>Proposal</span><span
style='position:absolute;z-index:-1895820261;left:0px;margin-left:-95px;
margin-top:1px;width:793px;height:1121px'><img width=793 height=1121
src="http://127.0.0.1:5500/STA%20Proposal%20Template_files/image003.jpg"
alt="A picture containing night sky&#10;&#10;Description automatically generated"></span></p>

<p class=CCX-Frontmatter-Title><span lang=EN-AU>[Review Type]</span></p>

<p class=CCX-Frontmatter-Text><span lang=EN-AU>FINAL/DRAFT Release</span></p>

<p class=CCX-Frontmatter-Text><span lang=EN-AU>VERSION 1.0</span></p>

<p class=CCX-CoverInfo-Standout><span lang=EN-AU>16-Feb-2021</span></p>

<p class=MsoNormal align=center style='text-align:center'><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoNormal align=center style='text-align:center'><b><span lang=EN-AU>&nbsp;</span></b></p>

<p class=MsoNormal align=center style='text-align:center'><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoNormal align=center style='text-align:center'><span lang=EN-AU>&nbsp;</span></p>

<p class=CCX-Frontmatter-Text><span lang=EN-AU>Lead Author</span></p>

<p class=CCX-Frontmatter-Text><span lang=EN-AU>[Author 1 Name] | [Author 1
Role]</span></p>

<p class=CCX-Frontmatter-Text><span lang=EN-AU>[Author 2 Name] | [Author 2
Role]</span></p>

<p class=CCX-Frontmatter-Text><span lang=EN-AU>&nbsp;</span></p>

<p class=CCX-Frontmatter-Text><span lang=EN-AU>CyberCX</span></p>

<p class=CCX-CoverInfo-Standout><span lang=EN-AU>Cyber Security + Customer
Experience</span></p>

<span lang=EN-AU style='font-size:11.0pt;line-height:110%;font-family:"Calibri",sans-serif'><br
clear=all style='page-break-before:always'>
</span>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoTocHeading><span lang=EN-AU>Table of Contents</span></p>
{{tableofcontents}}
<p class=MsoToc1><span lang=EN-AU><a href="#_Toc110250566"><b><span
style='font-size:10.0pt;line-height:110%'>1</span></b><span style='line-height:
110%;color:windowtext;text-decoration:none'>       </span><b><span
style='font-size:10.0pt;line-height:110%'>Executive Summary</span></b><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>. </span><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>5</span></a></span></p>

<p class=MsoToc1><span lang=EN-AU><a href="#_Toc110250567"><b><span
style='font-size:10.0pt;line-height:110%'>2</span></b><span style='line-height:
110%;color:windowtext;text-decoration:none'>       </span><b><span
style='font-size:10.0pt;line-height:110%'>Suitability as a Supplier</span></b><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>. </span><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>6</span></a></span></p>

<p class=MsoToc1><span lang=EN-AU><a href="#_Toc110250568"><b><span
style='font-size:10.0pt;line-height:110%'>3</span></b><span style='line-height:
110%;color:windowtext;text-decoration:none'>       </span><b><span
style='font-size:10.0pt;line-height:110%'>Scope of Works</span></b><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>. </span><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>11</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250569"><b><span
style='font-size:10.0pt'>3.1</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Service Requirements</span></b><span
style='color:windowtext;display:none;text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>11</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250570"><b><span
style='font-size:10.0pt'>3.2</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Service
Scope</span></b><span style='color:windowtext;display:none;text-decoration:
none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>11</span></a></span></p>

<p class=MsoToc1><span lang=EN-AU><a href="#_Toc110250571"><b><span
style='font-size:10.0pt;line-height:110%'>4</span></b><span style='line-height:
110%;color:windowtext;text-decoration:none'>       </span><b><span
style='font-size:10.0pt;line-height:110%'>Security Assessment Approach</span></b><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>. </span><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>22</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250572"><b><span
style='font-size:10.0pt'>4.1</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>External
Network Penetration Test</span></b><span style='color:windowtext;display:none;
text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>23</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250573"><b><span
style='font-size:10.0pt'>4.2</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Web
Application and Web Services Penetration Test</span></b><span style='color:
windowtext;display:none;text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>25</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250574"><b><span
style='font-size:10.0pt'>4.3</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Internal
Network Penetration Test</span></b><span style='color:windowtext;display:none;
text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>30</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250575"><b><span
style='font-size:10.0pt'>4.4</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Secure
Configuration Assessment</span></b><span style='color:windowtext;display:none;
text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>33</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250576"><b><span
style='font-size:10.0pt'>4.5</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Microsoft
Azure Security Configuration Review</span></b><span style='color:windowtext;
display:none;text-decoration:none'>.. </span><span
style='color:windowtext;display:none;text-decoration:none'>36</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250577"><b><span
style='font-size:10.0pt'>4.6</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>AWS Security
Configuration Review</span></b><span style='color:windowtext;display:none;
text-decoration:none'>.. </span><span
style='color:windowtext;display:none;text-decoration:none'>37</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250578"><b><span
style='font-size:10.0pt'>4.7</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Network
Vulnerability Assessment</span></b><span style='color:windowtext;display:none;
text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>39</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250579"><b><span
style='font-size:10.0pt'>4.8</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Mobile
Application Penetration Test</span></b><span style='color:windowtext;
display:none;text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>41</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250580"><b><span
style='font-size:10.0pt'>4.9</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Wireless
Network Penetration Test</span></b><span style='color:windowtext;display:none;
text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>45</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250581"><b><span
style='font-size:10.0pt'>4.10</span></b><span style='color:windowtext;
text-decoration:none'>  </span><b><span style='font-size:10.0pt'>VDI
Penetration Test</span></b><span style='color:windowtext;display:none;
text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>47</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250582"><b><span
style='font-size:10.0pt'>4.11</span></b><span style='color:windowtext;
text-decoration:none'>  </span><b><span style='font-size:10.0pt'>Microsoft 365
Security Configuration Review</span></b><span style='color:windowtext;
display:none;text-decoration:none'>.. </span><span
style='color:windowtext;display:none;text-decoration:none'>48</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250583"><b><span
style='font-size:10.0pt'>4.12</span></b><span style='color:windowtext;
text-decoration:none'>  </span><b><span style='font-size:10.0pt'>Active
Directory Security Assessment</span></b><span style='color:windowtext;
display:none;text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>51</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250584"><b><span
style='font-size:10.0pt'>4.13</span></b><span style='color:windowtext;
text-decoration:none'>  </span><b><span style='font-size:10.0pt'>Internet
Presence Assessment</span></b><span style='color:windowtext;display:none;
text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>52</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250585"><b><span
style='font-size:10.0pt'>4.14</span></b><span style='color:windowtext;
text-decoration:none'>  </span><b><span style='font-size:10.0pt'>Open-Source
Intelligence Assessment</span></b><span style='color:windowtext;display:none;
text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>53</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250586"><b><span
style='font-size:10.0pt'>4.15</span></b><span style='color:windowtext;
text-decoration:none'>  </span><b><span style='font-size:10.0pt'>Thick Client
Penetration Test</span></b><span style='color:windowtext;display:none;
text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>54</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250587"><b><span
style='font-size:10.0pt'>4.16</span></b><span style='color:windowtext;
text-decoration:none'>  </span><b><span style='font-size:10.0pt'>Secure Code
Review</span></b><span style='color:windowtext;display:none;text-decoration:
none'>.. </span><span
style='color:windowtext;display:none;text-decoration:none'>56</span></a></span></p>

<p class=MsoToc1><span lang=EN-AU><a href="#_Toc110250588"><b><span
style='font-size:10.0pt;line-height:110%'>5</span></b><span style='line-height:
110%;color:windowtext;text-decoration:none'>       </span><b><span
style='font-size:10.0pt;line-height:110%'>Assumptions</span></b><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>. </span><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>58</span></a></span></p>

<p class=MsoToc1><span lang=EN-AU><a href="#_Toc110250589"><b><span
style='font-size:10.0pt;line-height:110%'>6</span></b><span style='line-height:
110%;color:windowtext;text-decoration:none'>       </span><b><span
style='font-size:10.0pt;line-height:110%'>Risk Management</span></b><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>. </span><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>59</span></a></span></p>

<p class=MsoToc1><span lang=EN-AU><a href="#_Toc110250590"><b><span
style='font-size:10.0pt;line-height:110%'>7</span></b><span style='line-height:
110%;color:windowtext;text-decoration:none'>       </span><b><span
style='font-size:10.0pt;line-height:110%'>Deliverables and Reporting</span></b><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>. </span><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>60</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250591"><b><span
style='font-size:10.0pt;background:yellow'>7.1</span></b><span
style='color:windowtext;text-decoration:none'>    </span><b><span
style='font-size:10.0pt;background:yellow'>Interim Reporting</span></b><span
style='color:windowtext;display:none;text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>60</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250592"><b><span
style='font-size:10.0pt;background:yellow'>7.2</span></b><span
style='color:windowtext;text-decoration:none'>    </span><b><span
style='font-size:10.0pt;background:yellow'>Letter of Attestation</span></b><span
style='color:windowtext;display:none;text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>61</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250593"><b><span
style='font-size:10.0pt;background:yellow'>7.3</span></b><span
style='color:windowtext;text-decoration:none'>    </span><b><span
style='font-size:10.0pt;background:yellow'>Project Management</span></b><span
style='color:windowtext;display:none;text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>61</span></a></span></p>

<p class=MsoToc1><span lang=EN-AU><a href="#_Toc110250594"><b><span
style='font-size:10.0pt;line-height:110%'>8</span></b><span style='line-height:
110%;color:windowtext;text-decoration:none'>       </span><b><span
style='font-size:10.0pt;line-height:110%'>Investment Summary</span></b><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>. </span><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>65</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250595"><b><span
style='font-size:10.0pt'>8.1</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Option 1 –
Business Hours</span></b><span style='color:windowtext;display:none;text-decoration:
none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>65</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250596"><b><span
style='font-size:10.0pt'>8.2</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Option 2 -
Priority Work-stream</span></b><span style='color:windowtext;display:none;
text-decoration:none'>.. </span><span
style='color:windowtext;display:none;text-decoration:none'>65</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250597"><b><span
style='font-size:10.0pt'>8.3</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Expenses</span></b><span
style='color:windowtext;display:none;text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>66</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250598"><b><span
style='font-size:10.0pt'>8.4</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Variations
to Supply of Service</span></b><span style='color:windowtext;display:none;
text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>66</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250599"><b><span
style='font-size:10.0pt'>8.5</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Terms and
Conditions of Supply</span></b><span style='color:windowtext;display:none;
text-decoration:none'>. </span><span
style='color:windowtext;display:none;text-decoration:none'>66</span></a></span></p>

<p class=MsoToc2><span lang=EN-AU><a href="#_Toc110250600"><b><span
style='font-size:10.0pt'>8.6</span></b><span style='color:windowtext;
text-decoration:none'>    </span><b><span style='font-size:10.0pt'>Acceptance
of Proposal</span></b><span style='color:windowtext;display:none;text-decoration:
none'> </span><span
style='color:windowtext;display:none;text-decoration:none'>67</span></a></span></p>

<p class=MsoToc1><span lang=EN-AU><a href="#_Toc110250601"><b><span
style='font-size:10.0pt;line-height:110%'>9</span></b><span style='line-height:
110%;color:windowtext;text-decoration:none'>       </span><b><span
style='font-size:10.0pt;line-height:110%'>Contacts</span></b><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>. </span><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>68</span></a></span></p>

<p class=MsoToc1><span lang=EN-AU><a href="#_Toc110250602"><b><span
style='font-size:10.0pt;line-height:110%'>10</span></b><span style='line-height:
110%;color:windowtext;text-decoration:none'>     </span><b><span
style='font-size:10.0pt;line-height:110%'>Terms and Conditions</span></b><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>. </span><span
style='line-height:110%;color:windowtext;display:none;text-decoration:none'>69</span></a></span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

</div>

<span lang=EN-AU style='font-size:11.0pt;line-height:110%;font-family:"Calibri",sans-serif'><br
clear=all style='page-break-before:always'>
</span>

<div class=WordSection2>

<p class=Subheading2><span lang=EN-AU>Prepared by</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif'>Action</span></b></p>
   </td>
   <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif'>Name</span></b></p>
   </td>
   <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif'>Title</span></b></p>
   </td>
   <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif'>Date</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:black'>Prepared by:</span></p>
  </td>
  <td width="0%" valign=top style='width:0%;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>[Author 1 Name]</span></p>
  </td>
  <td width="0%" valign=top style='width:0%;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>[Author 1 Role]</span></p>
  </td>
  <td width="0%" valign=top style='width:0%;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>7-Apr-2021</span></p>
  </td>
 </tr>
 <tr>
  <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:black'>Reviewed by:</span></p>
  </td>
  <td width="0%" valign=top style='width:0%;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>[Author 2 Name]</span></p>
  </td>
  <td width="0%" valign=top style='width:0%;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>[Author 2 Role]</span></p>
  </td>
  <td width="0%" valign=top style='width:0%;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>7-Apr-2021</span></p>
  </td>
 </tr>
 <tr>
  <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:black'>Released by:</span></p>
  </td>
  <td width="0%" valign=top style='width:0%;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>[Author 1 Name]</span></p>
  </td>
  <td width="0%" valign=top style='width:0%;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>[Author 1 Role]</span></p>
  </td>
  <td width="0%" valign=top style='width:0%;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>7-Apr-2021</span></p>
  </td>
 </tr>
</table>

<p class=Subheading2 style='margin-top:12.0pt'><span lang=EN-AU>Revision
History</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="35%" valign=top style='width:35.0%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Version</span></p>
   </td>
   <td width="35%" valign=top style='width:35.0%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Revision
   Description</span></p>
   </td>
   <td width="30%" valign=top style='width:30.0%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Date</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="35%" valign=top style='width:35.0%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>0.1</span></p>
  </td>
  <td width="35%" valign=top style='width:35.0%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Draft Issued</span></p>
  </td>
  <td width="30%" valign=top style='width:30.0%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>7-Apr-2021</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoSubtitle><span class=CCXLBlueSubheading><span lang=EN-AU
style='font-size:11.0pt;line-height:110%;color:windowtext;font-weight:normal'>Distribution
List</span></span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=201 valign=top style='width:151.0pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader style='line-height:110%'><span lang=EN-AU
   style='font-weight:normal'>Name</span></p>
   </td>
   <td width=201 valign=top style='width:151.0pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader style='line-height:110%'><span lang=EN-AU
   style='font-weight:normal'>Organisation</span></p>
   </td>
   <td width=201 valign=top style='width:151.0pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader style='line-height:110%'><span lang=EN-AU
   style='font-weight:normal'>Title</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=201 valign=top style='width:151.0pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'></td>
  <td width=201 valign=top style='width:151.0pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;border:none windowtext 1.0pt;
  padding:0in;background:lime'><span style='color:windowtext;border:none'><span
  style='border:none'>[Client Long Name]</span></span></span></p>
  </td>
  <td width=201 valign=top style='width:151.0pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-AU> <br clear=all style='page-break-before:
always'>
</span></p>

<h1><a name="_Ref64464674"></a><a name="_Toc110250566"><span lang=EN-AU>1<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Executive Summary</span></a></h1>

<p class=MsoNormal><span lang=EN-AU>CyberCX is pleased to present our
expertise, scale, and full end-to-end service offering as you consider
appointing a trusted partner for your cyber security requirements, current and
future. </span></p>

<p class=MsoNormal><span lang=EN-AU>[Client Long Name] ([Client Short Name]) is
a <span style='background:yellow'>[What is the company? Which industry? etc]</span></span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>[Describe general
motivation for client pursuing STA services]</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>[SYSTEM]</span><span
lang=EN-AU> was developed by <span style='background:yellow'>[VENDOR]</span>
and is an <span style='background:yellow'>[internally/externally]</span> <span
style='background:yellow'>hosted web application</span>. <span
style='background:yellow'>[SYSTEM]</span> is classified as one of [Client Short
Name]’s most critical and sensitive systems, and as such, any compromise of the
<span style='background:yellow'>[SYSTEM]</span> system would be of major
concern.</span></p>

<p class=MsoNormal><span lang=EN-AU>Specifically, [Client Short Name] is
seeking the following services: </span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Service 1</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Service 2</span></p>

<p class=CCXTriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Service 3</span></p>

<p class=MsoNormal><span lang=EN-AU style='color:windowtext'>In conducting
these security assessments, CyberCX consultants comply with pre-defined rules
and restrictions identified within the relevant sections of this document and
agreed to by [Client Short Name].</span></p>

<p class=MsoNormal><span lang=EN-AU style='color:windowtext'>Working
collaboratively throughout the engagement, CyberCX consultants will ensure [Client
Short Name] is kept informed of critical findings. At the completion of <span
style='background:yellow'>this/these</span> engagement<span style='background:
yellow'>/s</span> a comprehensive report will be provided, detailing security
exposure from a business and technical risk viewpoint, as well as a
comprehensive set of recommendations designed to mitigate identified problem
areas. The report is considerate of the target audience, presenting complex
technical concepts in business context, with use of technical detail where
appropriate.</span></p>

<p class=MsoNormal><span lang=EN-AU style='color:windowtext'>In support of
enabling [Client Short Name] to understand the implication of all findings and
determine appropriate remediation steps, CyberCX includes one of the following
debriefing sessions as part of this engagement.</span></p>

<p class=MsoNormal><span lang=EN-AU style='color:#75AEFF'>Technical </span><span
lang=EN-AU>- aimed at system administrators, developers, and engineers, the
technical briefing is intended to provide an opportunity for knowledge transfer
to technical personnel of lessons learnt during the engagement. </span></p>

<p class=MsoNormal><span lang=EN-AU style='color:#75AEFF'>Management</span><span
lang=EN-AU> - session supports departmental/project management teams with
suitable information to determine the appropriate risk management strategy.</span></p>

<p class=MsoNormal><span lang=EN-AU style='color:#75AEFF'>Boardroom</span><span
lang=EN-AU> – as cyber security continues to be an executive leadership
priority these sessions empower executives with the information they need to
direct corporate strategy within [Client Short Name]</span></p>

<p class=MsoNormal><span lang=EN-AU>Our team is excited of the prospect to <span
style='background:yellow'>continue/form</span> our partnership with [Client
Short Name] and CyberCX looks forward to presenting our capability around cyber
resilience exercises to you.</span></p>

<p class=MsoNormal><span lang=EN-AU>Further detail on the project scope and our
approach to performing the security assessment<span style='background:yellow'>/s
are/is</span> detailed in the following Sections of this document.</span></p>

<h1><a name="_Toc110250567"><span lang=EN-AU>2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Suitability as a Supplier</span></a></h1>

<p class=MsoNormal><span lang=EN-AU>CyberCX is Australia’s leading cyber
security company, with over 900 full time cyber security practitioners. CyberCX
is relentlessly cyber in our outlook, driven by customer requirements, and
committed to creating a safer connected world. CyberCX is positioned at the
forefront of cyber security technology, capability, and expertise globally and
locally and is delighted to put forward our proposal for penetration testing
services. The CyberCX approach is to engage and partner with organisations to
deliver business outcomes and drive cyber security improvements.</span></p>

<p class=MsoNormal><span lang=EN-AU><img width=608 height=428 id="Picture 4"
src="http://127.0.0.1:5500/STA%20Proposal%20Template_files/image004.png"
alt="Graphical user interface, application&#10;&#10;Description automatically generated"></span></p>

<p class=MsoCaption><a name="_Toc71039905"><span lang=EN-AU>Figure </span></a><span lang=EN-AU>1</span><span lang=EN-AU> - Cyber Security Services Landscape</span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX has deep Australian industry
experience, giving us a true appreciation of the risks confronting [Client
Short Name] in the modern cyber landscape, as well as the industry best
practice tools and methodologies required to combat those risks. Importantly,
CyberCX provides flexible and agile testing methodologies, to assist [Client
Short Name] with their cyber security needs. CyberCX has extensive experience
providing augmentation to internal IT and Security teams, including penetration
testing, that address and exceed [Client Short Name] requirements.</span></p>

<span lang=EN-AU style='font-size:11.0pt;line-height:110%;font-family:"Calibri",sans-serif'><br
clear=all style='page-break-before:always'>
</span>

<p class=MsoNormal><span lang=EN-AU style='font-size:14.0pt;line-height:110%;
color:#040477'>&nbsp;</span></p>

<p class=Subheading2><span lang=EN-AU>Why CyberCX?</span></p>

<p class=MsoNormal><span lang=EN-AU style='font-size:12.0pt;line-height:110%;
color:#75AEFF'>Australian owned and operated. </span><span lang=EN-AU>CyberCX
is 100% Australian owned and operated with an extensive local presence. CyberCX
is investing in Australia, New Zealand, and focused on building world-class
capability. CyberCX can also ensure data sovereignty is always maintained
during assignments.</span></p>

<p class=MsoNormal><span lang=EN-AU style='font-size:12.0pt;line-height:110%;
color:#75AEFF'>Scale and breadth of offering.</span><span lang=EN-AU
style='font-size:10.0pt;line-height:110%'> </span><span lang=EN-AU>With over
150 staff employed in its Security Testing and Assurance practice, the CyberCX
security testing, application security, and training team is the leading cyber
security company in the Asia Pacific region. CyberCX has performed over 2,000
security tests across over 30 services in the past year alone, discovering a
plethora of vulnerabilities. These tests and resulting security recommendations
have led to significant security improvements for CyberCX clients across
systems, applications, infrastructure, and operations. It is this extensive
experience and expertise which CyberCX would leverage to perform the
high-quality best practice testing services which [Client Short Name] is
seeking.</span></p>

<p class=MsoNormal><span lang=EN-AU style='font-size:12.0pt;line-height:110%;
color:#75AEFF'>Structured processes, methodologies, and quality. </span><span
lang=EN-AU>CyberCX has developed a detailed testing process and methodology
which aligns with best practice approaches, technical standards, as well as
utilising known issues and techniques drawn from our proprietary knowledge base
(1,000’s of findings across 100’s of technologies) built through previous
security testing engagements. </span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX have defined a cross-practice
Subject Matter Expert (SME) team for all items in our service catalogue. They
are responsible for streamlining, building, and maintaining all materials for
that offering. Time is allocated for quarterly updates and this approach is
integral to our market leading offering.</span></p>

<p class=MsoNormal><span lang=EN-AU>Combined, this ensures consistency,
comprehensive coverage during testing, and the highest likelihood of
discovering security issues. All deliverables are peer reviewed and have a
management review to ensure they meet strict CyberCX quality standards and are
fit for purpose for the intended audience – whether technical stakeholders or
the Board.</span></p>

<p class=MsoNormal><span lang=EN-AU style='font-size:12.0pt;line-height:110%;
color:#75AEFF'>Innovation</span><span lang=EN-AU style='font-size:10.0pt;
line-height:110%'>. </span><span lang=EN-AU>In the constantly evolving cyber
landscape, CyberCX are committed to continuous innovation and service
improvement and expansion. To this end, CyberCX have dedicated Research &amp;
Development and Capability functions focused on pioneering and improving
tactics, techniques, and practices. The objective is to develop unique IP and
provide something back to our customers and the community through thought
leadership, training, whitepapers, and presentations.</span></p>

<p class=MsoNormal><span lang=EN-AU>In addition to internally developed
capabilities, CyberCX security tester’s techniques and tools are also informed
by the cutting-edge of real-world adversaries thanks to our collaboration with
CyberCX Security Operations Centre (SOC), Threat Intelligence (TI), Managed
Security Services (MSS), and Digital Forensics and Incident Response (DFIR)
staff. This IP, comparative assessment trends, and insight is included as part
of every engagement. </span></p>

<p class=MsoNormal><span lang=EN-AU>Leveraging the cross-practice skills and
capabilities of our peers CyberCX offers practical advice that helps our
customers become secure faster.   </span></p>

<p class=MsoNormal><span lang=EN-AU style='font-size:12.0pt;line-height:110%;
color:#75AEFF'>Vulnerability research and disclosure</span><span lang=EN-AU
style='font-size:12.0pt;line-height:110%'>. </span><span lang=EN-AU>CyberCX,
and historically its constituents, undertake vulnerability research and have
coordinated and publicly disclosed more vendor vulnerabilities (over 60) than
any other company in Australia and New Zealand. This is part of our role in
making the Internet a safer place. <br clear=all style='page-break-before:always'>
</span></p>

<p class=Subheading2><span lang=EN-AU>The CyberCX Response</span></p>

<p class=MsoNormal><span lang=EN-AU>This proposal from CyberCX details the
following:</span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>A partnership with [Client Short Name] to provide a dynamic
personalised testing service in line with the scope and processes outlined in
the <span style='background:yellow'>RFP</span>, </span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>An extensive, highly trained, certified, and experienced onshore
team of Australian security testers with an expansive track record of
delivering successful testing outcomes to customer deadlines, and </span></p>

<p class=CCXTriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>A flexible and competitive pricing model designed to address [Client
Short Name]’s unique requirements.</span></p>

<p class=MsoNormal><span lang=EN-AU>Our combination of knowledge, skills, and
understanding uniquely positions CyberCX to provide the most comprehensive
offering for your cyber security needs. </span></p>

<p class=Subheading2><span lang=EN-AU>CREST Member Company with Certified
Testers</span></p>

<p class=MsoNormal><img width=139 height=137
src="http://127.0.0.1:5500/STA%20Proposal%20Template_files/image005.png" align=left hspace=12><span
lang=EN-AU>CREST is an international not-for-profit accreditation and
certification body that represents and supports the technical information security
market. Unlike other professional disciplines, prior to CREST there was no
traditional barrier to entry placed on participants in the penetration testing
industry, and subsequently many unskilled and unregulated parties could trade
in the field without challenge.</span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX is accredited as a member company
in Australasia and the UK, employs certified testers, and has representation on
the board to help shape the direction and standard of security testing in
Australia.</span></p>

<p class=Subheading2><span lang=EN-AU>CyberCX People</span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX provides an extensive, highly
trained, certified, and experienced onshore national team of security testers,
with a physical presence in Australia, New Zealand, the UK, and the USA. They
have an average of 15 years in cyber security and IT, and our most experienced
have over 25 years’ experience. With an expansive track record of delivering
successful testing outcomes to our clients, our team actively maintain a
variety of respected industry certifications, including but not limited to:</span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>CREST - CCT &amp; CRT </span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Offensive Security Certified Professional (OSCP)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Offensive Security Certified Expert (OSCE) </span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Offensive Security Exploitation Expert (OSEE)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Offensive Security Web Expert (OSWE)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Offensive Security Wireless Professional (OSWP)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Certified Information Systems Security Professional (CISSP)</span></p>

<p class=CCXTriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>SANS – GWAPT, GPEN, GMOB and many others </span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX runs a bi-annual internal
conference (STAckerCon) to ensure our staff are well versed on current trends
and techniques and facilitate cross-practice information sharing within
CyberCX. An additional customer only track will be added within the next 12
months to share the best curated local content and case studies. </span></p>

<p class=MsoNormal><span lang=EN-AU>Due to the sensitive nature of engagements,
many of our consultants maintain government security clearances (i.e. Baseline,
NV1, NV2 and PV) and all consultants undertake routine police checks. </span></p>

<p class=Subheading2><span lang=EN-AU>Industry Expertise  </span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX have been engaged by a significant
number of institutions within the <span style='background:yellow'>Australian
Financial Services industry</span>. Some of those that can be disclosed include
the <span style='background:yellow'>Reserve Bank of Australia, Australia and
New Zealand Bank, and Macquarie</span>. Due to the high level of
confidentiality, CyberCX is unable to disclose the specific nature of the
services provided to these institutions, however CyberCX can arrange and
coordinate confidential references at the above organisations as well as others
at the request of [Client Short Name].</span></p>

<h1><a name="_Ref64464650"></a><a name="_Ref64464661"></a><a name="_Ref64464690"></a><a
name="_Ref64464697"></a><a name="_Toc110250568"><span lang=EN-AU>3<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Scope of Works</span></a></h1>

<p class=MsoNormal><span lang=EN-AU>This section outlines our understanding of [Client
Short Name]’s requirements for this engagement.</span></p>

<p class=MsoNormal><span lang=EN-AU>The following requirements were identified
in a meeting between [Client Contact Name] of [Client Short Name], and <span
style='color:windowtext'>[CyberCX Business Contact] of CyberCX on <span
style='background:yellow'>[DD Month YYYY]</span>.</span></span></p>

<p class=MsoNormal><span lang=EN-AU>[Client Short Name] is seeking professional
services to test the security posture of its in-scope assets. Specifically, [Client
Short Name] requests to have a [Job Name] conducted on their <span
style='background:yellow'>[thing we are assessing the security of]</span>. The
objective of this assessment is to identify security weaknesses, gain access to
systems and provide recommendations as to appropriate mitigation strategies.</span></p>

<h2><a name="_Toc63349818"></a><a name="_Toc110250569"><span lang=EN-AU>3.1<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Service Requirements</span></a><span lang=EN-AU>
</span></h2>

<p class=MsoNormal><span lang=EN-AU>To deliver the [Job Name] as requested by [Client
Short Name], the following components have been identified as essential.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343625"></a><a name="_Toc71039868"><span lang=EN-AU>Table </span></a><span lang=EN-AU>1</span><span lang=EN-AU> - Table of <a>Services</a></span><span
class=MsoCommentReference><span lang=EN-AU style='font-size:8.0pt;color:windowtext;
font-style:normal'><a class=msocomanchor id="_anchor_1"
onmouseover="msoCommentShow('_anchor_1','_com_1')"
onmouseout="msoCommentHide('_com_1')" href="#_msocom_1" language=JavaScript
name="_msoanchor_1">[NC1]</a>&nbsp;</span></span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Item</span></p>
   </td>
   <td width=357 valign=top style='width:267.4pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Component</span></p>
   </td>
   <td width=75 valign=top style='width:56.4pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Scope</span></p>
   </td>
   <td width=113 valign=top style='width:84.4pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Methodology</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>1</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>External Network Penetration Testing</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>3.2.1</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>4.1</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>2</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>Web Application Penetration Testing</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>3.2.2</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>4.1.3</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>3</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>Web Services Penetration Testing</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>3.2.3</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>4.1.3</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>4</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>Internal Network Penetration Test</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>3.2.4</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>4.3</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>5</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>Secure Configuration Assessment</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>3.2.5</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>4.3.3</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>6</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>Microsoft Azure Security Configuration Review</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>3.2.6</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>4.5</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>7</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>AWS Security Configuration Review</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>3.2.7</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>4.5.3</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>8</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>Network Vulnerability Assessment Testing</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>3.2.8</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>4.6.3</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>9</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>Mobile Application Penetration Testing</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>3.2.9</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>4.7.3</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>10</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>Wireless Network Penetration Testing</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>3.2.10</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>4.8.3</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>11</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>VDI Penetration Testing</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>3.2.11</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>4.9.3</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>12</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>Microsoft 365 Security Configuration Review</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>3.2.12</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>4.10.3</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>13</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Active
  Directory Security Assessment</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>3.2.13</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>4.12</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>14</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>Internet Presence
  Assessment</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>3.2.14</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>4.13</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>15</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Open-Source
  Intelligence Assessment</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>3.2.15</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>4.14</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>16</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>Thick Client
  Penetration Test</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>3.2.16</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:black'>4.15</span></p>
  </td>
 </tr>
 <tr>
  <td width=56 valign=top style='width:42.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>17</span></p>
  </td>
  <td width=357 valign=top style='width:267.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Secure Code
  Review</span></p>
  </td>
  <td width=75 valign=top style='width:56.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>3.2.17</span></p>
  </td>
  <td width=113 valign=top style='width:84.4pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span
  lang=EN-AU style='color:windowtext'>4.16</span></p>
  </td>
 </tr>
</table>

<h2><a name="_Toc63349819"></a><a name="_Ref85712010"></a><a
name="_Toc110250570"><span lang=EN-AU>3.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Service Scope</span></a><span lang=EN-AU> </span></h2>

<p class=MsoNormal><a><span lang=EN-AU>The</span></a><span
class=MsoCommentReference><span lang=EN-AU style='font-size:8.0pt;line-height:
110%'><a class=msocomanchor id="_anchor_2"
onmouseover="msoCommentShow('_anchor_2','_com_2')"
onmouseout="msoCommentHide('_com_2')" href="#_msocom_2" language=JavaScript
name="_msoanchor_2">[NC2]</a>&nbsp;</span></span><span lang=EN-AU> following
hosts, devices, network segments, and systems were identified as being included
in this review:</span></p>

<h3><a name="_Ref52277102"><span lang=EN-AU>3.2.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>External Network Penetration Testing</span></a><span
lang=EN-AU> </span></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying and
exploiting vulnerabilities in the following subnets, IPs, or hosts:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343626"></a><a name="_Toc71039869"><span lang=EN-AU>Table </span></a><span lang=EN-AU>2</span><span lang=EN-AU> - Target for External Network Testing</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Targets</span></p>
   </td>
   <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="50%" valign=top style='width:50.0%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  IP addresses and their functions in this table&gt;&gt;</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  68.25.45.117 – FTP server</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>68.25.45.118
  – DNS server </span></p>
  </td>
  <td width="50%" valign=top style='width:50.0%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width="50%" valign=top style='width:50.0%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Devices
  that should specifically not be tested</span></p>
  </td>
  <td width="50%" valign=top style='width:50.0%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  Voice System (68.25.45.117) – known stability issues</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-AU>The external networks being tested are
understood to have the following attributes that will be considered during
testing:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343627"></a><a name="_Toc71039870"><span lang=EN-AU>Table </span></a><span lang=EN-AU>3</span><span lang=EN-AU> - External Network Attributes</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='width:99.96%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Attributes</span></p>
   </td>
   <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="50%" valign=top style='width:50.0%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Number
  of websites hosted on target network</span></p>
  </td>
  <td width="50%" valign=top style='width:50.0%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Please
  insert number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="50%" valign=top style='width:50.0%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Domain
  names associated with the target network</span></p>
  </td>
  <td width="50%" valign=top style='width:50.0%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  </span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>abc.com</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>mail.abc.com</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>xyz.com.au</span></p>
  </td>
 </tr>
 <tr>
  <td width="50%" valign=top style='width:50.0%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Intrusion
  Detection System (IDS) / Intrusion Prevention System (IPS) in place</span></p>
  </td>
  <td width="50%" valign=top style='width:50.0%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Yes/no</span></p>
  </td>
 </tr>
 <tr>
  <td width="50%" valign=top style='width:50.0%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Business
  Critical Systems on the target network</span></p>
  </td>
  <td width="50%" valign=top style='width:50.0%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Exchange
  server</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Primary
  business internet connection</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref52277097"><span lang=EN-AU>3.2.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Web Application Penetration Testing</span></a></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying and
exploiting vulnerabilities in web applications hosted at the following URLs:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343628"></a><a name="_Toc71039871"><span lang=EN-AU>Table </span></a><span lang=EN-AU>4</span><span lang=EN-AU> - Targets for Application Testing</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width=601 style='width:450.7pt;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>URLs</span></p>
   </td>
   <td width=450 valign=top style='width:337.3pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:black;background:yellow'>&lt;&lt;Insert
  URL’s in this table&gt;&gt;</span></p>
  </td>
  <td width=450 valign=top style='width:337.3pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>Auth
  / Unauth?</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-top:6.0pt'><span lang=EN-AU>The web
application developed <span style='background:yellow'>[internally or by ???
vendor]</span> is understood to have the following attributes that will be
tested:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343629"></a><a name="_Toc71039872"><span lang=EN-AU>Table </span></a><span lang=EN-AU>5</span><span lang=EN-AU> - Web Application Attributes</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Attributes</span></p>
   </td>
   <td width="74%" valign=top style='width:74.84%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Number and type of user roles</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>e.g.</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>Guest</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>Read
  Only</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>Admin</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Number of System features / functionality / unique
  application parameters </span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>e.g.
  </span></p>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Changing user account details (e.g.
  password, address, etc.)   </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Login pages  </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Adding an item to shopping cart  </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Making a payment via credit card  </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Uploading a document  </span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Performing a search based on keyword
  and/or other criteria  </span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Application technologies</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-BulletsBullets style='margin-left:21.25pt;text-indent:-21.25pt'><span
  lang=EN-AU style='line-height:110%;color:windowtext;background:yellow'>e.g.
  ASP.NET, IIS, MS SQL Server, Java, Apache, MySQL, PHP, etc.</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Application sensitive information</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>e.g.
  credit cards, health records, etc.</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Source code supplied</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>Y/N</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Application vendor/host </span></p>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>&nbsp;</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>The
  application is hosted by ??? and managed by ???.</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Remote/local testing</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>Testing
  to be delivered remotely over the Internet.</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Testing environment</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>e.g.
  PROD / UAT / SIT / STAGING</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref71039906"><span lang=EN-AU>3.2.3<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Web Services Penetration Testing</span></a></h3>

<p class=MsoNormal><span lang=EN-AU style='color:windowtext'>Testing will focus
on identifying and exploiting vulnerabilities in APIs hosted at the following
URLs:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343630"></a><a name="_Toc71039873"><span lang=EN-AU>Table </span></a><span lang=EN-AU>6</span><span lang=EN-AU> - Targets for Web Services Penetration
Testing</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='width:99.92%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>URLs</span></p>
   </td>
   <td width="0%" valign=top style='width:0%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="50%" valign=top style='width:50.0%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Please
  insert URL’s in this table&gt;&gt;</span></p>
  </td>
  <td width="50%" valign=top style='width:50.0%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Auth
  / Unauth?</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Web
  services? REST?</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-top:6.0pt'><span lang=EN-AU>The web services
developed <span style='background:yellow'>[internally or by ??? vendor]</span>
is understood to have the following attributes that will be tested:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343631"></a><a name="_Toc71039874"><span lang=EN-AU>Table </span></a><span lang=EN-AU>7</span><span lang=EN-AU> - Web Services Attributes</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.14%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Attributes</span></p>
   </td>
   <td width="74%" valign=top style='width:74.86%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.14%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Authentication
  type</span></p>
  </td>
  <td width="74%" valign=top style='width:74.86%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  None, HTTP Basic Authentication, NTLM Authentication, HTTP Digest,
  username/password as parameters (in each call), OAuth, OpenID or certificate
  based.</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.14%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Web
  Service type</span></p>
  </td>
  <td width="74%" valign=top style='width:74.86%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  SOAP, REST</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.14%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Externally accessible</span></p>
  </td>
  <td width="74%" valign=top style='width:74.86%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Yes/no</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.14%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Number of methods </span></p>
  </td>
  <td width="74%" valign=top style='width:74.86%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>&lt;&lt;Please insert number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.14%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Number of unique parameters</span></p>
  </td>
  <td width="74%" valign=top style='width:74.86%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>&lt;&lt;Please insert number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.14%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Web Service framework</span></p>
  </td>
  <td width="74%" valign=top style='width:74.86%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>&lt;&lt;if used please specify&gt;&gt;</span></p>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>e.g. Windows Communication Foundation (WCF), Apache
  Axis/Axis2, and Glassfish.</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.14%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Application vendor/host </span></p>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>&nbsp;</span></p>
  </td>
  <td width="74%" valign=top style='width:74.86%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>The application is hosted by ??? and managed by ???.</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.14%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Remote/local testing</span></p>
  </td>
  <td width="74%" valign=top style='width:74.86%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Testing to be delivered remotely over the Internet.</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.14%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Testing environment</span></p>
  </td>
  <td width="74%" valign=top style='width:74.86%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>e.g. PROD / UAT / SIT / STAGING</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref52277076"><span lang=EN-AU>3.2.4<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Internal Network Penetration Testing</span></a></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying and
exploiting vulnerabilities in the following subnets, IPs, or hosts:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343632"></a><a name="_Toc71039875"><span lang=EN-AU>Table </span></a><span lang=EN-AU>8</span><span lang=EN-AU> - Targets for Internal Network Penetration
Testing</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Targets</span></p>
   </td>
   <td width="74%" valign=top style='width:74.84%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  IP addresses, subnets or hosts&gt;&gt;</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  estimate of active hosts&gt;&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-top:6.0pt'><span lang=EN-AU>The internal
networks being tested is understood to have the following attributes that will
be considered during testing:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343633"></a><a name="_Toc71039876"><span lang=EN-AU>Table </span></a><span lang=EN-AU>9</span><span lang=EN-AU> - Internal Network Attributes</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Attributes</span></p>
   </td>
   <td width="74%" valign=top style='width:74.84%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Number
  of diverse networks, AD Domains / Forests being tested</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Please
  insert number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Testing
  is possible from a single location </span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Yes/no</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Testing is possible via VPN or remote access </span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Yes/no</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Number of staff at</span><span lang=EN-AU
  style='line-height:110%;color:windowtext'> [Client Short Name]</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>&lt;&lt;Please insert number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Standard Operating Environment (SOE) in use</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Yes/no</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>Estimates
  of the total number of each device in the target network</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-BulletsBullets style='margin-left:21.25pt;text-indent:-21.25pt'><span
  lang=EN-AU style='line-height:110%;color:windowtext;background:yellow'>e.g.</span></p>
  <p class=Table-BulletsCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>50x Windows
  workstations </span></p>
  <p class=Table-BulletsCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>53x IP-based
  telephones, </span></p>
  <p class=Table-BulletsCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>2x database servers, </span></p>
  <p class=Table-BulletsCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>4x web servers, </span></p>
  <p class=Table-BulletsCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>1x routers, </span></p>
  <p class=Table-BulletsCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>1x firewalls </span></p>
  <p class=Table-BulletsCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>3x switches</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>Testing
  is to be conducted   from on-site/remotely through a remote access solution</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-BulletsBullets style='margin-left:21.25pt;text-indent:-21.25pt'><span
  lang=EN-AU style='line-height:110%;color:windowtext;background:yellow'>&nbsp;</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref52276972"><span lang=EN-AU>3.2.5<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Secure Configuration Assessment</span></a><span
lang=EN-AU> </span></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying security
weaknesses and misconfigurations on the following hosts:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343634"></a><a name="_Toc71039877"><span lang=EN-AU>Table </span></a><span lang=EN-AU>10</span><span lang=EN-AU> - Targets for Host Security Assessment</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Targets</span></p>
   </td>
   <td width="74%" valign=top style='width:74.84%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Operating
  Systems</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  versions to be assessed and count&gt;&gt;</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  Windows Server 2016 Standard x 5</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Applications</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  versions to be assessed and count&gt;&gt;</span></p>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>e.g. SQL Server 2019 Standard x 1</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Devices,
  models, and firmware</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  versions to be assessed and count&gt;&gt;</span></p>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>e.g. Cisco Meraki MX64W (FW 15.13)</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-top:6.0pt'><span lang=EN-AU>The hosts being
tested is understood to have the following attributes that will be considered
during testing:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343635"></a><a name="_Toc71039878"><span lang=EN-AU>Table </span></a><span lang=EN-AU>11</span><span lang=EN-AU> - Host Attributes</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Attributes</span></p>
   </td>
   <td width="74%" valign=top style='width:74.84%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Standard
  or industry standard to benchmark against</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  CIS, NIST, NSA, etc. </span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Controls
  in place to prevent Potentially Unwanted Applications (PUA)</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  application whitelisting, PowerShell restrictions, inability to install/copy
  any software onto system, etc.</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Access
  level for conducting testing</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  Administrator, root access, standard user etc</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref71039907"><span lang=EN-AU>3.2.6<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Microsoft Azure Security Configuration Review</span></a><span
lang=EN-AU> </span></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying security
weaknesses and misconfigurations in the following subscriptions:</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=133 valign=top style='width:99.7pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif;
   color:white'># Subscriptions</span></b></p>
   </td>
   <td width=292 valign=top style='width:219.0pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif;
   color:white'>Azure Products</span></b></p>
   </td>
   <td width=66 valign=top style='width:49.6pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif;
   color:white'>#Instances</span></b></p>
   </td>
   <td width=110 valign=top style='width:82.25pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif;
   color:white'># Virtual Networks</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=133 valign=top style='width:99.7pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>&nbsp;</span></p>
  </td>
  <td width=292 valign=top style='width:219.0pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <h3 style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:
  .25in;text-align:justify;text-indent:-.25in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:Symbol;color:windowtext;
  background:yellow;font-weight:normal'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;font-family:"Calibri",sans-serif;
  color:windowtext;background:yellow;font-weight:normal'>Compute (Virtual
  Machines, Functions, Batch, Virtual Machine Scale Sets, Azure Container
  Service (AKS), Service Fabric, App Service, Container Instances, Cloud
  Services)</span></h3>
  <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Networking (Virtual Network, Azure DNS, ExpressRoute,
  Network Watcher, Application Gateway, Content Delivery Network, Bandwidth, IP
  Addresses, VPN Gateway, Traffic Manager, Azure DDoS Protection, Load
  Balancer)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Storage (Storage, Backup, Data Lake Store, Site Recovery,
  StorSimple)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Web + Mobile (App Service, Media Services, Logic Apps,
  Azure Search, Content Delivery Network)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Containers (Azure Container Service, Service Fabric,
  Container Instances, Batch, Container Registry)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Databases (SQL Database, SQL Data Warehouse, Redis Cache,
  Azure Database for MySQL, SQL Server Stretch Database, Data Factory, Azure
  Database for PostgreSQL, Azure Cosmos Database, Azure Database Migration
  Service)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Data + Analytics (HDInsight, Data Lake Store, Dynamics 365
  for Customer Insights, Machine Learning Services, Stream Analytics, Data
  Catalog, Event Hubs, Power BI Embedded, Data Lake Analytics, Azure Analysis
  Services, SQL Data Warehouse)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>AI + Cognitive Services (Machine Learning Services,
  Microsoft Genomics, Machine Learning Studio, Cognitive Services)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Internet of Things (IoT Hub, Time Series Insights, Logic
  Apps, Event Hubs, IoT Edge, Machine Learning Studio, Stream Analytics, Event
  Grid, Notification Hubs)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Enterprise Integration (Data Factory, Service Bus, Event
  Grid, API Management, Data Catalog)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Security + Identity (Security Center, Azure Active
  Directory B2C, Key Vault, Azure Active Directory)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Developer Tools (Visual Studio Team Services, Visual
  Studio App Center, Application Insights)</span></p>
  <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Monitoring + Management (Backup, Azure Monitor, Azure
  Policy, Log Analytics, Site Recovery, Insights &amp; Analytics, Azure Managed
  Applications, Automation, Scheduler, Cost Management, Azure Advisor)</span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'> </span></p>
  </td>
  <td width=66 valign=top style='width:49.6pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>&nbsp;</span></p>
  </td>
  <td width=110 valign=top style='width:82.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>&nbsp;</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref71039909"><span lang=EN-AU>3.2.7<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>AWS Security Configuration Review</span></a></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying security
weaknesses and misconfigurations in the following tenancies:</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=104 valign=top style='width:77.75pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif;
   color:white'># Tenancies</span></b></p>
   </td>
   <td width=350 valign=top style='width:262.2pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif;
   color:white'>AWS Services</span></b></p>
   </td>
   <td width=76 valign=top style='width:56.7pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif;
   color:white'># Instances</span></b></p>
   </td>
   <td width=72 valign=top style='width:53.9pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif;
   color:white'># VPC</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=104 valign=top style='width:77.75pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>&nbsp;</span></p>
  </td>
  <td width=350 valign=top style='width:262.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Compute (EC2, EC2 Container Service, Lightsail, Elastic
  Beanstalk, Lambda, Batch)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Storage (S3, EFS, Glacier, Storage Gateway)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Database (RDS, DynamoDB, ElastiCache, Amazon Redshift)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Networking &amp; Content Delivery (VPC, CloudFront, Direct
  Connect, Route 53)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Migration (AWS Migration Hub, Application Discovery
  Service, Database Migration Service, Server Migration Service, Snowball)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Developer Tools (CodeStar, CodeCommit, CodeBuild,
  CodeDeploy, CodePipeline, X-Ray)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Management Tools (CloudWatch, CloudFormation, Cloudtrail,
  Config, Opsworks, Service Catalog, Trusted Advisor, Managed Services)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Security, Identity &amp; Compliance (IAM, Inspector,
  Certificate Manager, Directory Service, WAF &amp; Shield, Artifact, Amazon
  Macie, CloudHSM)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Analytics (Athena, EMR, CloudSearch, Elasticsearch
  Service, Kinesis, Data Pipeline, QuickSight, AWS Glue)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Artificial Intelligence (Lex, Amazon Polly, Rekognition,
  Machine Learning)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Internet of Things (AWS IoT, AWS Greengrass)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Contact Center (Amazon Connect)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Game Development (Amazon GameLift)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Mobile Services (Mobile Hub, Cognito, Device Farm, Mobile
  Analytics, Pinpoint)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Application Services (Step Functions, SWF, API Gateway,
  Elastic Transcoder)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Messaging (Simple Queue Service, Simple Notification
  Service, Simple Email Service)</span></p>
  <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:windowtext;background:yellow'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Business Productivity (WorkDocs, WorkMail, Amazon Chime)</span></p>
  <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
  margin-bottom:0in;margin-left:.25in;text-align:justify;text-indent:-.25in;
  line-height:normal'><span lang=EN-AU style='font-size:10.0pt;font-family:
  Symbol;color:#040477'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>Desktop &amp; App Streaming (Workspaces, AppStream 2.0)</span></p>
  </td>
  <td width=76 valign=top style='width:56.7pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>&nbsp;</span></p>
  </td>
  <td width=72 valign=top style='width:53.9pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>&nbsp;</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref71039912"><span lang=EN-AU>3.2.8<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Network Vulnerability Assessment Testing</span></a><span
lang=EN-AU> </span></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying security
weaknesses and misconfigurations the following subnets, IPs, or hosts:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343636"></a><a name="_Toc71039879"><span lang=EN-AU>Table </span></a><span lang=EN-AU>12</span><span lang=EN-AU> - Targets for Network Vulnerability
Assessment</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Targets</span></p>
   </td>
   <td width="74%" valign=top style='width:74.84%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  IP addresses and their functions in this table&gt;&gt;</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  68.25.45.117 – FTP server</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>68.25.45.118
  – DNS server</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  versions to be assessed and count&gt;&gt;</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  Windows Server 2016 Standard x 5</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Devices
  that should specifically not be tested</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  Voice System (68.25.45.117) – known stability issues</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-top:6.0pt'><span lang=EN-AU>The networks being
tested are understood to have the following attributes that will be considered
during testing:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343637"></a><a name="_Toc71039880"><span lang=EN-AU>Table </span></a><span lang=EN-AU>13</span><span lang=EN-AU> – Network Attributes</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Attributes</span></b></p>
   </td>
   <td width="74%" valign=top style='width:74.84%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Notes</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Number
  of websites hosted on target network</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Please
  insert number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Domain
  names associated with the target network</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.
  </span></p>
  <p class=Table-BulletsCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>abc.com</span></p>
  <p class=Table-BulletsCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>mail.abc.com</span></p>
  <p class=Table-BulletsCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>xyz.com.au</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Intrusion Detection System (IDS) / Intrusion Prevention
  System (IPS) in place</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Yes/no</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Business Critical Systems on the target network</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>e.g.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Exchange
  server</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Primary
  business internet connection </span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref71040820"><span lang=EN-AU>3.2.9<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Mobile Application Penetration Testing</span></a></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying security
weaknesses and misconfigurations of the following applications:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343638"></a><a name="_Toc71039881"><span lang=EN-AU>Table </span></a><span lang=EN-AU>14</span><span lang=EN-AU> - Targets for Mobile Application
Penetration Testing</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='width:99.84%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="28%" valign=top style='width:28.3%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Targets</span></b></p>
   </td>
   <td width="71%" valign=top style='width:71.7%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Notes</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="28%" valign=top style='width:28.3%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Application
  Names</span></p>
  </td>
  <td width="71%" valign=top style='width:71.7%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  name and version to be assessed&gt;&gt;</span></p>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>e.g. Chat Client v2.56</span></p>
  </td>
 </tr>
 <tr>
  <td width="28%" valign=top style='width:28.3%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Operating
  Systems</span></p>
  </td>
  <td width="71%" valign=top style='width:71.7%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  versions to be assessed and count&gt;&gt;</span></p>
  <p class=Table-BulletsCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>iOS 14</span></p>
  <p class=Table-BulletsCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>Android 12</span></p>
  </td>
 </tr>
 <tr>
  <td width="28%" valign=top style='width:28.3%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Devices</span></p>
  </td>
  <td width="71%" valign=top style='width:71.7%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  device model if being provided by client&gt;&gt;</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Alternatively
  delete this row</span></p>
  </td>
 </tr>
 <tr>
  <td width="28%" valign=top style='width:28.3%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Application
  Location</span></p>
  </td>
  <td width="71%" valign=top style='width:71.7%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  where the consultant will obtain the application from&gt;&gt;</span></p>
  <p class=Table-BulletsCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>App Store URL</span></p>
  <p class=Table-BulletsCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-family:Symbol;color:windowtext;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='color:windowtext;background:yellow'>Installers provided by
  client</span></p>
  </td>
 </tr>
 <tr>
  <td width="28%" valign=top style='width:28.3%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Testing environment</span></p>
  </td>
  <td width="71%" valign=top style='width:71.7%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>e.g. PROD / UAT / SIT / STAGING</span></p>
  </td>
 </tr>
 <tr>
  <td width="28%" valign=top style='width:28.3%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:black;
  background:yellow'>Source code provided</span></p>
  </td>
  <td width="71%" valign=top style='width:71.7%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='line-height:110%;color:windowtext;
  background:yellow'>Yes / No</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref71040873"><span lang=EN-AU>3.2.10<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Wireless Network Penetration Testing</span></a></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying and
exploiting misconfigurations and vulnerabilities in the following WiFi
networks:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343639"></a><a name="_Toc71039882"><span lang=EN-AU>Table </span></a><span lang=EN-AU>15</span><span lang=EN-AU> - Targets for Wireless Testing</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width=601 style='width:450.7pt;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>SSID</span></p>
   </td>
   <td width=450 valign=top style='width:337.3pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Purpose</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Corporate&gt;&gt;</span></p>
  </td>
  <td width=450 valign=top style='width:337.3pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>General
  network access</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Guest&gt;&gt;</span></p>
  </td>
  <td width=450 valign=top style='width:337.3pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Guest
  access</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;BYOD&gt;&gt;</span></p>
  </td>
  <td width=450 valign=top style='width:337.3pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Bring
  your own device</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref71040908"><span lang=EN-AU>3.2.11<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>VDI Penetration Testing</span></a></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying and
exploiting misconfigurations and weaknesses in the following virtual desktop
environments:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343640"></a><a name="_Toc71039883"><span lang=EN-AU>Table </span></a><span lang=EN-AU>16</span><span lang=EN-AU> - Targets for VDI Testing</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=302 valign=top style='width:226.6pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>VDI
   Platform</span></p>
   </td>
   <td width=302 valign=top style='width:226.6pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Purpose</span></p>
   </td>
   <td width=302 valign=top style='width:226.6pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Number of
   users</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=302 valign=top style='width:226.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Citrix&gt;&gt;</span></p>
  </td>
  <td width=302 valign=top style='width:226.6pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Remote
  staff access</span></p>
  </td>
  <td width=302 valign=top style='width:226.6pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=302 valign=top style='width:226.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Amazon
  Workspaces&gt;&gt;</span></p>
  </td>
  <td width=302 valign=top style='width:226.6pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Remote
  administration</span></p>
  </td>
  <td width=302 valign=top style='width:226.6pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=302 valign=top style='width:226.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Azure
  VDI&gt;&gt;</span></p>
  </td>
  <td width=302 valign=top style='width:226.6pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>Developer
  access</span></p>
  </td>
  <td width=302 valign=top style='width:226.6pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&nbsp;</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Toc63349820"></a><a name="_Ref71040938"><span lang=EN-AU>3.2.12<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-AU>Microsoft 365 Security Configuration Review</span></a></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying security
weaknesses and misconfigurations in the following Microsoft 365 services:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><span
lang=EN-AU>Table </span><span lang=EN-AU>17</span><span lang=EN-AU>: Scope for Microsoft
365 Configuration Review</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=601 colspan=2 valign=top style='width:450.55pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif;
   color:white'>Microsoft 365 Services</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=597 valign=top style='width:448.0pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table><span style='font-family:"Calibri",sans-serif;color:black'>The
  following M365 components are in use and will be reviewed as part of this
  assessment:</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in'><span
  lang=EN-AU style='color:windowtext;background:yellow'>1.<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='background:yellow'>M365 Core Services</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in'><span
  lang=EN-AU style='color:windowtext;background:yellow'>2.<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='background:yellow'>Exchange</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in'><span
  lang=EN-AU style='color:windowtext;background:yellow'>3.<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='background:yellow'>Teams &amp; Skype</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in'><span
  lang=EN-AU style='color:windowtext;background:yellow'>4.<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='background:yellow'>SharePoint</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in'><span
  lang=EN-AU style='color:windowtext;background:yellow'>5.<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='background:yellow'>OneDrive</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in'><span
  lang=EN-AU style='color:windowtext;background:yellow'>6.<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='background:yellow'>Yammer</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in'><span
  lang=EN-AU style='color:windowtext;background:yellow'>7.<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='background:yellow'>PowerApps</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in'><span
  lang=EN-AU style='color:windowtext;background:yellow'>8.<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='background:yellow'>Flow</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in'><span
  lang=EN-AU style='color:windowtext;background:yellow'>9.<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='background:yellow'>Azure Active Directory</span></p>
  <p class=Table><span style='font-family:"Calibri",sans-serif;color:black'>The
  following additional third-party components will be reviewed as part of this assessment:</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in'><span
  lang=EN-AU style='color:windowtext;background:yellow'>10.<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
  lang=EN-AU style='background:yellow'>Identity Provider (IdP) – Name</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in'><span
  lang=EN-AU style='color:windowtext'>11.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='background:yellow'>Mail Filtering
  Gateway – Nam</span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=3><p class='MsoNormal'>&nbsp;</td>
 </tr>
</table>

<h3><a name="_Ref82172803"><span lang=EN-AU>3.2.13<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Active Directory Security Assessment</span></a></h3>

<p class=MsoNormal><span lang=EN-AU>Testing will focus on identifying security
weaknesses and misconfigurations in the following:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><span
lang=EN-AU>Table </span><span lang=EN-AU>18</span><span lang=EN-AU>: Scope of
Active Directory Security Assessment</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Attributes</span></p>
   </td>
   <td width="74%" valign=top style='width:74.84%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Number of
  Forests and Domains to be assessed</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Number of trust
  relationships with external domains</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Number of
  active users</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Number of
  Groups</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Number of
  Computers</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Number of GPOs</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  number&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Approximate age
  of the domain</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  number&gt;&gt;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-top:12.0pt'><span lang=EN-AU>CyberCX will
require one low-privilege AD account and one administrative AD account.</span></p>

<h3><a name="_Ref85110357"><span lang=EN-AU>3.2.14<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Internet Presence Assessment</span></a></h3>

<p class=MsoNormal style='margin-top:12.0pt'><span lang=EN-AU>Testing will
focus on identifying additional DNS domains and subdomains, and IP ranges
relating to the organisation, with the following information used as a starting
point:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><span
lang=EN-AU>Table </span><span lang=EN-AU>19</span><span lang=EN-AU>: Seeding
information for Internet Presence Assessment</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Attributes</span></p>
   </td>
   <td width="74%" valign=top style='width:74.84%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Known DNS
  domains:</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  known DNS Domains&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Known IP
  ranges:</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  known IP ranges&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Known WHOIS
  contact details (Admin or Tech):</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  known WHOIS&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Product or
  business brands:</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  known brands/products&gt;&gt;</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref86311306"><span lang=EN-AU>3.2.15<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Open-Source Intelligence Assessment</span></a></h3>

<p class=MsoNormal style='margin-top:12.0pt'><span lang=EN-AU>The following
seeding information will be used as the starting point for this assessment:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><span
lang=EN-AU>Table </span><span lang=EN-AU>20</span><span lang=EN-AU>: Seeding
information for Open-Source Intelligence Assessment</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='width:100.0%;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Attributes</span></p>
   </td>
   <td width="74%" valign=top style='width:74.84%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Known DNS
  domains:</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  known DNS Domains&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Known IP
  ranges:</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  known IP ranges&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Product or
  business brands:</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Insert
  known brands/products&gt;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Persons of
  interest:</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&lt;&lt;Persons
  of interest&gt;&gt;</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref86417926"><span lang=EN-AU>3.2.16<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Thick Client Penetration Test</span></a></h3>

<p class=MsoNormal style='margin-top:12.0pt'><span lang=EN-AU>Testing will
focus on identifying security weakness and misconfigurations of the following
application(s):</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><span
lang=EN-AU>Table </span><span lang=EN-AU>21</span><span lang=EN-AU>: Attributes
of Thick Client Penetration Test</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 5.4pt 0in 5.4pt'>
   <p class=TableHeader><span lang=EN-AU>Attributes</span></p>
   </td>
   <td width=374 valign=top style='width:280.65pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 5.4pt 0in 5.4pt'>
   <p class=TableHeader><span lang=EN-AU>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Application
  name and version</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>&lt;&lt;Insert name and version to be
  assessed&gt;&gt;</span></p>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>e.g. Chat Client v2.56</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Roles to be
  tested:</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>eg.</span></p>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Guest</span></p>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Read-Only</span></p>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Admin</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Application
  Technologies:</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>e.g. .NET, Java, C/C++, etc.</span><span
  lang=EN-AU> </span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Features/functionality
  to be tested:</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>e.g.</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in;line-height:
  normal'><span lang=EN-AU style='font-family:Symbol;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='background:yellow'>Changing user
  account details (e.g. password, address, etc.) </span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in;line-height:
  normal'><span lang=EN-AU style='font-family:Symbol;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='background:yellow'>Logon</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in;line-height:
  normal'><span lang=EN-AU style='font-family:Symbol;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='background:yellow'>Uploading a document</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in;line-height:
  normal'><span lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='background:yellow'>Performing a search
  based on keyword and/or other criteria </span><span lang=EN-AU> </span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Application
  sensitive information:</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>e.g. credit cards, health records, etc.</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Application
  location</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>&lt;&lt;Insert where the consultant will obtain the
  application from&gt;&gt;</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in;line-height:
  normal'><span lang=EN-AU style='font-family:Symbol;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='background:yellow'>URL</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in;line-height:
  normal'><span lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='background:yellow'>Provided by client</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Source code
  provided</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Yes/No</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref87269070"><span lang=EN-AU>3.2.17<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Secure Code Review</span></a></h3>

<p class=MsoNormal style='margin-top:12.0pt'><span lang=EN-AU>Secure code
review will focus on identifying security weakness <a>and</a></span><span
class=MsoCommentReference><span lang=EN-AU style='font-size:8.0pt;line-height:
110%'><a class=msocomanchor id="_anchor_3"
onmouseover="msoCommentShow('_anchor_3','_com_3')"
onmouseout="msoCommentHide('_com_3')" href="#_msocom_3" language=JavaScript
name="_msoanchor_3">[LD3]</a>&nbsp;</span></span><span lang=EN-AU>
misconfigurations within the codebase of the following application(s):</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><span
lang=EN-AU>Table </span><span lang=EN-AU>21</span><span lang=EN-AU>: Attributes
of Secure Code Review</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 5.4pt 0in 5.4pt'>
   <p class=TableHeader><span lang=EN-AU>Attributes</span></p>
   </td>
   <td width=374 valign=top style='width:280.65pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 5.4pt 0in 5.4pt'>
   <p class=TableHeader><span lang=EN-AU>Notes</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Type of
  application or service</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Codebase is supporting thick client,B2B, data
  processers, web client etc</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Lines of code</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Can be calculated by customer or by us with access
  to repository</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Application
  functionality</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>e.g.</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in;line-height:
  normal'><span lang=EN-AU style='font-family:Symbol;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='background:yellow'>Changing user
  account details (e.g. password, address, etc.) </span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in;line-height:
  normal'><span lang=EN-AU style='font-family:Symbol;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='background:yellow'>Logon</span></p>
  <p class=Table-Text style='margin-left:.25in;text-indent:-.25in;line-height:
  normal'><span lang=EN-AU style='font-family:Symbol;background:yellow'>·<span
  style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='background:yellow'>Uploading a document</span></p>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Performing a search based on keyword and/or other
  criteria e.g. credit cards, health records etc</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>User roles
  within the application</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Internal admin/guest/low privilege users</span></p>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>External customer admins/guest/low privilege users</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Languages and
  frameworks in use</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>e.g. .NET, Java, C/C++, etc.</span><span
  lang=EN-AU> </span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Identity and
  access management solution in use</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Auth0, OAuth, OpenID, JWT, MFA, Certificate-base
  authentication, API Keys, LDAP etc</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Application
  sensitive information:</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>e.g. credit cards, health records, etc.</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Data sources
  accessed by the app and third-party connections</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>e.g. databases, email, file shares, SharePoint, SMS
  gateways, business systems, banking systems etc</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Types of data
  stored</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Structure database (sql), semi-structured database,
  unstructured database, filesystem etc.</span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Commercial
  SAST tool required as part of the review</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Y/N</span><span lang=EN-AU> </span></p>
  </td>
 </tr>
 <tr>
  <td width=226 valign=top style='width:169.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU>Build
  instructions made available to run a local instance of the app</span></p>
  </td>
  <td width=374 valign=top style='width:280.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=Table-Text style='line-height:normal'><span lang=EN-AU
  style='background:yellow'>Y/N</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-top:12.0pt'><span lang=EN-AU>&nbsp;</span></p>

<h1><a name="_Toc110250571"><span lang=EN-AU>4<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Security Assessment Approach</span></a><span
lang=EN-AU> </span></h1>

<p class=MsoNormal><span lang=EN-AU>CyberCX's approach to security consulting
is derived from leading industry standards that assist to guide our approach
including ISO 27001 (Security Management) and ISO 31000 (Risk Management) in
combination with the CyberCX in-house developed processes and methodologies
based on decades of prior assessments.</span></p>

<p class=MsoNormal><span lang=EN-AU>All security testing and assurance
engagements are aligned with industry respected methodologies and in most cases
far surpass them. Based on the nature and scope of the engagement, CyberCX will
leverage one or more of the following, and extend this with our own best of
breed methodologies developed over thousands of successful engagements:</span></p>

<p class=BulletsTriangularCxSpFirst style='margin-left:21.3pt;text-indent:-21.3pt'><span
lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>National
Institute of Standards and Technology (NIST) SP 800-115 Technical Guide to
Information Security Testing</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Information
Systems Security Assessment Framework (ISSAF)</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>The
Penetration Testing Execution Standard (PTES)</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Open
Web Application Security Project (OWASP) guidelines</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Open-Source
Security Testing Methodology Manual (OSSTMM)</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>OWASP
Application Security Verification Standard (ASVS)</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>CWE/SANS
Top 25 Most Dangerous Software Errors</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Open
Web Application Security Project (OWASP) Software Assurance Maturity Model
(SAMM)</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Microsoft
Security Development Lifecycle</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Building
Security in Maturity Model (BSIMM)</span></p>

<p class=BulletsTriangularCxSpLast style='margin-left:21.3pt;text-indent:-21.3pt'><span
lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>SEI
CERT Oracle Coding Standard for Java</span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX is also experienced at delivering
security testing and assurance activities based on specific standards or
requirements. For example, CyberCX’s Payment Card Industry Qualified Security
Assessors (PCI QSA) are authorised and experienced at servicing clients that
have obligations under the Payment Card Industry Data Security Standard (PCI
DSS).</span></p>

<p class=MsoNormal><span lang=EN-AU>Upon appointment CyberCX has an internal
and external kick-off meeting with key stakeholders. This ensures the customer
understands the project pre-requisites, and that the consultant is well-briefed
on the project requirements and expectations to ensure success. It also allows
agreement on standard project expectations such as updates and deliverable
dates and deadlines.</span></p>

<p class=MsoNormal><span lang=EN-AU>Our security consultants commence the
engagement fieldwork and examine the attack surface of the target system by
establishing a threat model. This mapping exercise highlights the areas where
security weaknesses may be present and prepares for the next step of the
process. Testing the attack surface is performed through a combination of
automated tools, manual methods, and profound security knowledge collected and
shared across the team over years of conducting similar engagements. Automated
open-source and commercial tools aid with coverage by identifying configuration
issues or outdated and vulnerable software and assist with directing the consultants
in where they may need to investigate further.</span></p>

<p class=MsoNormal><span lang=EN-AU>The rigorous testing process and alignment
to leading industry respected methodologies ensures that our approach is
tailored to meet our client’s specific needs and delivering high-quality
results on engagements.</span></p>

<h2><a name="_Ref52277027"></a><a name="_Toc63349821"></a><a
name="_Toc110250572"></a><a name="_Toc68594345"></a><a name="_Toc68669021"></a><a
name="_Toc68669807"></a><a name="_Toc71039644"></a><a name="_Toc71039759"></a><span
lang=EN-AU>4.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>External Network Penetration Test</span></h2>

<h3><span lang=EN-AU>4.1.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>An external network penetration test seeks
to identify vulnerabilities or misconfigurations in [Client Short Name]’s
Internet facing infrastructure, operating systems, and core services. </span></p>

<p class=MsoNormal style='margin-top:6.0pt'><span lang=EN-AU>External network
penetration testing is performed from the standpoint of an unauthenticated,
external threat actor with limited knowledge of the target environment. The
assessment utilises tools, techniques, and procedures (TTP) commonly utilised
by key threat actors to compromise networks and systems. This includes a
combination of automated and manual techniques to simulate an attack against [Client
Short Name]’s assets.</span></p>

<p class=MsoNormal><span lang=EN-AU>Automated testing is often used to identify
key areas that a consultant should focus on. Using manual testing methods, a
consultant will look to exploit the vulnerabilities to bypass controls, and
gain access to the internal network or gain access to ’s sensitive information.
</span></p>

<h3><span lang=EN-AU>4.1.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting an external network penetration test. Each stage of the external
network penetration test is described in detail in the table below.</span></p>

<p class=MsoCaption align=left style='margin-top:2.0pt;margin-right:0in;
margin-bottom:2.0pt;margin-left:0in;text-align:left;page-break-after:avoid'><a
name="_Toc63343641"></a><a name="_Toc71039884"><span lang=EN-AU>Table </span></a><span lang=EN-AU>22</span><span lang=EN-AU> - External Network Penetration Testing
Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr style='height:2.75pt'>
   <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt;height:2.75pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Stage</span></p>
   </td>
   <td width=451 valign=top style='width:337.9pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt;
   height:2.75pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Description</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Information Gathering
  and Reconnaissance</span></b></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>CyberCX first
  assumes the role of an unauthenticated threat actor without valid credentials
  to the service. If vulnerabilities are identified, they are exploited to gain
  deeper access into the service and its data, other hosts that support the
  service, and where possible, the network on which the service resides.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Port Scanning</span></b></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>This involves the
  identification of supported protocols and listening ports on the target hosts
  on both IPv4 and IPv6 where applicable. Listening ports indicate services
  running on the remote host that may allow CyberCX (or unauthorised users) to
  gain access to systems that are misconfigured or running outdated software
  that has known vulnerabilities. In addition, it may allow CyberCX to
  determine valid access paths to a remote host and identify security controls
  that appear to be in place surrounding discovered hosts.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Enumeration</span></b></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Triangle style='margin-left:0in;text-indent:0in'><span
  lang=EN-AU>This involves the extraction of information from target systems
  listening services. For example this information may be gathered through
  application banners or DNS records. Attempts are made to identify open ports,
  running services, operating systems and hosted applications on the target
  systems. </span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Vulnerability Scan</span></b></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>This involves the
  systematic scanning of network infrastructure for known operating system,
  service and application vulnerabilities. This is performed using customised
  tools, proprietary scripts, commercial, and best of breed publicly available
  or open-source tools.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Vulnerability
  Analysis and Exploitation</span></b></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>CyberCX will
  receive the results from the previous components of this phase and develop an
  exploitation roadmap. This takes vulnerabilities, misconfigurations, possible
  bugs, and other security related issues identified, and converts them into
  viable attack scenarios designed to yield maximum results.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Once the
  scenarios have been established, executed, and their results are analysed, CyberCX
  will assess the risk of the identified vulnerabilities and proceed with their
  exploitation. If there is any risk of service interruption, CyberCX will raise
  during the engagement.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Testing during
  this phase may use some of the following techniques: (non-exhaustive list):</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Gain initial access through password attacks including default
  configurations, exploiting system misconfigurations and vulnerabilities.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Explore historic public data breach dumps to gain passwords for a
  given domain.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Password cracking techniques to gain access to user accounts or
  systems.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Establish persistent control over the environment through multiple
  account compromises or hijacked execution flows.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Perform post exploitation techniques to escalate privileges or
  facilitate information retrieval.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Laterally move through the environment due to inherent weaknesses
  in the environment’s permission model.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Evade known defensive mechanisms through custom benign malware
  developed by CyberCX, combined with bypassing known endpoint and network
  level protection capabilities.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Escalate privileges through process injection attacks or
  misconfigured application and operating system deployments.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Ensure command and control remotely to the environment through
  encrypted egress channels and protocol tunnelling.</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Obtain evidence of breaches such as PII, business data, privileged
  access, etc., if system access is obtained.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Further
  techniques and tactics CyberCX will employ can be found in the Mitre
  ATT&amp;CK framework.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Note: The
  techniques outlined in this component are a necessary part of the CyberCX
  methodology and are like techniques utilised by threat actors to gain unauthorised
  access to network systems. At the completion of the engagement all systems
  will be returned to their original state.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Reporting</span></b></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>This is the final
  stage of the engagement and forms a permanent record of the work undertaken.
  The report will contain a detailed understanding of the scope, approach, and
  findings, along with a comprehensive set of recommendations designed to
  mitigate identified problem areas.</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref52277015"></a><a name="_Toc63349822"><span lang=EN-AU>4.1.3<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-AU>Testing Technical Requirements</span></a></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To ensure a
successful engagement, the following are CyberCX’s technical requirements that
need to be fulfilled before the commencement of an External Network Penetration
Test. These technical requirements are in addition to the service scoping
information located in Section </span><span
lang=EN-AU style='background:yellow'>3.2</span><span lang=EN-AU
style='background:yellow'>.</span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Hosting
provider permission has been provided (if required)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Network
diagrams and system documentation (mandatory for Timeboxed/Scenario engagements,
otherwise comprehensiveness of testing decreases)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>List
of any sensitive or “light touch” systems where you would like extra caution to
be taken</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Confirmation
that CyberCX IP addresses are whitelisted through intrusion protection systems
and will not be rate limited because of port scanning or suspicious network
traffic.</span></p>

<p class=CCXTriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Emergency
contact details of the project SMEs and leaders, including mobile phone
numbers.</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>As a reminder,
please note that once CyberCX has confirmed the testing commencement date, any
delays need to be communicated to CyberCX at least 3 business days prior to
this date. Any time lost from delays not communicated at least 3 business days
in advance will be charged at the agreed rate for each day lost.</span></p>

<h2><a name="_Toc110250573"><span lang=EN-AU>4.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Web Application and Web Services Penetration
Test</span></a></h2>

<h3><span lang=EN-AU>4.2.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>A web application and web service
penetration test will seek to identify vulnerabilities present in the in-scope
products. This would typically include any application that is served over
Hypertext Transfer Protocol (HTTP) and covers web sites with content that is
accessible via a web browser.</span></p>

<p class=MsoNormal><span lang=EN-AU>Our testing will simulate how a threat
actor would attack the deployed application through web-accessible interfaces.
The presence of vulnerabilities is determined by directing a series of requests
to a web application and evaluating the responses received. This allows CyberCX
to precisely detect any active and exploitable vulnerabilities which may be
present, circumvent business processes, and allow access to [Client Short Name]’s
data. </span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX’s web application and web service
penetration testing will encompass all issues covered within leading
frameworks, such as OWASP Top 10 and CWE/SANS Top 25 Most Dangerous Software
Errors, among others. While these provide a sound foundation for identifying
security vulnerabilities, further investigation is necessary to determine the
full risk a threat actor may pose to [Client Short Name]. As such, CyberCX may
extend penetration testing activity to include aspects of multiple methodologies,
including the OWASP testing guide (up to 94 tests), OWASP Application Security
Verification Standard (up to 286 tests). CyberCX also utilises in-house
methodologies to address custom testing requirements and ensuring critical
functionality such a business logic is rigorously tested.</span></p>

<p class=MsoNormal><span lang=EN-AU>Web application and web service penetration
testing relies on a combination of automated and manual testing, with a focus
on manual testing. The testing is performed initially using a suite of industry
leading open-source and commercial automated tools. This provides broad
coverage, a solid baseline, and identifies all 'low-hanging fruit'. Automated
tools identify configuration issues and obvious vulnerabilities, but perform
poorly when assessing application logic, authorisation, privilege escalation
issues and implemented functionality from a security perspective. </span></p>

<p class=MsoNormal><span lang=EN-AU>Extensive manual testing is conducted to
bridge the gaps of automated testing and to validate vulnerabilities, eliminate
false positives, and develop proof of concept exploits that allow for risks to
be tangibly assessed.</span></p>

<p class=MsoNormal><a><span lang=EN-AU style='background:yellow'>Considering
the complexity of modern frameworks and web
applications,&nbsp;CyberCX&nbsp;recommends and prefers&nbsp;the assessment of
web applications to include access to the source code. This allows&nbsp;CyberCX&nbsp;to
optimise the process of finding vulnerabilities,&nbsp;by&nbsp;allowing
the&nbsp;consultant&nbsp;to refine manual and automated security test
cases&nbsp;and&nbsp;target&nbsp;aspects of the application that are most at
risk of compromise. Such testing, commonly known as&nbsp;white-box, is the
recommended approach to deliver the maximum value out of modern penetration
tests, for the following reasons:&nbsp;</span></a></p>

<p class=BulletsTriangularCxSpFirst style='margin-left:21.3pt;text-indent:-21.3pt'><span
lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='background:yellow'>Vulnerability discovery&nbsp;can be accurately
verified without risk of false positive findings, as the consultant can
accurately&nbsp;identify&nbsp;if a vulnerability exists and/or whether it
is&nbsp;exploitable;&nbsp;</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:35.7pt;text-indent:
-17.85pt'><span lang=EN-AU style='font-family:"Courier New";color:#1CE3E6;
background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='background:yellow'>Where a single instance of a vulnerability
is identified,&nbsp;e.g.&nbsp;SQL injection,&nbsp;the consultant is
able&nbsp;to review the source code to identify similar patterns of occurrence
through the entire code base&nbsp;for comprehensive and
in-depth&nbsp;coverage;&nbsp;</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6;
background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU style='background:yellow'>The approach provides the consultant
a&nbsp;better understanding of the overall internals of the
application&nbsp;and technology stack, to identify design flaws that could take
weeks or months of&nbsp;black-box&nbsp;testing to reveal;&nbsp;</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6;
background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU style='background:yellow'>For each
vulnerability,&nbsp;CyberCX&nbsp;can refer precisely to the source code, and
provide ready-to-use&nbsp;mitigations&nbsp;for the
specific&nbsp;configuration;&nbsp;</span></p>

<p class=BulletsTriangularCxSpMiddle style='margin-left:21.3pt;text-indent:
-21.3pt'><span lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6;
background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU style='background:yellow'>Facilitate the interaction between
developer and security teams, to discuss ways of eliminating certain attack vectors;
and</span></p>

<p class=BulletsTriangularCxSpLast style='margin-left:21.3pt;text-indent:-21.3pt'><span
lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='background:yellow'>Align&nbsp;with a defence-in-depth approach to
testing systems and applications&nbsp;where a&nbsp;consultant
can&nbsp;identify&nbsp;practices&nbsp;regarding&nbsp;secure&nbsp;secrets
management, third-party&nbsp;dependency&nbsp;and library&nbsp;patching, and in
some cases infrastructure deployment practices.&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>Source-code
assisted penetration testing does not replace a full source code review, but
instead, helps optimise security testing time and effectiveness&nbsp;against
identified&nbsp;target areas and practices&nbsp;within the products.</span><span
lang=EN-AU>&nbsp;</span><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt;line-height:110%'><a class=msocomanchor id="_anchor_4"
onmouseover="msoCommentShow('_anchor_4','_com_4')"
onmouseout="msoCommentHide('_com_4')" href="#_msocom_4" language=JavaScript
name="_msoanchor_4">[JE4]</a>&nbsp;</span></span></p>

<p class=MsoNormal><span lang=EN-AU>Our testing commonly reveals web
application vulnerabilities, including:</span></p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span lang=EN-AU
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Broken authentication</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Failure to restrict URL access</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Cross Site Scripting (XSS)</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Authorisation checks</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>XML External Entity (XXE) attack</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Weak input validation</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Injection flaws (SQL injection, command injection,
etc.)</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Error handling and sensitive information
disclosure</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Insecure transmission of credentials and
sensitive data</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Web server infrastructure related
vulnerabilities</span></p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'><span
lang=EN-AU style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Abuse of functionality</span></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span lang=EN-AU
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Business logic flaws</span></p>

<h3><span lang=EN-AU>4.2.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting a web application penetration test. Each stage of a web application
penetration test is described in detail in the table below. </span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343642"></a><a name="_Toc71039885"><span lang=EN-AU>Table </span></a><span lang=EN-AU>23</span><span lang=EN-AU> - Web Application and Web Services
Penetration Testing Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Stage</span></p>
   </td>
   <td width=454 valign=top style='width:340.2pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Description</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Unauthenticated</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>CyberCX first
  assumes the role of an unauthenticated threat actor without valid credentials
  to the application. If vulnerabilities are found through unauthenticated
  testing, they are exploited to gain deeper access into the application and
  its data, other hosts that support the application, and the network on which
  the application resides.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Authorisation Testing</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>If the
  application is authenticated, the next stage assumes standard user access to
  determine if valid users can circumvent authorisation controls. In a
  role-based authorisation environment, these stages can be repeated for each
  type of user and access level, depending on the scope and requirements of the
  assessment. This uncovers vulnerabilities in horizontal and vertical
  privilege escalation attacks in addition to identifying standard web
  application vulnerabilities.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Application Design</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>In the third
  and final stage of the assessment, the web application’s design is reviewed
  to determine:</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>The flow of data between key components of the application’s ecosystem.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Sufficiency of segregation of key network services.</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Whether the confidentiality and integrity of data is protected at
  all points between the browser and back-end databases.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This phase of
  the assessment is largely based on desktop review of available documentation
  provided before the engagement begins.</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Some of the key
  functions and processes commonly reviewed during this phase include:</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>User registration,</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Logon and logoff related processes and functions,</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Password policies applicable to each account type,</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Processes involving forgotten passwords,</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Processes involving changing passwords,</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Updating user details,</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Business functionality and rules,</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Transaction finalisation or check-out related processes.</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-AU>CyberCX’s web application and web service
penetration testing methodology focuses on assessing the following key domains:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343643"></a><a name="_Toc71039886"><span lang=EN-AU>Table </span></a><span lang=EN-AU>24</span><span lang=EN-AU> - Web Service Penetration Testing Key
Domains</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Component</span></p>
   </td>
   <td width=454 valign=top style='width:340.2pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Description
   </span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Authentication
  Mechanisms</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Determine whether
  any authenticated content exists within the site. Assuming some is found, CyberCX
  will assess the strength of the authentication mechanism in use and attempt
  to bypass it. Some of the techniques used may include user enumeration,
  default or guessable passwords, brute-forcing passwords, and client password
  caching.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Authorisation Issues</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Evaluate
  whether the authorisation scheme adequately protects access to files and
  objects. Some of the techniques used may include directory/path traversals, modifying
  cookies, requesting hidden objects with guessable names, attempting
  canonicalisation attacks, escalating privileges, and tunnelling privileged
  commands to the SQL server (SQL injection).</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Data Validation</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Data validation
  ensures the integrity of information used by an application. CyberCX will
  perform analysis of each individual function of the application and attempt
  to inject faults into each receptacle. By injecting unexpected data an
  adversary may be able to learn more about the way the application is
  configured and may enumerate unauthorised or sensitive information. The
  analysis will commonly include:</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Common validators, </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Data sanitisation, </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Positive and negative data validation, </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Output filtering, </span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Type checking.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Some of the
  attack techniques/weaknesses used may include cross-site scripting, SQL
  injection, LDAP injection, ORM injection, XML injection, SSI injection, XPath
  injection, IMAP/SMTP injection, code injection, OS commanding, overflow
  testing, and format strings.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Session Management</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Review the
  techniques used to manage sessions through the application. Popular
  techniques include cookies, URL rewriting, session identifiers and session
  lifetime. Some of the attack techniques and weaknesses may include session ID
  prediction and brute-forcing, session fixation, CSRF, testing session
  timeouts, and spoofing tokens within a cookie.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Parser Issues</span></b></p>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>(XML and JSON)</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>CyberCX will
  attempt to exploit known vulnerabilities within JSON and XML parsers,
  depending on the payloads supported by the application. By sending carefully
  crafted XML documents to the service an adversary may be able to enumerate
  details about the internal network and file systems or trigger XML External
  Entity (XXE) injections to extract files from the server or upload malware
  from the internet. JSON parsers will be tested for known vulnerabilities such
  as insecure object deserialisation.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Exception Management</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Assess how the
  application handles faults and error conditions. Poorly handled conditions
  may give an adversary more information about the application than necessary
  enabling them to fine tune an attack.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Error
  conditions could occur when:</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Unrecognised data is entered into a field,</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Unsupported file extensions are queried,</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>URL’s are tampered with,</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Attempts are made to manoeuvre between different parts of a site
  in an unauthorised manner.</span></p>
  <p class=Table-BulletsBullets style='margin-left:0in'><span lang=EN-AU
  style='line-height:110%;color:windowtext'>A well-designed application should
  contain exception management mechanisms that not only detect exceptions but
  audit exception anomalies to enable monitoring and logging of these events.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Cryptography</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Evaluate the
  effectiveness/suitability of crypto technologies in place between client and
  server or between entities in the system. Encryption is the most powerful
  form of cryptography and is essential in preventing information leakage.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Sensitive
  information should be encrypted during transport and encrypted when stored
  where possible.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Data Connectivity</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Review the
  nature of any connections between the front-end and backend databases and
  report on the security implications this may have. CyberCX will also attempt
  to modify input variables to affect the way the database performs (SQL
  injection).</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Management Interface</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Determine
  whether a remote management interface exists and report on the security
  implications this may have. Here CyberCX will look at web server
  administration, web content management, and web-based network and system
  management.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Client-Side Attacks</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Assess the
  exposure of web clients to attacks by manipulating server-side code. Here CyberCX
  look at issues like Active content attacks, Cross-Site Scripting (XSS),
  client-side caching, and cookie manipulation vulnerabilities.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Business Logic</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Applications
  contain workflows and implement business rules and policies specific to that
  application. This logic can be susceptible to flaws which allow for actions
  outside these workflows and business rules to be performed which may provide
  a vector for system or data compromise. CyberCX will evaluate this attack
  vector.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Auditing and Logging</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Logs are a key
  component of the intrusion detection and incident response process. They
  should be a complete and accurate record of the actions performed against the
  system and data stored.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Where
  applicable and in-scope of the engagement, CyberCX will work with application’s
  stakeholders to assess the events captured and the mechanisms in place to
  prevent modification/deletion and evaluate the incident response and
  escalation process surrounding adverse events.</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-top:6.0pt'><span lang=EN-AU>Note: The
components contained above are in no way meant to be an exhaustive list of the
tests that will be performed during an engagement. It is provided to illustrate
our methodology and the testing techniques that are commonly performed during
these types of reviews. The final testing performed depends entirely on
components and weaknesses identified from upfront threat modelling conducted.</span></p>

<h3><span lang=EN-AU>4.2.3<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Testing Technical Requirements</span></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To ensure a
successful engagement, the following are CyberCX’s technical requirements that
need to be fulfilled before the commencement of Web Application and Web
Services Penetration Test. These technical requirements are in addition to the
service scoping information located in Section </span><span
lang=EN-AU style='background:yellow'>3.2</span><span lang=EN-AU
style='background:yellow'>.</span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Environment
type (e.g. Production/UAT/Development)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>In-scope
URLs / IP addresses</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>If
this is a Whitebox assessment, please provide access to source code</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>User
account credentials and role descriptions (CyberCX typically needs at least 2
accounts for each role)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Hosting
provider permission (for third party hosts)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Other
information that may be needed for testing (e.g. multi-factor token generator,
dummy credit card details)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Appropriate
access has been provisioned to the application</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>API/user
documentation has been provided</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Please
provide an API project file in one of the following formats:</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>Insomnia </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>Postman </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>SoapUI </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>WSDL</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>For
each request type, please provide valid payloads for each API endpoint (e.g.
Postman/Insomnia Exports). This should include a list of all valid variables
which can be updated.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>All
user levels/groups have been provisioned</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Sufficient
data exists to allow the full scope of testing</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>That
the test environment can be accessed from an external address</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Confirmation
that provided URL’s can be publicly resolved</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Confirmation
that CyberCX IP addresses are whitelisted through intrusion protection systems
or web application firewalls and will not be rate limited because of port scanning
or suspicious network and application traffic.</span></p>

<p class=CCXTriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Emergency
contact details of the project SMEs and leaders, including mobile phone numbers</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>As a reminder,
please note that once CyberCX has confirmed the testing commencement date, any
delays need to be communicated to CyberCX at least 3 business days prior to
this date. Any time lost from delays not communicated at least 3 business days
in advance will be charged at the agreed rate for each day lost.</span></p>

<h2><a name="_Ref52277006"></a><a name="_Ref52277129"></a><a name="_Toc63349823"></a><a
name="_Toc110250574"><span lang=EN-AU>4.3<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Internal Network Penetration Test</span></a></h2>

<h3><span lang=EN-AU>4.3.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>Organisations are commonly targeted with
social engineering attacks and malware with the objective of gaining access to
internal systems and data or encrypting files and demanding a ransom. While
these may originate from external sources, an unsuspecting party that clicks on
a link or executes malicious code can be easily compromised and used as a pivot
point to attack other systems or data in the internal network. Thus, a
successful external attack can quickly become a broader internal attack.</span></p>

<p class=MsoNormal><span lang=EN-AU>An internal network penetration test seeks
to identify vulnerabilities or misconfigurations in [Client Short Name]’s
internal or Intranet facing infrastructure, operating systems, and core
services. These include internetworking equipment such as firewalls and
routers, and switches, internally hosted servers and services could be
compromised by a threat actor. </span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX can simulate an insider with
malicious intent / disgruntled employee or a threat actor with access to [Client
Short Name]’s internal network. Internal network penetration testing utilises a
combination of automated and manual techniques to exploit vulnerabilities to
bypass security controls and important business process. Attacks such as
Poisoning of LLMNR, NBT-NS and MDNS services, Pass-the-hash, etc. to be performed.
These testing can be executed from an unauthenticated or authenticated
perspective. </span><span lang=EN-AU> </span><span lang=EN-AU>Authenticated
testing covers role-based attack scenarios and provides [Client Short Name]
insights into what their users can access legitimately and how they may escalate
privilege.</span></p>

<h3><span lang=EN-AU>4.3.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting an internal network penetration test. Each stage of the internal
network penetration test is described in detail in the table below.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343644"></a><a name="_Toc71039887"><span lang=EN-AU>Table </span></a><span lang=EN-AU>25</span><span lang=EN-AU> - Internal Network Penetration Testing
Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=150 valign=top style='width:112.6pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Stage</span></p>
   </td>
   <td width=450 valign=top style='width:337.75pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Description</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=150 valign=top style='width:112.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Information Gathering</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.75pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This involves
  the identification of domain names and other associated network information
  by querying local servers from the perspective of a malicious insider,
  employee, contractor, or a compromised asset. This information can be
  gathered from, but is not limited to, traceroutes, DNS queries, LDAP queries,
  Active Directory, NetBIOS queries and passive traffic analysis.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This information
  is used to build a profile that yields a list of domain names and IP network
  ranges associated with in scope IT systems and logical assets. Once the IP
  network ranges have been determined the active hosts will be deduced using a
  combination of TCP, UDP, and ICMP based techniques.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>The information
  gathered here forms the basis of the target selection for the rest of this
  phase.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Port Scanning</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.75pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This involves
  the identification of listening ports on the target hosts. Listening ports
  indicate services running on the remote host that may allow CyberCX’s
  consultants (or unauthorised users) to gain access to systems that are
  misconfigured or running outdated software that has known vulnerabilities. In
  addition, it may allow CyberCX to determine valid access paths to a remote
  host and identify security controls that appear to be in place surrounding
  discovered hosts.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Enumeration</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.75pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This involves
  the extraction of information from target systems listening services. This
  information may be gathered through application banners, and enumerating
  running services such as LLMNR, unpatched MS-NRPC, SMBv3 with compression
  enabled and unpatched/outdated software or operating systems. This
  information provides an enticement and may directly assist an unauthorised
  user in compromising the security of a target system.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Vulnerability Scan</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.75pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This involves
  the systematic scanning of infrastructure for known operating system,
  service, and application vulnerabilities. This is performed using customised
  tools, proprietary scripts, and best of breed publicly available or
  open-source tools.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Vulnerability
  Analysis and Exploitation</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.75pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>CyberCX will
  receive the results from the previous components of this phase and develop an
  exploitation roadmap. This takes vulnerabilities, misconfigurations, possible
  bugs, and other security related issues identified, and converts them into
  viable attack scenarios designed to yield maximum results.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Once the
  scenarios have been established, executed, and their results are analysed, </span><span
  lang=EN-AU style='color:windowtext'>CyberCX</span><span lang=EN-AU
  style='color:windowtext'> will assess the risk of the identified
  vulnerabilities and proceed with their exploitation. If there is any risk of
  service interruption, </span><span lang=EN-AU style='color:windowtext'>CyberCX</span><span
  lang=EN-AU style='color:windowtext'> will discuss during the engagement.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Testing during
  this phase may use some of the following techniques (non-exhaustive list):</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Gain initial access through password attacks, exploiting system
  misconfigurations and vulnerabilities.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Explore historic public data breach dumps to gain passwords for a
  given domain.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Password cracking techniques to gain access to user accounts or systems.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Use Person-in-the-Middle (PitM) techniques and packet sniffing
  software to capture user passwords as users’ login to systems across the
  network.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Establish persistent control over the environment through multiple
  account compromises or hijacked execution flows.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Escalate privileges through process injection attacks or
  misconfigured application and operating system deployments.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Lateral movement through the network due to inherent weaknesses in
  the network permission model.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Evade known defensive mechanisms through custom benign malware
  developed by CyberCX, combined with bypassing known endpoint and network
  level protection capabilities.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Ensure command and control remotely to the environment through
  encrypted egress channels and protocol tunnelling.</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Obtain evidence of breaches such as PII, business data, privileged
  access, etc., if system access is obtained.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Further
  techniques and tactics CyberCX will employ can be found in the Mitre
  ATT&amp;CK framework.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Note: The
  techniques outlined in this component are a necessary part of the CyberCX
  methodology and are like techniques used by threat actors to gain
  unauthorised access to network systems. At the completion of the engagement
  all systems will be returned to their original state.</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Ref52276998"></a><a name="_Toc63349824"><span lang=EN-AU>4.3.3<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-AU>Testing Technical Requirements</span></a></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To ensure a
successful engagement, the following are CyberCX’s technical requirements that
need to be fulfilled before the commencement of Internal Network Penetration
Test. These technical requirements are in addition to the service scoping
information located in Section </span><span
lang=EN-AU style='background:yellow'>3.2</span><span lang=EN-AU
style='background:yellow'>.</span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Building
access and a desk has been provisioned</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Network
diagrams and system documentation (mandatory for Timeboxed/Scenario
engagements, otherwise comprehensiveness of testing decreases)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>List
of any sensitive or “light touch” systems where you would like extra caution to
be taken</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>List
of any specifically out of scope or “do not touch” systems that will excluded</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Provision
three internal testing IP addresses for use</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Advise
if all items in scope are accessible form the physical/logical location </span><span
lang=EN-AU style='background:yellow'>CyberCX</span><span lang=EN-AU
style='color:windowtext;background:yellow'> will be testing from</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>If
using CyberCX for remote testing, that the supplied hardware has internet
access (proxy) configured and can also access the test environment.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>If
using client hardware for remote testing, the requirements have been met: </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>That local administrative
access has been provisioned, tested, and provided to CyberCX </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>That the test environment
can be accessed from the provided hardware </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>That VMware has been
deployed, and includes CyberCX’s testing virtual machine/s. </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>Note that using client
hardware may significantly reduce the possible coverage</span></p>

<p class=CCXTriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Emergency
contact details of the project SMEs and leaders, including mobile phone numbers</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>As a reminder,
please note that once </span><span lang=EN-AU style='background:yellow'>CyberCX</span><span
lang=EN-AU style='background:yellow'> has confirmed the testing commencement
date, any delays need to be communicated to CyberCX at least 3 business days
prior to this date. Any time lost from delays not communicated at least 3
business days in advance will be charged at the agreed rate for each day lost.</span></p>

<h2><a name="_Toc110250575"><span lang=EN-AU>4.4<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Secure Configuration Assessment</span></a></h2>

<h3><span lang=EN-AU>4.4.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>A secure configuration assessment aims to
assess the configuration and hardening that has been applied to ICT components
such as in-scope network(s), system(s), or application(s) from a security
perspective against [Client Short Name] or industry-defined best practice
security standard. </span></p>

<h3><span lang=EN-AU>4.4.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX will perform a detailed review of
the static configuration and “hardening” of in-scope hosts. This assessment
will be performed using automated and manual testing in consultation with our
detailed assessment methodology. The configurations will be reviewed with a
combination of commercial and proprietary host-based auditing and scanning
tools, in-house developed audit programs, desktop review of available documentation,
and may be complemented by interviews/workshops with the system
administrator(s) and other relevant stakeholders if required. </span></p>

<p class=MsoNormal><span lang=EN-AU>This review will be performed from the
console with privileged access, which provides additional visibility and insight
into the configuration of the hosts that could not otherwise be seen from the
network through other assessments, such as penetration testing. Specifically,
it determines the extent to which the host has been “hardened” against common
attacks, in ensuring that the in-scope hosts have the best protection against
current and emerging threats.</span></p>

<h4><span lang=EN-AU>4.4.2.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Microsoft Windows Operating System Review </span></h4>

<p class=MsoNormal><span lang=EN-AU>Microsoft Windows based hosts will be
reviewed against the following key elements:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343645"></a><a name="_Toc71039888"><span lang=EN-AU>Table </span></a><span lang=EN-AU>26</span><span lang=EN-AU> - Microsoft Windows Operating System
Review Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Stage</span></p>
   </td>
   <td width=454 valign=top style='width:340.2pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Description</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Domain and Network
  Architecture</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Review the architecture with respect to server roles and report on
  any security implications this may have.</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Validate the network architecture with respect to server network
  locations, separation of roles, and traffic flows from a security
  perspective.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Security Patching</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Audit the currency of operating system patches and application
  packages running on a host.</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Review update mechanisms in use on the in-scope host.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Implementation and
  Configuration</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Triangle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Evaluate the implementation and configuration with respect to file
  systems, policy setting, advanced security features, installed protocols,
  console security and malware countermeasures.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Account Policies</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Triangle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Review domain or server account policies with respect to password
  rules and intruder detection/lockout.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Audit Settings</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Triangle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Verify the adequacy of system auditing and log review procedures.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>User/Group Analysis</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Triangle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Scrutinise key account attributes such as: last login date, last
  password change, and users with default or easily guessed passwords. In
  addition, group membership will be reviewed to ensure adherence to the
  principle of least privilege.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Registry Security</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Triangle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Review the existence of key security related registry entries and
  perform a registry audit on the permissions of other important keys.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Services and
  Applications</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Review enabled services within the context of the environment and
  applications installed.</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Assess the identity through which the services run and the
  configured permissions. Identify any avenues for privilege escalation.</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Evaluate applications installed on the host and comment on their
  appropriateness.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Permissions and
  Privileges</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Review the file and directory permissions for sensitive system,
  application, and data files.</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Assess the users’ operating system rights and privileges within
  the context of the environment and the applications installed.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Share Configuration</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Triangle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Evaluate the permissions granted to users/groups on shares and
  report on the security implications these may have.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>RAS Settings</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Triangle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Identify any remote access that may be configured, the users that
  may permitted access, and the logging configuration.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Denial of Service
  Protection</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Triangle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Assess the ability of the TCP/IP stack to withstand network-based
  denial of service (DOS) attacks.</span></p>
  </td>
 </tr>
</table>

<h4><span lang=EN-AU>4.4.2.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Unix/Linux Operating System Review</span></h4>

<p class=MsoNormal><span lang=EN-AU>Unix/Linux based hosts will be reviewed
against the following key elements:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343646"></a><a name="_Toc71039889"><span lang=EN-AU>Table </span></a><span lang=EN-AU>27</span><span lang=EN-AU> - Unix/Linux Operating System Review
Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Stage</span></p>
   </td>
   <td width=454 valign=top style='width:340.2pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Description</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Security Patching</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the
  currency of operating system patches and application packages running on a
  host.</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the update
  mechanisms in use on the host.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Implementation and
  Configuration</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Validate the
  implementation and configuration with respect to:</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>File systems, </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Policy setting, </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Advanced security features, </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Services, and </span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Console security.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>User/Group Analysis</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Evaluate key
  account attributes such as: </span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Last login date, </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Last password change, and </span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Users with default or easily guessed passwords. </span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>In addition, group
  membership will be reviewed.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Environment Settings</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Audit the
  shells installed and in use on the host. </span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Review shell
  settings such as path and umask that may have an impact on the security of
  the host.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Start-up Scripts</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Identify the
  daemons launched at boot time and report on their necessity and security
  implications.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Enabled Services</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Probe the services
  enabled within the context of the environment and applications installed.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Account Security</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Analyse the
  security of the:</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Password file, </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Account/password policy, and </span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Terminal access to the host.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Stack Hardening</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Review whether
  the TCP/IP stack has been sufficiently hardened against Denial of Service
  attacks.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Remote Access</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Examine the remote
  access configuration of this host with respect to security. This will
  include:</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>BSD style r-commands, </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Telnet, SSH,</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>FTP, and </span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Warning banners.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Directory/File
  Permissions</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Confirm the
  existence of SUID and SGID binaries on the system and report on the security
  implications these may have. </span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Review if
  appropriate system partitions have been mounted read-only.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Audit
  permissions on important account files (passwd, shadow and group).</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Auditing and Logging</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Assess the
  adequacy of system auditing and log review procedures.</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Examine the
  various forms of system logging, their effectiveness, and ensure that their
  integrity is maintained to keep track of activity on the system.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Remote and Local
  Management</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review whether
  local graphical interface is used for management and/or whether encrypted
  remote management (SSH) is used.</span></p>
  </td>
 </tr>
</table>

<h4><span lang=EN-AU>4.4.2.3<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Internet Information Services (IIS) Review</span></h4>

<p class=MsoNormal><span lang=EN-AU>The Internet Information Services (IIS)
review will be performed as follows:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343647"></a><a name="_Toc71039890"><span lang=EN-AU>Table </span></a><span lang=EN-AU>28</span><span lang=EN-AU> - Internet Information Services Review
Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Stage</span></b></p>
   </td>
   <td width=454 valign=top style='width:340.2pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Description</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Implementation</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the build
  procedure to determine whether patches have been applied and ensure IIS has
  been adequately configured and secured. Some of the areas include
  configuration of host headers, directory browsing, WebDAV, etc. and to
  validate that relevant post service pack hot fixes that specifically relate
  to security have been applied.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Application
  Architecture</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Validate the
  security and encryption of any connections between the IIS web server and
  back-end systems such as SQL.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Content Deployment</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the
  techniques that are used to deploy content to the web server and identify any
  potential security risks.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Services</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review running IIS
  service and ensure it is configured to be running based on business
  requirements and least privilege.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Authentication
  Configuration</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the various
  authentication options used and identify any potential security risks. Some
  of the areas include configuration for global authorisation rule, transport
  layer security, storage of credentials, etc. </span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>ASP.NET Configuration</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Triangle style='margin-left:0in;text-align:justify;text-indent:
  0in'><span lang=EN-AU>Review the ASP.NET configuration and identify any
  potential security risks which includes custom error messages are enabled,
  ASP.NET stack tracing not enabled, global .NET trust level is configured,
  etc.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>TLS Configuration</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Audit the TLS
  configuration with respect to security and performance considerations.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Logging</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Determine the
  adequacy of the logging performed, log review activities and secure storage
  of these logs. Validate the use of advanced IIS logging and the location of
  the log storage to ensure its integrity.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Sample Files</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Comment on the use
  and configuration of sample files in the environment.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Request Filtering</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the use of
  request filtering components configured in this environment and report on the
  security of the application model. Validate that the correct limits and
  restrictions on content length, type and encoding methods are in use.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Application Mappings</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the
  application mapping configuration against what is required for the IIS
  components in use.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Server Administration</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the
  techniques used to administer the in-scope IIS server(s) focusing on both
  local, and remote administration.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Backup Procedures</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Evaluate back-up
  procedures for </span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Web content, </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Web server, and </span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Application configuration.</span></p>
  </td>
 </tr>
</table>

<h2><a name="_Toc63349825"></a><a name="_Ref71039908"></a><a
name="_Toc110250576"><span lang=EN-AU>4.5<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Microsoft Azure Security Configuration Review</span></a></h2>

<h3><span lang=EN-AU>4.5.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX will perform a detailed review of
the static configuration and “hardening” of the Azure tenancies, instances,
virtual networks, and products. This assessment will be performed using
automated and manual testing in consultation with our detailed assessment
methodology. During assessment a tool suite will be temporarily bound to your
Azure tenancy and login to the Azure Platform Management Portal using read-only
access to evaluate the implemented configuration against industry best
practice.</span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX will review implemented products,
benchmark their settings against industry best practice, and make detailed
recommendations for improvement. Some of the key areas include: Active
Directory, Infrastructure Protection, Data Protection, Detective Controls, and
Incident Response.</span></p>

<h3><span lang=EN-AU>4.5.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting an Azure configuration review. Each stage is described in detail in
the table below.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343649"></a><a name="_Toc71039892"><span lang=EN-AU>Table </span></a><span lang=EN-AU>29</span><span lang=EN-AU> - Microsoft Azure Security Configuration
Review Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Stage</span></b></p>
   </td>
   <td width=454 valign=top style='width:340.2pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Description</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Analysis</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Gain understanding
  of infrastructure purpose and use cases. </span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Analyse the
  environment through a combination of automated and manual testing. </span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Automated testing
  is achieved through commercial and open-source tooling.</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Manual testing is
  performed via the Azure portal.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Gap Analysis</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Establish
  preliminary and final gap analysis based on industry security best practices.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Authentication /
  Encryption</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the Azure
  Active Directory authentication and encryption mechanisms in use and report
  on any security implications.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Configuration</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the
  configuration of Azure platform specific security features, such as: </span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Azure Identity Protection,</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Privileged Identity Management,</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Azure Security Centre.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Logging and Monitoring</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the
  adequacy of the logging and monitoring configuration and report on any
  security implications this may have. </span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Platform</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review and ensure
  the appropriate use of Platform as a Service (PaaS) and Infrastructure as a
  Service (IaaS) services and features.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Recommendations</span></b></p>
  </td>
  <td width=454 valign=top style='width:340.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Recommendations
  for improvements to the security infrastructure design through components and
  features benchmarked against industry best practices.</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Make
  recommendations on services and features that are absent in the implementation.</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Toc63349826"></a><a name="_Ref71039911"><span lang=EN-AU>4.5.3<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-AU>Testing Technical Requirements</span></a></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To ensure a
successful engagement, the following are CyberCX’s technical requirements that
need to be fulfilled before the commencement of the Microsoft Azure Security
Configuration Review. These technical requirements are in addition to the
service scoping information located in Section </span><span
lang=EN-AU style='background:yellow'>3.2</span><span lang=EN-AU
style='background:yellow'>.</span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Read-only
account has been provisioned that allows access to the relevant subscription </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>Note: This read access
requirement extends to many sections that only administrators can access (e.g.
KeyVault, Security Policies, Active Directory settings). Please ensure read
access is provided across the subscription. </span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>For
remote testing, please confirm any conditional access that is present and allow
the consultant to access the portal remotely</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Network
diagrams and system documentation (valuable for all engagements but mandatory
for Timeboxed/Scenario engagements, otherwise comprehensiveness of testing
decreases) </span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>List
of any sensitive or “light touch” systems where you would like extra caution to
be taken</span></p>

<p class=CCXTriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Emergency
contact details of the project SMEs and leaders, including mobile phone numbers</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>As a reminder,
please note that once </span><span lang=EN-AU style='background:yellow'>CyberCX</span><span
lang=EN-AU style='background:yellow'> has confirmed the testing commencement
date, any delays need to be communicated to CyberCX at least 3 business days
prior to this date. Any time lost from delays not communicated at least 3
business days in advance will be charged at the agreed rate for each day lost.</span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<h2><a name="_Toc110250577"><span lang=EN-AU>4.6<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>AWS Security Configuration Review</span></a></h2>

<h3><span lang=EN-AU>4.6.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX will perform a detailed review of
the static configuration and “hardening” of the AWS tenancies, instances, VPCs,
and services. This assessment will be performed using automated and manual
testing in consultation with our detailed assessment methodology. CyberCX will
temporarily bind our tool suite to your AWS tenancy and login to the AWS
console using read-only access to evaluate the implemented configuration
against industry best practice. </span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX will review implemented features,
benchmark their settings against industry best practice, and make detailed
recommendations for improvement. Some of the key areas include: Identity and
Access Management, Infrastructure Protection, Data Protection, Detective
Controls, and Incident Response.</span></p>

<h3><span lang=EN-AU>4.6.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting an AWS configuration review. Each stage is described in detail in
the table below.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343650"></a><a name="_Toc71039893"><span lang=EN-AU>Table </span></a><span lang=EN-AU>30</span><span lang=EN-AU> - AWS Security Configuration Review
Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=150 valign=top style='width:112.55pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Stage</span></b></p>
   </td>
   <td width=450 valign=top style='width:337.45pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Description</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=150 valign=top style='width:112.55pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Analysis</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.45pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Gain understanding
  of infrastructure purpose and use cases. </span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Analyse the
  environment through a combination of automated and manual testing. </span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Automated testing
  is achieved through commercial and open-source tooling.</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Manual testing is
  performed via the AWS portal.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.55pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Gap Analysis</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.45pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Establish
  preliminary and final gap analysis based on industry security best practices.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.55pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Authentication /
  Encryption</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.45pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the AWS
  authentication and encryption mechanisms in use and report on any security
  implications.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.55pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Configuration</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.45pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the
  configuration of AWS platform specific security features, such as: </span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>IAM</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Cognito</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Resource Access Manager</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Security Hub</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>CloudTrail</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>AWS Shield</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Firewall Manager</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Cloud HSM.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.55pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Logging and
  Monitoring</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.45pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the
  adequacy of the logging and monitoring configuration and report on any
  security implications this may have. </span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.55pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Platform</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.45pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review and ensure
  the appropriate use of Platform as a Service (PaaS) and Infrastructure as a
  Service (IaaS) services and features.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.55pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Recommendations</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.45pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Recommendations
  for improvements to the security infrastructure design through components and
  features benchmarked against industry best practices.</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Make
  recommendations on services and features that are absent in the
  implementation.</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Toc63349827"></a><a name="_Ref71039910"></a><a name="_Ref71039914"></a><a
name="_Toc50974605"></a><a name="_Toc50974606"></a><a name="_Toc50974607"></a><a
name="_Toc50974608"></a><a name="_Toc50974609"></a><a name="_Toc50974610"></a><a
name="_Toc50974611"></a><span lang=EN-AU>4.6.3<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Testing Technical Requirements</span></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To ensure a
successful engagement, the following are CyberCX’s technical requirements that
need to be fulfilled before the commencement of the AWS Security Configuration
Review. These technical requirements are in addition to the service scoping
information located in Section </span><span
lang=EN-AU style='background:yellow'>3.2</span><span lang=EN-AU
style='background:yellow'>.</span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>An
account created in all AWS environments to be tested with the following
permissions: </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>iam:CreateAccessKey on
user To allow console access instead of the User Interface&nbsp; </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>ReadOnlyAccess and
SecurityAudit rights </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>Applying the
AccessAnalyzerServiceRolePolicy to that user </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-left:35.7pt'><span lang=EN-AU
style='font-family:"Courier New";color:#1CE3E6;background:yellow'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-AU style='color:windowtext;background:yellow'>Any MFA roles or other
access applied to the account as per security guidelines of your organisation</span></p>

<p class=CCXTriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Emergency
contact details of the project SMEs and leaders, including mobile phone numbers</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>As a reminder,
please note that once </span><span lang=EN-AU style='background:yellow'>CyberCX</span><span
lang=EN-AU style='background:yellow'> has confirmed the testing commencement
date, any delays need to be communicated to CyberCX at least 3 business days
prior to this date. Any time lost from delays not communicated at least 3
business days in advance will be charged at the agreed rate for each day lost.</span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<h2><a name="_Toc110250578"><span lang=EN-AU>4.7<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Network Vulnerability Assessment</span></a><span
lang=EN-AU> </span></h2>

<h3><span lang=EN-AU>4.7.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>A network vulnerability assessment focuses
on identifying vulnerabilities in [Client Short Name]’s network infrastructure
and services. This could include internal and external-facing infrastructure,
operating systems, and core services.</span></p>

<p class=MsoNormal><span lang=EN-AU>Unlike penetration testing, vulnerability
assessment relies largely on automated scans using a custom configuration and
does not typically include exploitation of vulnerabilities. Depending on the
agreed approach, some manual verification of findings may be performed.</span></p>

<h3><span lang=EN-AU>4.7.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<h4><span lang=EN-AU>4.7.2.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>External Network Vulnerability Assessment</span></h4>

<p class=MsoNormal><span lang=EN-AU>An external vulnerability assessment aims
to identify and eventually fix vulnerabilities that can potentially be
exploited by </span><span lang=EN-AU>adversaries</span><span lang=EN-AU>.
In-case of complete network segment scanning, it can also help you find any new
devices and servers that have been added to the network after the last scan and
determine if they pose any threats to your organisation. </span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting an external network vulnerability assessment. Each stage of the
external network vulnerability assessment is described in detail in the table
below.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343651"></a><a name="_Toc71039894"><span lang=EN-AU>Table </span></a><span lang=EN-AU>31</span><span lang=EN-AU> - External Network Vulnerability
Assessment Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.35pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Stage</span></p>
   </td>
   <td width=450 valign=top style='width:337.3pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Description</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Target Acquisition</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.3pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Target
  acquisition will be performed based on the information obtained from [Client
  Short Name] on assigned Host IP’s or IP Block ranges. Where an IP block range
  is provided, </span><span lang=EN-AU style='color:windowtext'>CyberCX</span><span
  lang=EN-AU style='color:windowtext'> will deduce the hosts locations using a
  combination of TCP, UDP, and ICMP based techniques.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Port Scanning</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.3pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Port scanning
  allows CyberCX to identify listening ports on the target hosts identified in
  Stage 1. Listening ports indicate services running on the remote host that
  may allow CyberCX’s consultants (or unauthorised users) to gain access to
  systems that are misconfigured or running outdated software that has known
  vulnerabilities. In addition, it may allow the consultants to determine valid
  access paths to a remote host and identify security controls that appear to
  be in place surrounding discovered hosts.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Enumeration</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.3pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This involves
  the extraction of information from target systems listening services. This
  information may be gathered through application banners. Attempts are made to
  identify open ports, running services, operating systems and hosted
  applications on the target systems.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Vulnerability Scan</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.3pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This involves
  the systematic scanning of the target infrastructure for known operating
  system and application vulnerabilities using best of breed open-source and
  commercial vulnerability scanners.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Reporting</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.3pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This is the final
  stage of the engagement and forms a permanent record of the work undertaken.
  The report will contain a detailed understanding of the scope, approach, and
  findings, along with a comprehensive set of recommendations designed to
  mitigate identified problem areas.</span></p>
  </td>
 </tr>
</table>

<h4><span lang=EN-AU>4.7.2.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Internal Network Vulnerability Assessment</span></h4>

<p class=MsoNormal><span lang=EN-AU>An internal vulnerability assessment aims
to evaluate [Client Short Name]’s exposures to common vulnerabilities and
exploits on its infrastructure from within its internal network. </span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting an internal network vulnerability assessment. Each stage of the
external network vulnerability assessment is described in detail in the table
below.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343652"></a><a name="_Toc71039895"><span lang=EN-AU>Table </span></a><span lang=EN-AU>32</span><span lang=EN-AU> - Internal Network Vulnerability
Assessment Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Stage</span></p>
   </td>
   <td width=450 valign=top style='width:337.25pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Description</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Target Acquisition</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Target
  acquisition will be performed based on the information obtained from [Client
  Short Name] on assigned Host IP’s or IP Block ranges. Where an IP block range
  is provided, </span><span lang=EN-AU style='color:windowtext'>CyberCX</span><span
  lang=EN-AU style='color:windowtext'> will deduce the hosts locations using a
  combination of TCP, UDP, and ICMP based techniques.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Port Scanning</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Port scanning
  allows CyberCX to identify listening ports on the target hosts identified in
  Stage 1. Listening ports indicate services running on the target hosts that
  may allow CyberCX’s consultants (or unauthorised users) to gain access to
  systems that are misconfigured or running outdated software that has known
  vulnerabilities. In addition, it may allow the consultants to determine valid
  access paths to host and identify security controls that appear to be in
  place surrounding discovered hosts.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Enumeration</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This involves
  the extraction of information from target systems listening services. This
  information may be gathered through application banners. Attempts are made to
  identify open ports, running services, operating systems and hosted
  applications on the target systems.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Vulnerability Scan</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This involves
  the systematic scanning of the target infrastructure for known operating
  system and application vulnerabilities using best of breed open-source and
  commercial vulnerability scanners.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Reporting</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This is the
  final stage of the engagement and forms a permanent record of the work
  undertaken. The report will contain a detailed understanding of the scope,
  approach, and findings, along with a comprehensive set of recommendations
  designed to mitigate identified problem areas.</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Toc63349828"></a><a name="_Ref71040841"><span lang=EN-AU>4.7.3<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-AU>Testing Technical Requirements</span></a></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To ensure a
successful engagement, the following are CyberCX’s technical requirements that
need to be fulfilled before the commencement of the Network Vulnerability
Assessment. These technical requirements are in addition to the service scoping
information located in Section </span><span
lang=EN-AU style='background:yellow'>3.2</span><span lang=EN-AU
style='background:yellow'>.</span></p>

<p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Hosting provider permission has been
provided (if required)</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Network diagrams and system
documentation (mandatory for Timeboxed/Scenario engagements, otherwise
comprehensiveness of testing decreases)</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>List of any sensitive or “light
touch” systems where you would like extra caution to be taken</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Confirmation that CyberCX IP
addresses are whitelisted through intrusion protection systems and will not be
rate limited because of port scanning or suspicious network traffic.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Emergency
contact details of the project SMEs and leaders, including mobile phone
numbers.</span></p>

<p class=CCXTriangleCxSpLast style='margin:0in;text-indent:0in'><span
lang=EN-AU style='color:windowtext;background:yellow'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>As a reminder,
please note that once </span><span lang=EN-AU style='background:yellow'>CyberCX</span><span
lang=EN-AU style='background:yellow'> has confirmed the testing commencement
date, any delays need to be communicated to CyberCX at least 3 business days
prior to this date. Any time lost from delays not communicated at least 3
business days in advance will be charged at the agreed rate for each day lost.</span></p>

<h2><a name="_Toc110250579"><span lang=EN-AU>4.8<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Mobile Application Penetration Test</span></a></h2>

<h3><span lang=EN-AU>4.8.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>The objective of the mobile application
security review is to identify vulnerabilities and misconfigurations that may
lead to code execution, privilege escalation, data leakage, information
disclosure and other security concerns. </span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX evaluates the security of the
mobile application by deploying and reviewing the application in our simulated
test environment or on a physical device. Best efforts will also be made to
decompile and perform static code analysis of the application to identify
insecure areas of code and common programming errors.</span></p>

<p class=MsoNormal><span lang=EN-AU>The simulated test environment uses
development utilities included in the official software development kit to
simulate execution of the application functionality. CyberCX has developed
in-house techniques that use this environment to interrogate the security
posture of the application. This allows memory allocations and both file and
network input and output operations to be monitored in real-time as the
application executes.</span></p>

<h3><span lang=EN-AU>4.8.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting a mobile application penetration test. Each stage of the mobile
application penetration test is described in detail in the table below.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343653"></a><a name="_Toc71039896"><span lang=EN-AU>Table </span></a><span lang=EN-AU>33</span><span lang=EN-AU> - Mobile Application Penetration Test
Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Stage</span></b></p>
   </td>
   <td width=450 valign=top style='width:337.25pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Description</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Information gathering</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Understand
  application functionality, observe its behaviour and identify assumptions
  made by the developer regarding the application’s business logic. Identify
  potential attack surface by determining the application data states, access
  methods, frameworks, server-side APIs, protocols, as well as trust
  relationships with 3<sup>rd</sup> party components.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Authentication
  mechanisms</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Determine
  whether any authenticated content exists within the site. Assuming some is
  found, </span><span lang=EN-AU style='color:windowtext'>CyberCX</span><span
  lang=EN-AU style='color:windowtext'> will assess the strength of the
  authentication mechanism in use and attempt to bypass it. Some of the
  techniques used may include user enumeration, default or guessable passwords,
  brute-forcing passwords, and client password caching. </span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Authorisation issues</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Evaluate
  whether the authorisation scheme adequately protects access to files and
  objects. Some of the techniques used may include directory/path traversals,
  modifying cookies, requesting hidden objects with guessable names, attempting
  canonicalisation attacks, escalating privileges, and tunnelling privileged
  commands to the SQL server (SQL injection).</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Data validation</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif'>Data
  validation ensures the integrity of information used by an application. CyberCX
  will perform analysis of each individual function of the application and
  attempt to inject faults into each receptacle. By injecting unexpected data
  an adversary</span><span lang=EN-AU> </span><span lang=EN-AU
  style='font-family:"Calibri",sans-serif'>may be able to learn more about the
  way the application is configured and may enumerate unauthorised or sensitive
  information. The analysis will include:</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Common Validators </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Data Sanitisation </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Negative Data Validation </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Output Filtering </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Positive Data Validation </span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Type Checking</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Some of the
  attack techniques/weaknesses used may include: Cross-site scripting, SQL
  injection, LDAP injection, ORM injection, XML injection, SSI injection, XPath
  injection, IMAP/SMTP injection, Code injection, OS commanding, overflow
  testing, and format strings.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Session management</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the
  techniques used to manage sessions through the application. Popular
  techniques include cookies, URL rewriting, session identifiers and session
  lifetime. Some of the attack techniques and weaknesses may include session ID
  prediction and brute-forcing, session fixation, CSRF, testing session
  timeouts, and spoofing tokens within a cookie.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Auditing and logging</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Logs are a key
  component of the intrusion detection and incident response process. They
  should be a complete and accurate record of the actions performed against the
  system and data stored. CyberCX will assess the events captured and the
  mechanisms in place to prevent modification/deletion and evaluate the
  incident response and escalation process surrounding adverse events. </span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Error condition
  handling </span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif'>Assess
  how the application handles faults and error conditions. Poorly handled
  conditions may give an adversary</span><span lang=EN-AU> </span><span
  lang=EN-AU style='font-family:"Calibri",sans-serif'>more information about
  the application than necessary enabling them to fine tune an attack.</span></p>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif'>Errors
  conditions could occur when:</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>unrecognised data is entered into a field</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>unsupported file extensions are queried</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>URLs are tampered with</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>attempts are made
  to manoeuvre between different parts of a site in an unauthorised manner</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Exception management</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Exception
  management allows an application to capture and track erroneous events that
  could affect proper application processing. A well-designed application
  should contain exception management mechanisms that not only detect
  exceptions but audit exception anomalies to enable monitoring and logging of
  these events.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Cryptography</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif'>Evaluate
  the effectiveness / suitability of crypto technologies in place between
  client and server or between entities in the system. Encryption is the most
  powerful form of cryptography and is essential in preventing information
  leakage.</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Sensitive
  information should be encrypted during transport and encrypted when stored
  where possible. </span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Data connectivity</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Review the nature
  of any connections between the front-end and backend databases and report on
  the security implications this may have. CyberCX will also attempt to modify
  input variables to affect the way the database performs (SQL injection). </span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Management interface</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Determine whether
  a remote management interface exists and report on the security implications
  this may have. Here CyberCX will look at web server administration, web
  content management, and web-based network and system management.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Client issues</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Assess the
  exposure of web clients to attack by manipulating server-side code. Here CyberCX
  looks at issues like Active content attacks, Cross-Site Scripting (XSS),
  client-side caching, and cookie manipulation vulnerabilities.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Business logic</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Applications
  contain workflows and implement business rules and policies specific to that
  application. This logic can be susceptible to flaws which allow for actions
  outside these workflows and business rules to be performed which may provide
  a vector for system or data compromise. CyberCX will evaluate this attack
  vector.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Insecure data storage</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Investigate log
  files and insecure data storage in application folder
  (var/mobile/Applications), caches or in backups (iTunes). Also, analyse iOS
  keychain and Android keystore defence strategies; what data they contain and
  under which circumstances are they accessible. Data protection of files and
  keychain/keystore entries will be audited. Furthermore, examine custom
  created files, property list files, file caching, keyboard caching,
  binarycookies, sensitive snapshots and especially databases (mainly SQLite).</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Static Analysis</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Decrypt app store
  binaries, list dynamic dependencies and dump runtime information.
  Decompile/disassemble the Android/iOS application and perform a due-diligence
  review of the respective java and assembly code. Check for common mistakes in
  implementation of certain classes (e.g. CFStream, NSStream, etc.) as well as
  memory corruption vulnerabilities.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Dynamic analysis</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Bypass jailbreak
  and root detection defensive mechanisms. Invoke application functions using
  runtime manipulation techniques to discover hidden and potentially intrusive
  functionalities. Attach and analyse the application with a debugger, if
  possible, to determine subtle flaws due to the dynamic nature of mobile
  applications. Test against Interprocess communication vulnerabilities as well
  as side-channel leakage, involving activities, intents, broadcast receivers,
  etc.</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Toc63349829"></a><a name="_Ref71040851"></a><a name="_Ref71040854"></a><a
name="_Ref71040897"><span lang=EN-AU>4.8.3<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Testing Technical Requirements</span></a></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To ensure a
successful engagement, the following are CyberCX’s technical requirements that
need to be fulfilled before the commencement of the Mobile Application
Penetration Test. These technical requirements are in addition to the service
scoping information located in Section </span><span
lang=EN-AU style='background:yellow'>3.2</span><span lang=EN-AU
style='background:yellow'>.</span></p>

<p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>APK/IPA Files: If possible, please
build Android APKs to include targeting for the x86 platform. This allows
CyberCX to perform mobile application testing from a device emulator</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Targeted Hardware Platform (ARM,
ARM64, x86): </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Application
Platform (Native Native iOS (Swift), Native Android (Java / Kotlin), Xamarin
(DOTNET), etc.)</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>CyberCX
Apple ID (&lt;insert appleID here&gt;) added to Developer Account</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>CyberCX
Gmail account (&lt;insert google account here&gt;) added to Google Play test
beta&nbsp; </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>User accounts: </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>CyberCX
typically requires at least 2 accounts and appropriate access credentials for
each role to be tested</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Descriptions
for what each user role should be able to do (read/write access to all/selected
endpoints)</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>If
the API uses Bearer tokens, please provide either a valid token and/or the
process for generating a valid token</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>API Documentation (if applicable) </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Jail break protection Information
(if applicable) e.g Arxa</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>SSL Pinning removed (if applicable) </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Source code (if applicable)</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>That the test environment can be
accessed from an external address </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Confirmation that provided URL’s can
be publicly resolved </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Confirmation that CyberCX IP
addresses are whitelisted and will not be rate limited.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Emergency
contact details of the project SMEs and leaders, including mobile phone
numbers.</span></p>

<p class=CCXTriangleCxSpLast style='margin:0in;text-indent:0in'><span
lang=EN-AU style='color:windowtext;background:yellow'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>As a reminder,
please note that once CyberCX has confirmed the testing commencement date, any
delays need to be communicated to CyberCX at least 3 business days prior to
this date. Any time lost from delays not communicated at least 3 business days
in advance will be charged at the agreed rate for each day lost.</span></p>

<h2><a name="_Toc110250580"><span lang=EN-AU>4.9<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Wireless Network Penetration Test</span></a></h2>

<h3><span lang=EN-AU>4.9.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoBodyText><span lang=EN-AU>The objective of wireless network testing
is it determine the extent to which [Client Short Name] network can detect and
defeat Wi-Fi attacks. It will be tested from the perspectives of authorised and
unauthorised users and will include testing whether it is possible to gain
access to or compromise the corporate environment perimeter when connected to
the Wireless Local Area Networks (WLANs).</span></p>

<h3><span lang=EN-AU>4.9.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting a wireless network penetration test. Each stage of the wireless network
penetration test is described in detail in the table below.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc71039897"><span lang=EN-AU>Table </span></a><span
lang=EN-AU>34</span><span lang=EN-AU> – Wireless Network Penetration Test
Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Stage</span></b></p>
   </td>
   <td width=450 valign=top style='width:337.25pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Description</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Information gathering</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Passively
  gather the following wireless parameters: band, channel, mode, network
  status, SSID, broadcast settings, signal strength, encryption protocols and
  settings, and additional security mechanisms implemented.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Vulnerability
  Analysis &amp; Exploitation</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Exploit any
  detected weaknesses in the configuration to obtain access to the wireless
  network.</span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Some of the common wireless network attacks that CyberCX
  will attempt (depending on configuration identified) include: </span></p>
  <p class=MsoBodyText style='margin-top:0in;margin-right:0in;margin-bottom:
  0in;margin-left:17.85pt;text-indent:-17.85pt;line-height:110%'><span
  lang=EN-AU style='color:windowtext'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='color:windowtext'>Bypassing WLAN
  Authentication – uncovering hidden SSID(s), bypassing MAC filters, bypassing
  open authentication, bypassing shared key authentication, etc.</span></p>
  <p class=MsoBodyText style='margin-top:0in;margin-right:0in;margin-bottom:
  0in;margin-left:.25in;text-indent:-.25in;line-height:110%'><span lang=EN-IN
  style='color:windowtext'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span style='color:windowtext'>Identify weakly protected Access
  Points using WEP, WPA-PSK or no encryption.</span></p>
  <p class=MsoBodyText style='margin-top:0in;margin-right:0in;margin-bottom:
  0in;margin-left:17.85pt;text-indent:-17.85pt;line-height:110%'><span
  lang=EN-IN style='color:windowtext'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span style='color:windowtext'>Use Wireless packet capture
  tools to capture WEP/WPA-PSK cipher text to prepare for cracking.</span></p>
  <p class=MsoBodyText style='margin-top:0in;margin-right:0in;margin-bottom:
  0in;margin-left:17.85pt;text-indent:-17.85pt;line-height:110%'><span
  lang=EN-IN style='color:windowtext'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span style='color:windowtext'>Using the cracked or supplied
  access key gain access to the target network and perform infrastructure
  penetration testing on select in-scope targets, such as Wi-Fi hotspot
  management platforms, captive portals, AAA servers, etc.</span></p>
  <p class=MsoBodyText style='margin-top:0in;margin-right:0in;margin-bottom:
  0in;margin-left:17.85pt;text-indent:-17.85pt;line-height:110%'><span
  lang=EN-AU style='color:windowtext'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='color:windowtext'>Attacks on WLAN
  Infrastructure – default accounts and credentials on the access point, Denial
  of Service attacks, evil twin and access point MAC spoofing, rogue access
  points, etc.</span></p>
  <p class=MsoBodyText style='margin-top:0in;margin-right:0in;margin-bottom:
  0in;margin-left:17.85pt;text-indent:-17.85pt;line-height:110%'><span
  lang=EN-AU style='color:windowtext'>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='color:windowtext'>Attacking the Client
  – client isolation, honeypot and mis-association attacks, caffe latte attack,
  de-authentication and dis-association attacks, hirte attack, AP-less
  WPA-Personal cracking, etc.</span></p>
  <p class=MsoBodyText style='margin-top:0in;margin-right:0in;margin-bottom:
  0in;margin-left:17.85pt;text-indent:-17.85pt;line-height:110%'><span
  lang=EN-AU style='color:windowtext'>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='color:windowtext'>Advanced WLAN Attacks
  - Person-in-the-Middle (PitM) attack, wireless eavesdropping using PitM,
  session hijacking using PitM, attacking WPA-Enterprise and RADIUS, etc.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Intra-WLAN Security
  Controls</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>CyberCX will
  deduce host locations within the WLAN using a combination of TCP, UDP, and
  ICMP based techniques. Reviewing the WLAN for host isolation configuration.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This allows
  CyberCX to identify listening ports on the target hosts identified above.
  Listening ports indicate services running on the remote host that may allow
  authorised (or unauthorised) access to systems that are misconfigured or
  running outdated software that has known vulnerabilities. In addition, it may
  allow CyberCX to determine valid access paths to a remote host and identify
  security controls that appear to be in place surrounding discovered hosts.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Inter-WLAN Security
  Controls</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>CyberCX will
  deduce host locations outside the WLAN using a combination of TCP, UDP, and
  ICMP based techniques. Reviewing the organisation's network segmentation
  controls. </span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>This allows
  CyberCX to identify potential methods for lateral movement once a WLAN's
  perimeter has been compromised that could empower an adversary to further
  compromise the environment.</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Toc63349830"></a><a name="_Ref71040927"><span lang=EN-AU>4.9.3<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-AU>Testing Technical Requirements</span></a></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To ensure a
successful engagement, the following are CyberCX’s technical requirements that
need to be fulfilled before the commencement of the Wireless Network
Penetration Test. These technical requirements are in addition to the service
scoping information located in Section </span><span
lang=EN-AU style='background:yellow'>3.2</span><span lang=EN-AU
style='background:yellow'>.</span></p>

<p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>A mobile device (laptop, tablet,
etc.) with access to the corporate wireless network and administrator level
access to the device (if client device wireless configuration is a requirement
for testing)</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Building access and desk provisioned
(if applicable)</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Details of the wireless network(s): </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>SSIDs
(and BSSIDs) of in scope devices </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Number
of access points </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>IP
addresses of the access points (management and access point network)</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>All SSID network keys and
information of connection mode: </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Certificates
used and signing authority (if applicable) </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Authentication
mechanism used (EAP-TLS, PEAP-MSCHAP) </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Documentation
on authentication model</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Administrative access to access
point management interface, to verify configuration (if applicable) </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Information on key management
policy, including lengths, complexity, and cycling periods </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Architectural information such as: </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Network
diagrams </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Network
segregation information </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Hardware/software
vendors and versions </span></p>

<p class=CCXTriangleCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.7pt'><span lang=EN-AU style='font-family:"Courier New";
color:#1CE3E6;background:yellow'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Configuration
from devices (and any hardening guides)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Emergency
contact details of the project SMEs and leaders, including mobile phone
numbers.</span></p>

<p class=CCXTriangleCxSpLast style='margin:0in;text-indent:0in'><span
lang=EN-AU style='color:windowtext;background:yellow'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>As a reminder,
please note that once </span><span lang=EN-AU style='background:yellow'>CyberCX
</span><span lang=EN-AU style='background:yellow'>has confirmed the testing
commencement date, any delays need to be communicated to CyberCX at least 3
business days prior to this date. Any time lost from delays not communicated at
least 3 business days in advance will be charged at the agreed rate for each
day lost.</span></p>

<h2><a name="_Toc110250581"><span lang=EN-AU>4.10<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>VDI Penetration Test</span></a></h2>

<h3><span lang=EN-AU>4.10.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>The objective of virtual desktop
infrastructure (VDI) testing is it to determine the extent to which the VDI can
thwart attack from a malicious user. It will be tested from the perspectives of
authorised and unauthorised users and will include testing whether it is
possible to gain further access to or compromise the corporate network when
connected to the VDI.</span></p>

<h3><span lang=EN-AU>4.10.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting a VDI penetration test. Each stage of the VDI penetration test is
described in detail in the table below.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc71039898"><span lang=EN-AU>Table </span></a><span
lang=EN-AU>35</span><span lang=EN-AU> - VDI Penetration Test Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Stage</span></p>
   </td>
   <td width=450 valign=top style='width:337.25pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Description</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Windows OS Hardening
  &amp; Active Directory Controls</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif;
  layout-grid-mode:both'>Determine whether appropriate security controls have
  been implemented at the OS level to mitigate the risk of VDI vulnerabilities
  and exploits.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Assess whether
  appropriate group policies adequately restrict inbuilt and downloaded
  utilities and are effective at preventing their bypass.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>VDI Controls</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif;
  layout-grid-mode:both'>Validate the use of published applications, restricted
  desktops, restricted drives, and the removal of access to functionality such
  as drop-down menus to limit and control access.</span></p>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif;
  layout-grid-mode:both'>Assess restrictions in place to limit running of
  commands, utilities and imported executables onto a system.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Review the requirement
  for removal of data and implemented security controls to restrict it.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Network Layer
  Controls</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Review adequacy
  of network layer controls including outbound access.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Anti-Virus &amp;
  Malware Protection</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Review the
  implemented security controls against malware and other malicious code.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Authorisation Testing</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Conduct
  authorisation testing in relation to different profiles within the VDI to see
  if a malicious user can figure out a way to access other profile
  applications, and or, data.</span></p>
  </td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.3pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'><b><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;font-family:"Calibri",sans-serif;
  color:#75AEFF'><br clear=all style='page-break-before:always'>
  </span></b>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Vulnerability
  Analysis &amp; Exploitation</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.25pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif;
  layout-grid-mode:both'>This stages takes vulnerabilities, misconfigurations,
  possible bugs and other security related issues identified, and converts them
  into viable attack scenarios designed to yield maximum results.</span></p>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif;
  layout-grid-mode:both'>Once the scenarios have been established, they are
  executed, and the results are analysed. </span></p>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif;
  layout-grid-mode:both'>Testing during this phase may use some of the
  following techniques: (non-exhaustive list)</span></p>
  <p class=Table-TriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Exploit system misconfigurations and vulnerabilities to gain
  system access; </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Password cracking techniques to gain access to user accounts or
  systems; </span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Use packet sniffing software to capture user passwords as users
  login to systems across the network;</span></p>
  <p class=Table-TriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Install software on remote compromised targets to escalate our
  privileges or facilitate information retrieval; and</span></p>
  <p class=Table-TriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'> </span></span><span
  lang=EN-AU>Obtain evidence of our breaches such as Word documents,
  spreadsheets, databases, etc., if system access is obtained.</span></p>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif;
  layout-grid-mode:both'>Note:</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>The techniques
  outlined in this component are a necessary part of the CyberCX methodology
  and are like techniques used by actors to gain unauthorised access to network
  systems. At the completion of the engagement all systems will be returned to
  their original state.</span></p>
  </td>
 </tr>
</table>

<h3><a name="_Toc63349831"></a><a name="_Ref71040963"><span lang=EN-AU>4.10.3<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-AU>Testing Technical Requirements</span></a></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To ensure a
successful engagement, the following are CyberCX’s technical requirements that
need to be fulfilled before the commencement of VDI Penetration Test. These
technical requirements are in addition to the service scoping information
located in Section </span><span
lang=EN-AU style='background:yellow'>3.2</span><span lang=EN-AU
style='background:yellow'>.</span></p>

<p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>User logons for at least two roles
within the VDI environment to be tested, with the same password for each
account (including any multi-factor authentication tokens required)</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Confirm the version of Windows being
used for publishing applications/desktops.</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>All available VDI related build
documents</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>Firewall rules relating to the VDI
environment</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>VDI environment related group policy
configurations (if any)</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Administrator
credentials for the server hosting the published applications/desktops. This is
required to perform a security assessment of the underlining Windows server</span></p>

<p class=CCXTriangleCxSpLast style='margin:0in;text-indent:0in'><span
lang=EN-AU style='color:windowtext;background:yellow'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>As a reminder,
please note that once CyberCX has confirmed the testing commencement date, any
delays need to be communicated to CyberCX at least 3 business days prior to
this date. Any time lost from delays not communicated at least 3 business days
in advance will be charged at the agreed rate for each day lost.</span></p>

<h2><a name="_Toc110250582"><span lang=EN-AU>4.11<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Microsoft 365 Security Configuration Review</span></a></h2>

<h3><span lang=EN-AU>4.11.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal style='margin-top:6.0pt;text-align:justify'><span
lang=EN-AU>Microsoft 365 (M365) is a cloud-based business system used for
email, productivity, and collaboration. This platform and its data are a
popular breach target for key threat actors who wish to exfiltrate data,
elevate their privileges, abuse resources, or delete data.  There is also an
insider risk whereby trusted employees take steps to exfiltrate/spill or delete
sensitive data or obtain persistent access by building in backdoor accounts.   
</span></p>

<p class=MsoNormal style='margin-top:6.0pt;text-align:justify'><span
lang=EN-AU>There are a variety of potential motivations here, including the
theft of intellectual property and Personally Identifiable Information (PII),
the desire to blackmail, the intention to sell data on the black market, commit
financial fraud, or to use the data to further entrench themselves in your
systems. The data can come in a variety of forms, which further complicates
your protection strategy. e.g. email, documents, instant messaging, etc.</span></p>

<p class=MsoNormal><span lang=EN-AU>Most security issues with M365 do not
relate to the service provider – they relate to deployment choices around
access. CyberCX will perform a configuration review of the M365 platform
against commonly accepted best practice security configurations. This goes
beyond those practices covered by the Microsoft Security Score and provides a
step-by-step actionable remediation plan and strategy to defend against and
detect complex threats. </span></p>

<h3><span lang=EN-AU>4.11.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting a Microsoft 365 Security configuration review. Each stage is
described in detail in the table below.</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width=604 style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif;
   color:white'>Stage</span></b></p>
   </td>
   <td width=453 colspan=2 valign=top style='width:339.9pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;font-family:"Calibri Light",sans-serif;
   color:white'>Description </span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Authentication
  controls </span></b></p>
  </td>
  <td width=450 valign=top style='width:337.35pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Assess the appropriateness of the authentication
  method used with Microsoft 365 for user and administrative access. e.g.
  credentials, Multi-Factor Authentication (MFA), third-party Identity Provider
  (idP), etc. </span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Determine whether all interfaces have been configured
  to enforce the strongest method chosen and cannot be bypassed.</span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='line-height:105%;color:windowtext'>Review the password policy
  implemented by the chosen authentication method.</span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=3><p class='MsoNormal'>&nbsp;</td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Users, groups, and
  mailboxes</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.35pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Identify the currency of active users, guest users,
  and the suitability of group memberships (including administrators). Look at
  the process and frequency for reviewing these accounts.</span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='line-height:105%;color:windowtext'>Evaluate the use of shared
  mailboxes and distribution groups and comment on the security implications.</span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=3><p class='MsoNormal'>&nbsp;</td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>M365 infrastructure
  and subscriptions</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.35pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Understand the use case of implemented M365
  infrastructure, including Exchange, Teams &amp; Skype, SharePoint, OneDrive,
  Yammer, PowerApps, Flow, Security &amp; Compliance, and Azure Active
  Directory. Determine whether the most appropriate security controls have been
  implemented for each of those in use. </span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Identify any data sovereignty issues related to
  where your organisational data is kept.</span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Evaluate if the subscriptions in use offer advanced
  security controls and whether these have been implemented.</span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='line-height:105%;color:windowtext'>Review if unused functionality has
  been disabled by the organisation to prevent use.</span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=3><p class='MsoNormal'>&nbsp;</td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>3rd party tools and
  protection</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.35pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Assess whether third-party products are being used
  in conjunction with native security controls to further bolster the
  implementation and the security effectiveness of the system.</span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Determine whether appropriate email anti-spoofing
  and monitoring protections, such as SPF, DMARC, and DKIM are in place and
  effective. </span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=3><p class='MsoNormal'>&nbsp;</td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Data classification,
  privacy, controls, and practices</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.35pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Evaluate the data classification methodology in use
  and enforcement of DLP policies to control the leakage and dissemination of
  sensitive data. </span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Assess compliance with relevant regulatory
  standards. e.g. Privacy Act, GDPR, etc. </span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>High-level review of processes around approval of
  invoices, payments, and change of details via email. </span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='line-height:105%;color:windowtext'>Review the data governance around
  data import, archive, retention, events, and supervision.</span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=3><p class='MsoNormal'>&nbsp;</td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Threat management and
  protection</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.35pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Identify the platform specific controls implemented
  to defend against phishing, spam and malware and comment on their
  effectiveness. e.g. safe attachments and links policy </span></p>
  <p class=Table><span lang=EN-AU style='font-family:"Calibri",sans-serif'>Some
  of the items checked for which have security implications include:</span></p>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Client rules forwarding
  blocks</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Use of Information
  Rights Management (IRM) services for documents and email</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Transport rules to
  external domains and whitelists</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>SPO site classification
  policies</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Anonymous calendar and
  details sharing</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>External domain Skype
  communications</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Expiration time for
  external link sharing</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Dormant accounts</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Mailbox delegation</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Anonymous guest sharing
  links for sites and docs</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Use of Advanced Security
  Management console</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Mobile and PC device
  protections and enforcement</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Customer lockbox
  settings</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>PowerShell remote
  session interface</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Enabled external
  interfaces</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>Administrative password
  recovery</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%'>ActiveSync
  configuration, approval for use process, and device wipe</span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>Evaluate
  effectiveness of post-delivery protection controls.</span><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>  </span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=3><p class='MsoNormal'>&nbsp;</td>
 </tr>
 <tr>
  <td width=151 valign=top style='width:113.4pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Security and
  compliance</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.35pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='line-height:105%;color:windowtext'>Review audit and log settings and
  reporting to determine suitability in identifying breaches, misuse, and
  accountability. e.g. audit data recording, mailbox auditing, sign-ins after
  multiple failures report, outbound spam notifications, immutable email
  archive, etc. </span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='line-height:105%;color:windowtext'>Assess the alert policies in use for
  suitability to identify abuse and misuse of the platform.</span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='line-height:105%;color:windowtext'>Evaluate the incident response and
  escalation procedures in relation to email.</span></p>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Determine the
  existence and effectiveness of Acceptable Use Policies and policies relating
  to the handling and sharing of sensitive and confidential data. </span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=3><p class='MsoNormal'>&nbsp;</td>
 </tr>
</table>

<h3><span lang=EN-AU>4.11.3<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Testing Technical Requirements</span></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To ensure a
successful engagement, the following are CyberCX’s technical requirements that
need to be fulfilled before the commencement of Microsoft 365 Security
Configuration Review. These technical requirements are in addition to the
service scoping information located in Section </span><span
lang=EN-AU style='background:yellow'>3.2</span><span lang=EN-AU
style='background:yellow'>.</span></p>

<p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>A logon for the M365 Admin Center
with Global Reader and Security Reader roles</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
style='font-family:"Wingdings 3";color:#1CE3E6;background:yellow'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
style='color:windowtext;background:yellow'>A describe of your email
architecture and flows. e.g. DNS MX records points to third-party mail
filtering and then mail is forwarded to M365. Users authenticate to M365 using
their Active Directory credentials. Ensure all third-party services/components
are listed in the above description.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>Any
supporting design or implementation documentation for your M365 infrastructure</span></p>

<p class=CCXTriangleCxSpLast style='margin:0in;text-indent:0in'><span
lang=EN-AU style='color:windowtext;background:yellow'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>As a reminder,
please note that once CyberCX has confirmed the testing commencement date, any
delays need to be communicated to CyberCX at least 3 business days prior to
this date. Any time lost from delays not communicated at least 3 business days
in advance will be charged at the agreed rate for each day lost.</span></p>

<h2><a name="_Toc80967586"></a><a name="_Ref81402328"></a><a name="_Ref82172817"></a><a
name="_Toc110250583"><span lang=EN-AU>4.12<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Active Directory Security Assessment</span></a></h2>

<h3><span lang=EN-AU>4.12.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>Active Directory is a core component of
many organisations’ internal ICT environments. Because AD underpins so many
other aspects of the environment, a compromise of AD security can lead to
exposure of the systems that rely on it.</span></p>

<p class=MsoNormal><span lang=EN-AU>Active Directory Security Assessment seeks
to identify vulnerabilities or misconfigurations in Active Directory that could
result in privilege escalation, or the exposure of sensitive information.</span></p>

<h3><span lang=EN-AU>4.12.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX's approach to assessing the
configuration of Microsoft Active Directory draws on elements from a number of
recognised industry standards, including: </span></p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'><span lang=EN-AU
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Microsoft’s “Best Practices for Securing Active
Directory”</span></p>

<p class=MsoListParagraphCxSpLast style='text-indent:-.25in'><span lang=EN-AU
style='font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Australian Signals Directorate’s (ASD)
“Strategies to Mitigate Cyber Security Incidents”, in particular the ASD
“Essential Eight” </span></p>

<p class=MsoNormal><span lang=EN-AU>At a high level, CyberCX's approach to
assessing the security of Active Directory includes:</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=150 valign=top style='width:112.6pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
   2.0pt;margin-left:0in;line-height:normal'><b><span lang=EN-AU
   style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;color:white'>Stage</span></b></p>
   </td>
   <td width=450 valign=top style='width:337.6pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
   2.0pt;margin-left:0in;line-height:normal'><b><span lang=EN-AU
   style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;color:white'>Description</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=150 valign=top style='width:112.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Documentation Request</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.6pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>CyberCX will request documentation that details the
  existing AD infrastructure, including details of the domain/forest
  architecture, naming standards and privilege assignment standards in use.</span></p>
  </td>
 </tr>
 <tr>
  <td width=0 valign=top style='width:0in;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Data Gathering</span></b></p>
  </td>
  <td width=0 valign=top style='width:0in;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Extensive data collection will be performed via
  manual and automated tools, including both publicly available and custom
  in-house tooling.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Forest Structure and
  Trust Relationships</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.6pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>In-scope domains and forests will be examined to
  identify any trust relationships, and the security implications of identified
  trusts for each in-scope domain. Particular attention will be paid to attack
  paths that leverage trust relationships.</span></p>
  </td>
 </tr>
 <tr>
  <td width=0 valign=top style='width:0in;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Assignment of
  Privilege, Structure, and Manageability</span></b></p>
  </td>
  <td width=0 valign=top style='width:0in;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>The relationships between users, computers, groups,
  and other objects in the in-scope domains will be examined to determine
  whether privileges are being assigned securely and manageably. In-scope
  domains will also be assessed in terms of structure, adherence to naming
  standards, separation of privilege tiers, and other elements which impact the
  overall manageability of AD.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Privilege Escalation
  Assessment</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.6pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>CyberCX will attempt to identify attack paths by
  which standard or low-privilege accounts might elevate their privilege level
  to take control of the in-scope domains.</span></p>
  </td>
 </tr>
 <tr>
  <td width=0 valign=top style='width:0in;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Group Policy Security
  Assessment</span></b></p>
  </td>
  <td width=0 valign=top style='width:0in;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Group Policy Objects (GPOs) in each in-scope domain
  will be examined, with a particular focus on identifying:</span></p>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>Misassigned
  GPO permissions</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>Local user
  rights assignment</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>Credentials
  inappropriately stored in GPOs</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>Policies
  concerning password rules and intruder detection/lockout.</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>GPOs
  that deploy or execute weakly-protected scripts, links, MSI packages, and
  configuration files from file shares</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>Local </span><span
  lang=EN-AU style='color:windowtext'>Administrator</span><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'> account password
  management</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>Hardening
  of Domain Controllers</span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>Audit
  policy configuration</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.6pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Kerberos Attacks</span></b></p>
  </td>
  <td width=450 valign=top style='width:337.6pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>The in-scope domains will be assessed for
  susceptibility to common Kerberos-based attacks, including: </span></p>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>Kerberoasting</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>AS-REProasting</span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext'>Constrained,
  unconstrained, and resource-based constrained delegation abuses.</span></p>
  </td>
 </tr>
 <tr>
  <td width=0 valign=top style='width:0in;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Password Analysis</span></b></p>
  </td>
  <td width=0 valign=top style='width:0in;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>NT (and LM if available) password hashes will be
  extracted from the domain and subjected to a series of offline brute-force
  cracking attacks, using a combined dictionary and mask-based approach.
  Overall strength of passwords selected by users will be analysed, with a
  particular focus on high-risk “guessable” passwords.</span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>Privileged access account and service account
  passwords will be examined to identify risky admin behaviours such as
  password re-use across standard and privileged accounts, or password re-use
  across multiple service accounts.</span></p>
  </td>
 </tr>
</table>

<h2><a name="_Toc83127282"></a><a name="_Ref85110375"></a><a
name="_Toc110250584"><span lang=EN-AU>4.13<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Internet Presence Assessment</span></a></h2>

<h3><span lang=EN-AU>4.13.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>An internet presence assessment is a
reconnaissance activity used to define the external perimeter of an
organisation. The activity will identify </span><span lang=EN-AU>[Client Short
Name]</span><span lang=EN-AU>’s internet facing (on-premises and cloud-based)
DNS domains, hosts, network services, and applications.</span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX will analyse these results and
highlight any services or applications that should not be publicly facing or
could contain vulnerabilities. This information can also be incorporated into
asset inventories, included into deployment lifecycles, and security processes;
such as vulnerability management and penetration testing.</span></p>

<h3><span lang=EN-AU>4.13.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting an Internet Presence assessment. Each stage of is described in
detail in the table below.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><span
lang=EN-AU>Table </span><span lang=EN-AU>36</span><span lang=EN-AU>: Internet
Presence Assessment Methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr style='height:2.75pt'>
   <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt;height:2.75pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Stage</span></p>
   </td>
   <td width=451 valign=top style='width:337.9pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt;
   height:2.75pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Description</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Information Gathering
  and Reconnaissance</span></b></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>This involves the identification of DNS domain names
  and associated public networks by querying publicly available information.
  This information can be gathered from, but is not limited to, whois databases,
  traceroutes, DNS queries and search engines.</span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>This information is used to build a profile of the
  Internet-facing IT systems associated with the organisation and forms the
  basis of the target selection for the rest of this assessment.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Port Scanning</span></b></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>This stage involves the identification of supported
  protocols and listening ports on the target hosts. Listening ports indicate
  services running on the remote host that may allow CyberCX (or unauthorised
  users) to gain access to systems that are misconfigured or running outdated
  software with known vulnerabilities. </span></p>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>In addition, it may allow CyberCX to determine valid
  access paths to a remote host and identify security controls that appear to
  be in place surrounding discovered hosts.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Enumeration</span></b></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>This involves the interrogation and extraction of
  information from target system listening services. Attempts are made to
  identify open ports, running services, operating systems, and hosted
  applications on the target systems.</span><span lang=EN-AU style='line-height:
  105%;color:windowtext'> </span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Analysis</span></b></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>CyberCX will review, process, and understand the
  information output from earlier stages. This data is then analysed to
  identify any exposed services or applications that may pose a risk.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Reporting</span></b></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-bottom:0in'><span lang=EN-AU
  style='color:windowtext'>This is the final stage of the engagement and forms
  a permanent record of the work undertaken. The report will contain a detailed
  understanding of the scope, approach, and findings, along with a
  comprehensive set of recommendations designed to mitigate identified problem
  areas.</span></p>
  </td>
 </tr>
</table>

<h3><span lang=EN-AU>4.13.3<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Testing Technical Requirements</span></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To ensure a
successful engagement, the following are CyberCX’s technical requirements that
need to be fulfilled before the commencement of the Internet Presence
Assessment. These technical requirements are in addition to the service scoping
information located in Section </span><span
lang=EN-AU style='background:yellow'>3.2</span><span lang=EN-AU
style='background:yellow'>.</span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>All
known DNS domains and Internet-routable IP address ranges assigned</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='color:windowtext;background:yellow'>In-scope
subsidiaries or parent company names</span></p>

<p class=CCXTriangleCxSpLast style='margin:0in;text-indent:0in'><span
lang=EN-AU style='color:windowtext;background:yellow'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>As a reminder,
please note that once CyberCX has confirmed the testing commencement date, any
delays need to be communicated to CyberCX at least 3 business days prior to
this date. Any time lost from delays not communicated at least 3 business days
in advance will be charged at the agreed rate for each day lost.</span></p>

<h2><a name="_Ref86311311"></a><a name="_Toc110250585"><span lang=EN-AU>4.14<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Open-Source Intelligence Assessment</span></a></h2>

<h3><span lang=EN-AU>4.14.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Description</span></h3>

<p class=MsoNormal><span lang=EN-AU>Open-Source Intelligence (OSINT) comprises
the conduct of reconnaissance (recon), intelligence collection, and
intelligence analysis. The activity will identify the most likely, and most dangerous
attack scenarios relevant to the information technology architecture of </span><span
lang=EN-AU>[Client Short Name]</span><span lang=EN-AU>. </span></p>

<p class=MsoNormal><span lang=EN-AU>The scope is not limited by any arbitrary
physical, relational, or digital barrier; the engagement is intentionally
designed to simulate a cyber threat actor’s attention being cast onto the </span><span
lang=EN-AU>[Client Short Name]</span><span lang=EN-AU>. Cyber threat actors
will leverage any weak link directly or indirectly associated with the target,
with the intent to ultimately pivot towards the target and achieve the desired
end-state. As such, the scope includes technical and non-technical intelligence
assessments on the digital infrastructure of the </span><span lang=EN-AU>[Client
Short Name]</span><span lang=EN-AU>. </span></p>

<h3><span lang=EN-AU>4.14.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>The collection and assessment of OSINT is
aligned to the following focal points: </span></p>

<p class=MsoNormal><b><span lang=EN-AU style='font-size:10.0pt;line-height:
110%;color:#75AEFF'>External Attack Surface Area Discovery</span></b><span
lang=EN-AU> – mapping of the likely external attack surface area of </span><span
lang=EN-AU>[Client Short Name]</span><span lang=EN-AU> using passive or low
signature techniques, and</span></p>

<p class=MsoNormal><b><span lang=EN-AU style='font-size:10.0pt;line-height:
110%;color:#75AEFF'>Human Domain Discovery</span></b><span lang=EN-AU> - The
identification of high profile or high-value targets based on social media
reconnaissance and analysis of historical dark web user account compromise
events. </span></p>

<p class=MsoNormal><span lang=EN-AU>The techniques used in the two OSINT
domains are displayed in the table below. </span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><span
lang=EN-AU>Table </span><span lang=EN-AU>37</span><span lang=EN-AU>:
Open-Source Intelligence Assessment Methodology</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=150 valign=top style='width:112.55pt;border:solid #7F7F7F 1.0pt;
  background:#75AEFF;padding:0in 5.4pt 0in 5.4pt'>
  <p class=TableHeader><span lang=EN-AU>Stage</span></p>
  </td>
  <td width=451 valign=top style='width:337.95pt;border:solid #7F7F7F 1.0pt;
  border-left:none;background:#75AEFF;padding:0in 5.4pt 0in 5.4pt'>
  <p class=TableHeader><span lang=EN-AU>Description</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.55pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>External Attack Surface
  Area Discovery </span></b></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:12.0pt;color:windowtext'>&nbsp;</span></p>
  </td>
  <td width=451 valign=top style='width:337.95pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>DNS and sub-domain discovery</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Web server technology discovery</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Geolocation of core infrastructure</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>SSL analysis, </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Low signature external web
  application reconnaissance</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Metadata extraction and analysis</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Mail server identification and
  analysis</span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:12.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Potential user account discovery. </span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.55pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Human Domain Discovery </span></b></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:12.0pt;color:windowtext'>&nbsp;</span></p>
  </td>
  <td width=451 valign=top style='width:337.95pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>High-level company reconnaissance to understand the
  context, core relationships and networks, executive and high-value target
  discovery, which includes: </span></p>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Building a collection profile of
  the individual by conducting reconnaissance across social media platforms,
  data breaches, general media and employer publicity, and other online sources</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Spidering out to the individual’s
  family and acquaintances using the above sources, </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Triaging information collected thus
  far in attempt to discover physical assets and locations such as home
  addresses,</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Assessing the information in
  isolation at an individual level, and </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Assessing the information at a
  company level to determine the HVT collection profiles that are most likely
  to be exploited by threat actor. </span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Historical user account compromise
  event discovery and analysis. </span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
lang=EN-AU style='font-size:12.0pt;color:windowtext'>&nbsp;</span></p>

<h2><a name="_Ref86417938"></a><a name="_Toc110250586"><span lang=EN-AU>4.15<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Thick Client Penetration Test</span></a></h2>

<h3><span lang=EN-AU>4.15.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>CyberCX utilises a staged approach for
conducting thick client penetration tests. Each stage of the test is described
in detail in the table below.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><span
lang=EN-AU>Table </span><span lang=EN-AU>38</span><span lang=EN-AU>: Thick
Client Penetration Test Methodology</span></p>

<div align=center>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width="100%"
 style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 5.4pt 0in 5.4pt'>
   <p class=TableHeader><span lang=EN-AU>Stage</span></p>
   </td>
   <td width=451 valign=top style='width:338.1pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 5.4pt 0in 5.4pt'>
   <p class=TableHeader><span lang=EN-AU>Description</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Architecture</span></b></p>
  </td>
  <td width=451 valign=top style='width:338.1pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Review the application architecture to understand
  the number and roles of application tiers, and whether communication can be monitored/modified
  to communicate with the database to compromise the application and data.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Information disclosure</span></b></p>
  </td>
  <td width=451 valign=top style='width:338.1pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Assess whether the application stores critical
  information in files, memory, database, and the registry including, cryptographic
  keys, username, password of application and database stores, etc. that may
  allow you to further compromise the application and its data.</span><span
  lang=EN-AU style='font-size:10.0pt'> </span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Authentication mechanisms</span></b></p>
  </td>
  <td width=451 valign=top style='width:338.1pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Determine how authentication is performed in the
  application and what techniques can be used to circumvent or bypass the
  authentication mechanism. e.g., in some cases the clear-text or hashed
  password may be retrieved from the database and compared client side which
  can be obtained/modified by an adversary; in others the client can be
  patched/modified to avoid the entire authentication routine.</span></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Assess the user account policy in place to determine
  whether it is open to attacks which may lead to unauthorised access.</span></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Identify whether messages returned by the
  application can be used to enumerate users on the system which can be used in
  further attacks.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Authorisation issues</span></b></p>
  </td>
  <td width=451 valign=top style='width:338.1pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Evaluate whether the authorisation scheme adequately
  protects access to files and objects. </span></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Determine whether client/server communication can be
  intercepted/modified to yield additional privileges or functionality.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Data validation</span></b></p>
  </td>
  <td width=451 valign=top style='width:338.1pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Data validation ensures the integrity of information
  used by an application. CyberCX will perform analysis of each individual
  function of the application and attempt to inject faults into each
  receptacle. The analysis will include:</span></p>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Common Validators </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Data Sanitisation </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Negative Data Validation </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Output Filtering </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Positive Data Validation </span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>Type Checking</span></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>The most likely resulting vulnerability here is SQL
  injection. This attack can result in authentication bypass, viewing
  unauthorised data, application malfunction, data deletion or malicious
  command injection including database shutdown.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Session management</span></b></p>
  </td>
  <td width=451 valign=top style='width:338.1pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Review the techniques used to manage sessions
  through the application. Ensure session IDs are random and unbreakable.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Auditing and logging</span></b></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>&nbsp;</span></b></p>
  </td>
  <td width=451 valign=top style='width:338.1pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Logs are a key component of the intrusion detection
  and incident response process. They should be a complete and accurate record
  of the actions performed against the system and data stored. CyberCX will
  assess the events captured and the mechanisms in place to prevent
  modification/deletion and evaluate the incident response and escalation
  process surrounding adverse events. </span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Error condition handling </span></b></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>&nbsp;</span></b></p>
  </td>
  <td width=451 valign=top style='width:338.1pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Assess how the application handles faults and error
  conditions. Poorly handled conditions may give an adversary more information
  about the application than necessary enabling them to fine tune an attack.
  Errors conditions could occur when:</span></p>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>unrecognised data is entered into a
  field</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>unsupported file extensions are
  queried</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>URLs are tampered with</span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in;line-height:normal'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6'>w<span
  style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext'>attempts are made to manoeuvre
  between different parts of a site in an unauthorised manner</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Exception management</span></b></p>
  </td>
  <td width=451 valign=top style='width:338.1pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Exception management allows an application to
  capture and track erroneous events that could affect proper application
  processing. A well-designed application should contain exception management
  mechanisms that not only detect exceptions but audit exception anomalies to
  enable monitoring and logging of these events.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Cryptography</span></b></p>
  </td>
  <td width=451 valign=top style='width:338.1pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Evaluate the effectiveness / suitability of crypto
  technologies in place between client and server or between entities in the
  system. Encryption is the most powerful form of cryptography and is essential
  in preventing information leakage.</span></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Sensitive information should be encrypted during
  transport and encrypted when stored where possible.</span><span lang=EN-AU
  style='font-size:10.0pt'> </span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.45pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>Business logic</span></b></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-AU style='font-size:10.0pt;color:#75AEFF'>&nbsp;</span></b></p>
  </td>
  <td width=451 valign=top style='width:338.1pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='font-size:
  10.0pt;color:windowtext'>Applications contain workflows and implement
  business rules and policies specific to that application. This logic can be
  susceptible to flaws which allow for actions outside these workflows and
  business rules to be performed which may provide a vector for system or data
  compromise. CyberCX will evaluate this attack vector.</span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<h2><a name="_Ref87269314"></a><a name="_Toc110250587"><span lang=EN-AU>4.16<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Secure Code Review</span></a></h2>

<p class=MsoNormal><span lang=EN-AU>CyberCX source code reviews focus on
identifying weaknesses in an <a>applications</a></span><span
class=MsoCommentReference><span lang=EN-AU style='font-size:8.0pt;line-height:
110%'><a class=msocomanchor id="_anchor_5"
onmouseover="msoCommentShow('_anchor_5','_com_5')"
onmouseout="msoCommentHide('_com_5')" href="#_msocom_5" language=JavaScript
name="_msoanchor_5">[LD5]</a>&nbsp;</span></span><span lang=EN-AU> source code
where each weakness imposes a level of security risk. This includes identifying
weaknesses that could allow exploitation or abuse of the application in ways
that were unintended.</span></p>

<p class=MsoNormal><a name="_Toc374304373"></a><a name="_Toc374348138"><span
lang=EN-AU>CyberCX use both open source and proprietary static analysis tools
and processes that are relevant to the application stack within scope of the
review. These tools and processed assist in identifying issues such as the
inappropriate storage or use of application secrets, or the use of potentially
dangerous framework or operating system functions. </span></a></p>

<p class=MsoNormal><span lang=EN-AU>All findings made will be manually
investigated by the consultant to eliminate false positives and confirm
exploitable issues.</span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX examine various aspects of the
application during the code review, including the following:</span></p>

<p class=CCXTriangleCxSpFirst style='margin-bottom:0in;line-height:normal'><span
lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Authentication</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Authorisation</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Session
Management</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Input
Validation</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Error
Handling</span></p>

<p class=CCXTriangleCxSpMiddle style='margin-bottom:0in;line-height:normal'><span
lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Secure
Deployment</span></p>

<p class=CCXTriangleCxSpLast style='margin-bottom:0in;line-height:normal'><span
lang=EN-AU style='font-family:"Wingdings 3";color:#1CE3E6'>w<span
style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU>Cryptographic
Controls</span></p>

<h3><span lang=EN-AU>4.16.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU>The code review is conducted in several
main phases (described below). The approach used by CyberCX in designing these
phases is based on the consolidation of several well-known, tested, and proven
methodologies.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><span
lang=EN-AU>Table </span><span lang=EN-AU>6</span><span lang=EN-AU> - Secure
Code Review methodology</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width=601 style='width:450.55pt;border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=150 valign=top style='width:112.35pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span class=normaltextrun><span lang=EN-AU
   style='font-weight:normal'>Stage</span></span><span class=eop><span
   lang=EN-AU style='font-weight:normal'> </span></span></p>
   </td>
   <td width=451 valign=top style='width:338.2pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span class=normaltextrun><span lang=EN-AU
   style='font-weight:normal'>Description</span></span><span class=eop><span
   lang=EN-AU style='font-weight:normal'> </span></span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=150 valign=top style='width:112.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=TableColumnHeader><span class=normaltextrun><span lang=EN-AU>Reconnaissance
  </span></span></p>
  </td>
  <td width=451 valign=top style='width:338.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Understanding
  the application is essential to being able to correctly identify and
  categorise risks. This stage will often involve multiple sources of input
  such as interviews with stakeholders, walking through the supporting
  documentation and process flows, as well as getting hands-on with a working
  build of the application code.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>The objective
  of this stage is to identify how the application is used on a day-to-day
  basis, identifying its design and business objectives, and the existing
  security controls that have been implemented.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=TableColumnHeader><span class=normaltextrun><span lang=EN-AU>Discovery</span></span></p>
  </td>
  <td width=451 valign=top style='width:338.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Using
  specialised security source code review software, the source code is analysed
  to identify application inputs, the attack surface, simple coding errors, and
  most importantly, security weaknesses. </span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>The security
  weaknesses identified include those that can be identified through web
  application penetration testing as well as many others. During this stage, a
  hands-on approach is also taken not only to confirm valid findings but to
  identify possible logic flaws or design failures in the application which
  cannot be discovered using automated processes.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=TableColumnHeader><span class=normaltextrun><span lang=EN-AU>Confirmation
  and Proof of Concept </span></span></p>
  </td>
  <td width=451 valign=top style='width:338.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Where required
  and if possible, weaknesses identified through the discovery stage can be
  confirmed through actual exploitation. This allows the client to understand
  their risk level to the most accurate degree.</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Depending on
  the type of vulnerability or weakness, it is possible that demonstrating
  actual abuse or exploitation is not possible and will therefore be assessed
  on a case-by-case basis.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=TableColumnHeader><span class=normaltextrun><span lang=EN-AU>Reporting</span></span></p>
  </td>
  <td width=451 valign=top style='width:338.2pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>On completion
  of the assessment, and validation of each of the findings, the report is
  written. Documenting findings along with remediation actions in a way that
  can be understood by the executive level, while still highlighting the key
  technical issues that the precise steps that are required to remediate them.</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<h1><a name="_Toc110250588"><span lang=EN-AU>5<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Assumptions</span></a><span lang=EN-AU> </span></h1>

<p class=MsoNormal><span lang=EN-AU>The following assumptions are given unless
otherwise clearly stated in the scope.</span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Approval of necessary contractual documentation must occur prior to
commencement of CyberCX activities.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>[Client Short Name] should provide access to the necessary systems
and personnel required to perform the engagement. This may include network
access by CyberCX devices, accounts, building access, desk space, and a
commitment from [Client Short Name] that relevant subject matter experts will
make reasonable effort to answer any queries.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>[Client Short Name] will provide a primary point of contact to
coordinate logistics and management of the engagement.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>The scope of the proposed assessment will be limited to what is
defined as such in ‘<i>Section </i></span><i><span
lang=EN-AU>3</span></i><i><span lang=EN-AU> - </span></i><i><span
lang=EN-AU>Scope of Works</span></i><i><span lang=EN-AU> - Page </span></i><i><span lang=EN-AU>11</span></i><i><span lang=EN-AU>’</span></i><span lang=EN-AU> within
this document.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='background:yellow'>The scope of the
proposed assessment will be limited to one (1) engagement. The effort provided
under this proposal cannot be divided into several smaller commitments.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Unless defined within the scoping section of this proposal,
consultation will take place during normal business hours. If after hours work
is required, this will need to be pre-arranged, and priority work-stream rates
will apply.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Variations from the agreed scope will be mutually agreed and charged
based on the rate provided in ’Section </span><span
lang=EN-AU>8</span><span lang=EN-AU> - </span><span
lang=EN-AU>Investment Summary</span><span lang=EN-AU> – Page </span><span lang=EN-AU>50</span><span lang=EN-AU>’.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Any on-site or off-site assistance requested or performed in
addition to that stated within ‘<i>Section </i></span><i><span
lang=EN-AU>3</span></i><i><span lang=EN-AU> - </span></i><i><span
lang=EN-AU>Scope of Works</span></i><i><span lang=EN-AU> - Page </span></i><i><span lang=EN-AU>11</span></i><i><span lang=EN-AU>’</span></i><span lang=EN-AU>, will
be a separate support requirement and hence attract associated labour costs.  </span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Where a system is reliant on third-party components, [Client Short
Name] will seek permission from the third party to have that component included
in testing. Without this permission third-party components will be excluded
from the Scope of Works.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Applications and systems that are in scope for testing will be
stable (no changes will be deployed to the environment) and continuously
available throughout the agreed testing window.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>[Client Short Name] is to verify a full backup of all servers,
applications, databases, data, and network equipment exists before testing
begins.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='background:yellow'>The testing will be
completed onsite at [Client Short Name], with all remaining works, including
reporting, to be completed offsite at CyberCX premises.</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='background:yellow'>All stages of the
engagement, including testing and reporting, will be conducted and completed
offsite, from CyberCX Premises.</span></p>

<p class=CCXTriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span><span lang=EN-AU style='background:yellow'>Some or all phases of
this engagement will be time boxed.</span></p>

<p class=MsoNormal><b><span lang=EN-AU style='background:yellow'>Please Note:</span></b><span
lang=EN-AU style='background:yellow'> Time-boxing is a best effort approach
that cannot guarantee full coverage due to the limited timeframe, results will
be based on the days allocated for each phase, along with the information and
access provided.</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>CyberCX offer
this approach when there is limited scope available or limited budget. This
means that the allocated time for CyberCX will be sufficient for a Risk Based
Assessment, targeting common vulnerabilities as part of the assessments
initially and then utilising any available further time allocated to gaining
further insights.</span></p>

<h1><a name="_Toc63349832"></a><a name="_Toc110250589"><span lang=EN-AU>6<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Risk Management</span></a></h1>

<p class=MsoNormal><span lang=EN-AU>Performing security testing work entails
certain risks. Nevertheless, CyberCX believes that performing these tests in a
systematic and controlled manner is an effective way to test the security of
your infrastructure and connected systems. It specifically allows you to
pinpoint vulnerabilities before someone else does.</span></p>

<p class=MsoNormal><span lang=EN-AU>CyberCX will exercise due professional care
and competence in the performance of the Services. However, [Client Short Name]
acknowledges that the following may be experienced during network testing:</span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Disruption or degradation of systems and services,</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Data loss or transformation of systems and services,</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Loss of system or application integrity,</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Information disclosure from systems and services, and</span></p>

<p class=CCXTriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Many emails and other alert messages may be generated by the systems
tested.</span></p>

<p class=MsoNormal><span lang=EN-AU>Some of these risks can be minimised by
ensuring:</span></p>

<p class=CCXTriangleCxSpFirst><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>The latest software updates have been installed,</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>There is adequate disk space on the systems and services under test,</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>There are adequate CPU cycles remaining on systems and services
under test to handle an increase in network and transactional based traffic,</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>There is adequate free Internet bandwidth to handle an increase in
network-based traffic,</span></p>

<p class=CCXTriangleCxSpMiddle><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>There are full backups of all systems and services under test, and</span></p>

<p class=CCXTriangleCxSpLast><span lang=EN-AU style='font-family:"Wingdings 3";
color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
lang=EN-AU>Testing is conducted against a test environment rather than a
production environment.</span></p>

<p class=MsoNormal><span lang=EN-AU>[Client Short Name] acknowledges that
technical testing cannot identify all possible vulnerabilities, configurations,
or weaknesses. Instead, the CyberCX team will attempt to identify
vulnerabilities on as many systems as possible in the allotted time, and to
examine penetrated computers for business function and data content. This type
of activity more accurately reflects the nature of hacking and helps illustrate
the potential exploits of an unauthorised perpetrator.</span></p>

<h1><a name="_Toc63349833"></a><a name="_Toc110250590"><span lang=EN-AU>7<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Deliverables and Reporting</span></a></h1>

<p class=MsoNormal><span lang=EN-AU>During the assessment, CyberCX will provide
verbal results on all critical-risk findings on a daily or as needed basis. At
the completion of the engagement field work, after QA</span><a href="#_ftn1"
name="_ftnref1" title=""><span class=MsoFootnoteReference><span lang=EN-AU><span
class=MsoFootnoteReference><span lang=EN-AU style='font-size:11.0pt;line-height:
110%;font-family:"Calibri",sans-serif'>[1]</span></span></span></span></a><span
lang=EN-AU>, CyberCX will provide a report that will contain the following
items:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343654"></a><a name="_Toc71039899"><span lang=EN-AU>Table </span></a><span lang=EN-AU>39</span><span lang=EN-AU> - Report Components</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Component</span></b></p>
   </td>
   <td width=451 valign=top style='width:337.9pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Timetable</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Executive Summary</span></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Executive
  summary detailing CyberCX’s scope, approach, and summary recommendations.
  This section is aimed at senior management and will contain non-technical
  (business context) descriptions of all findings along with discussions of
  their inherent business risk and recommended risk management strategies.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Methodology</span></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Process that
  the tester used to achieve a particular result, results of automated testing
  tools (in a practical pivot table), and screenshots of successful exploits.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Detailed
  Recommendations</span></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Detailed
  recommendations covering identified security vulnerabilities and exposures.
  This section is aimed at technical staff and will provide them with a
  complete solution detailing:</span></p>
  <p class=Table-NumberedListCxSpFirst style='margin-bottom:0in'><span
  lang=EN-AU style='color:windowtext'>1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='color:windowtext'>Description of the
  vulnerability,</span></p>
  <p class=Table-NumberedListCxSpMiddle style='margin-bottom:0in'><span
  lang=EN-AU style='color:windowtext'>2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='color:windowtext'>Host(s) affected by
  the vulnerability, </span></p>
  <p class=Table-NumberedListCxSpMiddle style='margin-bottom:0in'><span
  lang=EN-AU style='color:windowtext'>3<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='color:windowtext'>Implication the
  vulnerability has on the security of the host and connected systems,</span></p>
  <p class=Table-NumberedListCxSpMiddle style='margin-bottom:0in'><span
  lang=EN-AU style='color:windowtext'>4<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='color:windowtext'>Classification of the
  vulnerability<a href="#_ftn2" name="_ftnref2" title=""><span
  class=MsoFootnoteReference><span class=MsoFootnoteReference><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Calibri",sans-serif;
  color:windowtext'>[2]</span></span></span></a> (Critical, High, Medium, Low,
  or Informational) to assist you in determining the urgency in rectifying the
  problem area identified,</span></p>
  <p class=Table-NumberedListCxSpMiddle style='margin-bottom:0in'><span
  lang=EN-AU style='color:windowtext'>5<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='color:windowtext'>Root cause analysis
  which allows patterns of vulnerability to be identified which can be treated
  to prevent similar occurrences in the future, and</span></p>
  <p class=Table-NumberedListCxSpLast style='margin-bottom:0in'><span
  lang=EN-AU style='color:windowtext'>6<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><span lang=EN-AU style='color:windowtext'>High-level technical
  description of how to reduce or eliminate the exposures inherent in the
  vulnerabilities.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Client <a>Integration</a></span><span
  class=MsoCommentReference><span lang=EN-AU style='font-size:8.0pt;line-height:
  110%'><a class=msocomanchor id="_anchor_6"
  onmouseover="msoCommentShow('_anchor_6','_com_6')"
  onmouseout="msoCommentHide('_com_6')" href="#_msocom_6" language=JavaScript
  name="_msoanchor_6">[NC6]</a>&nbsp;</span></span></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>CyberCX can assist
  with entering the outputs from penetration tests into <span style='background:
  yellow'>[Client Short Name]</span>‘s incident response, risk management
  processes, bug tracking platform, technical security monitoring services, and
  technical security tool configurations. </span></p>
  </td>
 </tr>
 <tr>
  <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF'>Summary Matrix</span></p>
  </td>
  <td width=451 valign=top style='width:337.9pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Summary list
  highlighting vulnerabilities by risk rating and host that can be used as a
  work program to resolve any issues identified.</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-AU>In addition, a project closeout meeting can
be conducted with [Client Short Name].</span></p>

<h2><a name="_Toc110250591"></a><a name="_Toc63349834"><span lang=EN-AU
style='background:yellow'>7.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU style='background:yellow'>Interim </span></a><a><span
lang=EN-AU style='background:yellow'>Reporting</span></a><span
class=MsoCommentReference><span lang=EN-AU style='font-size:8.0pt;line-height:
110%;font-family:"Calibri",sans-serif;color:windowtext;font-weight:normal'><a
class=msocomanchor id="_anchor_7"
onmouseover="msoCommentShow('_anchor_7','_com_7')"
onmouseout="msoCommentHide('_com_7')" href="#_msocom_7" language=JavaScript
name="_msoanchor_7">[NC7]</a>&nbsp;</span></span></h2>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>At times, some
situations may call for the supply of information discovered by CyberCX before
the completion of an engagement or the finalisation of reports. For these
situations, CyberCX offers the availability of interim reports or issue
registers, which may not have the complete findings and will not be in a final
‘polished’ state. These reports are clearly marked as interim and can be
produced under certain conditions and disclaimers. </span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>If a significant
vulnerability is found, and the report needs to be delivered in a prompt
manner, an interim report or issues register can be quickly supplied so the
issue can be addressed as swiftly as possible. This can also be the case when
less critical concerns are discovered, and further testing may be of use to the
client but will take an increased amount of time and effort. Bringing awareness
of these issues to [Client Short Name] allows additional decisions to be made
sooner in the interest of organisational risk.</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>An interim report
or issues register would also be of use for client meetings that occur towards
the end of the engagement but before the delivery of the report. This would
factor in when reporting, and testing have not been fully completed as with
long engagements or multi-component tests, allowing for the presentation of
up-to-date information when and where needed. </span></p>

<h2><a name="_Toc63349835"></a><a name="_Toc110250592"><span lang=EN-AU
style='background:yellow'>7.2<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU style='background:yellow'>Letter of Attestation</span></a></h2>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>Where required,
and outside of timeboxed assessments, CyberCX can provide a letter of
attestation, when no critical or high-level risks are found. This artefact can
be used to prove professionalism and understanding of security requirements to [Client
Short Name]’s clients.</span></p>

<h2><a name="_Toc110250593"></a><a><span lang=EN-AU style='background:yellow'>7.3<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU style='background:yellow'>Project Management</span></a><span
class=MsoCommentReference><span lang=EN-AU style='font-size:8.0pt;line-height:
110%;font-family:"Calibri",sans-serif;color:windowtext;font-weight:normal'><a
class=msocomanchor id="_anchor_8"
onmouseover="msoCommentShow('_anchor_8','_com_8')"
onmouseout="msoCommentHide('_com_8')" href="#_msocom_8" language=JavaScript
name="_msoanchor_8">[NC8]</a>&nbsp;</span></span></h2>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>To facilitate and
ensure services are aligned to customer requirements and expectations, CyberCX
has a mature Delivery Operations function. This function is responsible for
ensuring that engagements are delivered timely, efficiently, and
professionally. </span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>CyberCX
recommends the active engagement of delivery resources to provide expert
delivery management (Project Management). Engaging CyberCX's Delivery Practice
ensures strategic, capable, and specialist delivery project management,
irrespective of size, methodology, and technology of your program, project, or
engagement. CyberCX's Delivery practice specialises in delivering business
critical projects on time, on budget, and the entire company's technical
capability to support a projects success. </span></p>

<h3><span lang=EN-AU style='background:yellow'>7.3.1<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU style='background:yellow'>Methodology</span></h3>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>CyberCX adopts a
hybrid agile &quot;fit for purpose&quot; approach to project delivery, all
project governance and controls, which are tailored to the size and complexity
of each project or engagement, working in conjunction with our client's needs. </span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr style='height:2.75pt'>
   <td width=150 valign=top style='width:112.65pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt;height:2.75pt'>
   <p class=TableHeader><span lang=EN-AU style='background:yellow;font-weight:
   normal'>Stage</span></p>
   </td>
   <td width=451 valign=top style='width:337.9pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt;
   height:2.75pt'>
   <p class=TableHeader><span lang=EN-AU style='background:yellow;font-weight:
   normal'>Description</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=150 style='width:112.65pt;border:solid #7F7F7F 1.0pt;border-top:
  none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF;background:yellow'>Execution</span></b></p>
  </td>
  <td width=451 style='width:337.9pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoBodyText style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='color:windowtext;
  background:yellow'>CyberCX has extensive experience managing Cyber Security,
  Secure Data Transformation, and IDAM engagements using a PMI based
  methodology that effectively manages engagements by adopting a &quot;fit for
  purpose&quot; framework. </span></p>
  <p class=MsoBodyText style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='color:windowtext;
  background:yellow'>e.g. project management requirements for a short
  pen-testing engagement differ significantly from a multi-year secure digital
  data transformation. </span></p>
  <p class=MsoBodyText style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='color:windowtext;
  background:yellow'>CyberCX adopts a hybrid agile &quot;fit for purpose&quot;
  approach to project delivery, all project governance and controls, which are
  tailored to the size and complexity of each project or engagement, working in
  conjunction with our client's needs. </span></p>
  <p class=MsoBodyText style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='color:windowtext;
  background:yellow'>CyberCX recommends the following &quot;phased&quot;
  approach, based on Project Management Institutes' (PMI) five phases of
  project management. These are based on applying knowledge, skills, tools, and
  techniques to a broad range of activities to meet the project's requirements.
  </span></p>
  <p class=MsoBodyText style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal'><span lang=EN-AU style='color:windowtext;
  background:yellow'>These phases provide the most robust project management
  approach, which your project manager can adapt to either Waterfall, Agile, or
  Hybrid Agile approaches: </span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Initiate</span></b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'> –
  Project Charter &amp; Initiation</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Project
  Planning</span></b><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'> – Scope, Budget, Work breakdown structure, Milestones,
  Gantt chart, Communications Plan, Risk Management. C.L.E.A.R Goals Method</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Project
  Execution</span></b><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'> – Status and Tracking, KPI's, Quality, Forecasts</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Project
  Monitoring &amp; Control</span></b><span lang=EN-AU style='font-size:10.0pt;
  color:windowtext;background:yellow'> – Objectives, Quality Deliverables,
  Effort &amp; Costs Tracking, Performance</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Project
  Close</span></b><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'> – Project post-mortem, Reporting, Handover, Lessons
  Learned</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;text-indent:0in;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext;background:yellow'>By ensuring all
  streams that can run in parallel do, streams that need to run agile with
  iterative development can, and streams that need to run waterfall, CyberCX
  can minimise risk, expedite time efficiencies and bring the project or
  engagement in as quickly as possible. As a result, time and resources are
  managed throughout the project life cycle irrespective of the methodology,
  approach or framework used.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 style='width:112.65pt;border:solid #7F7F7F 1.0pt;border-top:
  none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF;background:yellow'>Project
  Delivery Cadence</span></b></p>
  </td>
  <td width=451 style='width:337.9pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Engagement</span></b></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>The
  &quot;fit for purpose&quot; delivery management offering, is facilitated by
  several factors:&nbsp;&nbsp;</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>A
  dedicated delivery manager/coordination function that can be utilised&nbsp;</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>A
  project team using an appropriately scaled process dependant on the size and
  complexity of the project.&nbsp;&nbsp;&nbsp;</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Specific
  methodologies to ensure consistent deliverables across CyberCX
  consultants&nbsp;</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Clear
  and concise agreed scope and deliverables.&nbsp;</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;text-indent:0in;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;background:yellow'>CyberCX<span style='color:windowtext'>
  also employs a delivery governance process which is detailed
  below:&nbsp;&nbsp;</span></span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Daily
  Standups</span></b><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>: To capture individuals tasks completed, tasks underway,
  any roadblocks to be moved out of the way. These will only be for technical
  team members and PM's</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Weekly
  Meetings</span></b><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>: capture critical activities and progress towards
  deliverables during the previous week and provide the opportunity to offer
  guidance and set or revise priorities. The weekly meeting would also track
  critical risks and issues and agree on any mitigations or other relevant action.&nbsp;</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Steering
  Committee Meetings</span></b><span lang=EN-AU style='font-size:10.0pt;
  color:windowtext;background:yellow'>: Where required and warranted. Provide
  executive and steering committee members and project summary. In addition,
  provide an open overview of High Risks and Issues, any Decisions made that
  have changed the course of the project, any items that need to be bought to
  the attention of the Steering Committee attendees. </span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>RAID
  meetings</span></b><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>: As and when required (project size dependant). RAID
  meetings are scheduled regularly between CyberCX Delivery Manager, your
  Project Manager and Stakeholders for transparency. All Risks, Issues, Actions
  and Decisions are noted, discussed, and actions agreed to.</span></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><b><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Encode Sans Semi Expanded";
  color:windowtext;background:yellow'>&nbsp;</span></b></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><b><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Encode Sans Semi Expanded";
  color:windowtext;background:yellow'>Risk Management&nbsp;&nbsp;</span></b></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;text-indent:0in;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext;background:yellow'>Risks will
  continue to be identified throughout the life of a project and through
  various means.&nbsp;These will all be documented in the Risk Register, which
  is incorporated within the project RAID register.  and high impact risks
  noted and discussed in the weekly status meeting. </span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;text-indent:0in;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;color:windowtext;background:yellow'>After identifying
  a risk, the likelihood and impact are determined, and a risk rating is calculated
  using the&nbsp;agreed&nbsp;CyberCX&nbsp;Risk Rating&nbsp;Matrix&nbsp;and Risk
  Mitigation strategy.&nbsp;</span></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><b><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Encode Sans Semi Expanded";
  color:windowtext;background:yellow'>&nbsp;</span></b></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><b><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Encode Sans Semi Expanded";
  color:windowtext;background:yellow'>Issue Management&nbsp;</span></b></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>All
  issues are captured in the&nbsp;Issues Log&nbsp;and assigned a priority.
  Significant issues will be raised with the team. Issues will be identified
  as:&nbsp;</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Low:
  The issue has had a minor impact on meeting one or more project objectives
  but has not stopped the project from progressing. The issue does not need to
  be resolved right away&nbsp;</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Medium:
  The issue has had a significant impact on the ability to meet one or more
  project objectives and may have caused some disruption to the project. It
  will need to be resolved soon&nbsp;</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>High:
  The issue has significantly affected the ability to meet one or more project
  objectives or has stopped the project altogether. It will need to be resolved
  ASAP.&nbsp;</span></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Issues
  will be regularly reviewed, managed, and communicated, through weekly status
  meetings and in detail in the RAID meetings if undertaken</span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>.&nbsp;</span></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Encode Sans Semi Expanded";
  color:windowtext;background:yellow'>&nbsp;</span></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><b><span
  lang=EN-AU style='font-size:10.0pt;font-family:"Encode Sans Semi Expanded";
  color:windowtext;background:yellow'>Quality Management&nbsp;</span></b></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Quality
  Management as a function is the process of ensuring that all aspects of a
  project, and its results, fully meet the needs and expectations of our
  client, their stakeholders, and participants both from a system and
  development perspective and a performance and service perspective. CyberCX
  ensures its project meets the CyberCX Quality Management processes.</span></p>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>The
  primary components of the Quality management function are:</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Overall
  Quality Philosophy</span></b><span lang=EN-AU style='font-size:10.0pt;
  color:windowtext;background:yellow'>&nbsp;- The involvement of all project
  participants in ensuring that project goals, requirements and performance
  standards comply with the expectations of both you the client and the CyberCX
  project team.</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Quality
  Assurance</span></b><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>&nbsp;- The processes&nbsp;that determine design,
  objectives, and resources provide the project team, client, and shareholders
  with performance standards and feedback on the project's performance.</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><b><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Quality
  Control</span></b><span lang=EN-AU style='font-size:10.0pt;color:windowtext;
  background:yellow'>&nbsp;- The technical processes that examine, analyse and
  report the project's progress and conformance with performance requirements.</span></p>
  </td>
 </tr>
 <tr>
  <td width=150 style='width:112.65pt;border:solid #7F7F7F 1.0pt;border-top:
  none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:#75AEFF;background:yellow'>Deliverables
  </span></b></p>
  </td>
  <td width=451 style='width:337.9pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:0in;line-height:normal;vertical-align:baseline'><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>CyberCX
  Delivery Managers can provide the following deliverables and agreed before
  commencement:</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Kick
  off Meeting Pack</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Ms
  Project – Schedule or equivalent </span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Milestone
  register</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Project
  Management Plan</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Project
  Status Meeting Pack</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Risk,
  Issues, Actions, Decisions Register (RAID Register)</span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Technical
  deliverable acceptance forms – for all deliverables within the project. </span></p>
  <p class=CCXTriangle style='margin-top:2.0pt;margin-right:0in;margin-bottom:
  2.0pt;margin-left:17.85pt;line-height:normal'><span lang=EN-AU
  style='font-size:10.0pt;font-family:"Wingdings 3";color:#1CE3E6;background:
  yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;color:windowtext;background:yellow'>Agile
  – backlog, sprint planning, retro, etc.</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<h1><a name="_Ref50461505"></a><a name="_Toc63349836"></a><a
name="_Toc110250594"><span lang=EN-AU>8<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Investment Summary</span></a></h1>

<p class=MsoNormal><span lang=EN-AU>All prices are in Australian Dollars (AUD)
and exclude GST. </span></p>

<h2><a name="_Toc63349837"></a><a name="_Toc110250595"><span lang=EN-AU>8.1<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Option 1 – Business Hours</span></a></h2>

<p class=MsoNormal><span lang=EN-AU>The pricing schedule includes all
professional services as outlined within this proposal.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343655"></a><a name="_Toc71039900"><span lang=EN-AU>Table </span></a><span lang=EN-AU>40</span><span lang=EN-AU> - Investment Summary</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Engagement Pricing</span></b></p>
   </td>
   <td width=94 valign=top style='width:70.4pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
   style='font-size:10.0pt;line-height:110%;color:white'>Price (Ex GST)</span></b></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>[Review Type] <a>Solution</a></span><span
  class=MsoCommentReference><span lang=EN-AU style='font-size:8.0pt;line-height:
  110%'><a class=msocomanchor id="_anchor_9"
  onmouseover="msoCommentShow('_anchor_9','_com_9')"
  onmouseout="msoCommentHide('_com_9')" href="#_msocom_9" language=JavaScript
  name="_msoanchor_9">[NC9]</a>&nbsp;</span></span></p>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:black'>External
  Network Penetration Test (ENPT)</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6'>w<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:black'>Web
  Application Penetration Test (WAPT)</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:black;background:yellow'>Internal Network Penetration Test (INPT)</span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:black;background:yellow'>Secure Configuration Assessment (SCA)</span></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right'><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext;
  background:yellow'>$27,300</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>Re-Testing</span></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:black;background:yellow'>$000</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>Interim Reporting</span></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:windowtext;background:yellow'>$000</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><b><span lang=EN-AU
  style='color:black'>Total Price (Ex GST) </span></b></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:black;background:yellow'>$000</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><b><span lang=EN-AU style='color:black;background:yellow'>Additional
  Options</span></b></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:windowtext;background:yellow'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Limited
  Phishing Campaign</span></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:black;background:yellow'>$000</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Build
  Review</span></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:windowtext;background:yellow'>$000</span></p>
  </td>
 </tr>
</table>

<h2><a name="_Toc63349838"></a><a name="_Toc110250596"><span lang=EN-AU>8.2<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Option 2 - Priority Work-stream</span></a></h2>

<p class=MsoNormal><span lang=EN-AU>This work stream should be considered when:</span></p>

<p class=CCXBulletsCxSpFirst><span lang=EN-AU style='font-family:Symbol'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>The work must be completed out of hours,</span></p>

<p class=CCXBulletsCxSpLast><span lang=EN-AU style='font-family:Symbol'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>The timing of the testing is of a critical
nature – and cannot wait on normal resource scheduling and delivery. </span></p>

<p class=MsoNormal><span lang=EN-AU>The pricing schedule below includes all
professional services as outlined within this proposal.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343656"></a><a name="_Toc71039901"><span lang=EN-AU>Table </span></a><span lang=EN-AU>41</span><span lang=EN-AU> - Priority Work Summary</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Engagement
   Pricing</span></p>
   </td>
   <td width=94 valign=top style='width:70.4pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Price (Ex
   GST)</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>[Review
  Type]</span><span lang=EN-AU style='color:black'> <a>Solution</a></span><span
  class=MsoCommentReference><span lang=EN-AU style='font-size:8.0pt;line-height:
  110%'><a class=msocomanchor id="_anchor_10"
  onmouseover="msoCommentShow('_anchor_10','_com_10')"
  onmouseout="msoCommentHide('_com_10')" href="#_msocom_10"
  language=JavaScript name="_msoanchor_10">[NC10]</a>&nbsp;</span></span></p>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:black;background:yellow'>External Network Penetration Test (ENPT)</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:black;background:yellow'>Web Application Penetration Test (WAPT)</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:black;background:yellow'>Internal Network Penetration Test (INPT)</span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:black;background:yellow'>Secure Configuration Assessment (SCA)</span></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right'><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:windowtext;
  background:yellow'>$000</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>Re-Testing</span></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:black;background:yellow'>$000</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>Interim Reporting</span></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:windowtext;background:yellow'>$000</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><b><span lang=EN-AU
  style='color:black'>Total Price (Ex GST) </span></b></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:black;background:yellow'>$000</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><b><span lang=EN-AU style='color:black;background:yellow'>Additional
  Options</span></b></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:windowtext;background:yellow'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Limited
  Phishing Campaign</span></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:black;background:yellow'>$000</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black;background:yellow'>Build
  Review</span></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><span lang=EN-AU
  style='color:windowtext;background:yellow'>$000</span></p>
  </td>
 </tr>
</table>

<h2><a name="_Toc63349839"></a><a name="_Toc110250597"><span lang=EN-AU>8.3<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Expenses</span></a></h2>

<p class=MsoNormal><span lang=EN-AU>Expenses will include all reasonable
accommodation, transport, and subsistence costs. The estimated expenses for
this engagement are detailed in the following table.</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343657"></a><a name="_Toc71039902"><span lang=EN-AU>Table </span></a><span lang=EN-AU>42</span><span lang=EN-AU> - Additional Expenses</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Engagement
   Pricing</span></p>
   </td>
   <td width=94 valign=top style='width:70.4pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Price (Ex
   GST)</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>Estimated Expenses
  (may change depending on scope)</span></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text-RightAlign><span lang=EN-AU style='color:windowtext;
  background:yellow'>$000</span></p>
  </td>
 </tr>
 <tr>
  <td width=506 valign=top style='width:379.8pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=right style='text-align:right'><b><span lang=EN-AU
  style='color:black'>Total Price (Ex GST) </span></b></p>
  </td>
  <td width=94 valign=top style='width:70.4pt;border-top:none;border-left:none;
  border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text-RightAlign><span lang=EN-AU style='color:black;
  background:yellow'>$000</span></p>
  </td>
 </tr>
</table>

<h2><a name="_Toc63349840"></a><a name="_Toc110250598"><span lang=EN-AU>8.4<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Variations to Supply of Service</span></a></h2>

<p class=MsoNormal><span lang=EN-AU>If any modifications are required during
the project (due to unforeseen circumstances or upon your request), CyberCX
will supply a written variation form which you will be asked to authorise.</span></p>

<h2><a name="_Toc63349841"></a><a name="_Toc110250599"><span lang=EN-AU>8.5<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Terms and Conditions of Supply</span></a></h2>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>This proposal
should be read in conjunction with CyberCX’s Terms and Conditions at the end of
this document.</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>OR</span></p>

<p class=MsoNormal><span lang=EN-AU style='background:yellow'>This order is
governed by the Master Services Agreement between [Client Long Name] and
CyberCX.</span></p>

<span lang=EN-AU style='font-size:11.0pt;line-height:110%;font-family:"Calibri",sans-serif'><br
clear=all style='page-break-before:always'>
</span>

<p class=MsoNormal><a name="_Ref50461041"><span lang=EN-AU style='font-size:
14.0pt;line-height:110%'>&nbsp;</span></a></p>

<h2><a name="_Toc63349842"></a><a name="_Toc110250600"><span lang=EN-AU>8.6<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Acceptance of Proposal</span></a></h2>

<p class=MsoNormal><span lang=EN-AU>As detailed in the CyberCX’s General Terms
and Conditions, you agree some or all services described in this proposal may
be undertaken by CyberCX’s staff based in locations outside of Australia, who
will have access to your data from outside of Australia (noting all data remains
securely hosted in Australia).  If you do not agree to CyberCX staff based
outside of Australia accessing your data or providing you the services set out
in this proposal, please check the box below. Please be aware that this may
have an impact on the lead time to scheduling the engagement.</span></p>

<p class=MsoNormal><span lang=EN-AU>To proceed with the scope of Services and
other terms and conditions (including Terms and Conditions of Supply) set out
in this Proposal, please have an authorised representative sign below on behalf
of [Client Short Name].</span></p>

<p class=MsoNormal><b><span lang=EN-AU>This Proposal is agreed and accepted by [Client
Long Name]</span></b><b><span lang=EN-GB> (ABN [Client ABN])</span></b></p>

<p class=MsoNormal><span lang=EN-AU>Signed for you by [Client Long Name]’s
Authorised Representative:</span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width="99%"
 style='width:99.52%;border-collapse:collapse'>
 <tr style='page-break-inside:avoid;height:22.7pt'>
  <td width="21%" valign=bottom style='width:21.1%;padding:0in 5.4pt 0in 5.4pt;
  height:22.7pt'>
  <p class=Table-Text><span lang=EN-GB>Signature</span></p>
  </td>
  <td width="35%" valign=bottom style='width:35.12%;border:none;border-bottom:
  solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:22.7pt'></td>
  <td width="11%" valign=bottom style='width:11.24%;padding:0in 5.4pt 0in 5.4pt;
  height:22.7pt'>
  <p class=Table-Text><span lang=EN-GB>Date</span></p>
  </td>
  <td width="32%" valign=bottom style='width:32.54%;border:none;border-bottom:
  solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:22.7pt'></td>
 </tr>
 <tr style='page-break-inside:avoid;height:22.7pt'>
  <td width="21%" valign=bottom style='width:21.1%;padding:0in 5.4pt 0in 5.4pt;
  height:22.7pt'>
  <p class=Table-Text><span lang=EN-GB>Print Name</span></p>
  </td>
  <td width="35%" valign=bottom style='width:35.12%;border:none;border-bottom:
  solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:22.7pt'></td>
  <td width="11%" valign=bottom style='width:11.24%;padding:0in 5.4pt 0in 5.4pt;
  height:22.7pt'>
  <p class=Table-Text><span lang=EN-GB>Position</span></p>
  </td>
  <td width="32%" valign=bottom style='width:32.54%;border:none;border-bottom:
  solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:22.7pt'></td>
 </tr>
</table>

<p class=MsoCaption style='page-break-after:avoid'><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoNormal style='margin-top:6.0pt'><span lang=EN-AU>Service to be
undertaken:</span></p>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343658"></a><a name="_Toc71039903"><span lang=EN-AU>Table </span></a><span lang=EN-AU>43</span><span lang=EN-AU> - Engagement Components</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="99%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width=528 valign=top style='width:396.35pt;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Engagement
   Components </span></p>
   </td>
   <td width=76 valign=top style='width:56.65pt;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader align=center style='text-align:center'><span
   lang=EN-AU style='font-family:"Segoe UI Emoji",sans-serif;font-weight:normal'>✔</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width=528 valign=top style='width:396.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>[Review
  Type]</span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext'> <span style='background:yellow'>Solution</span></span></p>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>External Network Penetration Test (ENPT) </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Web Application Penetration Test (WAPT) </span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Internal Network Penetration Test (INPT) </span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Secure Configuration Assessment (SCA) </span></p>
  </td>
  <td width=76 valign=top style='width:56.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center'><span
  style='font-size:10.0pt;line-height:110%;font-family:"MS Gothic";color:windowtext'>☐</span></p>
  </td>
 </tr>
 <tr>
  <td width=528 valign=top style='width:396.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext;background:yellow'>[Review
  Type]</span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext'> <span style='background:yellow'>Solution</span></span></p>
  <p class=CCXTriangleCxSpFirst style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>External Network Penetration Test (ENPT)
  – Priority Work-stream</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Web Application Penetration Test (WAPT) –
  Priority Work-stream</span></p>
  <p class=CCXTriangleCxSpMiddle style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Internal Network Penetration Test (INPT)
  – Priority Work-stream</span></p>
  <p class=CCXTriangleCxSpLast style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;font-family:"Wingdings 3";
  color:#1CE3E6;background:yellow'>w<span style='font:7.0pt "Times New Roman"'>&nbsp;
  </span></span><span lang=EN-AU style='font-size:10.0pt;line-height:110%;
  color:windowtext;background:yellow'>Secure Configuration Assessment (SCA) –
  Priority Work-stream</span></p>
  </td>
  <td width=76 valign=top style='width:56.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=center style='text-align:center'><span lang=EN-AU
  style='font-family:"Segoe UI Symbol",sans-serif;color:windowtext'>☐</span></p>
  </td>
 </tr>
 <tr>
  <td width=528 valign=top style='width:396.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Re-Testing
  (excluding GST)</span></p>
  </td>
  <td width=76 valign=top style='width:56.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=center style='text-align:center'><span lang=EN-AU
  style='font-family:"Segoe UI Symbol",sans-serif;color:windowtext'>☐</span></p>
  </td>
 </tr>
 <tr>
  <td width=528 valign=top style='width:396.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Build Review
  (excluding GST)</span></p>
  </td>
  <td width=76 valign=top style='width:56.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=center style='text-align:center'><span lang=EN-AU
  style='font-family:"Segoe UI Symbol",sans-serif;color:windowtext'>☐</span></p>
  </td>
 </tr>
 <tr>
  <td width=528 valign=top style='width:396.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Interim Report
  (excluding GST)</span></p>
  </td>
  <td width=76 valign=top style='width:56.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=center style='text-align:center'><span lang=EN-AU
  style='font-family:"Segoe UI Symbol",sans-serif;color:windowtext'>☐</span></p>
  </td>
 </tr>
 <tr>
  <td width=528 valign=top style='width:396.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>Post-engagement
  Support (excluding GST)</span></p>
  </td>
  <td width=76 valign=top style='width:56.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=center style='text-align:center'><span lang=EN-AU
  style='font-family:"Segoe UI Symbol",sans-serif;color:windowtext'>☐</span></p>
  </td>
 </tr>
 <tr>
  <td width=528 valign=top style='width:396.35pt;border:solid #7F7F7F 1.0pt;
  border-top:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>The services
  described in this proposal can only be undertaken by CyberCX staff located in
  Australia</span></p>
  </td>
  <td width=76 valign=top style='width:56.65pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text align=center style='text-align:center'><span lang=EN-AU
  style='font-family:"Segoe UI Symbol",sans-serif;color:windowtext'>☐</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-top:6.0pt'><span lang=EN-AU>To accept this
quotation please email this document and any </span><span lang=EN-AU>related
purchase order details to [Business Contact Email].</span></p>

<h1><a name="_Toc63349843"></a><a name="_Toc110250601"><span lang=EN-AU>9<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Contacts</span></a></h1>

<p class=MsoCaption align=left style='text-align:left;page-break-after:avoid'><a
name="_Toc63343659"></a><a name="_Toc71039904"><span lang=EN-AU>Table </span></a><span lang=EN-AU>44</span><span lang=EN-AU> - Contacts</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 width="100%" style='border-collapse:collapse;border:none'>
 <thead>
  <tr>
   <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
   background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Role</span></p>
   </td>
   <td width="74%" valign=top style='width:74.84%;border:solid #7F7F7F 1.0pt;
   border-left:none;background:#75AEFF;padding:0in 2.85pt 2.85pt 2.85pt'>
   <p class=TableHeader><span lang=EN-AU style='font-weight:normal'>Contact
   Details</span></p>
   </td>
  </tr>
 </thead>
 <tr>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>CyberCX Business
  Contact</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>[CyberCX
  Business Contact]</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>[Business
  Contact Name]</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&nbsp;</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>[Mobile]</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>[Additional
  Phone]</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>[Business
  Contact Email]</span></p>
  </td>
 </tr>
 <tr style='height:72.45pt'>
  <td width="25%" valign=top style='width:25.16%;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt;
  height:72.45pt'>
  <p class=Table-Text><span lang=EN-AU style='color:black'>[Client Long Name]
  Contact</span></p>
  </td>
  <td width="74%" valign=top style='width:74.84%;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt;height:72.45pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>[First
  Name] [Last Name]</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>[Role]</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>&nbsp;</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>[Mobile]</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>[Additional
  Phone]</span></p>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext;background:yellow'>[Email
  Address]</span></p>
  </td>
 </tr>
</table>

<h1><a name="_Toc110250602"></a><a name="_Toc63349844"><span lang=EN-AU>10<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span lang=EN-AU>Terms and </span></a><a><span lang=EN-AU>Conditions</span></a><span
class=MsoCommentReference><span lang=EN-AU style='font-size:8.0pt;line-height:
110%;font-family:"Calibri",sans-serif;color:windowtext;font-weight:normal'><a
class=msocomanchor id="_anchor_11"
onmouseover="msoCommentShow('_anchor_11','_com_11')"
onmouseout="msoCommentHide('_com_11')" href="#_msocom_11" language=JavaScript
name="_msoanchor_11">[NC11]</a>&nbsp;</span></span></h1>

<p><span lang=EN-AU style='font-size:11.0pt;font-family:"Calibri",sans-serif'>This
proposal, order, or Statement of Work from CyberCX incorporates CyberCX's terms
and conditions of supply (available at: </span><span lang=EN-AU><a
href="https://cybercx.com.au/Cybercx-standard-terms-and-conditions-of-supply/"><b><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif'>https://cybercx.com.au/Cybercx-standard-terms-and-conditions-of-supply/</span></b></a></span><span
lang=EN-AU style='font-size:11.0pt;font-family:"Calibri",sans-serif'>). Any
acceptance of this proposal, order or Statement of Work by you, or subsequent
supply of products or services to you by CyberCX, is subject to those terms and
conditions. </span></p>

<p><span lang=EN-AU style='font-size:11.0pt;font-family:"Calibri",sans-serif'>Invoices
will be sent upon issue of report or the agreed milestones.</span></p>

<p><span lang=EN-AU style='font-size:11.0pt;font-family:"Calibri",sans-serif'>No
other terms will apply (including any terms on a customer's purchase order or
other documentation). </span></p>

<p><span lang=EN-AU style='font-size:11.0pt;font-family:"Calibri",sans-serif'>CyberCX
reserves the right to amend its pricing product where the AUD/USD exchange rate
varies greater than +/- $0.02 from the date of CyberCX’s quotation. </span></p>

<p><span lang=EN-AU style='font-size:11.0pt;font-family:"Calibri",sans-serif'>All
prices are ex GST unless otherwise indicated.</span></p>

<table class=CyberCX-Table-LBlue border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=178 valign=top style='width:133.85pt;border:solid #7F7F7F 1.0pt;
  background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>Docu</span></b><b><span
  lang=EN-AU style='font-size:10.0pt;line-height:110%;color:black'>ment
  Reference</span></b></p>
  </td>
  <td width=422 valign=top style='width:316.7pt;border:solid #7F7F7F 1.0pt;
  border-left:none;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'><span
  style='color:#75AEFF'>[Opportunity ID]</span> Version 1.0</span></p>
  </td>
 </tr>
 <tr>
  <td width=178 valign=top style='width:133.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:black'>Customer Name</span></b></p>
  </td>
  <td width=422 valign=top style='width:316.7pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>[Client Long Name]</span></p>
  </td>
 </tr>
 <tr>
  <td width=178 valign=top style='width:133.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:black'>Customer Contact</span></b></p>
  </td>
  <td width=422 valign=top style='width:316.7pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:windowtext'>[Client Contact
  Name]</span></p>
  </td>
 </tr>
 <tr>
  <td width=178 valign=top style='width:133.85pt;border:solid #7F7F7F 1.0pt;
  border-top:none;background:#F0F5FC;padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=MsoNormal style='margin-bottom:0in'><b><span lang=EN-AU
  style='font-size:10.0pt;line-height:110%;color:black'>CyberCX Contact</span></b></p>
  </td>
  <td width=422 valign=top style='width:316.7pt;border-top:none;border-left:
  none;border-bottom:solid #7F7F7F 1.0pt;border-right:solid #7F7F7F 1.0pt;
  padding:0in 2.85pt 2.85pt 2.85pt'>
  <p class=Table-Text><span lang=EN-AU style='color:windowtext'>[CyberCX
  Business Contact]</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal style='margin-top:6.0pt'><span lang=EN-AU>[Client Long Name]
([Client Short Name]) agrees that this proposal <span style='color:windowtext'>number
<span style='color:#75AEFF'>[Opportunity ID]</span> Version 1.0 is a true and
accurate reflection of the work to be performed by CyberCX Pty Ltd and will
form the basis of the work performed for you.</span></span></p>

<p><span lang=EN-AU style='font-size:11.0pt;font-family:"Calibri",sans-serif'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

</div>

<span lang=EN-AU style='font-size:11.0pt;line-height:110%;font-family:"Calibri",sans-serif'><br
clear=all style='page-break-before:always'>
</span>

<div class=WordSection3>

<p class=MsoNormal style='line-height:107%'><a name="_Hlk62156397"><span
lang=EN-AU>&nbsp;</span></a></p>

<p class=MsoNormal style='line-height:107%'><span lang=EN-AU>&nbsp;</span></p>

<table class=MsoTable15Plain3 border=0 cellspacing=0 cellpadding=0 align=left
 style='border-collapse:collapse;margin-left:6.8pt;margin-right:6.8pt'>
 <tr>
  <td width=601 valign=top style='width:450.8pt;padding:0in 0in 0in 0in'>
  <p class=CCX-End-Header><span lang=EN-AU>About CyberCX</span></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.8pt;padding:0in 0in 0in 0in'>
  <p class=CCX-End-Subtitle style='line-height:normal'><span lang=EN-AU>Australia’s
  greatest force of cyber security experts</span></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.8pt;padding:0in 0in 0in 0in'>
  <p class=CCX-End-Paragraph><span lang=EN-AU>The CyberCX group brings together
  the country’s most trusted cyber security companies to create a comprehensive
  end-to-end cyber security services offering to Australian enterprise and
  government.</span></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.8pt;padding:0in 0in 0in 0in'>
  <p class=CCX-End-Paragraph><span lang=EN-AU>With a workforce of over 1,000
  cyber security professionals, and a footprint of over 20 offices across
  Australia and New Zealand, and global presence in Europe and the US, CyberCX
  offers a full suite of cyber security services.</span></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.8pt;padding:0in 0in 0in 0in'>
  <p class=CCX-End-Paragraph><span lang=EN-AU>Our expertise is represented
  across 9 cyber security practices:</span></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.8pt;padding:0in 0in 0in 0in'>
  <table class=MsoTableGrid border=0 cellspacing=0 cellpadding=0
   style='border-collapse:collapse;border:none'>
   <tr>
    <td width=301 valign=top style='width:225.4pt;padding:0in 0in 0in 0in'>
    <p class=CCX-End-BulletsCxSpFirst style='line-height:normal'><span
    lang=EN-AU style='font-size:9.0pt;font-family:"Wingdings 3"'>w<span
    style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
    style='color:white'>Strategy &amp; Consulting</span></p>
    <p class=CCX-End-BulletsCxSpMiddle style='line-height:normal'><span
    lang=EN-AU style='font-size:9.0pt;font-family:"Wingdings 3"'>w<span
    style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
    style='color:white'>Security Testing &amp; Assurance</span></p>
    <p class=CCX-End-BulletsCxSpMiddle style='line-height:normal'><span
    lang=EN-AU style='font-size:9.0pt;font-family:"Wingdings 3"'>w<span
    style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
    style='color:white'>Governance, Risk &amp; Compliance</span></p>
    <p class=CCX-End-BulletsCxSpMiddle style='line-height:normal'><span
    lang=EN-AU style='font-size:9.0pt;font-family:"Wingdings 3"'>w<span
    style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
    style='color:white'>Network &amp; Infrastructure Solutions</span></p>
    <p class=CCX-End-BulletsCxSpMiddle style='line-height:normal'><span
    lang=EN-AU style='font-size:9.0pt;font-family:"Wingdings 3"'>w<span
    style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
    style='color:white'>Cloud Security &amp; Solutions</span></p>
    </td>
    <td width=301 valign=top style='width:225.4pt;padding:0in 0in 0in 0in'>
    <p class=CCX-End-BulletsCxSpMiddle style='line-height:normal'><span
    lang=EN-AU style='font-size:9.0pt;font-family:"Wingdings 3"'>w<span
    style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
    style='color:white'>Identity &amp; Access Management</span></p>
    <p class=CCX-End-BulletsCxSpMiddle style='line-height:normal'><span
    lang=EN-AU style='font-size:9.0pt;font-family:"Wingdings 3"'>w<span
    style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
    style='color:white'>Managed Security Services</span></p>
    <p class=CCX-End-BulletsCxSpMiddle style='line-height:normal'><span
    lang=EN-AU style='font-size:9.0pt;font-family:"Wingdings 3"'>w<span
    style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
    style='color:white'>Digital Forensics &amp; Incident Response</span></p>
    <p class=CCX-End-BulletsCxSpLast style='line-height:normal'><span
    lang=EN-AU style='font-size:9.0pt;font-family:"Wingdings 3"'>w<span
    style='font:7.0pt "Times New Roman"'>&nbsp; </span></span><span lang=EN-AU
    style='color:white'>Training &amp; Education</span></p>
    </td>
   </tr>
  </table>
  <p class=CCX-End-Bullets style='margin-left:0in;text-indent:0in;line-height:
  normal'></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.8pt;padding:0in 0in 0in 0in'>
  <p class=CCX-End-Paragraph><span lang=EN-AU>Led by industry experts and
  delivered by cyber security specialists committed to their craft, CyberCX
  represents Australia’s best cyber security talent, applying unmatched cyber
  security expertise to protect and defend Australian organisations from cyber
  threats.</span></p>
  <p class=CCX-End-Paragraph><span lang=EN-AU>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=601 valign=top style='width:450.8pt;padding:0in 0in 0in 0in'>
  <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
   style='border-collapse:collapse'>
   <tr>
    <td width=301 valign=top style='width:225.4pt;padding:0in 0in 0in 0in'>
    <p class=CCX-Frontmatter-LegalText><b><span lang=EN-AU style='color:white'>CyberCX
    Pty Ltd<br>
    </span></b><span lang=EN-AU style='color:white'>Level 4, 330 Collins Street<br>
    Melbourne, VIC 3000, Australia<br>
    ABN: 90 629 363 328</span></p>
    </td>
    <td width=301 valign=top style='width:225.4pt;padding:0in 0in 0in 0in'>
    <p class=CCX-Frontmatter-LegalText align=right style='text-align:right'><span
    lang=EN-AU style='color:white'><br>
    T:1300 031 274<br>
    </span><span lang=EN-AU><a href="https://cybercx.com.au/"><b><span
    style='color:white'>cybercx.com.au</span></b></a></span><span lang=EN-AU
    style='color:white'><br>
    </span><span lang=EN-AU><a href="mailto:info@cybercx.com.au"><b><span
    style='color:white'>info@cybercx.com.au</span></b></a></span></p>
    </td>
   </tr>
  </table>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'></p>
  </td>
 </tr>
</table>

<p class=CCX-End-Bullets style='margin-left:0in;text-indent:0in'><span
lang=EN-AU style='color:white'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-AU>&nbsp;</span></p>

</div>

<div><br clear=all>

<hr align=left size=1 width="33%">

<div id=ftn1>

<p class=MsoFootnoteText><a href="#_ftnref1" name="_ftn1" title=""><span
class=MsoFootnoteReference><span lang=EN-AU><span class=MsoFootnoteReference><span
lang=EN-AU style='font-size:8.0pt;line-height:110%;font-family:"Calibri",sans-serif;
color:windowtext'>[1]</span></span></span></span></a><span lang=EN-AU> Up to 5
business days depending on the complexity of the engagement.</span></p>

</div>

<div id=ftn2>

<p class=MsoFootnoteText><a href="#_ftnref2" name="_ftn2" title=""><span
class=MsoFootnoteReference><span lang=EN-AU><span class=MsoFootnoteReference><span
lang=EN-AU style='font-size:8.0pt;line-height:110%;font-family:"Calibri",sans-serif;
color:windowtext'>[2]</span></span></span></span></a><span lang=EN-AU> Based on
CyberCX impact and likelihood tables or <span style='background:yellow'>[Client
Short Name]</span>’s own.</span></p>

<p class=MsoFootnoteText><span lang=EN-AU>&nbsp;</span></p>

</div>

</div>

<div>

<hr class=msocomoff align=left size=1 width="33%">

<div>

<div id="_com_1" class=msocomtxt language=JavaScript
onmouseover="msoCommentShow('_anchor_1','_com_1')"
onmouseout="msoCommentHide('_com_1')"><a name="_msocom_1"></a>

<p class=MsoCommentText><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt'>&nbsp;<a href="#_msoanchor_1" class=msocomoff>[NC1]</a></span></span><span
lang=EN-AU>Remove unnecessary rows below</span></p>

</div>

</div>

<div>

<div id="_com_2" class=msocomtxt language=JavaScript
onmouseover="msoCommentShow('_anchor_2','_com_2')"
onmouseout="msoCommentHide('_com_2')"><a name="_msocom_2"></a>

<p class=MsoCommentText><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt'>&nbsp;<a href="#_msoanchor_2" class=msocomoff>[NC2]</a></span></span><span
lang=EN-AU>Each service being provided should have a unique service scope and
this will tie back into the information gathered using the STA Scoping questions.</span></p>

<p class=MsoCommentText><span lang=EN-AU>&nbsp;</span></p>

</div>

</div>

<div>

<div id="_com_3" class=msocomtxt language=JavaScript
onmouseover="msoCommentShow('_anchor_3','_com_3')"
onmouseout="msoCommentHide('_com_3')"><a name="_msocom_3"></a>

<p class=MsoCommentText><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt'>&nbsp;<a href="#_msoanchor_3" class=msocomoff>[LD3]</a></span></span><span
lang=EN-AU>Added this</span></p>

</div>

</div>

<div>

<div id="_com_4" class=msocomtxt language=JavaScript
onmouseover="msoCommentShow('_anchor_4','_com_4')"
onmouseout="msoCommentHide('_com_4')"><a name="_msocom_4"></a>

<p class=MsoCommentText><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt'>&nbsp;<a href="#_msoanchor_4" class=msocomoff>[JE4]</a></span></span><span
lang=EN-AU>This is an optional aspect and must be costed appropriately. It is a
point of difference with many other consultancies.</span></p>

</div>

</div>

<div>

<div id="_com_5" class=msocomtxt language=JavaScript
onmouseover="msoCommentShow('_anchor_5','_com_5')"
onmouseout="msoCommentHide('_com_5')"><a name="_msocom_5"></a>

<p class=MsoCommentText><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt'>&nbsp;<a href="#_msoanchor_5" class=msocomoff>[LD5]</a></span></span><span
lang=EN-AU>Added from appsec prop</span></p>

</div>

</div>

<div>

<div id="_com_6" class=msocomtxt language=JavaScript
onmouseover="msoCommentShow('_anchor_6','_com_6')"
onmouseout="msoCommentHide('_com_6')"><a name="_msocom_6"></a>

<p class=MsoCommentText><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt'>&nbsp;<a href="#_msoanchor_6" class=msocomoff>[NC6]</a></span></span><span
lang=EN-AU>Additional costs will apply on case by case basis. Where a client
requires this it must be made clear to STA during scoping activity and included
as requirement when passed to the Delivery Team</span></p>

</div>

</div>

<div>

<div id="_com_7" class=msocomtxt language=JavaScript
onmouseover="msoCommentShow('_anchor_7','_com_7')"
onmouseout="msoCommentHide('_com_7')"><a name="_msocom_7"></a>

<p class=MsoCommentText><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt'>&nbsp;<a href="#_msoanchor_7" class=msocomoff>[NC7]</a></span></span><span
lang=EN-AU>This must be removed unless the client has specifically requested
this type of reporting. Where this is included this should be costed in section
8.</span></p>

</div>

</div>

<div>

<div id="_com_8" class=msocomtxt language=JavaScript
onmouseover="msoCommentShow('_anchor_8','_com_8')"
onmouseout="msoCommentHide('_com_8')"><a name="_msocom_8"></a>

<p class=MsoCommentText><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt'>&nbsp;<a href="#_msoanchor_8" class=msocomoff>[NC8]</a></span></span><span
lang=EN-AU>Only include if project management has been priced and scoped for
this engagement. Recommended for large multi phases and or practice bodies of
work.</span></p>

</div>

</div>

<div>

<div id="_com_9" class=msocomtxt language=JavaScript
onmouseover="msoCommentShow('_anchor_9','_com_9')"
onmouseout="msoCommentHide('_com_9')"><a name="_msocom_9"></a>

<p class=MsoCommentText><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt'>&nbsp;<a href="#_msoanchor_9" class=msocomoff>[NC9]</a></span></span><span
lang=EN-AU>Unless the client specifically requests a line by line break down,
this should represent a single solution price. </span></p>

<p class=MsoCommentText><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoCommentText><span lang=EN-AU>For INTERNAL USE ONLY the costing
sheet must be stored with the proposal to support QA and resource coordination.</span></p>

</div>

</div>

<div>

<div id="_com_10" class=msocomtxt language=JavaScript
onmouseover="msoCommentShow('_anchor_10','_com_10')"
onmouseout="msoCommentHide('_com_10')"><a name="_msocom_10"></a>

<p class=MsoCommentText><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt'>&nbsp;<a href="#_msoanchor_10" class=msocomoff>[NC10]</a></span></span><span
lang=EN-AU>Unless the client specifically requests a line by line break down,
this should represent a single solution price. </span></p>

<p class=MsoCommentText><span lang=EN-AU>&nbsp;</span></p>

<p class=MsoCommentText><span lang=EN-AU>For INTERNAL USE ONLY the costing
sheet must be stored with the proposal to support QA and resource coordination.</span></p>

</div>

</div>

<div>

<div id="_com_11" class=msocomtxt language=JavaScript
onmouseover="msoCommentShow('_anchor_11','_com_11')"
onmouseout="msoCommentHide('_com_11')"><a name="_msocom_11"></a>

<p class=MsoCommentText><span class=MsoCommentReference><span lang=EN-AU
style='font-size:8.0pt'>&nbsp;<a href="#_msoanchor_11" class=msocomoff>[NC11]</a></span></span><span
lang=EN-AU>Only use if no MSA is in affect</span></p>

</div>

</div>

</div>

</body>

</html>
`;

export default htmlTemplate;
