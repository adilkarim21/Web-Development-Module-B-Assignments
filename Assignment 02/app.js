// Q1:


// let subject1 = +prompt("Enter 1st subject marks..");

// let subject2 = +prompt("Enter 2nd subject marks..");

// let subject3 = +prompt("Enter 3rd subject marks..");

// let subject4 = +prompt("Enter 4th subject marks..");


// let totalMarks = subject1 + subject2 + subject3 + subject4;
// console.log(totalMarks);

// let percentage = totalMarks * 100 / 400;
// console.log(percentage);

// let grade = percentage >= 81 && percentage <=100 ? "A+" :
//             percentage >= 71 && percentage <= 80 ? "A" :
//             percentage >= 61 && percentage <= 70 ? "B" :
//             percentage >= 51 && percentage <= 60 ? "C" :
//             percentage >= 33 && percentage <= 50 ? "D" :
//             percentage <= 32 ? "F" : "Please Enter correct marks!";

// console.log(grade);


// document.write(`
//     <center>
//         <h1>
//             Mark Sheet
//         </h1>
//     </center>
//     <br><br> Total Marks: ${totalMarks}
//     <br><br> Percentage: ${percentage}%
//     <br><br> Grade: ${grade}
//     `);



// Q2:


const mobiles = {
    iphone: {
      iphone7: {
        processor: "Snapdragon 8 Gen 2",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: 200,
            ultrawide: 12,
            telephoto: 10,
            telephotoPeriscope: 10,
          },
          front: 10,
        },
        brand:"iphone",
        battery: 5000,
        operatingSystem: "Android 13",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone8: {
        processor: "Snapdragon 12 Gen 5",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand:"iphone",
        camera: {
          rear: {
            main: 180,
            ultrawide: 15,
            telephoto: 10,
            telephotoPeriscope: 20,
          },
          front: 12,
        },
        battery: 8000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone8plus: {
        processor: "Snapdragon 5 Gen 6",
        memory: {
          ram: 8,
          storage: 128,
        },
        brand:"iphone",

        camera: {
          rear: {
            main: 160,
            ultrawide: 18,
            telephoto: 10,
            telephotoPeriscope: 8,
          },
          front: 16,
        },
        battery: 5000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphoneX: {
        processor: "Snapdragon 5 Gen 4",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand:"iphone",

        camera: {
          rear: {
            main: 130,
            ultrawide: 16,
            telephoto: 10,
            telephotoPeriscope: 18,
          },
          front: 14,
        },
        battery: 6000,
        operatingSystem: "iphone X",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
      iphone11: {
        processor: "Snapdragon 7 Gen 9",
        memory: {
          ram: 16,
          storage: 512,
        },
        camera: {
          rear: {
            main: 150,
            ultrawide: 24,
            telephoto: 16,
            telephotoPeriscope: 10,
          },
          front: 20,
        },
        brand:"iphone",

        battery: 10000,
        operatingSystem: "iphone 11",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
      },
    },
    xiomi: {
      redmiA2: {
        modelName: "Mi 12 Pro",
        display: {
          size: 6.73,
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 120,
        },
        brand:"xiomi",

        processor: "Snapdragon 8 Gen 1",
        memory: {
          ram: 8,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 4600,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
      redmi10: {
        modelName: "Mi 8 Pro",
        display: {
          size: 5.73,
          resolution: "3000 x 1320",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        brand:"xiomi",
        processor: "Snapdragon 7 Gen 5",
        memory: {
          ram: 12,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        brand:"xiomi",

        battery: 5000,
        operatingSystem: "Android 11",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi11: {
        modelName: "Mi 14 Pro",
        display: {
          size: 6.0,
          resolution: "3000 x 1240",
          panelType: "AMOLED",
          refreshRate: 150,
        },
        brand:"xiomi",

        processor: "Snapdragon 8 Gen 4",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 8000,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi12: {
        modelName: "Mi 12 Pro",
        display: {
          size: 7.4,
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 180,
        },
        brand:"xiomi",

        processor: "Snapdragon 12 Gen 1",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 8000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi13: {
        modelName: "Mi 14 Pro",
        display: {
          size: 8.03,
          resolution: "4200 x 1540",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        brand:"xiomi",

        processor: "Snapdragon 8 Gen 6",
        memory: {
          ram: 12,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 10000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
  
      redmi13C: {
        modelName: "Mi 14 Pro",
        display: {
          size: 8.43,
          resolution: "4200 x 1340",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        processor: "Snapdragon 9 Gen 5",
        memory: {
          ram: 12,
          storage: 512,
        },
        brand:"xiomi",

        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 10000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
      },
    },
    realme: {
      realmiNote50: {
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.5 inches",
          resolution: "FHD+ (1080 x 2400 pixels)",
          type: "AMOLED",
        },
        brand:"xiomi",

        processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
        memory: {
          ram: "8GB",
          storage: "128GB",
        },
        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "16MP",
          },
        },
        battery: {
          capacity: "5000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmiC67: {
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.7 inches",
          resolution: "FHD+ (1280 x 2100 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
        memory: {
          ram: "8GB",
          storage: "256GB",
        },
        brand:"xiomi",

        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "14MP",
          },
        },
        battery: {
          capacity: "5000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 11",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmiC53: {
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "7. 1inches",
          resolution: "FHD+ (1180 x 2500 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "128GB",
        },
        brand:"xiomi",

        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "18MP",
          },
        },
        battery: {
          capacity: "8000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmi9: {
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "7.2 inches",
          resolution: "FHD+ (1180 x 2200 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "256GB",
        },
        brand:"xiomi",

        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "24MP",
          },
        },
        battery: {
          capacity: "10000mAh",
          fastCharging: "75W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
      realmi9i: {
        brand: "Realme",
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.9 inches",
          resolution: "FHD+ (1480 x 2400 pixels)",
          type: "AMOLED",
        },
        brand:"xiomi",

        processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "512GB",
        },
        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "16MP",
          },
        },
        battery: {
          capacity: "2000mAh",
          fastCharging: "70W",
        },
        operatingSystem: "Android 13",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
      },
    },
    samsung: {
      samsung_Galaxy_S24: {
        brand: "Samsung",
        model: "Galaxy S24 Ultra", // Replace with specific model
  
        // Display
        displaySize: 6.8, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 8 Gen 2", // Replace with actual processor
        memory: {
            ram: 12,
            storage: 512,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 108,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: 5000, // mAh
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_S51: {
        brand: "Samsung",
        model: "Galaxy S51 Pro", // Replace with specific model
  
        // Display
        displaySize: 7.2, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 9 Gen 4", // Replace with actual processor
        memory: {
            ram: 8,
            storage: 128,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 112,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: 8000, // mAh
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 11",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_Prime: {
        brand: "Samsung",
        model: "Galaxy Prime Ultra", // Replace with specific model
  
        // Display
        displaySize: 7.4, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 8 Gen 10", // Replace with actual processor
        memory: {
            ram: 4,
            storage: 64,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 108,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: 5000, // mAh
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 13",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_S46: {
        brand: "Samsung",
        model: "Galaxy S46 Ultra", // Replace with specific model
  
        // Display
        displaySize: 5.11, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 8 Gen 2", // Replace with actual processor
        memory: {
            ram: 6,
            storage: 64,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 108,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: 20000, // mAh
        fastCharging: "65W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: false,
      },
      samsung_Galaxy_S77: {
        brand: "Samsung",
        model: "Galaxy S77 Ultra", // Replace with specific model
  
        // Display
        displaySize: 8.5, // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 12 Gen 24", // Replace with actual processor
        memory: {
            ram: 12,
            storage: 512,
          },
  
        // Cameras
        rearCamera: {
          megapixel: 158,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: 20000, // mAh
        fastCharging: "85W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: true,
        waterResistance: "IP68",
        expandableStorage: true,
      },
    },
};


function updateModels() {

  const brandSelect = document.getElementById("brand");
  const modelSelect = document.getElementById("model");
  const selectedBrand = brandSelect.value;

  modelSelect.innerHTML = '<option value="">--Select Model--</option>';

  if (selectedBrand) {

      const models = Object.keys(mobiles[selectedBrand]);
      models.forEach(model => {

          const option = document.createElement("option");
          option.value = model;
          option.textContent = model;
          modelSelect.appendChild(option);

      });

  }

}



function showDetails() {

  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;

  if ( !brand || !model ) {

      alert("Please select both brand and model!");    
      return;
  
  }

  const selectedMobile = mobiles[brand][model];

  if (brand === "samsung") {

      document.getElementById("processor").textContent = `Processor: ${selectedMobile.processor}`;

      document.getElementById("memory").textContent = `Memory: ${selectedMobile.memory.ram}GB RAM, ${selectedMobile.memory.storage}GB Storage`;

      document.getElementById("camera").textContent = `Camera: Rear: ${selectedMobile.rearCamera.megapixel}MP, Front: ${selectedMobile.frontCamera.megapixel}MP`;

      document.getElementById("battery").textContent = `Battery: ${selectedMobile.batteryCapacity}mAh`;

      document.getElementById("operatingSystem").textContent = `Operating System: ${selectedMobile.operatingSystem}`;

      let specialFeatures = [];
      if (selectedMobile.fingerprintSensor) specialFeatures.push("Fingerprint Sensor");
      if (selectedMobile.waterResistance) specialFeatures.push(`Water Resistance: ${selectedMobile.waterResistance}`);
      if (selectedMobile.expandableStorage !== undefined) specialFeatures.push(`Expandable Storage: ${selectedMobile.expandableStorage ? "Yes" : "No"}`);

      document.getElementById("specialFeatures").textContent = `Special Features: ${specialFeatures.join(", ")}`;

  } 
  
  else {

      document.getElementById("processor").textContent = `Processor: ${selectedMobile.processor}`;

      document.getElementById("memory").textContent = `Memory: ${selectedMobile.memory.ram}GB RAM, ${selectedMobile.memory.storage}GB Storage`;

      document.getElementById("camera").textContent = `Camera: Rear: ${selectedMobile.camera.rear.main}MP, Front: ${selectedMobile.camera.front}MP`;

      document.getElementById("battery").textContent = `Battery: ${selectedMobile.battery}mAh`;

      document.getElementById("operatingSystem").textContent = `Operating System: ${selectedMobile.operatingSystem}`;

      document.getElementById("specialFeatures").textContent = `Special Features: ${selectedMobile.specialFeatures.join(", ")}`;

  }

  document.getElementById("mobileDetails").style.display = "block";

}



// -------------------------------------------- THE END ---------------------------------------------- //