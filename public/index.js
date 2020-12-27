
var ctx = document.getElementById("canva").getContext('2d');

var chap_tam = ["கடவுள் வாழ்த்து", "வான்சிறப்பு", "நீத்தார் பெருமை", "அறன் வலியுறுத்தல்", "இல்வாழ்க்கை", "வாழ்க்கைத் துணைநலம்", "மக்கட்பேறு", "அன்புடைமை", "விருந்தோம்பல்", "இனியவை கூறல்", "செய்ந்நன்றியறிதல்", "நடுவு நிலைமை", "அடக்கம் உடைமை", "ஒழுக்கம் உடைமை", "பிறனில் விழையாமை", "பொறையுடைமை", "அழுக்காறாமை", "வெஃகாமை", "புறங்கூறாமை", "பயனில சொல்லாமை", "தீவினையச்சம்", "ஒப்புரவறிதல்", "ஈகை", "புகழ்", "அருளுடைமை", "புலால் மறுத்தல்", "தவம்", "கூடா ஒழுக்கம்", "கள்ளாமை", "வாய்மை", "வெகுளாமை", "இன்னா செய்யாமை", "கொல்லாமை", "நிலையாமை", "துறவு", "மெய்யுணர்தல்", "அவா அறுத்தல்", "ஊழ்", "இறைமாட்சி", "கல்வி", "கல்லாமை", "கேள்வி", "அறிவுடைமை", "குற்றங்கடிதல்", "பெரியாரைத் துணைக்கோடல்", "சிற்றினம் சேராமை", "தெரிந்து செயல்வகை", "வலியறிதல்", "காலமறிதல்", "இடனறிதல்", "தெரிந்து தெளிதல்", "தெரிந்து வினையாடல்", "சுற்றந் தழால்", "பொச்சாவாமை", "செங்கோன்மை", "கொடுங்கோன்மை", "வெருவந்த செய்யாமை", "கண்ணோட்டம்", "ஒற்றாடல்", "ஊக்கம் உடைமை", "மடி இன்மை", "ஆள்வினை உடைமை", "இடுக்கண் அழியாமை", "அமைச்சு", "சொல்வன்மை", "வினைத் தூய்மை", "வினைத்திட்பம்", "வினை செயல்வகை", "தூது", "மன்னரைச் சேர்ந்து ஒழுகல்", "குறிப்பறிதல்", "அவை அறிதல்", "அவை அஞ்சாமை", "நாடு", "அரண்", "பொருள் செயல்வகை", "படை மாட்சி", "படைச் செருக்கு", "நட்பு", "நட்பாராய்தல்", "பழைமை", "தீ நட்பு", "கூடா நட்பு", "பேதைமை", "புல்லறிவாண்மை", "இகல்", "பகை மாட்சி", "பகைத்திறம் தெரிதல்", "உட்பகை", "பெரியாரைப் பிழையாமை", "பெண்வழிச் சேறல்", "வரைவின் மகளிர்", "கள்ளுண்ணாமை", "சூது", "மருந்து", "குடிமை", "மானம்", "பெருமை", "சான்றாண்மை", "பண்புடைமை", "நன்றியில் செல்வம்", "நாணுடைமை", "குடிசெயல் வகை", "உழவு", "நல்குரவு", "இரவு", "இரவச்சம்", "கயமை", "தகை அணங்குறுத்தல்", "குறிப்பறிதல்", "புணர்ச்சி மகிழ்தல்", "நலம் புனைந்து உரைத்தல்", "காதற் சிறப்புரைத்தல்", "நாணுத் துறவுரைத்தல்", "அலர் அறிவுறுத்தல்", "பிரிவு ஆற்றாமை", "படர்மெலிந் திரங்கல்", "கண் விதுப்பழிதல்", "பசப்புறு பருவரல்", "தனிப்படர் மிகுதி", "நினைந்தவர் புலம்பல்", "கனவுநிலை உரைத்தல்", "பொழுதுகண்டு இரங்கல்", "உறுப்புநலன் அழிதல்", "நெஞ்சொடு கிளத்தல்", "நிறையழிதல்", "அவர்வயின் விதும்பல்", "குறிப்பறிவுறுத்தல்", "புணர்ச்சி விதும்பல்", "நெஞ்சொடு புலத்தல்", "புலவி", "புலவி நுணுக்கம்", "ஊடலுவகை"]

var cur_kural;


