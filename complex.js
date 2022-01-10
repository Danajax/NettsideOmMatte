function fn2() {
            var a = document.getElementById("a").value;
            var b = document.getElementById("b").value;
            r = Math.sqrt(a**2 + b**2);
            r = parseInt(r);
            cos_theta = parseFloat(a/r);
            cos_theta = cos_theta.toFixed(5);
            sin_theta = parseFloat(b/r);
            sin_theta = sin_theta.toFixed(5);
            alert("Tallet gjort om fra kartesisk form til polarform er: z = " + r + "*cos(" + cos_theta + ") + " + r + "*i*sin(" + sin_theta + ")");
