'use strict'

var gProjects= []
createProjrcts()





function createProjrcts(){
    gProjects = [
        createProject(1, "sokoban","Better push those boxes", "projs/sokoban",["Matrixes", "keyboard events"],'mine-sweeper.jpg'),
        createProject(2, "sokoban","Better push those boxes", "projs/sokoban",["Matrixes", "keyboard events"],'pacman.jpg'),
        createProject(3, "sokoban","Better push those boxes", "projs/sokoban",["Matrixes", "keyboard events"],'ball-game.jpg'),
        createProject(4, "sokoban","Better push those boxes", "projs/sokoban",["Matrixes", "keyboard events"],'chess.jpg'),
        createProject(5, "sokoban","Better push those boxes", "projs/sokoban",["Matrixes", "keyboard events"],'pacman.jpg'),
        createProject(6, "sokoban","Better push those boxes", "projs/sokoban",["Matrixes", "keyboard events"],'pacman.jpg'),
    ]
}

function createProject(id,name, title,url, labels,img){
    return {
        id,
        name,
        title,
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url,
        publishedAt: Date.now(),
        labels,
        img,
       }
       
}

function getProjectById(id){
    return getProjects().find(project => project.id === id) 
}


function getProjects(){
    console.log(gProjects)
    return gProjects
}