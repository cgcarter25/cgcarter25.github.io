var margin = {left:130, top:40, right:180, bottom:100},
	width = Math.max( Math.min(window.innerWidth, 1200) - margin.left - margin.right - 20, 400),
    height = Math.max( Math.min(window.innerHeight - 75, 800) - margin.top - margin.bottom - 20, 400),
    innerRadius = Math.min(width * 0.33, height * .45),
    outerRadius = innerRadius * 1.05;

//Recalculate the width and height now that we know the radius
width = outerRadius * 2 + margin.right + margin.left;
height = outerRadius * 2 + margin.top + margin.bottom;

//Reset the overall font size
var newFontSize = Math.min(70, Math.max(40, innerRadius * 62.5 / 250));
d3.select("html").style("font-size", newFontSize + "%");

////////////////////////////////////////////////////////////
////////////////// Set-up Chord parameters /////////////////
////////////////////////////////////////////////////////////

var pullOutSize = 40 + 30/135 * innerRadius;
var numFormat = d3.format(",.0f");
var defaultOpacity = 0.85,
	fadeOpacity = 0.15;

var loom = loom()
    .padAngle(0.05)
	//.sortSubgroups(sortAlpha)
	//.heightInner(28)
	.emptyPerc(0.1)
	.widthOffsetInner(50)
	//.widthOffsetInner(function(d) { return 6 * d.length; })
	.value(function(d) { return d.use; })
	.inner(function(d) { return d.animal; })
	.outer(function(d) { return d.tool; });

var arc = d3.arc()
    .innerRadius(innerRadius*1.01)
    .outerRadius(outerRadius);

var string = string()
    .radius(innerRadius)
		.pullout(pullOutSize);

////////////////////////////////////////////////////////////
//////////////////// Character notes ///////////////////////
////////////////////////////////////////////////////////////

var animalNotes = [];
animalNotes["New World Monkeys"] = "Some New World monkeys have been observed using stones to open up nuts placed on stone outcroppings.";
animalNotes["Chimpanzees"] = "Chimpanzees use sticks to fish out termites from the termite mounds.";
animalNotes["Orangutans"] = "Orangutans learned how to paddle canoes to go forage for food by watching humans use canoes.";
animalNotes["Bonobos"] = "Bonobos will sometimes break off sticks from large trees and noisely drag them to signal that others should follow.";
animalNotes["Gorillas"] = "Gorillas use sticks to rake in desired food or items.";
animalNotes["Old World Monkeys"] = "Some Old World monkeys like baboons use sticks to pry insects or pebbles from the ground.";
animalNotes["Birds"] = "Birds drop stones on hard foods and eggs to open them.";
animalNotes["Elephants"] = "Some elephants have been observed dropping logs or rocks on electric fences to break the current and allow access.";
animalNotes["Carnivores"] = "The sea otter strikes mollusk shells against rocks to get at the food inside.";
animalNotes["Rodents"] = "Some rodents like the pocket gopher use stone spades to dig holes and tunnels.";
animalNotes["Gibbons"] = "In captivity, gibbons have been observed hanging pieces of rope or blanket on their cages to make swings.";
animalNotes["Insects"] = "Some insect larval species attach debris to their back as camoflauge to hide from predators";
animalNotes["Cetaceans"] = "Dolphins will wear sea sponges on their rostam to protect their skin while rooting around the ocean floor.";
animalNotes["Ungulates"] = "Some horses have been seen scratching their back by holding a stick in their mouth.";
animalNotes["Cephalopods"] = "Octopuses and squids hide from predators by scooping sand over their body, buring themselves in the sand.";
animalNotes["Prosimians"] = "Some prosimians have been documented repositiong vines so as to more easily climb and forage.";
animalNotes["Crustaceans"] = "Crustaceans have been known to move around anenome and steal the food the anenome catches.";
animalNotes["Arachnids"] = "Some spiders will place pebbles around their burrow entrance and use silk threads to create a trap that vibrates when an intruder approaches.";
animalNotes["Gastropods"] = "Some species of snails attach shells and sea clutter to its own shell as protection and disguise.";
animalNotes["Fish"] = "Fish are able to project water, to shoot down insects or move sand around.";
animalNotes["Amphibians"] = "Some frogs are able to affix.";
animalNotes["Echinoids"] = "Some echinoids have been observed affixing.";

