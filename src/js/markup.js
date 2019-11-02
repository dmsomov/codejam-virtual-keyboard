import state from './state';
import utils from './utils';

const { activelanguage } = utils;

/* eslint-disable no-tabs */
const markup = `
<div class="container">
  <button class="lang-btn">${activelanguage(state)}</button>
  <textarea class="textarea" rows="6" cols="60" autofocus></textarea>
  <ul class="keyboard">
    <li class="key symbol" data-key='192'><span class="off">ё</span><span class="on">~</span></li>
    <li class="key symbol" data-key='49'>1</li>
    <li class="key symbol" data-key='50'><span class="off">2</span><span class="on">@</span></li>
    <li class="key symbol" data-key='51'><span class="off">3</span><span class="on">#</span></li>
    <li class="key symbol" data-key='52'><span class="off">4</span><span class="on">$</span></li>
    <li class="key symbol" data-key='53'><span class="off">5</span><span class="on">%</span></li>
    <li class="key symbol" data-key='54'><span class="off">6</span><span class="on">^</span></li>
    <li class="key symbol" data-key='55'><span class="off">7</span><span class="on">&amp;</span></li>
	  <li class="key symbol" data-key='56'><span class="off">8</span><span class="on">*</span></li>
	  <li class="key symbol" data-key='57'><span class="off">9</span><span class="on">(</span></li>
	  <li class="key symbol" data-key='48'><span class="off">0</span><span class="on">)</span></li>
	  <li class="key symbol" data-key='189'><span class="off">-</span><span class="on">_</span></li>
	  <li class="key symbol" data-key='187'><span class="off">=</span><span class="on">+</span></li>
	  <li class="key delete lastitem" data-key='8'>Backspace</li>
	  <li class="key tab" data-key='9'>tab</li>
	  <li class="key letter" data-key='81'>q</li>
	  <li class="key letter" data-key='87'>w</li>
	  <li class="key letter" data-key='69'>e</li>
	  <li class="key letter" data-key='82'>r</li>
	  <li class="key letter" data-key='84'>t</li>
	  <li class="key letter" data-key='89'>y</li>
	  <li class="key letter" data-key='85'>u</li>
	  <li class="key letter" data-key='73'>i</li>
	  <li class="key letter" data-key='79'>o</li>
	  <li class="key letter" data-key='80'>p</li>
	  <li class="key symbol" data-key='219'><span class="off">[</span><span class="on">{</span></li>
	  <li class="key symbol" data-key='221'><span class="off">]</span><span class="on">}</span></li>
	  <li class="key symbol lastitem"><span class="off" data-key='220'></span><span class="on">|</span></li>
	  <li class="key capslock" data-key='20'>caps lock</li>
	  <li class="key letter" data-key='65'>a</li>
	  <li class="key letter" data-key='83'>s</li>
	  <li class="key letter" data-key='68'>d</li>
	  <li class="key letter" data-key='70'>f</li>
	  <li class="key letter" data-key='71'>g</li>
	  <li class="key letter" data-key='72'>h</li>
	  <li class="key letter" data-key='74'>j</li>
	  <li class="key letter" data-key='75'>k</li>
	  <li class="key letter" data-key='76'>l</li>
	  <li class="key symbol" data-key='186'><span class="off">;</span><span class="on">:</span></li>
	  <li class="key symbol" data-key='222'><span class="off">'</span><span class="on">&quot;</span></li>
	  <li class="key return lastitem" data-key='13'>return</li>
	  <li class="key left-shift" data-key='16'>shift</li>
	  <li class="key letter" data-key='90'>z</li>
	  <li class="key letter" data-key='88'>x</li>
	  <li class="key letter" data-key='67'>c</li>
	  <li class="key letter" data-key='86'>v</li>
	  <li class="key letter" data-key='66'>b</li>
	  <li class="key letter" data-key='78'>n</li>
	  <li class="key letter" data-key='77'>m</li>
	  <li class="key symbol" data-key='188'><span class="off">,</span><span class="on">&lt;</span></li>
	  <li class="key symbol" data-key='190'><span class="off">.</span><span class="on">&gt;</span></li>
	  <li class="key symbol" data-key='191'><span class="off">/</span><span class="on">?</span></li>
	  <li class="key right-shift lastitem" data-key='16'>shift</li>
	  <li class="key ctrl" data-key='17'>ctrl</li>
	  <li class="key win" data-key='91'>win</li>
	  <li class="key alt" data-key='18'>alt</li>
	  <li class="key space lastitem" data-key='32'>&nbsp;</li>
  </ul>
</div>
`;

export default markup;
