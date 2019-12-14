/** ***** ***** ***** ***** ***** *****
 * Render Funtions
 ***** ***** ***** ***** ***** ***** */

/**
 * @param {String} title title
 */
function renderTitle(title) {
  document.getElementById('cert-title')
    .innerText = `${title}學位證書`;
}

/**
 * @param {String} year chinese_graduate_year
 * @param {String} num  student.cert_num
 * @param {String} id   student.student_id
 */
function renderSubtitle(year, num, id) {
  document.getElementById('cert-subtitle')
    .innerText = `${year}${num}號\n學號：${id}`;
}

/**
 * @param {String} name   student.chinese_name
 * @param {String} nation student.nationality
 */
function renderLine_1(name, nation) {
  document.getElementById('line_1')
    .innerText = `學生　${name}　　　${nation}`;
}

/**
 * @param {String} year  year
 * @param {String} month month
 * @param {String} day   day
 */
function renderLine_2(year, month, day) {
  document.getElementById('line_2')
    .innerText = `中華民國${year}年${month}月${day}生`;
}

/**
 * @param {String} colg     student.graduate_colg
 * @param {String} degree   degree
 * @param {String} rule     rule
 * @param {String} s_degree short_degree
 * @param {String} title    title
 */
function renderLine_34(colg, degree, rule, s_degree, title) {
  document.getElementById('line_34')
    .innerText = setBreakLine(`在本校　${colg}　${degree}　${rule}　${s_degree}　${title}　學位`);
}

/**
 * @param {Array<String>} majorArray major_text
 * @param {String} title             title
 * @brief If student doesn't have any double major, please set array to be [].
 */
function renderDoubleMajor(majorArray, title) {
  const DoubleMajor = document.getElementById('line_DoubleMajor');
  if (majorArray.length===0) {
    DoubleMajor.style.display = 'none';
    return;
  }
  let renderString = "";
  majorArray.map((text) => {
    renderString += `${text}\n　　　　授予　${title}　學位\n`;
  });
  DoubleMajor.innerText = renderString;
}

/**
 * @param {Array<String>} minorArray minor_text
 * @brief If student doesn't have any minor, please set array to be [].
 */
function renderMinor(minorArray) {
  const Minor = document.getElementById('line_Minor');
  if(minorArray.length===0) {
    Minor.style.display = 'none';
    return;
  }
  let renderString = "";
  minorArray.map((text) => {
    renderString += `${text}\n`;
  });
  Minor.innerText = renderString;
}

/**
 * @param {String} year  chinese_renameyear
 * @param {String} month chinese_renamemonth
 * @param {String} day   chinese_renameday
 * @param {String} name  student.rename_text
 * @brief If student haven't renamed, please set `year` to be ""
 */
function renderRename(year, month, day, name) {
  const Rename = document.getElementById('line_Rename');
  if (year==="") {
    Rename.style.display = 'none';
    return;
  }
  Rename
    .innerText = `中華民國 ${year} 年 ${month} 月 ${day} 日\n核准更改姓名為 ${name}`;
}

/**
 * @param {String | Number} year  chinese_graduate_year
 * @param {String | Number} month student.graduate_date.month
 */
function footerDate(year, month) {
  document.getElementById('footer_date')
    .innerText = `中 華 民 國 ${year} 年 ${month} 月`;
}

/** ***** ***** ***** ***** ***** *****
 * API Funtions
 ***** ***** ***** ***** ***** ***** */

function handleOnResize() {
  const currentWidth = document.getElementsByTagName('body')[0].offsetWidth;
  document
    .getElementsByTagName('html')[0]
    .style.fontSize = `${(20*currentWidth)/595}px`
}

/**
 * @param {String} source
 * @returns {String}
 * @brief more than 20 word than breakline
 */
function setBreakLine(source) {
  let count = 0;
  let target = "";
  for(let i=0; i<source.length; i++) {
    if(source[i]==='\n') {
      count = 0;
    }
    if (count===20) {
      target += '\n';
      count = 0;
    }
    target += source[i];
    count++;
  }
  return target;
}