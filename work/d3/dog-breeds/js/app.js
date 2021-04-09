//set width, height, margins for focus and context charts
var margin = {top: 20, right: 130, bottom: 60, left: 130},
	  marginContext = {top: 50, right: 130, bottom: 30, left: 130}
    width = document.querySelector('body').clientWidth - margin.left - margin.right,
    heightFocus = 550 - margin.top - margin.bottom,
	  heightContext = 150 - marginContext.top - marginContext.bottom;

var dogNameTitle = document.querySelector('.dog-name'),
 		dropDown = document.querySelector('.dropdown'),
		searchBar = document.querySelector('#searchBar'),
		searchButton = document.querySelector('#searchButton');

let search = 0;

document.querySelector('.top').style.width = `${width}px`;
document.querySelector('.top').style.margin = `20px ${margin.right}px 0px`;

document.querySelector('.insights-container').style.width = `${width}px`;
document.querySelector('.insights-container').style.margin = `0px ${margin.right}px`;

//define scales
var x = d3.scaleTime().range([0, width]),
		x2 = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([0, heightFocus])
		y2 = d3.scaleLinear().range([0, heightContext]);

var xAxis = d3.axisBottom(x).ticks(7).tickSize(0).tickPadding([10]),
    xAxis2 = d3.axisBottom(x2).ticks(7).tickSize(0).tickPadding([10]),
    yAxis = d3.axisLeft(y).ticks(10).tickSize(0).tickPadding([10]).tickFormat(function(d) { return `${d}`});

//define focus svg
var mainContainer = d3.select('.canva').append('svg')
  .attr("class", "mainContainer")
  .attr("width", width + margin.left + margin.right)
  .attr("height", heightFocus + heightContext + margin.top + margin.bottom + marginContext.top + marginContext.bottom)

var lines = mainContainer.append('g')
	.attr("transform", "translate(" + margin.left + "," +  margin.top + ")")
  .attr('class', 'lines')

var context = mainContainer.append("g")
  .attr("class", "context")
  .attr("transform", `translate(${marginContext.left}, ${heightFocus + margin.top + margin.bottom})`);

var circles = mainContainer.append('g')
	.attr("transform", "translate(" + margin.left + "," +  margin.top + ")")
	.attr("class", "circles");

//define tooltip
var tooltip = d3.select(".canva").append("div")
  .attr("class", "tooltip")
  .style("opacity", 100)

//Initiate the voronoi group element
var voronoiGroup = mainContainer.append("g")
	.attr("transform", "translate(" + margin.left + "," +  margin.top + ")")
	.attr("class", "voronoiGroup");


//define focus line
var line = d3.line()
  .x(function(d) { return x(d.date); })
  .y(function(d) { return y(d.rank); })
	.curve(d3.curveMonotoneX);

//define focus line
var contextLine = d3.line()
  .x(function(d) { return x2(d.date); })
  .y(function(d) { return y2(d.rank); })
	.curve(d3.curveMonotoneX);

//Initiate the voronoi function
var voronoi = d3.voronoi()
  .x(function(d) { return x(d.date); })
  .y(function(d) { return y(d.rank); })
  .extent([[-margin.left, -margin.top], [width + margin.right, heightFocus + margin.bottom]]);

function sentenceCase(word) {
  var result = word.replace( /([A-Z])/g, " $1" );
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult
}

