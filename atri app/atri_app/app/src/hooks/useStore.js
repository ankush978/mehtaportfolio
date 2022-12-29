import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex4": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox1": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Portfolio Creator"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none"
      },
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu1": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "TextBox4": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex5": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox6": {
      "styles": {
        "backgroundImage": "",
        "backgroundClip": "text"
      },
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "styles": {},
      "custom": {
        "text": "that delight and inspire people"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "styles": {},
      "custom": {
        "text": "Hi, I am Shyam!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex10": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "Button2": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex11": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "10px",
        "fontSize": "32px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "backgroundImage": ""
      },
      "callbacks": {}
    },
    "TextBox341": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox342": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox343": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button67": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex403": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox344": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex404": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Menu13": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "Image61": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-right.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox345": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "19px"
      },
      "custom": {
        "text": "Download resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex408": {
      "styles": {
        "display": "flex",
        "alignItems": "baseline",
        "columnGap": "10px",
        "borderStyle": "none",
        "paddingRight": ""
      },
      "callbacks": {}
    },
    "Button68": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "12px",
        "paddingLeft": "15px",
        "paddingBottom": "12px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans",
        "right": 6,
        "position": "relative",
        "top": null,
        "bottom": 8
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox346": {
      "styles": {
        "backgroundImage": "url(\"/app-assets/brand_bg.png\")",
        "backgroundClip": "text",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "64px",
        "WebkitBackgroundClip": "text",
        "color": "transparent",
        "backgroundPositionX": "400px"
      },
      "custom": {
        "text": "I build products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox347": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "64px"
      },
      "custom": {
        "text": "that helps people"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox348": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "20px",
        "color": "#7f7d7d",
        "width": "90%"
      },
      "custom": {
        "text": "Hi, I am Person Name. I am a software engineer working at Atri Labs."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex409": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "30px"
      },
      "callbacks": {}
    },
    "Flex410": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "",
        "fontSize": "32px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "backgroundImage": ""
      },
      "callbacks": {}
    },
    "Flex411": {
      "styles": {
        "display": "flex",
        "flexGrow": null,
        "flexDirection": "column",
        "rowGap": "30px",
        "justifyContent": "center",
        "flexWrap": "no-wrap"
      },
      "callbacks": {}
    },
    "Image62": {
      "styles": {
        "width": "350px",
        "height": "400px",
        "borderRadius": ""
      },
      "custom": {
        "alt": "profile pic",
        "src": "/app-assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex412": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "alignItems": "stretch",
        "paddingLeft": "",
        "paddingRight": "",
        "boxSizing": "border-box",
        "fontFamily": "Plus Jakarta Sans",
        "paddingTop": "120px",
        "flexWrap": "no-wrap",
        "columnGap": "75px",
        "justifyContent": "center",
        "marginBottom": "20px"
      },
      "callbacks": {}
    },
    "TextBox349": {
      "styles": {},
      "custom": {
        "text": "Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox350": {
      "styles": {},
      "custom": {
        "text": "Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox351": {
      "styles": {},
      "custom": {
        "text": "Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox352": {
      "styles": {},
      "custom": {
        "text": "Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox353": {
      "styles": {},
      "custom": {
        "text": "Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox354": {
      "styles": {},
      "custom": {
        "text": "Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox355": {
      "styles": {},
      "custom": {
        "text": " Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox356": {
      "styles": {},
      "custom": {
        "text": " Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox357": {
      "styles": {},
      "custom": {
        "text": "Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex413": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "8px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "callbacks": {}
    },
    "Image63": {
      "styles": {
        "width": "60px",
        "height": "60px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox358": {
      "styles": {
        "paddingTop": "",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "19px"
      },
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox359": {
      "styles": {
        "paddingTop": "",
        "maxWidth": "200px",
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "",
        "fontWeight": 200
      },
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex414": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "8px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "callbacks": {}
    },
    "TextBox360": {
      "styles": {
        "paddingTop": "",
        "maxWidth": "200px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 200
      },
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox361": {
      "styles": {
        "paddingTop": "",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "19px"
      },
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image64": {
      "styles": {
        "width": "60px",
        "height": "60px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex415": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "8px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "callbacks": {}
    },
    "TextBox362": {
      "styles": {
        "paddingTop": "",
        "maxWidth": "200px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 200
      },
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox363": {
      "styles": {
        "paddingTop": "",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "19px"
      },
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image65": {
      "styles": {
        "width": "60px",
        "height": "60px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex416": {
      "styles": {
        "display": "flex",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "maxWidth": "",
        "flexGrow": null,
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex417": {
      "styles": {
        "display": "flex",
        "alignContent": "stretch",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "paddingTop": "",
        "maxWidth": "",
        "flexGrow": null,
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex418": {
      "styles": {
        "display": "flex",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "maxWidth": "",
        "flexGrow": null,
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex419": {
      "styles": {
        "display": "flex",
        "paddingTop": "100px",
        "columnGap": "90px",
        "alignContent": "stretch",
        "flexWrap": "no-wrap",
        "flexDirection": "row",
        "justifyContent": "center",
        "fontFamily": "Plus Jakarta Sans",
        "maxWidth": "",
        "boxSizing": "border-box",
        "overflow": "hidden",
        "alignItems": "flex-start"
      },
      "callbacks": {}
    },
    "TextBox364": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "47px",
        "textAlign": "center"
      },
      "custom": {
        "text": "one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox365": {
      "styles": {
        "textAlign": "center",
        "paddingTop": "20px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "47px"
      },
      "custom": {
        "text": "Design that solves problems,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox366": {
      "styles": {
        "textAlign": "center",
        "borderWidth": "",
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "backgroundImage": "url(\"/app-assets/brand_bg.png\")",
        "backgroundClip": "text",
        "WebkitBackgroundClip": "text",
        "color": "transparent",
        "backgroundPositionX": "40px",
        "fontWeight": 600
      },
      "custom": {
        "text": "Skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex420": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "boxSizing": "initial",
        "overflow": "visible",
        "paddingTop": "70px",
        "paddingBottom": "70px"
      },
      "callbacks": {}
    },
    "TextBox367": {
      "styles": {},
      "custom": {
        "text": "April 16, 2021 7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox368": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox369": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox370": {
      "styles": {},
      "custom": {
        "text": "April 16, 2021 7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox371": {
      "styles": {},
      "custom": {
        "text": "April 16, 2021 5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox372": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox373": {
      "styles": {},
      "custom": {
        "text": "April 16, 2021 5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox374": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox375": {
      "styles": {},
      "custom": {
        "text": "April 16, 2021 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox376": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox377": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "42px"
      },
      "custom": {
        "text": "Latest Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox378": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "30px"
      },
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex421": {
      "styles": {
        "display": "flex",
        "flexDirection": "column"
      },
      "callbacks": {}
    },
    "Flex422": {
      "styles": {
        "display": "flex",
        "flexDirection": "column"
      },
      "callbacks": {}
    },
    "Flex423": {
      "styles": {
        "display": "flex",
        "flexDirection": "column"
      },
      "callbacks": {}
    },
    "Flex424": {
      "styles": {
        "display": "flex",
        "flexDirection": "column"
      },
      "callbacks": {}
    },
    "Flex425": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "Flex426": {
      "styles": {
        "display": "flex",
        "width": "30%",
        "justifyContent": "flex-start",
        "flexDirection": "column",
        "alignItems": "stretch",
        "fontFamily": "Plus Jakarta Sans",
        "rowGap": "10px",
        "position": "sticky",
        "top": 100
      },
      "callbacks": {}
    },
    "Flex427": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "rowGap": "70px",
        "fontFamily": "Plus Jakarta Sans"
      },
      "callbacks": {}
    },
    "Flex428": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "backgroundColor": "#000000",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "color": "#fffefe",
        "height": "",
        "alignItems": "flex-start",
        "paddingTop": "70px",
        "paddingBottom": "70px"
      },
      "callbacks": {}
    },
    "Image66": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox379": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox380": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox381": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "Software Engineer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image67": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox382": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox383": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox384": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "Software Engineer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox385": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "Software Engineer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox386": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox387": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image68": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox388": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MS, Computer Science"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox389": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox390": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "IIT Kharagpur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image69": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox391": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MS, Computer Science"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox392": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox393": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "IIT Kharagpur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image70": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image71": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox394": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "IIT Kharagpur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox395": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox396": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MS, Computer Science"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex429": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex430": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox397": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex431": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex432": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox398": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox399": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex433": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex434": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "TextBox400": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex435": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex436": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "TextBox401": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex437": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex438": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex439": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex440": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox402": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex441": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex442": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex443": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex444": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex445": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex446": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex447": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex448": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex449": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex450": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex451": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex452": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex453": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex454": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex455": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex456": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex457": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex458": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox403": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "36px",
        "fontWeight": 700
      },
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex459": {
      "styles": {
        "display": "inline-flex",
        "flexDirection": "column",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Flex460": {
      "styles": {
        "display": "inline-flex",
        "flexDirection": "column",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "TextBox404": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "36px",
        "fontWeight": 700
      },
      "custom": {
        "text": "📚  Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex461": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "30px",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "flexGrow": 1
      },
      "callbacks": {}
    },
    "Flex462": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "30px",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "flexGrow": 1,
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex463": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "70px",
        "paddingLeft": "80px",
        "paddingRight": "80px",
        "marginBottom": "",
        "marginTop": "",
        "columnGap": "100px",
        "paddingBottom": "70px"
      },
      "callbacks": {}
    },
    "Input6": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#fff",
        "fontSize": "14px",
        "backgroundColor": "#4B5563",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "",
        "borderRadius": "2px",
        "height": "35px"
      },
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "TextBox405": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#fff"
      },
      "custom": {
        "text": "Message"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input7": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#fff",
        "fontSize": "14px",
        "backgroundColor": "#4B5563",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "",
        "borderRadius": "2px",
        "height": "35px"
      },
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "TextBox406": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#fff"
      },
      "custom": {
        "text": "Email"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox407": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#fff"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input8": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#fff",
        "fontSize": "14px",
        "backgroundColor": "#4B5563",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "",
        "borderRadius": "2px",
        "height": "35px"
      },
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "Image72": {
      "styles": {},
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/Twitter%20logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image73": {
      "styles": {},
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/LinkedIn%20logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex464": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "marginTop": "",
        "rowGap": "10px",
        "width": "30rem"
      },
      "callbacks": {}
    },
    "Flex465": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "marginTop": "",
        "rowGap": "10px",
        "width": "30rem"
      },
      "callbacks": {}
    },
    "Button69": {
      "styles": {
        "color": "#000",
        "backgroundColor": "#FBBF24",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "10rem",
        "alignSelf": "center",
        "fontFamily": "Plus Jakarta Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex466": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "marginTop": "",
        "rowGap": "10px",
        "width": "30rem"
      },
      "callbacks": {}
    },
    "Flex467": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center",
        "paddingTop": "10px"
      },
      "callbacks": {}
    },
    "TextBox408": {
      "styles": {
        "color": "#ffff",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 400,
        "fontSize": "20px"
      },
      "custom": {
        "text": "Lorem ipsum sit amet consectetur adipiscing elit mattis faucibus odio arc dolor."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox409": {
      "styles": {
        "color": "#ffff",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "50px"
      },
      "custom": {
        "text": "Get in touch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input9": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#fff",
        "fontSize": "14px",
        "backgroundColor": "#4B5563",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "",
        "borderRadius": "2px",
        "height": "35px"
      },
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "TextBox410": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#fff"
      },
      "custom": {
        "text": "Message"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input10": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#fff",
        "fontSize": "14px",
        "backgroundColor": "#4B5563",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "",
        "borderRadius": "2px",
        "height": "35px"
      },
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "TextBox411": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#fff"
      },
      "custom": {
        "text": "Email"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox412": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#fff"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input11": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#fff",
        "fontSize": "14px",
        "backgroundColor": "#4B5563",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "",
        "borderRadius": "2px",
        "height": "35px"
      },
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "Image74": {
      "styles": {},
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/Twitter%20logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "styles": {},
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/LinkedIn%20logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex471": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "marginTop": "",
        "rowGap": "10px",
        "width": "30rem"
      },
      "callbacks": {}
    },
    "Flex472": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "marginTop": "",
        "rowGap": "10px",
        "width": "30rem"
      },
      "callbacks": {}
    },
    "Button70": {
      "styles": {
        "color": "#000",
        "backgroundColor": "#FBBF24",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "10rem",
        "alignSelf": "center",
        "fontFamily": "Plus Jakarta Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex473": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "marginTop": "",
        "rowGap": "10px",
        "width": "30rem"
      },
      "callbacks": {}
    },
    "Flex474": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center",
        "paddingTop": "10px"
      },
      "callbacks": {}
    },
    "TextBox413": {
      "styles": {
        "color": "#ffff",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 400,
        "fontSize": "20px"
      },
      "custom": {
        "text": "Lorem ipsum sit amet consectetur adipiscing elit mattis faucibus odio arc dolor."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox414": {
      "styles": {
        "color": "#ffff",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "50px"
      },
      "custom": {
        "text": "Get in touch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex475": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "30px",
        "paddingTop": "",
        "flexGrow": null,
        "alignItems": "stretch"
      },
      "callbacks": {}
    },
    "Flex476": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "backgroundColor": "#000",
        "flexDirection": "column",
        "paddingTop": "",
        "width": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex477": {
      "styles": {
        "display": "flex",
        "columnGap": "100px",
        "paddingLeft": "80px",
        "paddingRight": "80px",
        "backgroundColor": "#000",
        "alignItems": "stretch",
        "paddingTop": "70px",
        "paddingBottom": "70px",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex478": {
      "styles": {
        "display": "flex",
        "paddingRight": "",
        "width": "90%",
        "justifyContent": "space-between",
        "maxWidth": "900px"
      },
      "callbacks": {}
    },
    "TextBox415": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox416": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox417": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button71": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex481": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox418": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex482": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Menu14": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "TextBox419": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox420": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox421": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button72": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex486": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox422": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Portfolio Creator"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex487": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Menu15": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "Flex488": {
      "styles": {
        "display": "flex",
        "fontSize": "24px"
      },
      "callbacks": {}
    },
    "Flex489": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex490": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingLeft": "80px",
        "paddingRight": "80px",
        "position": "absolute",
        "width": "100%",
        "boxSizing": "border-box",
        "fontFamily": "Plus Jakarta Sans",
        "paddingTop": "20px"
      },
      "callbacks": {}
    },
    "Div1": {
      "styles": {
        "paddingBottom": "",
        "backgroundImage": "url(\"/app-assets/brand_bg.png\")",
        "paddingRight": ""
      },
      "callbacks": {}
    }
  },
  "dc": {
    "TextBox10": {
      "styles": {},
      "custom": {
        "text": "that delight and inspire people"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "styles": {
        "backgroundImage": "",
        "backgroundClip": "text"
      },
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex12": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "10px",
        "fontSize": "32px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "backgroundImage": ""
      },
      "callbacks": {}
    },
    "Flex13": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox13": {
      "styles": {},
      "custom": {
        "text": "Hi, I am Shyam!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex16": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Button4": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none"
      },
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu2": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "Flex17": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox17": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Portfolio Creator"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "styles": {},
      "custom": {
        "text": "that delight and inspire people"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "styles": {
        "backgroundImage": "",
        "backgroundClip": "text"
      },
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button5": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex21": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "10px",
        "fontSize": "32px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "backgroundImage": ""
      },
      "callbacks": {}
    },
    "Flex22": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox21": {
      "styles": {},
      "custom": {
        "text": "Hi, I am Shyam!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex25": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Button6": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu3": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "Flex26": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox25": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex27": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex28": {
      "styles": {
        "display": "flex",
        "fontSize": "24px"
      },
      "callbacks": {}
    },
    "Flex29": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingLeft": "80px",
        "paddingRight": "80px",
        "position": "absolute",
        "width": "100%",
        "boxSizing": "border-box",
        "fontFamily": "Plus Jakarta Sans",
        "paddingTop": "20px"
      },
      "callbacks": {}
    },
    "TextBox26": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "48px"
      },
      "custom": {
        "text": "delight and inspire people"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "styles": {
        "backgroundImage": "",
        "backgroundClip": "text",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "48px"
      },
      "custom": {
        "text": "I design products that"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex30": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "10px",
        "fontSize": "32px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "backgroundImage": ""
      },
      "callbacks": {}
    },
    "Flex31": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "30px"
      },
      "callbacks": {}
    },
    "TextBox29": {
      "styles": {},
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "styles": {
        "width": "256px",
        "height": "",
        "borderRadius": ""
      },
      "custom": {
        "alt": "profile pic",
        "src": "/app-assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex32": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "rowGap": "30px",
        "justifyContent": "center",
        "flexWrap": "no-wrap"
      },
      "callbacks": {}
    },
    "Flex33": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "alignItems": "stretch",
        "paddingLeft": "80px",
        "paddingRight": "80px",
        "boxSizing": "border-box",
        "fontFamily": "Plus Jakarta Sans",
        "paddingTop": "120px",
        "flexWrap": "no-wrap",
        "columnGap": "75px"
      },
      "callbacks": {}
    },
    "TextBox31": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "36px",
        "fontWeight": 700
      },
      "custom": {
        "text": "📚  Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex34": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "30px",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "flexGrow": 1,
        "columnGap": ""
      },
      "callbacks": {}
    },
    "TextBox32": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex40": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex41": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Image8": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex44": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex45": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "100px",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox42": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex49": {
      "styles": {
        "display": "inline-flex",
        "flexDirection": "column",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Image9": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex50": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex51": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "100px",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox46": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex55": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex56": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "100px",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox50": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex60": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex61": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "100px",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox54": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex67": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "80px",
        "paddingLeft": "80px",
        "paddingRight": "80px",
        "marginBottom": "",
        "marginTop": "",
        "columnGap": "100px"
      },
      "callbacks": {}
    },
    "TextBox55": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex68": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex69": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "TextBox65": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex70": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex71": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex72": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex73": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox66": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex78": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex79": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex82": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex83": {
      "styles": {
        "display": "inline-flex",
        "flexDirection": "column",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "TextBox67": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "36px",
        "fontWeight": 700
      },
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex84": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "30px",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "flexGrow": 1
      },
      "callbacks": {}
    },
    "TextBox68": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex85": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "60px",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex86": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "TextBox72": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex90": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "60px",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex91": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "TextBox76": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex95": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex96": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex97": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex98": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex99": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox80": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex100": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "60px",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex101": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "TextBox84": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex105": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "60px",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex106": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "TextBox88": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex110": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "60px",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex111": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "Flex112": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex113": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex115": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "backgroundColor": "#000",
        "flexDirection": "column",
        "paddingTop": "",
        "width": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox92": {
      "styles": {
        "color": "#ffff",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "50px"
      },
      "custom": {
        "text": "Get in touch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "styles": {
        "color": "#ffff",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 400,
        "fontSize": "20px"
      },
      "custom": {
        "text": "Lorem ipsum sit amet consectetur adipiscing elit mattis faucibus odio arc dolor."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex117": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center",
        "paddingTop": "10px"
      },
      "callbacks": {}
    },
    "Image21": {
      "styles": {},
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/LinkedIn%20logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "styles": {},
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/Twitter%20logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex118": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "marginTop": "",
        "rowGap": "10px",
        "width": "30rem"
      },
      "callbacks": {}
    },
    "Input1": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#fff",
        "fontSize": "14px",
        "backgroundColor": "#4B5563",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "",
        "borderRadius": "2px",
        "height": "35px"
      },
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "TextBox94": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#fff"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex121": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "30px",
        "paddingTop": "",
        "flexGrow": null,
        "alignItems": "stretch"
      },
      "callbacks": {}
    },
    "Flex124": {
      "styles": {
        "display": "flex",
        "columnGap": "100px",
        "paddingLeft": "80px",
        "paddingRight": "80px",
        "backgroundColor": "#000",
        "alignItems": "stretch",
        "paddingTop": "80px",
        "paddingBottom": "80px",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Button9": {
      "styles": {
        "color": "#000",
        "backgroundColor": "#FBBF24",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "10rem",
        "alignSelf": "center",
        "fontFamily": "Plus Jakarta Sans",
        "outlineStyle": "none"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox97": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#fff"
      },
      "custom": {
        "text": "Email"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input4": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#fff",
        "fontSize": "14px",
        "backgroundColor": "#4B5563",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "",
        "borderRadius": "2px",
        "height": "35px"
      },
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "Flex125": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "marginTop": "",
        "rowGap": "10px",
        "width": "30rem"
      },
      "callbacks": {}
    },
    "TextBox98": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#fff"
      },
      "custom": {
        "text": "Message"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input5": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#fff",
        "fontSize": "14px",
        "backgroundColor": "#4B5563",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "",
        "borderRadius": "2px",
        "height": "35px"
      },
      "custom": {
        "value": "",
        "placeholder": ""
      },
      "callbacks": {}
    },
    "Flex126": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "columnGap": "",
        "marginTop": "",
        "rowGap": "10px",
        "width": "30rem"
      },
      "callbacks": {}
    },
    "Image23": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox101": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex127": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "Flex128": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "60px",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox111": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex129": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "Flex130": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "60px",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox118": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex131": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "Flex132": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "60px",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox119": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex133": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "60px",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex134": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "Flex135": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex136": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex137": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "Flex138": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "60px",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox121": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex139": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "Flex140": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "60px",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox122": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex141": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex142": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex143": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex144": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex145": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex146": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex147": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex148": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex149": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex150": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex151": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex152": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex153": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex154": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex155": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex156": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox123": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "36px",
        "fontWeight": 700
      },
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex157": {
      "styles": {
        "display": "inline-flex",
        "flexDirection": "column",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Flex158": {
      "styles": {
        "display": "inline-flex",
        "flexDirection": "column",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "TextBox124": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "36px",
        "fontWeight": 700
      },
      "custom": {
        "text": "📚  Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button14": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex162": {
      "styles": {
        "display": "flex",
        "alignItems": "baseline",
        "columnGap": "10px",
        "borderStyle": "none",
        "paddingRight": ""
      },
      "callbacks": {}
    },
    "TextBox125": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Download resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-right.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex163": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex164": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox132": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image32": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex168": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex169": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox136": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex173": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex174": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox140": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image35": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex183": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex184": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "TextBox149": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex188": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex189": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex190": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex191": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex192": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox153": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox156": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex193": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Flex194": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex195": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex196": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex197": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Image38": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox159": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex198": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex199": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox160": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex200": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex201": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex202": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Image39": {
      "styles": {
        "width": "12px",
        "height": "12px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-link.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox161": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox163": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#9CA3AF"
      },
      "custom": {
        "text": "MSc, Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex203": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "marginTop": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "Flex204": {
      "styles": {
        "display": "flex",
        "marginTop": "",
        "justifyContent": "space-between",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingBottom": "",
        "columnGap": "",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "TextBox164": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex205": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "",
        "paddingLeft": "",
        "borderRadius": "",
        "paddingRight": "",
        "paddingTop": "",
        "marginBottom": "",
        "paddingBottom": "",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex206": {
      "styles": {
        "display": "flex",
        "height": "1px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    },
    "Flex207": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "flexDirection": "column",
        "marginTop": "",
        "rowGap": "20px"
      },
      "callbacks": {}
    }
  },
  "view_project": {
    "TextBox165": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox166": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox167": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button15": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex208": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox168": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex209": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Menu4": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "TextBox169": {
      "styles": {
        "marginTop": "",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "24px"
      },
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox173": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button16": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex215": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox174": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex216": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Menu5": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "TextBox175": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox176": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox177": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button17": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex220": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox178": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex221": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Menu6": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "Flex226": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F1F5F9",
        "columnGap": "10px",
        "alignItems": "center",
        "paddingTop": "10px",
        "paddingLeft": "10px",
        "paddingBottom": "10px",
        "paddingRight": "10px",
        "borderRadius": "4px",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "width": "10rem",
        "alignSelf": "center",
        "justifyContent": "flex-start",
        "alignContent": "stretch"
      },
      "callbacks": {}
    },
    "Upload2": {
      "styles": {
        "alignItems": "center",
        "color": "#1F2937",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "columnGap": "12px",
        "opacity": "",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload Image",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Image40": {
      "styles": {},
      "custom": {
        "alt": "icon",
        "src": "/app-assets/File%20upload.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex229": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#1E293B",
        "columnGap": "10px",
        "width": "6rem",
        "paddingLeft": "10px",
        "paddingTop": "10px",
        "paddingRight": "10px",
        "paddingBottom": "10px",
        "justifyContent": "flex-start",
        "borderRadius": "4px"
      },
      "callbacks": {}
    },
    "Image42": {
      "styles": {},
      "custom": {
        "alt": "play",
        "src": "/app-assets/play.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox182": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "color": "#fff"
      },
      "custom": {
        "text": "Run test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "styles": {
        "width": "600px",
        "height": "300px"
      },
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex232": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "50px",
        "paddingTop": "",
        "marginTop": "20px",
        "paddingLeft": "80px",
        "alignItems": "stretch",
        "paddingRight": "80px"
      },
      "callbacks": {}
    },
    "TextBox183": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox184": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox185": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button20": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex233": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox186": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex234": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Menu7": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "TextBox187": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox188": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox189": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button21": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex238": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox190": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex239": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Menu8": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "TextBox191": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox192": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox193": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button22": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex243": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox194": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex244": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Menu9": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "TextBox195": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox196": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox197": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button23": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex248": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox198": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex249": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Menu10": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "Button35": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox225": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox226": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button36": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox227": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "License no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button37": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox228": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button38": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload5": {
      "styles": {
        "alignItems": "center",
        "color": "#1F2937",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "columnGap": "12px",
        "opacity": "",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload Image",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Image48": {
      "styles": {},
      "custom": {
        "alt": "icon",
        "src": "/app-assets/File%20upload.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox229": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox230": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox231": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox232": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex289": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex290": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex291": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex292": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex293": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F1F5F9",
        "columnGap": "10px",
        "alignItems": "center",
        "paddingTop": "10px",
        "paddingLeft": "10px",
        "paddingBottom": "10px",
        "paddingRight": "10px",
        "borderRadius": "4px",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "width": "10rem",
        "alignSelf": "center",
        "justifyContent": "flex-start",
        "alignContent": "stretch"
      },
      "callbacks": {}
    },
    "Flex294": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Flex295": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Button39": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox233": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox234": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button40": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox235": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "License no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button41": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox236": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button42": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload6": {
      "styles": {
        "alignItems": "center",
        "color": "#1F2937",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "columnGap": "12px",
        "opacity": "",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload Image",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Image49": {
      "styles": {},
      "custom": {
        "alt": "icon",
        "src": "/app-assets/File%20upload.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox237": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox238": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox239": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox240": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex299": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex300": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex301": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex302": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex303": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F1F5F9",
        "columnGap": "10px",
        "alignItems": "center",
        "paddingTop": "10px",
        "paddingLeft": "10px",
        "paddingBottom": "10px",
        "paddingRight": "10px",
        "borderRadius": "4px",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "width": "10rem",
        "alignSelf": "center",
        "justifyContent": "flex-start",
        "alignContent": "stretch"
      },
      "callbacks": {}
    },
    "Flex304": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Flex305": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Button43": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox243": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox244": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button44": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox245": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "License no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button45": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox246": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button46": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload8": {
      "styles": {
        "alignItems": "center",
        "color": "#1F2937",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "columnGap": "12px",
        "opacity": "",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload Image",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Image51": {
      "styles": {},
      "custom": {
        "alt": "icon",
        "src": "/app-assets/File%20upload.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox247": {
      "styles": {},
      "custom": {
        "text": "Museumstraat 1, 1071 XX Amsterdam, Netherlands"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox248": {
      "styles": {},
      "custom": {
        "text": "October 10, 1632"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox249": {
      "styles": {},
      "custom": {
        "text": "RIJKS101632"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox250": {
      "styles": {},
      "custom": {
        "text": "Johannes Vermeer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex313": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex314": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex315": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex316": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex317": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F1F5F9",
        "columnGap": "10px",
        "alignItems": "center",
        "paddingTop": "10px",
        "paddingLeft": "10px",
        "paddingBottom": "10px",
        "paddingRight": "10px",
        "borderRadius": "4px",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "width": "10rem",
        "alignSelf": "center",
        "justifyContent": "flex-start",
        "alignContent": "stretch"
      },
      "callbacks": {}
    },
    "Flex318": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "30px",
        "width": "",
        "flexGrow": 1
      },
      "callbacks": {}
    },
    "Flex319": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "30px",
        "width": "10rem"
      },
      "callbacks": {}
    },
    "Flex320": {
      "styles": {
        "display": "flex",
        "width": "600px",
        "height": "300px",
        "backgroundColor": "#F1F5F9",
        "alignItems": "stretch",
        "justifyContent": "center",
        "borderRadius": "8px",
        "flexGrow": null
      },
      "callbacks": {}
    },
    "Flex321": {
      "styles": {
        "display": "flex",
        "rowGap": "",
        "columnGap": "20px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "paddingTop": "",
        "paddingBottom": "",
        "alignItems": "stretch"
      },
      "callbacks": {}
    },
    "TextBox251": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#6B7280",
        "paddingBottom": ""
      },
      "custom": {
        "text": "INPUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex322": {
      "styles": {
        "display": "flex",
        "columnGap": "60px",
        "alignItems": "center",
        "justifyContent": "flex-start"
      },
      "callbacks": {}
    },
    "Flex324": {
      "styles": {
        "display": "flex",
        "flexDirection": "column-reverse",
        "rowGap": "5px"
      },
      "callbacks": {}
    },
    "Button56": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "400px",
        "height": "400px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button57": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "400px",
        "height": "400px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button58": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "400px",
        "height": "400px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox263": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox265": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button59": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "300px",
        "height": "300px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button60": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "300px",
        "height": "300px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button61": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "300px",
        "height": "300px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox267": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button62": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "300px",
        "height": "300px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button63": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "300px",
        "height": "300px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button64": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "300px",
        "height": "300px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "view_page": {
    "TextBox199": {
      "styles": {},
      "custom": {
        "text": "Mail"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox200": {
      "styles": {},
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox201": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button24": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex253": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox202": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Person Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex254": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Menu11": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true,
        "gap": ""
      },
      "callbacks": {}
    },
    "Image44": {
      "styles": {},
      "custom": {
        "alt": "icon",
        "src": "/app-assets/File%20upload.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload3": {
      "styles": {
        "alignItems": "center",
        "color": "#1F2937",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "columnGap": "12px",
        "opacity": "",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload Image",
        "disabled": true
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Flex258": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F1F5F9",
        "columnGap": "10px",
        "alignItems": "center",
        "paddingTop": "10px",
        "paddingLeft": "10px",
        "paddingBottom": "10px",
        "paddingRight": "10px",
        "borderRadius": "4px",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "width": "10rem",
        "alignSelf": "center",
        "justifyContent": "flex-start",
        "alignContent": "stretch"
      },
      "callbacks": {}
    },
    "Flex259": {
      "styles": {
        "display": "flex",
        "width": "600px",
        "height": "300px",
        "backgroundColor": "#F1F5F9",
        "alignItems": "stretch",
        "justifyContent": "center",
        "borderRadius": "8px"
      },
      "callbacks": {}
    },
    "TextBox203": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#6B7280"
      },
      "custom": {
        "text": "INPUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox204": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "color": "#fff"
      },
      "custom": {
        "text": "Run test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "styles": {},
      "custom": {
        "alt": "play",
        "src": "/app-assets/play.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox206": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex263": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Button25": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox207": {
      "styles": {},
      "custom": {
        "text": "Output from model"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex264": {
      "styles": {
        "display": "flex",
        "columnGap": "40px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "callbacks": {}
    },
    "Button26": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox208": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button27": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox210": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "License no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex269": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex270": {
      "styles": {
        "display": "flex",
        "columnGap": "40px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "callbacks": {}
    },
    "TextBox211": {
      "styles": {},
      "custom": {
        "text": "Output from model"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox212": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button28": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex272": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox213": {
      "styles": {},
      "custom": {
        "text": "Output from model"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex273": {
      "styles": {
        "display": "flex",
        "columnGap": "40px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "callbacks": {}
    },
    "Button29": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox214": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex275": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex276": {
      "styles": {
        "display": "flex",
        "columnGap": "40px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px"
      },
      "callbacks": {}
    },
    "TextBox215": {
      "styles": {},
      "custom": {
        "text": "Output from model"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex278": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Button30": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox216": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex279": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Button31": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox217": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "License no."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex280": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Button33": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox219": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Date of Birth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex282": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex283": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "TextBox220": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox221": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox222": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex284": {
      "styles": {
        "display": "flex",
        "rowGap": "",
        "columnGap": "50px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "paddingTop": "",
        "paddingBottom": "",
        "alignItems": "stretch"
      },
      "callbacks": {}
    },
    "TextBox223": {
      "styles": {
        "color": "#94A3B8"
      },
      "custom": {
        "text": "Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button34": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "16px",
        "height": "16px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex285": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox224": {
      "styles": {},
      "custom": {
        "text": "Output"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex286": {
      "styles": {
        "display": "flex",
        "columnGap": "40px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image47": {
      "styles": {},
      "custom": {
        "alt": "icon",
        "src": "/app-assets/File%20upload.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload4": {
      "styles": {
        "alignItems": "center",
        "color": "#1F2937",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "columnGap": "12px",
        "opacity": "",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload Image",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Flex287": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F1F5F9",
        "columnGap": "10px",
        "alignItems": "center",
        "paddingTop": "10px",
        "paddingLeft": "10px",
        "paddingBottom": "10px",
        "paddingRight": "10px",
        "borderRadius": "4px",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "width": "10rem",
        "alignSelf": "center",
        "justifyContent": "flex-start",
        "alignContent": "stretch"
      },
      "callbacks": {}
    },
    "Flex288": {
      "styles": {
        "display": "flex",
        "width": "600px",
        "height": "300px",
        "backgroundColor": "#F1F5F9",
        "alignItems": "stretch",
        "justifyContent": "center",
        "borderRadius": "8px",
        "flexGrow": null
      },
      "callbacks": {}
    },
    "Image50": {
      "styles": {},
      "custom": {
        "alt": "icon",
        "src": "/app-assets/File%20upload.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload7": {
      "styles": {
        "alignItems": "center",
        "color": "#1F2937",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 600,
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "columnGap": "12px",
        "opacity": "",
        "fontFamily": "Plus Jakarta Sans"
      },
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload Image",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Flex312": {
      "styles": {
        "display": "flex",
        "paddingBottom": "",
        "flexDirection": "column-reverse",
        "rowGap": "5px"
      },
      "callbacks": {}
    },
    "TextBox242": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "16px",
        "color": "#6B7280",
        "paddingBottom": ""
      },
      "custom": {
        "text": "INPUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex330": {
      "styles": {
        "display": "flex",
        "columnGap": "100px",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "Button48": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "300px",
        "height": "300px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button51": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "300px",
        "height": "300px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button52": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#F1F5F9",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "8px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "300px",
        "height": "300px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex336": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "40px",
        "fontFamily": "",
        "fontWeight": 600,
        "fontSize": "=px",
        "marginTop": "100px"
      },
      "callbacks": {}
    },
    "TextBox252": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "20px"
      },
      "custom": {
        "text": "Examples"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox264": {
      "styles": {
        "height": "0px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex351": {
      "styles": {
        "display": "flex",
        "height": "2px",
        "backgroundColor": "#E5E7EB",
        "marginTop": ""
      },
      "callbacks": {}
    }
  },
  "sg": {
    "Flex14": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "boxSizing": "initial",
        "overflow": "visible"
      },
      "callbacks": {}
    },
    "TextBox15": {
      "styles": {
        "textAlign": "center",
        "borderWidth": "",
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "24px"
      },
      "custom": {
        "text": "Skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "styles": {
        "textAlign": "center",
        "paddingTop": "20px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "47px"
      },
      "custom": {
        "text": "Design that solves problems,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "47px",
        "textAlign": "center"
      },
      "custom": {
        "text": "one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex16": {
      "styles": {
        "display": "flex",
        "paddingTop": "100px",
        "columnGap": "90px",
        "alignContent": "stretch",
        "flexWrap": "no-wrap",
        "flexDirection": "row",
        "justifyContent": "center",
        "fontFamily": "Plus Jakarta Sans",
        "maxWidth": "",
        "boxSizing": "border-box",
        "overflow": "scroll",
        "alignItems": "flex-start"
      },
      "callbacks": {}
    },
    "Flex19": {
      "styles": {
        "display": "flex",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "maxWidth": "",
        "flexGrow": null,
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex20": {
      "styles": {
        "display": "flex",
        "alignContent": "stretch",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "paddingTop": "",
        "maxWidth": "",
        "flexGrow": null,
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Image3": {
      "styles": {
        "width": "60px",
        "height": "60px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "styles": {
        "width": "60px",
        "height": "60px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "styles": {
        "paddingTop": "",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "19px"
      },
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "styles": {
        "paddingTop": "",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "19px"
      },
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "styles": {
        "paddingTop": "",
        "maxWidth": "200px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 200
      },
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "styles": {
        "paddingTop": "",
        "maxWidth": "200px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 200
      },
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "styles": {
        "paddingTop": "",
        "maxWidth": "200px",
        "fontFamily": "Plus Jakarta Sans",
        "fontSize": "",
        "fontWeight": 200
      },
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "styles": {
        "paddingTop": "",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "19px"
      },
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "styles": {
        "width": "60px",
        "height": "60px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex21": {
      "styles": {
        "display": "flex",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "maxWidth": "",
        "flexGrow": null,
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox33": {
      "styles": {},
      "custom": {
        "text": "Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "styles": {},
      "custom": {
        "text": " Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "styles": {},
      "custom": {
        "text": " Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex22": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "8px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "callbacks": {}
    },
    "TextBox36": {
      "styles": {},
      "custom": {
        "text": "Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "styles": {},
      "custom": {
        "text": "Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "styles": {},
      "custom": {
        "text": "Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex23": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "8px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "callbacks": {}
    },
    "TextBox39": {
      "styles": {},
      "custom": {
        "text": "Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "styles": {},
      "custom": {
        "text": "Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "styles": {},
      "custom": {
        "text": "Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex24": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "8px",
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600
      },
      "callbacks": {}
    },
    "Flex26": {
      "styles": {
        "display": "flex",
        "marginTop": "40px",
        "backgroundColor": "#000000",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "color": "#fffefe",
        "height": "",
        "alignItems": "flex-start",
        "paddingTop": "70px",
        "paddingBottom": "70px"
      },
      "callbacks": {}
    },
    "Flex27": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "flexDirection": "column",
        "rowGap": "70px",
        "fontFamily": "Plus Jakarta Sans"
      },
      "callbacks": {}
    },
    "Flex28": {
      "styles": {
        "display": "flex",
        "width": "30%",
        "justifyContent": "flex-start",
        "flexDirection": "column",
        "alignItems": "stretch",
        "fontFamily": "Plus Jakarta Sans",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox43": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "30px"
      },
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 700,
        "fontSize": "42px"
      },
      "custom": {
        "text": "Latest Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "styles": {},
      "custom": {
        "text": "April 16, 2021 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex34": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "Flex35": {
      "styles": {
        "display": "flex",
        "flexDirection": "column"
      },
      "callbacks": {}
    },
    "Flex36": {
      "styles": {
        "display": "flex",
        "flexDirection": "column"
      },
      "callbacks": {}
    },
    "TextBox48": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "styles": {},
      "custom": {
        "text": "April 16, 2021 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "styles": {},
      "custom": {
        "text": "April 16, 2021 5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "styles": {},
      "custom": {
        "text": "April 16, 2021 5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "styles": {},
      "custom": {
        "text": "April 16, 2021 7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex38": {
      "styles": {
        "display": "flex",
        "flexDirection": "column"
      },
      "callbacks": {}
    },
    "TextBox68": {
      "styles": {
        "fontFamily": "Plus Jakarta Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "styles": {},
      "custom": {
        "text": "April 16, 2021 7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex44": {
      "styles": {
        "display": "flex",
        "flexDirection": "column"
      },
      "callbacks": {}
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {},
  "dc": {},
  "view_project": {},
  "view_page": {
    "991": {
      "TextBox200": {
        "styles": {
          "width": ""
        }
      },
      "TextBox201": {
        "styles": {
          "fontFamily": "Plus Jakarta Sans",
          "fontWeight": 600
        }
      },
      "Flex253": {
        "styles": {
          "flexDirection": "column",
          "width": "10rem",
          "alignItems": "flex-end",
          "paddingTop": "10px",
          "rowGap": "4px"
        }
      },
      "Flex254": {
        "styles": {
          "display": "none"
        }
      },
      "Menu11": {
        "styles": {
          "display": "flex"
        }
      }
    }
  },
  "sg": {
    "478": {
      "Flex16": {
        "styles": {
          "flexDirection": "column",
          "alignItems": "center",
          "rowGap": "40px"
        }
      },
      "Flex26": {
        "styles": {
          "flexDirection": "column",
          "rowGap": "40px"
        }
      }
    },
    "767": {
      "Flex26": {
        "styles": {
          "columnGap": "30px"
        }
      }
    }
  }
}};

function getViewportDimension() {
  const width = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
