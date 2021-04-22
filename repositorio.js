sechafer_repos = "https://api.github.com/users/sechafer/repos"
let info
fetch (sechafer_repos)
    .then (request => request.json())
    .then (data =>{
        
        info = data; 

        let repos_list = [] 



        for (let i=0; i<info.length; i++){
            
            function create_repos () {
                
                
                let repos = {}
                
                
                Name = info [i].name
                repos.Name = Name.replace(/[_-]/g, " ");
                repos.Description = info [i].description
                repos.Link = info [i].html_url
                repos.demo = `https://sechafer.github.io/${Name}/`
                repos.has_pages = info [i].has_pages
                
                return repos
            }
            repos_list.push (create_repos ())
            
        }


       
    

    function Carta_repo (name, description, link, demo, has_pages){ 


    
    let art_ini = document.createElement ("article")
    let art_id_h4 = document.createElement ("h4")
    let art_div = document.createElement ("div")
    let art_desc_p = document.createElement ("p")
    let art_menu_nav =document.createElement ("nav")
    let art_a = document.createElement ("a")
    let art_link_demo_a = document.createElement ("a")

 
    art_ini.appendChild (art_id_h4)
    art_ini.appendChild (art_div)
    
    art_div.appendChild (art_desc_p)
    art_div.appendChild (art_menu_nav)

   
    art_menu_nav.appendChild (art_a)
    art_menu_nav.appendChild (art_link_demo_a)
    
    
    
    art_id_h4.textContent = name
    art_desc_p.textContent = description

    art_a.textContent = "REPOSITÓRIO"
    art_a.href = link
    art_a.target = "_blank"
    art_a.valor="noopener"

    art_link_demo_a.textContent = "DEMO"
    art_link_demo_a.href = demo
    art_link_demo_a.target = "_blank"
    art_link_demo_a.valor="noopener"

    if(!has_pages){
        art_menu_nav.removeChild(art_link_demo_a)
    }
    return art_ini
    }

for (let i=0; i<info.length; i++){

let Repospage = document.getElementById ("Repositorios")
Repospage.appendChild(Carta_repo (repos_list[i].Name, repos_list[i].Description, repos_list[i].Link, repos_list[i].demo, repos_list[i].has_pages))

}

})