function showFact() {
      let totalFacts =6;
      let randomIndex = Math.floor(Math.random() * totalFacts) + 1;
      let fact = "";

      // Using only loops, no arrays
      for (let i = 1; i <= totalFacts; i++) {
        if (i === randomIndex) {
          if (i === 1) fact = "Carrots were originally purple, not orange.🥕";
          if (i === 2) fact = "Bananas🍌 are berries, but strawberries🍓are not.";
          if (i === 3) fact = "An avocado🥑has more potassium than a banana.🍌";
          if (i === 4) fact = "Drinking water before meals can help with portion control.💧";
          if (i === 5) fact = "Broccoli🥦contains more protein per calorie than steak.";
          if (i === 6) fact = "Dark chocolate 🍫is full of antioxidants that help heart health.";
        }
      }

      document.getElementById("fact-box").textContent = fact;
    }