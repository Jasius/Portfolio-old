<template>
  <div class="proposals">
		<h2>Seriously, get in touch.</h2>
		<p>I am on the lookout for any kind of meaningful work. If you have something in mind or just want to say hi, drop me a line.</p>
		<form class="formSpree" action="https://formspree.io/Mindaugas@Jasiulis.com" method="POST" data-netlify="true">
		  <div class="split">
			<div>
			  <label>Your name</label>
			  <input type="text" name="Name" placeholder="John Doe" required>
			</div>
			<div>
			  <label>Your email</label>
			  <input type="email" name="_replyto" placeholder="Example@domain.com" required>
			</div>
		  </div>
		  <label>Message</label>
		  <textarea class="message" type="text" name="Message" placeholder="Hi Mindaugas.." required></textarea>
		  <button type="submit" value="Send">Send</button>
		  <input class="is-hidden" type="text" name="_gotcha" netlify-honeypot>
		  <input type="hidden" name="_next" value="#" />
		</form>
	  </div>
</template>

<style lang="scss" scoped>
// proposals
.proposals {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  flex-flow: column;
  background: #e74c3c;
  color: #eee;
  padding: 40px 0;
  h2 {
    font-weight: normal;
    margin: 0;
  }
  .split {
    display: grid;
    grid-template-columns: repeat(2, 47.5%);
    grid-template-rows: repeat(1, 100%);
    grid-gap: 0 5%;
  }
}

.formSpree {
  text-align: initial;
  margin: 0 26%;
  padding: 0 0.5em;
  label {
    font-size: 0.8em;
    font-weight: 600;
  }
  input,
  .message {
    padding: 0.45em 0.5em;
    margin: 0.3em 0;
    border: 0;
    min-width: 100%;
  }
  .message {
    min-height: 11em;
    padding-top: 0.3em;
    margin-bottom: -0.43em;
    resize: none;
  }
  .is-hidden {
    display: none;
  }
  button {
    width: calc(100% + 1em);
    text-align: center;
    padding: 0.35em;
    background: #6dcd9a;
    color: #ecf0f1;
    border: 0;
    font-weight: 400;
    cursor: pointer;
    border-radius: 0 0 5px 5px;
    &:hover {
      background: lighten($color: #6dcd9a, $amount: 2%);
    }
  }
}

@media screen and (max-width: 780px) {
  .proposals .split {
    grid-template-columns: repeat(1, 100%);
  }
  .formSpree {
    margin: 0 4%;
  }
}
</style>