//load and sort data into global variable
d3.csv("data/dog-breeds.csv", function (data) {
  var parseTime = d3.timeParse("%Y");
  var newData = data;

  var brush = d3.brushX()
  		.extent([[0, 0], [width, heightContext]])
  		.on("start brush end", brushed);

  newData.forEach(function(d) {
		d.date = parseTime(d.date)
    d.rank = +d.rank;
  })

  var dogData = d3.nest()
    .key(function(d) {return d.breed;})
    .entries(newData);
	dogData.sort(d3.ascending)
	console.log(dogData);

	var dogNames =[];

	for (let i = 0; i < dogData.length; i++) {
		dogNames.push(dogData[i].key);
	}
	dogNames.sort(d3.ascending)

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0.5, 10.5]);
  	x2.domain(d3.extent(data, function(d) { return d.date; }));
  	y2.domain([0.5, 10.5]);

	mainContainer.append("g")
		.attr("class", "axis x-axis")
		.attr("transform", `translate( ${margin.left}, ${heightFocus + 20})`)
		.call(xAxis)
		.select(".domain")
		.remove();

	// text label for the x axis
	mainContainer.append("text")
		.attr("transform",`translate(${width/2 + (margin.left/2)}, ${heightFocus + margin.top + 45})`)
		.attr('class', 'axisText')
		.text("YEAR");


	mainContainer.append("g")
		.attr("class", "axis x-axis")
		.attr("transform", `translate( ${margin.left}, ${heightFocus + margin.top + margin.bottom + heightContext})`)
		.call(xAxis2)
		.select(".domain")
		.remove();

	mainContainer.append("g")
    .attr("class", "axis y-axis")
    .attr("transform", `translate(${margin.left -15}, ${margin.top})`)
    .call(yAxis)
		.select(".domain")
		.remove();

  mainContainer.append("defs").attr('class','defs').append("clipPath")
  		.attr("id", "clip-focus")
  		.append("rect")
  		.attr("width", width)
  		.attr("height", heightFocus)

  mainContainer.append("defs").attr('class','defs').append("clipPath")
  		.attr("id", "clip-context")
  		.append("rect")
  		.attr("width", width)
  		.attr("height", heightContext)

  var grads = context.append("defs").selectAll("linearGradient")
      .data(dogData)
      .enter().append("linearGradient")
      .attr("id", function(d) {
        return `linearGradient-${d.key}`;
      })
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");

      //First stop
      grads.append("stop").attr("class", "left").attr("stop-color", "#D6D6D6").attr("offset", "50%")
      //Second stop
      grads.append("stop").attr("class", "left").attr("stop-color", function(d, i) {
          return d3.interpolateRgb("#FDAF64", "#67AEBA")(i/dogData.length)
        }).attr("offset", "50%")
      //Third stop
      grads.append("stop").attr("class", "right").attr("stop-color", function(d, i) {
          return d3.interpolateRgb("#FDAF64", "#67AEBA")(i/dogData.length)
        }).attr("offset", "100%")
      //Fourth stop
      grads.append("stop").attr("class", "right").attr("stop-color", "#D6D6D6").attr("offset", "100%")

  lines.selectAll('.line')
    .data(dogData)
    .enter().append("path")
		.attr('fill', 'none')
		.style("stroke-width", 3)
    .style("stroke", function(d, i) { return d3.interpolateRgb("#FDAF64", "#67AEBA")(i/dogData.length);})
    .style('opacity', '0.8')
		.attr('class', function(d,i) {return `${d.key}-line line`})
    .attr("d", function(d) { d.line = this; return line(d.values); })
		.style('clip-path', 'url(#clip-focus)')

	context.selectAll('path')
		.data(dogData)
		.enter().append("path")
		.attr("fill", "none")
		.attr("stroke-width", 3)
		.style('opacity', '0.8')
		.style('stroke', function(d) { return `url(#linearGradient-${d.key})`})
		.attr('class', function(d,i) {return `${d.key}-line line`})
		.attr("d", function(d) {d.line = this; return contextLine(d.values);})
    .style('clip-path', 'url(#clip-context)')


	context.append("g")
		 .attr("class", "brush")
		 .call(brush)
		 .call(brush.move, [width/1.38, width]);

	dogData.forEach(function(d,i) {
	      dropDown.innerHTML += `<p class="search-name">${sentenceCase(d.key)}</p>`;
	})

  searchBar.addEventListener('input', function() {
    var input = document.querySelector('#searchBar').value
    var camelCaseInput = input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
    if (dogNames.includes(camelCaseInput)) {
      document.querySelector('.triangle-button').style.display = "none";
      document.querySelector('.close-button').style.display = "block";
      lines.selectAll(".line").style("opacity", 0.3);
      lines.select(`.${camelCaseInput}-line`).style("opacity", 1);
      context.selectAll(".line").style("opacity", 0.3);
      context.select(`.${camelCaseInput}-line`).style("opacity", 1);
      dogNameTitle.innerHTML = `${input}`;
			search = 1;
    }
  })

  searchButton.addEventListener('click', function() {
    if (search == 1) {
      document.querySelector('.triangle-button').style.display = "block";
      document.querySelector('.close-button').style.display = "none";
      searchBar.value = '';
      lines.selectAll(".line").style("opacity", 0.8);
      context.selectAll(".line").style("opacity", 0.8);
      dogNameTitle.innerHTML = 'All Dogs';
      search = 0;
    } else {
      if (dropDown.style.display == "none" || dropDown.style.display == "") {
        dropDown.style.display = "block";
        document.querySelector('.triangle-button').style.display = "none";
        document.querySelector('.close-button').style.display = "block";
      } else {
        dropDown.style.display = "none";
        document.querySelector('.triangle-button').style.display = "block";
        document.querySelector('.close-button').style.display = "none";
      }
    }
  })

  dropDown.addEventListener('click', function() {
    var target = event.target.innerHTML
    var camelCaseTarget = target.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return "";
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
    search = 1;

    lines.selectAll(".line").style("opacity", 0.3);
    lines.select(`.${camelCaseTarget}-line`).style("opacity", 1);
    context.selectAll(".line").style("opacity", 0.3);
    context.select(`.${camelCaseTarget}-line`).style("opacity", 1);
    dogNameTitle.innerHTML = `${sentenceCase(target)}`;
    dropDown.style.display = "none";
    searchBar.value = `${target}`;
  })


  var s;

  var filtered;

  setTimeout(function() {drawVoronoi(filtered)}, 500)

  function drawVoronoi() {

	  voronoiGroup.selectAll("path")
	  .data(filtered)
	  .enter().append("path")
	  .attr("d", function(d) { return d ? "M" + d.join("L") + "Z" : null; })
	  .style('fill', 'none')
	  // .style('stroke', 'red')
	  .attr('class', function(d,i) {return `${d.data.breed}`})
	  .attr('id', function(d,i) {return `${d.data.breed}-${i}`})
	  .style("pointer-events", "all")
	  .style('clip-path', 'url(#clip-focus)')
	  .on('mouseover', mouseover)
	  .on('mouseout', mouseout);

	  // Add the scatterplot
	  circles.selectAll("circle")
	  .data(filtered)
	  .enter().append("circle")
	  .attr("cx", function(d, i) { return x(d.data.date); })
	  .attr("cy", function(d, i) { return y(d.data.rank); })
	  .attr('id', function(d, i) {return `${d.data.breed}-${i}-circle`})
	  .style('clip-path', 'url(#clip-focus)')
	  .attr('r', '5')
	  .style('fill', 'gray')
	  .style('opacity', 0);
	}

	function brushed() {
	  s = d3.event.selection;
	  x.domain(s.map(x2.invert, x2));
	  brushmove();
	}

	function brushmove() {
   s = d3.event.selection;
   var newStart = (s[0] / (width + marginContext.left + marginContext.right))*100,
       newEnd = (s[1] / (width + marginContext.left + marginContext.right))*100 ;

   d3.selectAll(".left").attr('offset', `${newStart}%`);
   d3.selectAll(".right").attr('offset', `${newEnd}%`);
   dogData.forEach(function(d,i) {
     lines.selectAll(`.${d.key}-line`).attr("d", line(d.values))
   })
   mainContainer.select(".x-axis").call(xAxis).select(".domain").remove();

   voronoiGroup.selectAll("path").remove()
   circles.selectAll("circle").remove()

   filtered = voronoi.polygons(d3.merge(dogData.map(function(d, i) { return d.values; }))).filter(function(x) { if (x.data.date>= s[0] && x.data.date <= s[1]); return x !== undefined})

   setTimeout(function(){drawVoronoi()}, 100)
  }

})

