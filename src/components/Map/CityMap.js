import React, { useEffect } from "react";
const { kakao } = window;

const CityMap = (props) => {
  useEffect(() => {
    let value = props.valueStr;
    let cities = props.city_close_20;

    if (value === "city_close_19") {
      cities = props.city_close_19;
    } else if (value === "city_open_19") {
      cities = props.city_open_19;
    } else if (value === "city_close_20") {
      cities = props.city_close_20;
    } else if (value === "city_open_20") {
      cities = props.city_open_20;
    }

    kakaoMapHandler(cities);
  }, [props.valueStr]);

  const kakaoMapHandler = (cities) => {
    let busan;
    let chungbuk;
    let chungnam;
    let daegu;
    let daejeon;
    let gangwon;
    let gwangju;
    let gyeonggi;
    let gyeongbuk;
    let gyeongnam;
    let incheon;
    let jeju;
    let jeonbuk;
    let jeonnam;
    let sejong;
    let seoul;
    let ulsan;

    cities.forEach((res) => {
      res.city === "busan" && (busan = res.count);
      res.city === "chungbuk" && (chungbuk = res.count);
      res.city === "chungnam" && (chungnam = res.count);
      res.city === "daegu" && (daegu = res.count);
      res.city === "daejeon" && (daejeon = res.count);
      res.city === "gangwon" && (gangwon = res.count);
      res.city === "gwangju" && (gwangju = res.count);
      res.city === "gyeonggi" && (gyeonggi = res.count);
      res.city === "gyeongbuk" && (gyeongbuk = res.count);
      res.city === "gyeongnam" && (gyeongnam = res.count);
      res.city === "incheon" && (incheon = res.count);
      res.city === "jeju" && (jeju = res.count);
      res.city === "jeonbuk" && (jeonbuk = res.count);
      res.city === "jeonnam" && (jeonnam = res.count);
      res.city === "sejong" && (sejong = res.count);
      res.city === "seoul" && (seoul = res.count);
      res.city === "ulsan" && (ulsan = res.count);
    });

    const container = document.getElementById("city_map");
    const options = {
      center: new kakao.maps.LatLng(35.8383, 127.9558),
      level: 13,
      disableDoubleClickZoom: true
    };
    const map = new kakao.maps.Map(container, options);

    // ????????? ???????????? ????????? ????????? ????????? ?????? ????????? ?????????
    map.setDraggable(false);

    // ????????? ?????? ????????? ????????? ????????? ?????? ??????, ????????? ?????????
    map.setZoomable(false);

    // ??????
    let gyeonggidoContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(gyeonggi)}???</span>
          </li>
        </ul>
      </div>
    `;
    let gyeonggidoPosition = new kakao.maps.LatLng(37.63887, 127.436581);

    let gyeonggidoOverlay = new kakao.maps.CustomOverlay({
      position: gyeonggidoPosition,
      content: gyeonggidoContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    gyeonggidoOverlay.setMap(map);
    // end ??????

    // ??????
    let seoulContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(seoul)}???</span>
          </li>
        </ul>
      </div>
    `;
    let seoulPosition = new kakao.maps.LatLng(36.97112, 127.757781);

    let seoulOverlay = new kakao.maps.CustomOverlay({
      position: seoulPosition,
      content: seoulContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    seoulOverlay.setMap(map);
    // end ??????

    // ??????
    let incheonContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(incheon)}???</span>
          </li>
        </ul>
      </div>
    `;
    let incheonPosition = new kakao.maps.LatLng(37.00887, 126.846581);

    let incheonOverlay = new kakao.maps.CustomOverlay({
      position: incheonPosition,
      content: incheonContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    incheonOverlay.setMap(map);
    // end ??????

    // ??????
    let gangwondoContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(gangwon)}???</span>
          </li>
        </ul>
      </div>
    `;
    let gangwondoPosition = new kakao.maps.LatLng(37.78889, 128.446977);

    let gangwondoOverlay = new kakao.maps.CustomOverlay({
      position: gangwondoPosition,
      content: gangwondoContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    gangwondoOverlay.setMap(map);
    // end ??????

    // ??????
    let chungbukContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(chungbuk)}???</span>
          </li>
        </ul>
      </div>
    `;
    let chungbukPosition = new kakao.maps.LatLng(37.23889, 128.616977);

    let chungbukOverlay = new kakao.maps.CustomOverlay({
      position: chungbukPosition,
      content: chungbukContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    chungbukOverlay.setMap(map);
    // end ??????

    // ??????
    let gyeongbukContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(gyeongbuk)}???</span>
          </li>
        </ul>
      </div>
    `;
    let gyeongbukPosition = new kakao.maps.LatLng(36.68889, 128.846977);

    let gyeongbukOverlay = new kakao.maps.CustomOverlay({
      position: gyeongbukPosition,
      content: gyeongbukContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    gyeongbukOverlay.setMap(map);
    // end ??????

    // ??????
    let chungnamContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(chungnam)}???</span>
          </li>
        </ul>
      </div>
    `;
    let chungnamPosition = new kakao.maps.LatLng(36.36887, 126.766581);

    let chungnamOverlay = new kakao.maps.CustomOverlay({
      position: chungnamPosition,
      content: chungnamContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    chungnamOverlay.setMap(map);
    // end ??????

    // ??????
    let sejongContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(sejong)}???</span>
          </li>
        </ul>
      </div>
    `;
    let sejongPosition = new kakao.maps.LatLng(36.39887, 127.746581);

    let sejongOverlay = new kakao.maps.CustomOverlay({
      position: sejongPosition,
      content: sejongContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    sejongOverlay.setMap(map);
    // end ??????

    // ??????
    let daejeonContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(daejeon)}???</span>
          </li>
        </ul>
      </div>
    `;
    let daejeonPosition = new kakao.maps.LatLng(35.78345, 127.886581);

    let daejeonOverlay = new kakao.maps.CustomOverlay({
      position: daejeonPosition,
      content: daejeonContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    daejeonOverlay.setMap(map);
    // end ??????

    // ??????
    let daeguContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(daegu)}???</span>
          </li>
        </ul>
      </div>
    `;
    let daeguPosition = new kakao.maps.LatLng(36.01889, 128.766977);

    let daeguOverlay = new kakao.maps.CustomOverlay({
      position: daeguPosition,
      content: daeguContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    daeguOverlay.setMap(map);
    // end ??????

    // ??????
    let jeonbukContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(jeonbuk)}???</span>
          </li>
        </ul>
      </div>
    `;
    let jeonbukPosition = new kakao.maps.LatLng(35.76887, 126.856581);

    let jeonbukOverlay = new kakao.maps.CustomOverlay({
      position: jeonbukPosition,
      content: jeonbukContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    jeonbukOverlay.setMap(map);
    // end ??????

    // ??????
    let gwangjuContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(gwangju)}???</span>
          </li>
        </ul>
      </div>
    `;
    let gwangjuPosition = new kakao.maps.LatLng(35.10887, 126.646581);

    let gwangjuOverlay = new kakao.maps.CustomOverlay({
      position: gwangjuPosition,
      content: gwangjuContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    gwangjuOverlay.setMap(map);
    // end ??????

    // ??????
    let jeonnamContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(jeonnam)}???</span>
          </li>
        </ul>
      </div>
    `;
    let jeonnamPosition = new kakao.maps.LatLng(34.50887, 126.746581);

    let jeonnamOverlay = new kakao.maps.CustomOverlay({
      position: jeonnamPosition,
      content: jeonnamContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    jeonnamOverlay.setMap(map);
    // end ??????

    // ??????
    let gyeongnamContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(gyeongnam)}???</span>
          </li>
        </ul>
      </div>
    `;
    let gyeongnamPosition = new kakao.maps.LatLng(35.10887, 127.546581);

    let gyeongnamOverlay = new kakao.maps.CustomOverlay({
      position: gyeongnamPosition,
      content: gyeongnamContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    gyeongnamOverlay.setMap(map);
    // end ??????

    // ??????
    let busanContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(busan)}???</span>
          </li>
        </ul>
      </div>
    `;
    let busanPosition = new kakao.maps.LatLng(34.50587, 127.776581);

    let busanOverlay = new kakao.maps.CustomOverlay({
      position: busanPosition,
      content: busanContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    busanOverlay.setMap(map);
    // end ??????

    // ??????
    let ulsanContent = `
      <div class="overlaybox">
        <div class="boxtitle">??????</div>
        <ul>
          <li class="up">
            <span class="title">${props.numberComma(ulsan)}???</span>
          </li>
        </ul>
      </div>
    `;
    let ulsanPosition = new kakao.maps.LatLng(35.20587, 128.626581);

    let ulsanOverlay = new kakao.maps.CustomOverlay({
      position: ulsanPosition,
      content: ulsanContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    ulsanOverlay.setMap(map);
    // end ??????

    // ??????
    let jejuContent = `
      <a href="/#/city/jeju">
        <div class="overlaybox">
          <div class="boxtitle">??????</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(jeju)}???</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let jejuPosition = new kakao.maps.LatLng(33.50887, 126.746581);

    let jejuOverlay = new kakao.maps.CustomOverlay({
      position: jejuPosition,
      content: jejuContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    jejuOverlay.setMap(map);
    // end ??????
  };

  return (
    <>
      <div
        className="map-container mt-30"
        id="city_map"
        style={{ height: "550px" }}
      ></div>
    </>
  );
};

export default CityMap;
