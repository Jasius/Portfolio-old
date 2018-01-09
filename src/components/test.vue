<template>
<div>
	<header>
		<div class="contact-icons">
			<ul>
				<li>
					<a href="https://linkedin.com/in/Jasius">
						<div class="icons8-linkedin"></div>
					</a>
				</li>
				<li>
					<a href="https://github.com/Jasius">
						<div class="icons8-github2"></div>
					</a>
				</li>
				<li><img link rel="preload" src="../assets/logo.png" class="mepic" alt="My picture">
				</li>
				<li>
					<a href="https://twitter.com/JaskaJasius">
						<div class="icons8-twitter"></div>
					</a>
				</li>
				<li>
					<a href="http://codepen.io/Jasius/">
						<div class="icons8-codepen"></div>
					</a>
				</li>
			</ul>
		</div>
	</header>

	<div class="intro">
		<h1>Jasiulis</h1>
		<p>Lithuanian front end developer</p>
	</div>
	<div class="section-about">
		<div class="about-me">
			<h1 class="boxy"><a class="anchor" id="about">About me</a></h1>
			<p>Hi, my name is <strong>Mindaugas Jasiulis</strong>, I am a {{'1997-03-19' | moment("from", true)}} old self taught front end developer who currently lives in Lithuania.
			</p>
			<p>
				I am a front end developer who enjoys what he does, one of the most memorable and enjoyable volunteer experiences was on
				Reddit platform for which I am thankful because my work there reaches over 1 million unique users every month on <a href="https://windows10.reddit.com"
				    target="_blank">Windows Community</a> alone while on /r/Olympics subreddit during 2016 Olympic games month my work has been seen 22 million times. Thanks to my work on Microsoft Community, I have had plenty of interaction with
				Microsoft engineers, prominent developers and lots of other interesting people.
			</p>
			<p>
				Apart from Web development related work I was involved in translating websites such as <a href="http://onefootball.com/">OneFootball</a>				into Lithuanian and Russian languages.
			</p>
		</div>
		<div class="profile">
			<h1 class="boxy">Profile</h1> 
			<ul>
				<li class="profile-list">Working at
					<p><a target="_blank" href="https://omnisend.com">Omnisend</a></p>
				</li>
				<div class="small-line"></div>
				<li class="profile-list">Position
					<p>Front end developer</p>
				</li>
				<div class="small-line"></div>
				<li class="profile-list">Work experience
					<p>{{'2016-04-01' | moment("from", true)}}</p>
				</li>
				<div class="small-line"></div>
				<li class="profile-list">Hobbies<p>Football | Gaming</p></li> 
				<div class="small-line"></div>
			</ul>
		</div>
	</div>