var url = new URLSearchParams(location.search);

// If navigator does not support share , hide the share button
if (!navigator.share) {
    share_btn.style.display = 'none';
}


pre_fill();

// Check for Kural Number in the URL or else use a random number from 1 to 1330
var kur_share = parseInt(url.get("kural")) - 1;
setTimeout(fill_kural, 500, [kur_share >= 0 && kur_share < 1330 ? kur_share : parseInt(Math.random() * 1330 + 1)]);


function pre_fill() {

    ctx.font = "bold 1px Mukta Malar";
    ctx.fillStyle = "white"
    ctx.fillText("தமிழ் திருக்குறள் ", 0, 100);

}

function fill_kural(n) {

    cur_kural = parseInt(n) + 1;

    kural_no_txt.value = cur_kural;

    share_cnt_span.style.display = "none";
    show_share_cnt();

    canva.width = 1330
    canva.height = 900

    ctx.clearRect(0, 0, canva.width, canva.height);

    var grd = ctx.createRadialGradient(100, 80, 5, 100, 80, 1300);
    grd.addColorStop(0, "darkorange");
    grd.addColorStop(0.05, "white");
    grd.addColorStop(0.1, "orange");
    grd.addColorStop(0.3, "white");
    grd.addColorStop(1, "yellow");
    ctx.fillStyle = grd;

    ctx.fillRect(0, 0, canva.width, canva.height);

    ctx.drawImage(document.getElementById("image"), 0, 50)
    var left = 270;


    ctx.font = "bold 40px Mukta Malar";
    ctx.fillStyle = "red"
    ctx.textAlign = "left"
    var k1_txt = "அதிகாரம் : " + chap_tam[parseInt(n / 10)];
    var k1 = ctx.measureText(k1_txt).actualBoundingBoxAscent + 45;

    ctx.fillText(k1_txt, left + 10, k1, 700);

    var k2_txt = "குறள் எண் : " + (parseInt(n) + 1);
    var k2 = ctx.measureText(k2_txt).width;
    ctx.fillText(k2_txt, canva.width - k2 - 20, k1);


    ctx.font = "bold 42px Mukta Malar";
    var l1 = tk.kural[n].line1;
    var l2 = tk.kural[n].line2;
    var m1 = ctx.measureText(l1).actualBoundingBoxAscent + 75 + k1;
    var m2 = ctx.measureText(l2).actualBoundingBoxAscent + 25 + m1;

    var l1_w = 915;
    ctx.drawImage(document.getElementById("olai_image"), left, k1 + 30, l1_w + 160, m2 - k1 + 80);


    ctx.strokeStyle = "red";
    ctx.strokeText(l1, left + 110, m1, 900)
    ctx.strokeText(l2, left + 110, m2, 900)

    ctx.fillStyle = "#314bce"
    ctx.fillText(l1, left + 110, m1, 900)
    ctx.fillText(l2, left + 110, m2, 900)

    var tam_exp = tk.kural[n].tam_exp;
    var tam_exp_word = tam_exp.split(" ");

    ctx.font = "italic bold 40px Mukta Malar";

    var i = 0;
    var tam_exp_line = [];
    tam_exp_word.forEach((e, ind) => {
        var cur_line = (tam_exp_line[i] || "") + e + " ";

        if (ctx.measureText(cur_line).width > 1200) {
            tam_exp_line[i + 1] = e + " ";
            i++;

        } else {

            tam_exp_line[i] = cur_line;
        }

    })

    var j = m2 + 100;
    tam_exp_line.forEach((e, ind) => {
        j = ctx.measureText(e).actualBoundingBoxAscent + 25 + j;
        ctx.fillText(e, 50, j);
    })

    var data = ctx.getImageData(0, 0, canva.width, canva.height);
    canva.height = j + 100;

    ctx.putImageData(data, 0, 0);

    ctx.fillStyle = "black";
    ctx.fillRect(0, canva.height - 40, canva.width, 40);

    ctx.fillStyle = "white"
    ctx.font = "30px Arial"
    ctx.textAlign = "center";
    ctx.fillText("share-kural.web.app", canva.width / 2, canva.height - 10)
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, canva.width, canva.height);


}



