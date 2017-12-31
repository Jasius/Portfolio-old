<template>
  <footer>
		<div class="copyright">
			<p>
				© Jaska 2015 - {{(new Date()).getFullYear()}}
				<span style="padding-left:20px">Made with <a href="https://vuejs.org/">Vue.js</a></span>
			</p>
		</div>
		<div class="social">
			<a href="mailto:Mindaugas.Jasiulis.com" class="support" target="_top">Contact Me</a>
			<a href="https://twitter.com/JaskaJasius" class="tweet">t</a>
			<a href="https://linkedin.com/in/Jasius" class="linkedin">in</a>
		</div> 
	</footer>
</template>

<script>
// eslint-disable-next-line

</script>


<style lang="scss" scoped>
.jaska-foot {
  color: #e74c3c;
  &:hover {
    color: #fff;
  }
}

footer {
  position: relative;
  line-height: 70px;
  .copyright {
    width: 50%;
    float: left;
    background: #2d4059;
    p {
      color: #fff;
      font-size: 0.7em;
      margin: 0 5em;
      text-transform: capitalize;
      letter-spacing: 1px;
    }
  }
  .social {
    width: 50%;
    float: right;
    a {
      float: left;
      text-decoration: none;
      color: #fff;
      text-align: center;
      font-weight: 700;
      transition: background 0.33s ease-out, color 0.33s ease-out,
        fill 0.33s ease-out;
      &:hover {
        -moz-transition: all, 0.3s;
        -o-transition: all, 0.3s;
        -webkit-transition: all, 0.3s;
        transition: all, 0.3s;
      }
    }
  }
}

@media (max-width: 600px) {
  footer .copyright {
    p {
      text-align: center;
      padding: 0;
      width: 300px;
      margin-left: 5px;
      letter-spacing: 0px;
    }
    width: 100%;
  }
}

@media (max-width: 600px) {
  footer .social {
    width: 100%;
  }
}

.linkedin {
  background-color: #ff5700;
  font-size: 1.2em;
  width: 40%;
  &:hover {
    background: #ff7934;
  }
}

.tweet {
  background-color: #3dacdd;
  font-size: 1.2em;
  width: 20%;
  &:hover {
    background: #68bfe5;
  }
}

.support {
  background-color: #6dcd9a;
  font-size: 0.8em;
  width: 40%;
  &:hover {
    background: #93dab4;
  }
}
</style>
