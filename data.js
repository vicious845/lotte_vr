var APP_DATA = {
  "scenes": [
    {
      "id": "0-bathroom2",
      "name": "bathroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.455674681883529
      },
      "linkHotspots": [
        {
          "yaw": -2.29138463801576,
          "pitch": 0.4454458594575783,
          "rotation": 0,
          "target": "2-livingroom"
        },
        {
          "yaw": -1.7716258704196655,
          "pitch": 0.24537180192903207,
          "rotation": 1.5707963267948966,
          "target": "1-entrance"
        },
        {
          "yaw": -2.284682988366967,
          "pitch": 0.24780485751557357,
          "rotation": 0,
          "target": "3-livingroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.6502687320963103,
        "pitch": 0.027071856576538877,
        "fov": 1.455674681883529
      },
      "linkHotspots": [
        {
          "yaw": -0.5408996899204244,
          "pitch": 0.15667426716426114,
          "rotation": 1.5707963267948966,
          "target": "2-livingroom"
        },
        {
          "yaw": -0.9946550159117891,
          "pitch": 0.13342841402930894,
          "rotation": 4.71238898038469,
          "target": "0-bathroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-livingroom",
      "name": "livingroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0137291162876565,
        "pitch": 0.06819476327304486,
        "fov": 1.455674681883529
      },
      "linkHotspots": [
        {
          "yaw": 0.9237203817614716,
          "pitch": 0.27711187334291765,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": 0.9212788495578845,
          "pitch": 0.44992361193879304,
          "rotation": 0,
          "target": "3-livingroom2"
        },
        {
          "yaw": -2.1186747091408016,
          "pitch": 0.4553984331495524,
          "rotation": 0,
          "target": "0-bathroom2"
        },
        {
          "yaw": -2.584627634445738,
          "pitch": 0.09295098949236014,
          "rotation": 4.71238898038469,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-livingroom2",
      "name": "livingroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.4146419208325849,
        "pitch": -0.033870274890704266,
        "fov": 1.455674681883529
      },
      "linkHotspots": [
        {
          "yaw": 0.8211783330990503,
          "pitch": 0.695528892728003,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -2.156855110884292,
          "pitch": 0.5675369878169061,
          "rotation": 0,
          "target": "2-livingroom"
        },
        {
          "yaw": -2.151627516861158,
          "pitch": 0.2764134322660965,
          "rotation": 0,
          "target": "0-bathroom2"
        },
        {
          "yaw": -2.2711554453047142,
          "pitch": 0.04696880882972465,
          "rotation": 4.71238898038469,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom",
      "name": "bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.455674681883529
      },
      "linkHotspots": [
        {
          "yaw": -2.3814161557702143,
          "pitch": 0.6610600751962874,
          "rotation": 0,
          "target": "3-livingroom2"
        },
        {
          "yaw": -2.361382456134786,
          "pitch": 0.31154990160449003,
          "rotation": 0,
          "target": "2-livingroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
