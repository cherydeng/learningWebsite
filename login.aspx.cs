using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class login : System.Web.UI.Page
{

    protected void Page_Load(object sender, EventArgs e)
    {
    }
    protected void Button1_Click(object sender, EventArgs e)
    {

        string constr = "data source = .;integrated security= true;database=login";
        string username = TextBox1.Text;
        string password = TextBox2.Text;
        string admin=string.Empty;
        string sq1 = "select * from students where sname='" + username + "' and psw='" + password + "'";
        SqlConnection con = new SqlConnection(constr);
        con.Open();
        SqlCommand sqlCommand = new SqlCommand(sq1, con);
        SqlDataReader sqlDataReader = sqlCommand.ExecuteReader(); //执行命令并取出结果
        if (sqlDataReader.HasRows)W
        {
            sqlDataReader.Read();
            admin = sqlDataReader[2].ToString().Trim();
            Response.Cookies["username"].Value = username;
            Response.Cookies["quanxian"].Value = admin;
            Response.Cookies["username"].Expires = DateTime.Now.AddHours(1);
            Response.Cookies["quanxian"].Expires = DateTime.Now.AddHours(1);
            if (admin == "管理员")
                Response.Redirect("welcome.aspx");
            else if (admin == "学生")
                Response.Redirect("welcome.aspx");
            else if (admin == "老师")
                Response.Redirect("welcome.aspx");
            else
                Response.Write(admin);
        }
        else
        {
            Response.Write("<script>alert('请检查您的账户和密码') </script>");
        }
        con.Close();
    }
}