var toolNotes = [];
toolNotes['Affix'] = 'Definition: to stick, attach, or fasten (something) to something else.';
toolNotes['Throw'] = 'Definition: to propel (something) with force through a medium by a body movement.';
toolNotes['Bait'] = 'Definition: to use food or another substance to entice other animals as prey.';
toolNotes['Pry'] = 'Definition: to raise, move, or pull apart with a lever device.';
toolNotes['Wave, shake'] = "Definition: to move a body party to and fro in greeting or as a signal.";
toolNotes['Cut'] = 'Definition: to make an opening, incision, or wound in (something) with a sharp-edged tool or object.';
toolNotes['Dig'] = 'Definition: to break up and move earth with a tool or machine, or with hands, paws, snout, etc.';
toolNotes['Prop and climb'] = 'Definition: to position something for support and ascend something.';
toolNotes['Scratch'] = 'Definition: to score or mark a body or surface of with a sharp or pointed object.';
toolNotes['Pound'] = 'Definition: to beat something with a device like a rock.';
toolNotes['Hang'] = 'Definition: to suspend or be suspended from above with the lower part dangling free.';
toolNotes['Wipe'] = 'Definition: to clean or dry something by rubbing its surface with a body part or object.';
toolNotes['Insect and probe'] = 'Definition: to physically explore or examine something with a device.';
toolNotes['Drop'] = 'Definition: to let or make (something) fall vertically.';
toolNotes['Reach'] = 'Definition: to stretch out a body part or object in order to touch or grasp something.';
toolNotes['Absorb'] = 'Definition: to take in or soak up another substance by physical action.';
toolNotes['Drag, roll'] = 'Definition: to move an object by rotation or physical force.';
toolNotes['Club'] = 'Definition: to strike or beat with an object.';
toolNotes['Jab, stab'] = 'Definition: to poke or probe something with a body part or object.';
toolNotes['Block'] = 'Definition: to make the movement or flow in of something difficult or impossible.';
toolNotes['Contain'] = 'Definition: to have or keep something in the same place.';
toolNotes['Symbolize'] = 'Definition: to use marks, signs, or words that indicates, signifies, or is understood as representing something.';


////////////////////////////////////////////////////////////
////////////////////// Create SVG //////////////////////////
////////////////////////////////////////////////////////////

