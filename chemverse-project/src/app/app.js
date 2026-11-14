// Render halaman aktif + navigasi bawah.
import { inbox } from '../pages/DM.js';
import { explore } from '../pages/Explore.js';
import { home } from '../pages/Home.js';
import { me } from '../pages/Profile.js';
import { search } from '../pages/Search.js';
import { ui } from '../state/ui.js';
import { $ } from '../utils/dom.js';
import { ic } from '../utils/icons.js';

function render(){$('#main').className='v-'+ui.view;$('#main').innerHTML={home,explore,dm:inbox,me,search}[ui.view]();
 $('#bn').innerHTML='<div>'+[['home','Home'],['explore','Explore'],['dm','DM'],['me','Profile'],['search','Search']].map(n=>{const on=ui.view===n[0],ic0={home:'home',explore:'compass',dm:'send',me:'user',search:'search'}[n[0]];return `<button data-v="${n[0]}" aria-label="${n[1]}" ${on?'aria-current="page"':''}>${ic(ic0,on&&n[0]==='home',on?2.8:1.8)}</button>`}).join('')+'</div>'}

export { render };
