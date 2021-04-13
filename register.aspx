<%@ Page Language="C#" AutoEventWireup="true" CodeFile="register.aspx.cs" Inherits="register" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js"></script>
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<title>login</title>&nbsp;
<link href="Styles/register.css" rel="stylesheet" type="text/css" />
<link href="Styles/demo.css" rel="stylesheet" type="text/css" />
<link href="Styles/normalize.css" rel="stylesheet" type="text/css" />
<!--[if IE]><script src="js/html5.js"></script><![endif]-->
</head>
<script type="text/javascript">
    function changeImg() {
        $("#imgCheckNo").attr("src", "ValidateCode.aspx?r=" + getRandom(999));
    }
    function getRandom(n) { return Math.floor(Math.random() * n + 1) }
</script>
<body>
<div class="container demo-1">
			<div class="content">
				<div id="large-header" class="large-header">
					<canvas id="demo-canvas"></canvas>
					<div class="logo_box">
						<h3>欢迎您使用本注册系统</h3>
						<form id="Form1" runat="server" autocomplete="off">
							<div class="input_outer">
								<span class="u_user"></span>
                                <asp:TextBox ID="TextBox1" class="text" runat="server" style="color: #FFFFFF !important"  placeholder="请输入账户名"></asp:TextBox>
							    <asp:Label ID="Label1" runat="server" style="float:right; color:Red"></asp:Label>
							</div>
							<div class="input_outer">
								<span class="us_uer"></span>
                                <asp:TextBox ID="TextBox2" class="text" runat="server" style="color: #FFFFFF !important" TextMode="Password" placeholder= "请输入密码"></asp:TextBox>

							    <asp:Label ID="Label2" runat="server" style="float:right; color:Red"></asp:Label>

							</div>
                            <div class="input_outer">
								<span class="us_uer"></span>
                                <asp:TextBox ID="TextBox3" class="text" runat="server" style="color: #FFFFFF !important" TextMode="Password" placeholder= "请确认密码"></asp:TextBox>

							    <asp:Label ID="Label3" runat="server" style="float:right; color:Red"></asp:Label>

							</div>
                            <div class="input_oouter" style="opacity:0.5">
                                <asp:DropDownList ID="DropDownList1" runat="server" Transparent="true" style="position: relative;Height:40px;width:320px">
                                    <asp:ListItem Value="学生" style="opacity:0.5;"></asp:ListItem>
                                    <asp:ListItem Value="老师" style="opacity:0.5;"></asp:ListItem>
                                    <asp:ListItem Value="管理员" style="opacity:0.5;"></asp:ListItem>
                                </asp:DropDownList>
                                <br />
                                <br />
							</div>
                            <div class="input_outer">
								<span class="phone2" style="float:right"></span>
                                <asp:TextBox ID="TextBox5" class="text" runat="server" 
                                    style="color: #FFFFFF !important;" placeholder= "请输入4位验证码" Height="30px" 
                                    Width="208px"></asp:TextBox>
                                <img alt="" id="imgCheckNo" src="ValidateCode.aspx" style="border-color: #000000; border-width: 1px;border-style: Solid" />&nbsp;&nbsp;
                                <a onclick="changeImg()" style=" color:Gray;float:right">看不清?换一张</a></div>

							<div class="mb2" align="center">
                                <asp:Button ID="Button1" class="act-but submit" onclick="Button1_Click" runat="server" Text="立即注册"
                                    style="color: #FFFFFF"  Width="332px"/>
                                    <br />
                            
                            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/login.aspx" align="center" ForeColor="GrayText">已有账户? 点击返回登录</asp:HyperLink>
                            </div>
						</form>
					</div>
				</div>
			</div>
		</div><!-- /container -->
        <script src="js/TweenLite.min.js" type="text/javascript"></script>
    <script src="js/EasePack.min.js" type="text/javascript"></script>
    <script src="js/rAF.js" type="text/javascript"></script>
    <script src="js/demo-1.js" type="text/javascript"></script>
    <script language="javascript" type="text/javascript" 
src="http://apps.bdimg.com/libs/jquery/1.8.1/jquery.min.js">	
</script>
<script type="text/javascript">
    /* 鼠标特效 */
    var a_idx = 0; jQuery(document).ready(function ($) {
        $("body").click(function (e) {
            var a = new Array("❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤", "❤敬业❤", "❤诚信❤", "❤友善❤");
            var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length; var x = e.pageX, y = e.pageY;
            $i.css({ "z-index": 99, "top": y - 20, "left": x, "position": "absolute", "font-weight": "bold", "color": "#ff6651" }); $("body").append($i); $i.animate({ "top": y - 180, "opacity": 0 }, 1500, function () { $i.remove(); });
        });
        function randomColor() {

            return "rgb(" + (~ ~(Math.random() * 255)) + "," + (~ ~(Math.random() * 255)) + "," + (~ ~(Math
                .random() * 255)) + ")";
        }
    });
 </script>
		<div style="text-align:center;">
</div>
	</body>
</html>