var svg = d3.select("#animal-chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

////////////////////////////////////////////////////////////
///////////////////// Read in data /////////////////////////
////////////////////////////////////////////////////////////

d3.csv('data/animal-tools.csv', function (error, data) {

	////////////////////////////////////////////////////////////
	///////////////////// Prepare the data /////////////////////
	////////////////////////////////////////////////////////////

	data.forEach(function(d) {
		d.use = +d.use;
	});

	//Only keep the members of the fellowship & remove Voiceover
	var animals = ["New World Monkeys","Chimpanzees","Orangutans","Bonobos","Gorillas","Old World Monkeys","Birds","Elephants","Carnivores", "Rodents", "Gibbons", "Insects", "Cetaceans", "Ungulates", "Cephalopods", "Prosimians", "Crustaceans", "Arachnids", "Gastropods", "Fish", "Amphibians", "Echinoids"];
	data = data.filter(function(d) {
		return animals.indexOf(d.animal) > -1;
	});

	//Aggregate the data by location and character
    let dataNest = d3.nest()
        .key(d => d.tool)
        .key(d => d.animal)
        .rollup(leaves => d3.sum(leaves, d => d.use))
        .entries(data)

    let dataAgg = []
    dataNest.forEach(l => {
        l.values.forEach(c => {
            dataAgg.push({ tool: l.key, animal: c.key, use: c.value })
        })//forEach c
    })//forEach l
    dataAgg.sort(sortTool)

	//Sort the inner characters based on the total number of words spoken

	//Find the total number of words per character
	var dataChar = d3.nest()
		.key(function(d) { return d.animal; })
		.rollup(function(leaves) { return d3.sum(leaves, function(d) { return d.use; }); })
		.entries(dataAgg)
		.sort(function(a, b){ return d3.descending(a.value, b.value); });
	//Unflatten the result
	var animalOrder = dataChar.map(function(d) { return d.key; });
	//Sort the characters on a specific order
	function sortAnimal(a, b) {
	  	return animalOrder.indexOf(a) - animalOrder.indexOf(b);
	}//sortCharacter

	//Set more loom functions
	loom
		.sortSubgroups(sortAnimal)
		.heightInner(innerRadius/animalOrder.length);

	////////////////////////////////////////////////////////////
	///////////////////////// Colors ///////////////////////////
	////////////////////////////////////////////////////////////

	//Color for the unique locations
	var tools = ["Affix", "Throw", "Bait", "Contain", "Pry", "Wave, shake", "Cut", "Dig", "Symbolize","Prop and climb", "Scratch ", "Pound", "Hang", "Wipe", "Insect and probe", "Drop", "Reach", "Absorb", "Drag, roll", "Club", "Jab, stab", "Block"];
	var colors = ["#E86F26", "#5BA1C3", "#0E527F"]
	// var colors = ["#2F3230", "#B66577", "#D77589", "#D04555", "#6B884F", "#4EA08B", "#C1D7B3", "#AD895D", "#92A7AA", "#D66A55", "#874783", "#539AAD", "#769F42", "#D38945", "#DEC54C", "#E2E090", "#6B884F", "#4EA08B", "#2F3230", "#B66577", "#D77589", "#D04555"];
	var color = d3.scaleOrdinal()
    	.domain(tools)
    	.range(colors);

	//Create a group that already holds the data
	var g = svg.append("g")
	    .attr("transform", "translate(" + (width/2 + margin.left) + "," + (height/2 + margin.top) + ")")
		.datum(loom(dataAgg));

	////////////////////////////////////////////////////////////
	///////////////////// Set-up title /////////////////////////
	////////////////////////////////////////////////////////////

	var titles = g.append("g")
		.attr("class", "texts")
		.style("opacity", 0);

	titles.append("text")
		.attr("class", "name-title")
		.attr("x", 0)
		.attr("y", -innerRadius*5/6);

	document.querySelector('.pic').style.transform =  `translate(${((document.querySelector('.name-title').getBoundingClientRect().left) + ((document.querySelector('.name-title').getBoundingClientRect().right)- document.querySelector('.name-title').getBoundingClientRect().left)/2) - 30}px,100px)`

	titles.append("text")
		.attr("class", "value-title")
		.attr("x", 0)
		.attr("y", -innerRadius*5/6 + 35);

	//The character pieces
	titles.append("text")
		.attr("class", "animal-note")
		.attr("x", 0)
		.attr("y", innerRadius/2 + 40)
		.attr("dy", "0.35em")

	////////////////////////////////////////////////////////////
	////////////////////// Draw outer arcs /////////////////////
	////////////////////////////////////////////////////////////

	var arcs = g.append("g")
	    .attr("class", "arcs")
	  	.selectAll("g")
	   	.data(function(s) { return s.groups; })
	  .enter().append("g")
		.attr("class", "arc-wrapper")
	  	.each(function(d) { d.pullOutSize = (pullOutSize * ( d.startAngle > Math.PI + 1e-2 ? -1 : 1)); })
 	 	.on("mouseover", function(d) {

			//Hide all other arcs
			d3.selectAll(".arc-wrapper")
		      	.transition()
				.style("opacity", function(s) { return s.outername === d.outername ? 1 : fadeOpacity; });

			//Hide all other strings
		    d3.selectAll(".string")
		      	.transition()
		        .style("opacity", function(s) { return s.outer.outername === d.outername ? 1 : fadeOpacity; });

			//Find the data for the strings of the hovered over location
			var toolData = loom(dataAgg).filter(function(s) { return s.outer.outername === d.outername; });
			//Hide the characters who haven't said a word
			d3.selectAll(".inner-label")
		      	.transition()
		        .style("opacity", function(s) {
					//Find out how many words the character said at the hovered over location
					var char = toolData.filter(function(c) { return c.outer.innername === s.name; });
					return char.length === 0 ? 0.1 : 1;
				});
				//Show the tool note
				d3.selectAll(".texts")
					.transition()
					.style("opacity", 1)

				// d3.select('.value-title')
				// // .text(d3.select);

				d3.select('.name-title')
				.text(d.outername)

				d3.select(".animal-note")
					.text(toolNotes[d.outername])
					.call(wrap, 1.7*pullOutSize);

 	 	})
     	.on("mouseout", function(d) {

			//Show all arc labels
			d3.selectAll(".arc-wrapper")
		      	.transition()
				.style("opacity", 1);

			//Show all strings again
		    d3.selectAll(".string")
		      	.transition()
		        .style("opacity", defaultOpacity);

			//Show all characters again
			d3.selectAll(".inner-label")
		      	.transition()
		        .style("opacity", 1);
			d3.select('.value-title')
			.style("opacity", 1)

			d3.select('.name-title')
			.style("opacity", 1)

			d3.select(".animal-note")
						.text("")
						.call(wrap, 1.7*pullOutSize);

			d3.selectAll(".texts")
						.transition()
						.style("opacity", 0)

 	 	});

	////////////////////////////////////////////////////////////
	//////////////////// Draw outer labels /////////////////////
	////////////////////////////////////////////////////////////

	//The text needs to be rotated with the offset in the clockwise direction
	var outerLabels = arcs.append("g")
		.each(function(d) { d.angle = ((d.startAngle + d.endAngle) / 2); })
		.attr("class", "outer-labels")
		.attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
		.attr("transform", function(d,i) {
			var c = arc.centroid(d);
			return "translate(" + (c[0] + d.pullOutSize) + "," + c[1] + ")"
			+ "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
			+ "translate(" + 26 + ",0)"
			+ (d.angle > Math.PI ? "rotate(180)" : "")
		})

	//The outer name
	outerLabels.append("text")
		.attr("class", "outer-label")
		.attr("dy", "-.35em")
		.text(function(d,i){ return d.outername; });

	//The value below it
	outerLabels.append("text")
		.attr("class", "outer-label-value")
		.attr("dy", ".8em")
		.text(function(d,i){ return numFormat(d.value) + " Animals"; });

	////////////////////////////////////////////////////////////
	//////////////////// Draw outer arcs ///////////////////////
	////////////////////////////////////////////////////////////

	var outerArcs = arcs.append("path")
		.attr("class", "arc")
	    .style("fill", function(d) { return color(d.outername); })
	    .attr("d", arc)
		.attr("transform", function(d, i) { //Pull the two slices apart
		  	return "translate(" + d.pullOutSize + ',' + 0 + ")";
		 });

	////////////////////////////////////////////////////////////
	////////////////// Draw inner strings //////////////////////
	////////////////////////////////////////////////////////////

	var strings = g.append("g")
	    .attr("class", "stringWrapper")
		.style("isolation", "isolate")
	  .selectAll("path")
	    .data(function(strings) {
			return strings;
		})
	  .enter().append("path")
		.attr("class", "string")
		.style("mix-blend-mode", "multiply")
	    .attr("d", string)
	    .style("fill", function(d) { return d3.rgb( color(d.outer.outername) ).brighter(0.2) ; })
		.style("opacity", defaultOpacity);

	////////////////////////////////////////////////////////////
	//////////////////// Draw inner labels /////////////////////
	////////////////////////////////////////////////////////////

	//The text also needs to be displaced in the horizontal directions
	//And also rotated with the offset in the clockwise direction
	var innerLabels = g.append("g")
		.attr("class","inner-labels")
	  	.selectAll("text")
	    .data(function(s) { return s.innergroups; })
	  .enter().append("text")
		.attr("class", "inner-label")
		.attr("x", function(d,i) { return d.x; })
		.attr("y", function(d,i) { return d.y; })
		.style("text-anchor", "middle")
		.attr("dy", ".35em")
	    .text(function(d,i) {return d.name; })
 	 	.on("mouseover", function(d) {
			//Show all the strings of the highlighted character and hide all else
		    d3.selectAll(".string")
		      	.transition()
		        .style("opacity", function(s) {
					return s.outer.innername !== d.name ? fadeOpacity : 1;
				});

			//Update the word count of the outer labels
			var animalData = loom(dataAgg).filter(function(s) { return s.outer.innername === d.name; });
			d3.selectAll(".outer-label-value")
				.text(function(s,i){
					//Find which animalData is the correct one based on location
					var loc = animalData.filter(function(c) { return c.outer.outername === s.outername; });
				});

			//Hide the arc where the character hasn't said a thing
			d3.selectAll(".arc-wrapper")
		      	.transition()
		        .style("opacity", function(s) {
					//Find which animalData is the correct one based on location
					var loc = animalData.filter(function(c) { return c.outer.outername === s.outername; });
					return loc.length === 0 ? 0.1 : 1;
				});

			//Update the title to show the total word count of the character
			d3.selectAll(".texts")
				.transition()
				.style("opacity", 1);
				d3.select(".pic")
					.transition()
					.style("opacity", 1);

			d3.select('.pic').html(`<img src="img/${d.name}.png" width="40">`)
				// .style('left', `${((document.querySelector('.name-title').getBoundingClientRect().left) + ((document.querySelector('.name-title').getBoundingClientRect().right)- document.querySelector('.name-title').getBoundingClientRect().left)/2) - 15}px`)
				// .style('top', `${(document.querySelector('.name-title').getBoundingClientRect().top) }px`)

			d3.select(".name-title")
				.text(d.name);

			d3.select(".value-title")
				.text(function() {
					var use = dataChar.filter(function(s) {return s.key === d.name; });
					return numFormat(use[0].value) + " Tools";
				});

				//Hide the characters who haven't said a word
				d3.selectAll(".inner-label")
			      	.transition()
			        .style("opacity", function(s) { if (s.name === d.name) {	return 1} else {return fadeOpacity}});


			//Show the character note
			d3.selectAll(".animal-note")
				.text(animalNotes[d.name])
				.call(wrap, 1.7*pullOutSize);

		})
     	.on("mouseout", function(d) {

			//Put the string opacity back to normal
		    d3.selectAll(".string")
		      	.transition()
				.style("opacity", defaultOpacity);

			//Return the word count to what it was
			d3.selectAll(".outer-label-value")
				.text(function(s,i){ return numFormat(s.value) + " animals"; });

				//Hide the characters who haven't said a word
				d3.selectAll(".inner-label")
							.transition()
							.style("opacity", 1);
							d3.select(".pic")
								.transition()
								.style("opacity", 0);

			//Show all arcs again
			d3.selectAll(".arc-wrapper")
		      	.transition()
		        .style("opacity", 1);

			//Hide the title
			d3.selectAll(".texts")
				.transition()
				.style("opacity", 0);

			//Hide the character note
			d3.selectAll(".animal-note")
				.text("");

		});

});//d3.csv

////////////////////////////////////////////////////////////
///////////////////// Extra functions //////////////////////
////////////////////////////////////////////////////////////

//Sort the locations in a particula order
function sortTool(a, b) {
	var toolOrder = ["Affix", "Throw", "Bait", "Contain", "Pry", "Wave, shake", "Cut", "Dig", "Symbolize","Prop and climb", "Scratch ", "Pound", "Hang", "Wipe", "Insect and probe", "Drop", "Reach", "Absorb", "Drag, roll", "Club", "Jab, stab", "Block"];
  	return toolOrder.indexOf(a.tool) - toolOrder.indexOf(b.tool);
}//sortLocation

//Sort alphabetically
function sortAlpha(a, b){
	    if(a < b) return -1;
	    if(a > b) return 1;
	    return 0;
}//sortAlpha

//Sort on the number of words
function sortWords(a, b){
	    if(a.use < b.use) return -1;
	    if(a.use > b.use) return 1;
	    return 0;
}//sortWords

/*Taken from http://bl.ocks.org/mbostock/7555321
//Wraps SVG text*/
function wrap(text, width) {
  text.each(function() {
	var text = d3.select(this),
		words = text.text().split(/\s+/).reverse(),
		word,
		line = [],
		lineNumber = 0,
		lineHeight = 1.2, // ems
		y = parseFloat(text.attr("y")),
		x = parseFloat(text.attr("x")),
		dy = parseFloat(text.attr("dy")),
		tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

	while (word = words.pop()) {
	  line.push(word);
	  tspan.text(line.join(" "));
	  if (tspan.node().getComputedTextLength() > width) {
		line.pop();
		tspan.text(line.join(" "));
		line = [word];
		tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
	  }
	}
  });
}//wrap
