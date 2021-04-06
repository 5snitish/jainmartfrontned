class Config{
    static loginUrl = "http://127.0.0.1:8000/api/gettoken/";
    static homeUrl  ="/home"
    static logoutPageUrl = "/logout"
    static refreshApiUrl = "http://127.0.0.1:8000/api/refresh_token/"

    static sidebarItem = [
        {
            index: "0",title:"Home",url:"/home",icons:"home"
        },
        {
            index: "1",title:"Seller",url:"/seller",icons:"work"
        },
    ]
} 


export default Config
