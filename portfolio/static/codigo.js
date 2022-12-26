// console.log('hi world')

const skills = document.querySelector(".skills");

const skillUrl = [
  "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  "https://docs.amplify.aws/assets/ogp.jpg",
  "https://www.dynamodbguide.com/logos/dynamodb.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png",
  "https://i.morioh.com/201020/5c2c106b.webp",
  "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
  "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png",
  "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
  "https://www.freepnglogos.com/uploads/logo-php-png/file-php-logo-svg-wikimedia-commons-21.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxjpNRTS8lgTN2AFMdpsBwvF5zguP2PJL-g&usqp=CAU",
  "https://d1wrxu8gicsgam.cloudfront.net/wp-content/files/django-logo-big.jpg",
  "https://www.acceseo.com/wp-content/uploads/2017/04/sass_header.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png",
  "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFQQUnNGFvzOpaV2bTVmfgKdbdPJhM2JhmA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvh7tzJkyznxKtxs54Ys3KRH7vGnbhoeVFJNB6uiqhPguM2ChP8fwcfysWqaeR2UgzEg&usqp=CAU",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/240px-Tailwind_CSS_Logo.svg.png",
];

const urls = [
  "https://aws.amazon.com/",
  "https://aws.amazon.com/es/amplify/",
  "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html",
  "https://graphql.org/",
  "https://vuejs.org/",
  "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
  "https://www.python.org/",
  "https://developer.mozilla.org/en-US/docs/Learn/HTML",
  "https://www.mysql.com/",
  "https://www.php.net/",
  "https://developer.mozilla.org/en-US/docs/Learn/CSS",
  "https://developer.mozilla.org/es/docs/Web/JavaScript",
  "https://es.reactjs.org/",
  "https://www.djangoproject.com/",
  "https://sass-lang.com/",
  "https://code.visualstudio.com/",
  "https://www.figma.com/",
  "https://www.adobe.com/la/products/xd/pricing/free-trial.html",
  "https://www.postgresql.org/",
  "https://git-scm.com/",
  "https://github.com/",
  "https://ubuntu.com/download",
  "https://tailwindcss.com/",
];

skillUrl.forEach((el,indice) => {
  const plantilla = `<div class="col-12 col-sm-4 col-md-3 col-lg-2 p-4 skill"  >
  <a href="${urls[indice]}" target="_blanck">
    <div class="card">
      <img width=50 height=200 class="card-img-top bg-dark" src="${el}" alt="Title">
     
    </div>
    </a>
  </div>`;

  skills.insertAdjacentHTML("beforeend", plantilla);
});
