const markup = `
<div class="container">
<button class="lang-btn">EN</button>
<textarea class="textarea" rows="6" cols="60" autofocus></textarea>
<ul class="keyboard">
	<li class="symbol"><span class="off">ё</span><span class="on">~</span></li>
	<li class="symbol"><span class="off">1</span><span class="on">!</span></li>
	<li class="symbol"><span class="off">2</span><span class="on">@</span></li>
	<li class="symbol"><span class="off">3</span><span class="on">#</span></li>
	<li class="symbol"><span class="off">4</span><span class="on">$</span></li>
	<li class="symbol"><span class="off">5</span><span class="on">%</span></li>
	<li class="symbol"><span class="off">6</span><span class="on">^</span></li>
	<li class="symbol"><span class="off">7</span><span class="on">&amp;</span></li>
	<li class="symbol"><span class="off">8</span><span class="on">*</span></li>
	<li class="symbol"><span class="off">9</span><span class="on">(</span></li>
	<li class="symbol"><span class="off">0</span><span class="on">)</span></li>
	<li class="symbol"><span class="off">-</span><span class="on">_</span></li>
	<li class="symbol"><span class="off">=</span><span class="on">+</span></li>
	<li class="delete lastitem">Backspace</li>
	<li class="tab">tab</li>
	<li class="letter">q</li>
	<li class="letter">w</li>
	<li class="letter">e</li>
	<li class="letter">r</li>
	<li class="letter">t</li>
	<li class="letter">y</li>
	<li class="letter">u</li>
	<li class="letter">i</li>
	<li class="letter">o</li>
	<li class="letter">p</li>
	<li class="symbol"><span class="off">[</span><span class="on">{</span></li>
	<li class="symbol"><span class="off">]</span><span class="on">}</span></li>
	<li class="symbol lastitem"><span class="off">\</span><span class="on">|</span></li>
	<li class="capslock">caps lock</li>
	<li class="letter">a</li>
	<li class="letter">s</li>
	<li class="letter">d</li>
	<li class="letter">f</li>
	<li class="letter">g</li>
	<li class="letter">h</li>
	<li class="letter">j</li>
	<li class="letter">k</li>
	<li class="letter">l</li>
	<li class="symbol"><span class="off">;</span><span class="on">:</span></li>
	<li class="symbol"><span class="off">'</span><span class="on">&quot;</span></li>
	<li class="return lastitem">return</li>
	<li class="left-shift">shift</li>
	<li class="letter">z</li>
	<li class="letter">x</li>
	<li class="letter">c</li>
	<li class="letter">v</li>
	<li class="letter">b</li>
	<li class="letter">n</li>
	<li class="letter">m</li>
	<li class="symbol"><span class="off">,</span><span class="on">&lt;</span></li>
	<li class="symbol"><span class="off">.</span><span class="on">&gt;</span></li>
	<li class="symbol"><span class="off">/</span><span class="on">?</span></li>
	<li class="right-shift lastitem">shift</li>
	<li class="ctrl">ctrl</li>
	<li class="win">win</li>
	<li class="alt">alt</li>
	<li class="space lastitem">&nbsp;</li>
</ul>
</div>
`;

const body = document.querySelector('body');
const div = document.createElement('div');
div.innerHTML = markup;
body.appendChild(div);