</div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: Portfolio;
  src: url(~/Portfolio_c06695c5ca5f8c11d36489dba17bd333.eot);
  src: url(~/Portfolio_c06695c5ca5f8c11d36489dba17bd333.eot?#iefix)
      format("embedded-opentype"),
    url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAb4AA0AAAAACYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAG3AAAABoAAAAcd2ZpSE9TLzIAAAGgAAAASgAAAGBAqFz9Y21hcAAAAgQAAABCAAABQgAP9K9jdnQgAAACSAAAAAQAAAAEABEBRGdhc3AAAAbUAAAACAAAAAj//wADZ2x5ZgAAAmAAAAMRAAADxKXUKg9oZWFkAAABMAAAAC8AAAA2BtHY2WhoZWEAAAFgAAAAHQAAACQDkwHyaG10eAAAAewAAAAYAAAAGAaQALFsb2NhAAACTAAAABIAAAASA8YCxm1heHAAAAGAAAAAHgAAACAAUgB+bmFtZQAABXQAAAEnAAACFu9wxIRwb3N0AAAGnAAAADYAAABaG9+GYnjaY2BkYGAA4unbRUri+W2+MnAzMYDApRdn9OC04P+3jbcyjwo5haxgaqbmiaxzahjay2bkygcc/P8tgx4TAwgwXmBgZEAFLABflgOIAAAAeNpjYGRgYOBg8AViEGACYkYGkJgDgx5IAAAMNADRAAB42mNgYWJgnMDAysDA6MOYxsDA4A6lvzJIMrQwMDAxsHIywIEAgskQkOaawtDwkeEjC+OB/wcY9BgnMwgDhRmRlCgwMAIAAuELOgAAAgAAEQAAAAACAAAAAgAAMABAADAAUABAeNpjYGBgZoBgGQZGBhCwAfIYwXwWBgUgzQKEQP5Hlv//gSTD///8zFCVDIxsDDAmAyMTkGBiQAWMDMMeAABAsAawAAAAEQFEAAAAKgAqACoAdgDYAUQBmgHiAAB42jVSz28bRRR+b9czsz/i9a53d8Y/1k68a++6mbgdxdtbiiduwkivglbiqrsp4otvxi0ucei59kwuhroig3bo8gegspwdidn/AkWVkDihwKzVjOZ9783TN6P3vTeggAMA3+ATUIHB8BJhNL9iJXidXlLyx/xKVWQIl2qRJkX6ilH8d36FRT5zMifJnMh58cWzZ/jk5icHM/maBuP/XuNveCHf9qEOLdiCCBIYAOCm0lIqykjZVxZYQbFAX+TS54mf95iQe5ozP0fQrxm71tfILg5Pt04Pfzg6OvpnF0e7uzd/HV58fnqBX9Pzkv6VXjqnt8H2cpCfneUDezgcdu535LIGy7M8P1vKsgDhHjC8xnN4D6Cact+jjE7nOJ0kBwXMkpjFUciGsjIqqO+1fsezszyefgou2qu8uh0vguryq+9wx3vlcjj2ddpuixpd2e1ctn21mkhvuhqu4sklypq1vixyrvleo8bz1cli6aob2lvrjumnbc4duqpunbadztun2duurwpvuyieuifkg1jcty0qg6q7xjwugiimwza9xuftrneloip4embnuzhlqthqms4kywe8netszrkiarqouqrxpz6ls+kkTmKa8oIzmb31Sehl6SRb49NqKrpSM6mOhFuJn//+vC9L+NvILHtcD/TWx4+evt/glV89y/KsX9b4rabRH6XhyuW6Rix/Z+fOg8cPHz4+3lbqlqb5xlwqay1o3o/nokfJHbfh3m5iyQUETqSuV1JXRSqL4V3Yl6o6ckiOR6OOlONMZiKUp6yTyjiixfwsjGTxIm1jC6PpJAoLl/nZjGV+9cxadq1m37wpunnq2p/cZmVm2j/zhjaqB6MdLL8Yj3F1yypubGk3b9bswDYl2eZ3/Rb/5FE/+eClXy+9fpupivmppputanlytxairmeiu5uh8doncr+5kgawxgous5nllm3w2hzub3q8ft/XjXzQ6GtMM42g67iRufhM8bs8FE2h1wXmNYeQzXt77zQjDDdrikoHAepY2/bdj4iu865fJ1ZQUeF/NwyPRgAAAHjahZAxa8MwFIRPiZPioaVkKXTSUkggNrIpps0a8JCpzZCxEIzjCIwVZGfI1LH/pn+mv6Zbz4rI0iEG8z493bt3NoA7fEPg/Dwi8ywQovQ8wA0+PQ/xhB/PAUJx63mEe/Hqecz+B5UiCHl6dlM9C0zw7nnAvcbzECt8eQ6o+fU8ghQPnseYiBWWnDngBAuNCnt0kJiiwIw1hULC/HOyZs+gQYsXYGkOJ6urfSenxUymKsnmUhemaXn3RpmlzY615phhy9huZ2pNXPMXVDjyZksV1mV1rLeE3Jl3rloqSrc+ZgCJBd//rud+Hy+iMrqERW6aLje2KmUaK7mQl+3kjivsqm97leegcsw/Vrtckt69e+xqnwmb0rbaNFKpJFZKySuGfwyYUm0AeNpjYGIAg/8HGCSBFCMDOuAAizIxMjEyM7IwsjKysZfmZboZGhhAaUMobQSljaG0CQB/IQzcAAAAAAAB//8AAnjaY2BgYGQAgotTLrwG0ZdenNGD0QBe7AiKAAA=),
    url(~/Portfolio_c06695c5ca5f8c11d36489dba17bd333.woff) format("woff"),
    url(~/Portfolio_c06695c5ca5f8c11d36489dba17bd333.ttf) format("truetype"),
    url(~/Portfolio_c06695c5ca5f8c11d36489dba17bd333.svg#Portfolio)
      format("svg");
  font-weight: 400;
  font-style: normal;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  @font-face {
    font-family: Portfolio;
    src: url(~/Portfolio_c06695c5ca5f8c11d36489dba17bd333.svg#Portfolio)
      format("svg");
  }
}
$font-stack: "Open Sans", Helvetica Neue, Arial, sans-serif;
$font-secondary: "Segoe UI", Helvetica Neue, Arial, sans-serif;
$light-blue: #3498db;

// profile
.img-responsive {
  max-width: 100%;
  display: block;
  margin: 0 auto;
  border: 1px solid #dcddd8;
  transition: all 0.2s;
  box-sizing: border-box;
  &:hover {
    opacity: 0.9;
    border: 1px solid $light-blue;
  }
}

.anchor:before {
  display: block;
  content: " ";
  margin-top: -75px;
  height: 75px;
  visibility: hidden;
}

header {
  background: #e74c3c;
  height: 200px;
}

.intro {
  background: #ecf0f1;
  padding: {
    top: 40px;
    bottom: 40px;
  }
  color: #000;
  text-align: center;
  h1 {
    font-size: 63px;
    margin-top: 60px;
    font-family: $font-secondary;
    font-weight: normal;
  }
  p {
    margin-top: -25px;
    margin: -25px 0 0 0;
  }
}

.section-about {
  display: flex;
  flex-wrap: wrap;
}

.about-me {
  background: #2d4059;
  padding: 60px 80px 30px 10%;
  flex: 3;
  line-height: 1.5;
  h1 a {
    color: #ede;
  }
}

.boxy {
  font-size: 1.7em;
  text-align: center;
  color: #ede;
  border: 3px solid #ede;
  padding: 15px;
  display: inline-block;
  margin: 0 0 30px;
  line-height: 1;
  font-weight: 500;
}

.profile {
  background: #3498db;
  padding: 60px 20px;
  flex: 2;
  li {
    margin: 0;
    font-size: 1.15em;
    color: #ecf0f1;
    list-style: none;
  }
  ul p {
    font-size: 1.25em;
    margin: 0;
  }
  .small-line {
    border-color: #69d2e7;
    margin: 10px 0 50px;
    position: relative;
    width: 20px;
    border-top: 2px solid #69d2e7;
    margin-bottom: 30px;
  }
  .boxy {
    margin-left: 35px;
    color: #ede;
    border-color: #ede;
  }
}

.about-me,
.profile {
  text-align: left;
}
.img-circle.img-responsive {
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  top: 90px;
  max-height: 200px;
  width: 200px;
  border: 7px solid #fff;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  display: block;
}

[data-icon]:before {
  content: attr(data-icon);
}

.icons8-codepen:before,
.icons8-github2:before,
.icons8-github:before,
.icons8-linkedin:before,
.icons8-twitter:before,
[data-icon]:before {
  display: inline-block;
  font-family: Portfolio;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  line-height: 1;
  text-decoration: inherit;
  text-rendering: optimizeLegibility;
  text-transform: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.icons8-codepen:before {
  content: "\f100";
}

.icons8-github:before {
  content: "\f101";
}

.icons8-github2:before {
  content: "\f102";
}

.icons8-linkedin:before {
  content: "\f103";
}

.icons8-twitter:before {
  content: "\f104";
}

.icons8-codepen:before,
.icons8-github2:before,
.icons8-linkedin:before,
.icons8-twitter:before {
  font-size: 1.5em;
  background: #ff6347;
  border-radius: 50%;
  color: #fff;
  border: 2px solid #fff;
  width: 63px;
  height: 63px;
  line-height: 60px;
  transition: background-color 0.15s linear;
}

.contact-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #448aaf;
  h1 {
    margin: 40px 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 15px 0 0;
  }
  ul li {
    display: inline-block;
  }
  ul li a {
    display: block;
    font-size: 1.4em;
    margin: 0 5px;
    text-decoration: none;
  }
  ul li a i {
    color: #448aaf;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }
}

#about-me p,
#profile {
  font-family: Raleway, helvetica;
}

.mepic {
  width: 200px;
  height: 200px;
  font-size: 1.4em;
  border-radius: 50%;
  margin-left: 50px;
  margin-right: 50px;
  border: 2px solid grey;
  background: #dcdcdc;
  position: relative;
  top: 80px;
}

@media screen and (max-width: 607px) {
  .mepic {
    width: 100px;
    height: 100px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 43px;
    top: 37px;
  }
  header {
    height: 150px;
  }
  .img-responsive {
    border: 0;
  }
  .intro h1 {
    margin-top: 0;
  }
  .contact-icons {
    ul li a {
      height: 0;
    }
  }
  .contact-icons {
    font-size: 1.2em;
  }
  .icons8-codepen:before,
  .icons8-github2:before,
  .icons8-linkedin:before,
  .icons8-twitter:before {
    font-size: 1.4em;
    height: 50px;
    width: 50px;
    line-height: 50px;
  }
}

@media screen and (max-width: 376px) {
  .mepic {
    width: 80px;
    height: 80px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 60px;
    top: 34px;
  }
  .contact-icons ul li a {
    height: 0;
    margin-top: 45px;
  }
  .contact-icons {
    font-size: 0.8em;
  }
  .icons8-codepen:before,
  .icons8-github2:before,
  .icons8-linkedin:before,
  .icons8-twitter:before {
    font-size: 1.3em;
    height: 35px;
    width: 35px;
    line-height: 36px;
  }
}

.icons8-codepen:hover:before,
.icons8-github2:hover:before,
.icons8-linkedin:hover:before,
.icons8-twitter:hover:before {
  color: #fff;
  background: #e74c3c;
}

@media (min-width: 1299px) {
  .icons8-codepen:before,
  .icons8-github2:before,
  .icons8-linkedin:before,
  .icons8-twitter:before {
    font-size: 2em;
    border: 2px solid #fff;
    width: 90px;
    height: 90px;
    line-height: 85px;
    margin-left: 30px;
  }
  .contact-icons {
    ul li a {
      height: 70px;
      margin: 0 20px;
    }
    ul {
      padding: 20px 0 0;
    }
  }
}
</style>