function search_input() {

    var search = search_txt.value.toLowerCase();
    if (!search) {
        search_list.innerHTML = "";
        return;
    }

    var kural_filter = [];
    var kural_filter_i = [];
    tk.kural.forEach((e, i) => {
        if (e.line1.indexOf(search) > -1 || e.line2.indexOf(search) > -1 || e.translit.toLowerCase().indexOf(search) > -1) {
            var splt = e.line1.split(" ");
            kural_filter.push(splt[0] + " " + splt[1] + "...");
            kural_filter_i.push(i);
        }
    })

    var inn_htm = "";

    kural_filter.forEach((e, i) => {
        inn_htm += `<li><a class="dropdown-item" href="#" onclick=fill_kural(${kural_filter_i[i]})>${e}</a></li>`
    })

    search_list.innerHTML = inn_htm;
}


function share() {

    var blob = canva.toBlob((blob) => {
        navigator.share({
            files: [new File([blob], "kural-" + kural_no_txt.value + ".png", { type: blob.type })],
            text: "https://share-kural.web.app/?kural=" + cur_kural,
            title: 'Share-Kural'
        }
        )
    })

    db_inc();

}


function download() {

    const a = document.createElement('a');
    a.href = canva.toDataURL("image/png");
    a.download = "kural-" + cur_kural + ".png";

    const clickHandler = () => {
        setTimeout(() => {
            this.removeEventListener('click', clickHandler);
        }, 150);
    };
    a.addEventListener('click', clickHandler, false);
    a.click();

    db_inc();

}

function share_lnk() {

    if (navigator.share) {
        navigator.share({
            title: 'Share-Kural',
            url: "https://share-kural.web.app/?kural=" + cur_kural
        })
        return;
    }

    if (navigator.clipboard)
        navigator.clipboard.writeText("https://share-kural.web.app/?kural=" + cur_kural).then(alert("URL Copied to Clipboard"));
    else {
        var copyText = document.getElementById("copy");
        copyText.value = "https://share-kural.web.app/?kural=" + cur_kural;
        copyText.select();
        copyText.setSelectionRange(0, 50)
        document.execCommand("copy");
        alert("URL Copied to Clipboard");
        share_lnk_btn.focus();
    }

    db_inc();

}

async function show_share_cnt() {

    snap = await firebase.database().ref("cnt/" + cur_kural).once("value");
    var cnt = parseInt(snap.val());
    if (cnt > 0) {
        share_cnt_span.innerHTML = cnt + " shares";
        share_cnt_span.style.display = "inline";
    }

}


async function db_inc() {

    var out;
    await firebase.database().ref("cnt/" + cur_kural).transaction(
        (data) => {
            out = data + 1;
            return out;
        });

    share_cnt_span.innerHTML = out + " shares";
}


async function top_shares() {

    var k_ar = [];
    var v_ar = [];
    firebase.database().ref("cnt/").orderByValue().limitToLast(5).once("value", (snap) => {
        var v = snap.val();
        for (x in v) {
            k_ar.push(parseInt(x));
            v_ar.push(parseInt(v[x]));
        }
        for (i = 0; i < v_ar.length - 1; i++) {
            for (j = i + 1; j < v_ar.length; j++) {
                if (v_ar[i] < v_ar[j]) {
                    temp = v_ar[i];
                    v_ar[i] = v_ar[j];
                    v_ar[j] = temp;

                    temp = k_ar[i];
                    k_ar[i] = k_ar[j];
                    k_ar[j] = temp;
                }
            }
        }
        //console.log(k_ar, v_ar);

        var shares_modal = new bootstrap.Modal(document.getElementById("popularSharesModal"));
        var tk_ar = [];

        var tr_ar = popular_shares_cont.getElementsByTagName("tr");
        k_ar.forEach((e, i) => {
            var splt = tk.kural[e - 1].line1.split(" ");
            tk_ar.push(splt[0] + " " + splt[1] + "...");
            tr_ar[i].addEventListener("click", () => {
                fill_kural(e - 1);
                shares_modal.hide();
            });

        })
        var td_ar = popular_shares_cont.getElementsByTagName("td");
        var th_ar = popular_shares_cont.getElementsByTagName("th");
        for (i = 0; i < 10; i++) {
            e = td_ar[i];
            if (i % 2) {
                e.innerHTML = v_ar[parseInt(i / 2)];
            } else {
                e.innerHTML = tk_ar[parseInt(i / 2)];
                th_ar[parseInt(i / 2)].innerHTML = k_ar[parseInt(i / 2)];
            }
        }

        shares_modal.show();


    })

}
