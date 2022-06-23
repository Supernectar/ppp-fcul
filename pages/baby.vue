<template>
  <div>
    <Navbar />

    <div class="mapPane">
      <div id="map"></div>
    </div>

    <!-- <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="686"
          height="500"
          id="gmap_canvas"
          src=""
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe
        ><a href="https://fmovies-online.net"></a><br />

        <a href="https://www.embedgooglemap.net">html code for google maps</a>
      </div>
    </div> -->
  </div>
</template>

<script>
// import maplibregl from 'maplibre-gl';
// import { Auth, Signer } from 'aws-amplify';
// import awsconfig from '/public/aws-exports';

// amplify --version

export default {
  name: 'MapPane',
  head() {
    return {
      link: [
        {
          link: 'https://cdn.amplify.aws/packages/maplibre-gl/1.15.2/maplibre-gl.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.amplify.aws/packages/maplibre-gl/1.15.2/maplibre-gl.js'
        },
        {
          src: 'https://cdn.amplify.aws/packages/core/4.3.0/aws-amplify-core.min.js'
        },
        {
          src: 'https://cdn.amplify.aws/packages/auth/4.3.8/aws-amplify-auth.min.js'
        },
        {
          src: 'https://cdn.amplify.aws/packages/geo/1.1.0/aws-amplify-geo.min.js'
        },
        {
          src: 'https://cdn.amplify.aws/packages/maplibre-gl-js-amplify/1.1.0/maplibre-gl-js-amplify.umd.min.js'
        }
      ]
    };
  },
  data() {
    return {
      credentials: null
    };
  },
  mounted: async function () {
    this.credentials = await Auth.currentCredentials();
    this.mapCreate();
  },
  methods: {
    mapCreate: function () {
      const map = new maplibregl.Map({
        container: 'map',
        style: 'sample',
        center: [139.7648, 35.6794],
        zoom: 15,
        bearing: 64.8,
        pitch: 60,
        hash: true,
        transformRequest: this.transformRequest
      });

      map.addControl(new maplibregl.NavigationControl());
    },
    transformRequest: function (url, resourceType) {
      if (resourceType === 'Style' && !url.includes('://')) {
        url = `https://maps.geo.${awsconfig.aws_project_region}.amazonaws.com/maps/v0/maps/${url}/style-descriptor`;
      }
      if (url.includes('amazonaws.com')) {
        return {
          url: Signer.signUrl(url, {
            access_key: this.credentials.accessKeyId,
            secret_key: this.credentials.secretAccessKey,
            session_token: this.credentials.sessionToken
          })
        };
      }
      return { url };
    }
  }
};
</script>

<style>
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 686px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 686px;
}
</style>
