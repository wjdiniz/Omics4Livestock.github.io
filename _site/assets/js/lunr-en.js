var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  
  
    
    
      this.add({
          title: " ",
          excerpt: "Coming Soon!\n\n",
          categories: [],
          tags: [],
          id: 0
      })
      
    
      this.add({
          title: " ",
          excerpt: "Coming Soon!\n\n",
          categories: [],
          tags: [],
          id: 1
      })
      
    
      this.add({
          title: " ",
          excerpt: "Fetal Programming: why does it matter?\n\nunder development\n\nSummary\n\n",
          categories: [],
          tags: [],
          id: 2
      })
      
    
      this.add({
          title: " ",
          excerpt: "Coming Soon!\n",
          categories: [],
          tags: [],
          id: 3
      })
      
    
      this.add({
          title: " ",
          excerpt: "Portfolio\n\nUnder development…\n\nSelected Projects\n\n\n\n  \n    \n      \n        \n          \n            \n            \n          \n        \n\n        \n          \n            Fetal Programming: why does it matter?\n          \n\n          \n            \n              feeding the future.\n\n            \n          \n\n          \n            Read More\n          \n        \n      \n    \n  \n\n\n\n\n\n",
          categories: [],
          tags: [],
          id: 4
      })
      
    
  
    
    
      this.add({
          title: "Soon",
          excerpt: "If you are not automatically redirected, please click here\n",
          categories: ["posts"],
          tags: [],
          id: 5
      })
      
    
  
});

console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/coming/",
        "excerpt": "Coming Soon!\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/coming_tutorials/",
        "excerpt": "Coming Soon!\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/fetal/",
        "excerpt": "Fetal Programming: why does it matter?\n\nunder development\n\nSummary\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/fetal_coming/",
        "excerpt": "Coming Soon!\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/index.html",
        "excerpt": "Portfolio\n\nUnder development…\n\nSelected Projects\n\n\n\n  \n    \n      \n        \n          \n            \n            \n          \n        \n\n        \n          \n            Fetal Programming: why does it matter?\n          \n\n          \n            \n              feeding the future.\n\n            \n          \n\n          \n            Read More\n          \n        \n      \n    \n  \n\n\n\n\n\n",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "Soon",
        "url": "http://localhost:4000/posts/2020/12/04/net-copy.html",
        "excerpt": "If you are not automatically redirected, please click here\n",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase().replace(":", "");
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, {  boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
