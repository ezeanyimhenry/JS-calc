let view = document.getElementById("view");
      let num = "";
      let result = 0;

      let add = (input) => {
        (view.innerHTML == "0") ? view.innerHTML = input : view.innerHTML += input;
        num+=input;
        console.log(num);
      };

      let calc = () => {
        result = eval(num);
        num = `${result}`;
        view.innerHTML = result;
      };

      let ac = () => {
        num = "";
        view.innerHTML = 0;
      }

      let percent = () => {
        percentage = num/100;
        num = "percentage";
        view.innerHTML = percentage;
      }

      let del = () => {
        (num.length==1) ? num = 0 : num = num.slice(0, -1);
        view.innerHTML = num;
      }