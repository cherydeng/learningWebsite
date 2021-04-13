<%@ Page Language="C#" AutoEventWireup="true" CodeFile="login.aspx.cs" Inherits="login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html lang="en" class="no-js">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<title>login</title>
    <link href="Styles/component.css" rel="stylesheet" type="text/css" />
    <link href="Styles/demo.css" rel="stylesheet" type="text/css" />
<!--必要样式-->
    <link href="Styles/normalize.css" rel="stylesheet" type="text/css" />
<!--[if IE]>
<script src="js/html5.js"></script>
<![endif]-->
</head>
<body>
<script  type="text/javascript",scr="https://files.cnblogs.com/files/wkfvawl/mouse-click.js"></script>
		<div class="container demo-1">
			<div class="content">
				<div id="large-header" class="large-header">·······
					<canvas id="demo-canvas"></canvas>
					<div class="logo_box">
						<h3>欢迎来到东大成贤在线学习平台</h3>
						<form action="#" name="f" method="post" runat="server" autocomplete="off">
							<div class="input_outer">
								<span class="u_user"></span>
                                <asp:TextBox ID="TextBox1" class="text" runat="server" style="color: #FFFFFF !important" placeholder="请输入账户名"></asp:TextBox>
							</div>
							<div class="input_outer">
								<span class="us_uer"></span>
                                <asp:TextBox ID="TextBox2" class="text" runat="server" style="color: #FFFFFF !important" placeholder= "请输入密码" TextMode="Password"></asp:TextBox>
							</div>
							<div class="mb2" align="center">
                                <asp:Button ID="Button1" class="act-but submit" runat="server" Text="登录" 
                                    style="color: #FFFFFF" onclick="Button1_Click" Width="332px"/>
                                    <br />
                                <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/register.aspx" align="center" ForeColor="GrayText">没有账户? 点击立即创建</asp:HyperLink>
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