'use strict'

console.log('Starting up');




function renderProtfolio() {
    var projects = getProjects()
    var elRow = document.querySelector('.row-shlomo')
    var strHtmls = projects.map(project =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
                  <a class="portfolio-link" data-toggle="modal"  onclick="renderModal(${project.id})" href="#portfolioModal1">
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img class="img-fluid" src="img/${project.img}" alt="">
                  </a>
                  <div class="portfolio-caption">
                    <h4>${project.name}</h4>
                    <p class="text-muted">${project.name}</p>
                  </div>
                </div>`
        )
        elRow.innerHTML = strHtmls.join('')
} 

function renderModal(id){
    var project = getProjectById(id)
    var elModal = document.querySelector('.modal-body')
    var strHTML = `<h2>${project.name}</h2>
    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
    <img class="img-fluid d-block mx-auto" src="img/${project.img}" alt="">
    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
      dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
      maiores repudiandae, nostrum, reiciendis facere nemo!</p>
    <ul class="list-inline">
      <li>Date: ${project.publishedAt}</li>
      <li>Client: Threads</li>
      <li>Category: ${project.labels}</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>`
     elModal.innerHTML = strHTML
}


function onSubmitInfo(){
    var emailVal = $('.email').val()
    var subjectVal = $('.subject').val()
    var messageVal =$('.msg').val()
    
    window.location = `https://mail.google.com/mail/u/0/?fs=1&to=shinlamed@gmail.com&su=${subjectVal}&body=${messageVal}&bcc=${emailVal}&tf=cm`
}







