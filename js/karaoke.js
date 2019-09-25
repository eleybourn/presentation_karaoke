var my_topics = [];

var default_config = {
	duration        : 120,		// Duration of presentation in seconds
	slide_interval  : 10000,	// Length between transitions
	transition      : 1, 		// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed: 500,		// Speed of transition

	language          : 'EN',
	custom_translation: {}
};

config = $.extend(default_config, config);

var supersized_setup = {
	random    : 1,			// Start slide (0 is random)
	fit_always: 1,
	autoplay  : 0,

	// Functionality
	slide_interval  : config.slide_interval,	// Length between transitions
	transition      : config.transition, 		// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed: config.transition_speed,		// Speed of transition

	// Components
	slide_links: 'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides     : slides,
  guaranteedSlides : guaranteedSlides
};

function translate() {
	var strings = $.extend(
		$.extend(translations['EN'], translations[config.language]),
		config.custom_translation
	);

	for (var string in strings) {
		var translation = strings[string];

		if (translation == string) {
			continue;
		}

		$('*:contains("' + string + '")')
			.filter(function() {
				return $(this).children().length === 0;
			})
			.text(translation);

		$('input[value="' + string + '"]')
			.val(translation);
	}
}

function load_groups() {
	var groups = Object.keys(topics);

	for (var key in groups) {
		var group = groups[key];
		$('#groups').append(
			'<input type="radio" name="group" id="group' + group + '" value="' + group + '"'
			+ (group == groups[0] ? ' checked="checked"' : '')
			+ '>'
			+ ' <label for="group' + group + '">' + group + '</label><br>'
		);
	}

	restart();
}

function load_topics(group) {
	$('#topics').html('<li>' + topics[group].join('<li>'));
	my_topics = topics[group];
}

function restart() {
	$('.container').hide();
	$('#choose_group').show();
}

function pick_topic() {
	$('.container').hide();
	$('#choose_topic').show();
	
	var topic_index = Math.floor(Math.random() * my_topics.length);
	var new_topic = my_topics[topic_index];
	my_topics.splice(topic_index, 1);

	if (new_topic == $('#your_topic').text()) {
		pick_topic();
		return;
	}

	$('#your_topic').text(new_topic);
	$('#your_topic').quickfit({max: 30});
}

function play_slides() {
	$('.container').hide();
	$('#count_down').text(3).show();
	setTimeout(function() {
		$('#count_down').text(2);
	}, 1000);
	setTimeout(function() {
		$('#count_down').text(1);
    // Do this here so the most recent value of current_slide is obtained.
    // Prevents slide repeats caused by restoring to a previously seen image.
    insert_random_guaranteed();
  }, 2000);
	setTimeout(function() {
		api.playToggle();
		$('#count_down').hide();
	}, 3000);
	setTimeout(function() {
		$('#thank_you').show();
	}, (config.duration * 1000) + 3000);
	setTimeout(function() {
		$('.container').hide();
		api.playToggle();
		restart();
	}, (config.duration * 1000) + 8000);
}

$(document).ready(function() {
	$.supersized(supersized_setup);
	translate();

	load_groups();

	load_topics($('input[name=group]:checked').val());
	$('input[name=group]').change(function() {
		load_topics($(this).val());
	});

	$('#go').click(function() {
		pick_topic();
	});

	$('#again').click(function() {
		pick_topic();
	});

	$('#play').click(function() {
		play_slides();
	});
});

// Insert a jump to a random guaranteed image at a random point in the presentation.
function insert_random_guaranteed(){
  if (supersized_setup['guaranteedSlides'].length == 0) {
    return false;
  }
  activeIndex = vars.current_slide;
  if (isNaN(activeIndex)) {
    activeIndex = 0;
  }
  presentationLength = config.duration / (config.slide_interval / 1000);
  insertIndex = Math.floor((Math.random() * presentationLength));
  restoreIndex = activeIndex + insertIndex;
  insertTime = insertIndex * config.slide_interval;
  restoreTime = (insertIndex + 1) * config.slide_interval;

  if (insertIndex == 0) {
    // insert after the transition time so goTo won't abort.
    insertTime += config.transition_speed;
    // restore later so the picture stays the full amount of time.
    restoreTime += config.transition_speed;
  }

  console.log('activeIndex: ' + activeIndex);
  console.log('insertIndex: ' + insertIndex);
  console.log('restoreIndex: ' + restoreIndex);
  console.log('insertTime: ' + insertTime);
  console.log('restoreTime: ' +  restoreTime);

  /* jump to random guaranteed image */
  setTimeout(function(){
    api.goToRandomGuaranteed();
  }, insertTime);

  /* jump back */
  setTimeout(function() {
    api.goTo(restoreIndex);
  }, restoreTime);
}
