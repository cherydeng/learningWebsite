using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class welcome : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Label1.Text = "欢迎您 ! 尊贵的" + Request.Cookies["username"].Value.ToString() + ",您的权限是:" + Request.Cookies["quanxian"].Value.ToString();
       
    }
    public string Text()
    {
        if (Request.Cookies["quanxian"].Value == "管理员")
        {
            return "./EXP_F/exp_index.html";

        }
        else if (Request.Cookies["quanxian"].Value == "学生")
        {
            return "./EXP_F/students.html";
        }
        else if (Request.Cookies["quanxian"].Value == "老师")
        {
            return "./EXP_F/teachers.html";
        }
        return "www.baidu.com";
    }

}