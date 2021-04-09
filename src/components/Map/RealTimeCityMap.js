import React, { useEffect } from "react";
const { kakao } = window;

const RealTimeCityMap = (props) => {
  useEffect(async () => {
    const container = document.getElementById("real_time_city_map");

    let map = new kakao.maps.Map(container, {
      center: new kakao.maps.LatLng(props.city_hoall_lat, props.city_hoall_lng), // 지도의 중심좌표
      level: props.same_address_map_level
    });

    let geocoder = new kakao.maps.services.Geocoder();

    let clusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 10
    });
    let coordinates = [];
    await props.data_list.forEach((data) => {
      geocoder.addressSearch(data.address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          coordinates.push({
            lat: result[0].y,
            lng: result[0].x,
            store_name: data.store_name
          });
        }
      });
    });
    let markers = [];
    setTimeout(() => {
      for (var i = 0; i < coordinates.length; i++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(
            coordinates[i].lat,
            coordinates[i].lng
          )
        });
        markers.push(marker);

        var infowindow = new kakao.maps.InfoWindow({
          content: `<div class ="label"><span class="left"></span><span class="center">${coordinates[i].store_name}</span><span class="right"></span></div>`
        });

        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );
        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );
      }
      clusterer.addMarkers(markers);

      function makeOverListener(map, marker, infowindow) {
        return function () {
          infowindow.open(map, marker);
        };
      }

      function makeOutListener(infowindow) {
        return function () {
          infowindow.close();
        };
      }
    }, [500]);
  }, [props]);

  return (
    <>
      <div
        className="map-container mt-10"
        id="real_time_city_map"
        style={{ height: "550px" }}
      ></div>
    </>
  );
};

export default RealTimeCityMap;
