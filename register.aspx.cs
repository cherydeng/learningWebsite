using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
public partial class register : System.Web.UI.Page
{
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (String.Compare(Request.Cookies["yzmcode"].Value, TextBox5.Text, true) != 0)
        {
            Response.Write("<script>alert('验证码错误!')</script>");
        }
        else
        {
            string connStr = "data source = .;integrated security= true;database=login";
            SqlConnection conn = new SqlConnection(connStr);
            if (TextBox1.Text == "")
            {
                Label1.Text = "用户名不能为空！";
            }
            else if (TextBox2.Text == "")
            {
                Label2.Text = "密码不能为空！";
            }
            else if (TextBox3.Text == "")
            {
                Label3.Text = "确认密码不能为空！";
            }
            else if (TextBox2.Text != TextBox3.Text)
            {
                Label3.Text = "密码和确认密码不相符！";
                TextBox2.Text = "";
                TextBox3.Text = "";
            }
            else
            {

                conn.Open();
                SqlCommand cmd = new SqlCommand("select * from students where sname='" + TextBox1.Text.Trim() + "'", conn);
                SqlDataReader sdr = cmd.ExecuteReader();
                sdr.Read();
                if (sdr.HasRows)
                    Response.Write("<script>alert('该用户已注册，请使用其他用户名') </script>");
                else
                {
                    sdr.Close();
                    string myinsert = "insert into students(sname,psw,admin) values ('" + TextBox1.Text + "','" + TextBox2.Text + "','" + DropDownList1.SelectedValue + "')";
                    SqlCommand mycom = new SqlCommand(myinsert, conn);           //定义OleDbCommnad对象并连接数据库  
                    mycom.ExecuteNonQuery();                           //执行插入语句  
                    conn.Close();                //关闭对象并释放所占内存空间    
                    conn.Dispose();
                    Response.Write("<script>alert('您已注册成功！') </script>");

                }
            }
        }
    }
}