function mouseover(d) {
	if (search == 0) {
		var newX = circles.select(`#${this.id}-circle`).attr('cx'),
				newY = circles.select(`#${this.id}-circle`).attr('cy'),
	      top = document.querySelector('.top').clientHeight;
		lines.selectAll(`.line`).style('opacity', 0.15)
		lines.select(`.${this.className.baseVal}-line`).style('opacity', 1)
		context.selectAll(".line").style("opacity", 0.3);
		context.select(`.${this.className.baseVal}-line`).style("opacity", 1);
	  circles.select(`#${this.id}-circle`).style('opacity', 1)
		tooltip.html(`${sentenceCase(d.data.breed)}`)
	  .style('opacity', 1)
		.style("left", `${+newX + (margin.left/4.5)}px`)
		.style("top", `${+newY + top + 20}px`)

		dogNameTitle.innerHTML = `${sentenceCase(d.data.breed)}`
	}
}

function mouseout(d) {
	if (search == 0) {
		lines.selectAll(`.line`).style('opacity', 0.8)
		context.selectAll(".line").style("opacity", 0.8);
	  circles.selectAll(`circle`).style('opacity', 0)
	  tooltip.style('opacity', 0)

		dogNameTitle.innerHTML = `All Dogs`
	}
}
// console.log(window.innerWidth);
// function tooSmall() {
// 	if (window.innerWidth < 930) {
// 		document.querySelector('.visualization').style.display = 'none'
// 		document.querySelector('.background-container').style.display = 'display'
// 	} else {
// 		document.querySelector('.visualization').style.display = 'block'
// 		document.querySelector('.background-container').style.display = 'none'
// 	}
// }
//
// window.addEventListener('resize', tooSmall)
