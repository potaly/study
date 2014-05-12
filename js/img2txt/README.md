##获取图片数据
	
	function getImgData(img) {
		var canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0);
		return ctx.getImageData(0, 0, img.width, img.height);
	}

##根据数据转换成文字

	function getImgTxt(imgData) {
		var h, row, index, r, g, b, gray, txt = '';
		for (h = 0; h < imgData.height; h += 12) {
			row = '';
			for (w = 0; w < imgData.width; w += 6) {
				index = (w + imgData.width * h) * 4;
				r = imgData.data[index + 0];
				g = imgData.data[index + 1];
				b = imgData.data[index + 2];
				gray = getGray(r, g, b);
				row += toText(gray);
			}
			row += '\r\n';
			txt += row;
		}
		return txt;
	}
	
##根据灰度生成相应字符

	function toText(g) {
		if (g <= 30) {
			return '8';
		} else if (g > 30 && g <= 60) {
			return '&';
		} else if (g > 60 && g <= 120) {
			return '$';
		} else if (g > 120 && g <= 150) {
			return '*';
		} else if (g > 150 && g <= 180) {
			return 'o';
		} else if (g > 180 && g <= 210) {
			return '!';
		} else if (g > 210 && g <= 240) {
			return ';';
		} else {
			return '.';
		}
	}


##根据rgb值计算灰度

	function getGray(r, g, b) {
		return 0.299 * r + 0.578 * g + 0.114 * b;
	}