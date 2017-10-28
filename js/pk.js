// change this if you want to change the default list of topics
var topics = {
	"Freeform": ["Add your own topics", "One per line"],
	"Agile": [
		"Agile Tools",
		"Agile",
		"Automated Testing",
		"Build quality in",
		"Burndown Charts",
		"Continuous Delivery",
		"Continuous Improvement",
		"Daily Stand-up",
		"Discovery",
		"Don't try this at home",
		"Door to door sales",
		"Empowerment",
		"Failure",
		"Guilds, Tribes and Squads",
		"Happy Marriages",
		"Hopes and Fears",
		"If you were born 100 years ago",
		"Traffic in this city",
		"Leadership",
		"Living the 'Dream'",
		"My worst agile experience",
		"Pair Programming",
		"Planning ",
		"Planning Poker",
		"Presentation Karaoke",
		"Product Ownership",
		"Project Managers",
		"Retrospective",
		"SDLC",
		"Scaling Agile",
		"Scrum Masters",
		"Scrum",
		"Spending time with your family",
		"Star Trek",
		"Star Wars",
		"Success",
		"Teams",
		"Technology",
		"Test-Driven Development",
		"Testing",
		"The calm before the storm",
		"The last book you read",
		"This presentation",
		"Too much feedback",
		"Training",
		"Velocity",
		"What it takes to be a Scrum Master",
		"Your boss",
		"Your company",
		"Your dream job",
		"Your favorite pet",
		"Your favourite movie",
		"Your ideal relaxing day",
		"Your last holiday",
		"Your weekend",
		"#noprojects",
		"#noestimates",
		"Zeppelins and Airships",
		"Lean Startup",
		"Road Trip",
		"Cat People",
		"Heavy Metal",
		"Baby Boomers vs Millenials"
	]
};

var my_topics = [];

jQuery(function($){

	$.supersized({
		random                  :   1,			// Start slide (0 is random)
		fit_always				:   1,

		// Functionality
		slide_interval          :   10000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	500,		// Speed of transition

		// Components
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
           {image : './slides/1-1260977459Qiyi.jpg', title : 'junge Frau Musikhören mit Kopfhörern  - Image Credit: Petr Kratochvil (public domain)', url : 'http://www.publicdomainpictures.net/view-image.php?image=4860&picture=musik-horen&large=1'},
           {image : './slides/2015-10-30 14.40.12.jpg', title : 'The winning marshmallow - Image Credit: Evan Leybourn', url : ''},
           {image : './slides_unval/guzzle-buddy-drinking-wine.jpg', title : 'Guzzle Buddy - Image Credit: Guzzle Buddy', url : 'http://www.guzzlebuddy.com/'},
           {image : './slides/3000_books.jpg', title : '3000 books - Image Credit: Unknown', url : ''},
           {image : './slides/3671171673_2e9acc5990.jpg', title : 'You\'ll never get to work on time - Image Credit: Unknown', url : ''},
           {image : './slides/4053123799_23189bc35b_o.jpg', title : 'Squirrel - Image Credit: Tomi Tapio K ', url : 'https://www.flickr.com/photos/tomitapio/4053123799'},
           {image : './slides/7024187467_c48e73f368_o.png', title : 'Feel like a Sir - Image Credit: wberry', url : ''},
           {image : './slides/all_for_one.jpg', title : 'All for one - Image Credit: Unknown', url : ''},
           {image : './slides/another_way.jpg', title : 'Another Way - Image Credit: Unknown', url : ''},
           {image : './slides/bananas.jpg', title : 'Banana\'s - Image Credit: Unknown', url : ''},
           {image : './slides/brain_70.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/chair.jpg', title : 'Chair - Image Credit: Unknown', url : ''},
           {image : './slides/curtain-812223_1920.jpg', title : 'To be continued - Image Credit: CC0 ', url : 'https://pixabay.com/en/curtain-cinema-theater-stage-font-812223/'},
           {image : './slides/exponential_growth.jpg', title : 'Growth - Image Credit: Unknown', url : ''},
           {image : './slides/fitness-1208141_1920.jpg', title : 'You can do much more - Image Credit: CC0 ', url : 'https://pixabay.com/en/fitness-motivation-healthy-1208141/'},
           {image : './slides/globe-1029211_1920.jpg', title : 'globe - Image Credit: CC0 ', url : 'https://pixabay.com/en/globe-australia-continents-earth-1029211/'},
           {image : './slides/image302.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/lack_access.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/o_1ad8ggptd1sf91nqr1qdbp4d1a3l7_new.jpg', title : 'Black cat looking at you - Image Credit: CC0 ', url : 'http://kaboompics.com/one_foto/1211/black-cat-looking-at-you'},
           {image : './slides/o_1adegiectg351o0k1sp51qitmdd7_new.jpg', title : 'Full frame background showing lots of old metallic nails - Image Credit: CC0 ', url : 'http://kaboompics.com/one_foto/1404/full-frame-background-showing-lots-of-old-metallic-nails'},
           {image : './slides/o_1adh74vggkao1fej6f297c1hnf7_new.jpg', title : 'Coffee time - Image Credit: CC0 ', url : 'http://kaboompics.com/one_foto/1405/coffee-time'},
           {image : './slides/o_1adl6sdg918c9120vb4g3ka1se7_new.jpg', title : 'Sushi on a black plate and black background - Image Credit: CC0 ', url : 'http://kaboompics.com/one_foto/1406/sushi-on-a-black-plate-and-black-background'},
           {image : './slides/o_1ae0lg0aj1vgb3us1i7edl81mc07_new.jpg', title : 'Top view of opened Notes and Apple iPhone 6 - Image Credit: CC0 ', url : 'http://kaboompics.com/one_foto/1412/top-view-of-opened-notes-and-apple-iphone-6'},
           {image : './slides/PDCA-Cycle.png', title : 'PDCA - Image Credit: By Manee', url : 'Kowat, FAL, https://commons.wikimedia.org/w/index.php?curid=12518982'},
           {image : './slides/Picture26.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture27.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture28.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture29.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture30.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture31.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture32.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture33.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture34.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture35.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture36.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture37.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture38.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture40.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture41.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/Picture42.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides/tumblr_nvup8h1pon1sfie3io1_1280.jpg', title : 'NOTHING LIKE A COKE - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/txstate-library/20328546371/'},
           {image : './slides/tumblr_nzgoh9EGLk1sfie3io1_1280.jpg', title : 'IMAGE TAKEN FROM PAGE 241 OF ‘HISTOIRE DE LA VILLE MONTDIDIER. [WITH PLATES.]’ - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/britishlibrary/11236219295/'},
           {image : './slides/tumblr_nzom3x4APz1sfie3io1_500.jpg', title : 'THREE SKELETONS AT THE PIANO - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/nationalarchives/8141311057/'},
           {image : './slides/tumblr_o04s4kpzgp1sfie3io1_1280.jpg', title : 'MISSION CONTROL DURING APOLLO 10 - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/nasacommons/23658364679/'},
           {image : './slides/tumblr_o0rbiv4Vl81sfie3io1_1280.jpg', title : 'Illustrated front cover from The Queenslander, November 28, 1929 - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/statelibraryqueensland/22792403226/'},
           {image : './slides/tumblr_o1ddoruNcq1sfie3io1_1280.jpg', title : 'INTERPRETING X-RAYS - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/csj_canada_archives/16087498781/'},
           {image : './slides/tumblr_o1denuvstb1sfie3io1_1280.jpg', title : 'KATALOGER - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/95520404@N07/15779206468/'},
           {image : './slides/tumblr_o1ulvp0wA51sfie3io1_1280.jpg', title : 'APOLLO 14 LAUNCH - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/nasacommons/9460207364/'},
           {image : './slides/tumblr_o1ulvtxCMk1sfie3io1_1280.jpg', title : 'EDVARD GRIEG AT THE PIANO - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/bergen_public_library/3469861465/'},
           {image : './slides/tumblr_o1ulw9iigb1sfie3io1_1280.jpg', title : 'THE POSTMAN ON HIS ROUND IN THE MOUNTAINS BETWEEN TREGARON AND ABERGWESYN - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/llgc/6346813233/'},
           {image : './slides/tumblr_o2mhflJtUT1sfie3io1_1280.jpg', title : '4/64. ANCHORAGE FOURTH AVE. GRABEN. SEE PHOTOS 527,882,301A, 621 - LOOKING EAST - Image Credit: no known copyright restrictions', url : 'https://www.flickr.com/photos/usnationalarchives/24822219172/'},
           {image : './slides/tumblr_o2mhgbuxDM1sfie3io1_1280.jpg', title : 'Governor Mark Warner visits Claremont after Hurricane Isabel\'s destruction - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/library_of_virginia/21264526534/'},
           {image : './slides/tumblr_o3gw145wnT1sfie3io1_1280.jpg', title : 'ORBITAL SUNRISE WITH VENUS AND MARS - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/nasacommons/9458244245/'},
           {image : './slides/tumblr_o3gw1cEHCL1sfie3io1_1280.jpg', title : 'Protest meeting at Beresford Place, and the arrest of Count Plunkett - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/nlireland/25032356429/'},
           {image : './slides/tumblr_o3gw1fNLIQ1sfie3io1_1280.jpg', title : 'Pearl diver collecting shells from the beds of Torres Strait, Queensland / Frank Hurley - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/national_library_of_australia_commons/25269617161/'},
           {image : './slides/tumblr_o3ygfkd8Rr1sfie3io1_1280.jpg', title : 'Ballaghbema Pass, Glencar, Co. Kerry - Image Credit: no known copyright restrictions ', url : 'https://www.flickr.com/photos/nlireland/25581862336/'},
           {image : './slides/your_blood.jpg', title : 'Did You Know  - Image Credit: Karl Fisch, Scott McLeod, and XPLANE (CC BY-NC-SA)', url : 'https://shifthappens.wikispaces.com'},
           {image : './slides_unval/baby_butt.png', title : 'Unknown', url : ''},
           {image : './slides_unval/band.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/beaver_fail.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/beaver_in_danger.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/bite_the_hand.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/bottle_beach.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/brain.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/burning_car.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/burning_witches.png', title : 'Unknown', url : ''},
           {image : './slides_unval/chicken_flowchart.png', title : 'Unknown', url : ''},
           {image : './slides_unval/chicken_graph.png', title : 'Unknown', url : ''},
           {image : './slides_unval/china_english.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/circles_of_change.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/clockwork.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/cobb_house.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/coding_bunny.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/cognitive_load.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/computer_tombstone.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/consistency.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/coopetition.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/culture_underwater.png', title : 'Unknown', url : ''},
           {image : './slides_unval/curled_statue.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/days_since_last_injury.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/decentralized_network.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/design_thinking.png', title : 'Unknown', url : ''},
           {image : './slides_unval/discarded_cell_phones.png', title : 'Unknown', url : ''},
           {image : './slides_unval/done.png', title : 'Unknown', url : ''},
           {image : './slides_unval/dont_panic.png', title : 'Unknown', url : ''},
           {image : './slides_unval/dont_touch.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/do_one_thing_today.png', title : 'Unknown', url : ''},
           {image : './slides_unval/dream_big.png', title : 'Unknown', url : ''},
           {image : './slides_unval/drunk_mice.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/earth_eats_moon.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/ekg.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/emotion_faces.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/facepalm.png', title : 'Unknown', url : ''},
           {image : './slides_unval/factory.png', title : 'Unknown', url : ''},
           {image : './slides_unval/fake_it.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/fireman_photo.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/florida.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/forget_grammar.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/get_close.png', title : 'Unknown', url : ''},
           {image : './slides_unval/gold_coins.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/handshake.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/happy_buddha.png', title : 'Unknown', url : ''},
           {image : './slides_unval/hardhat.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/hate_you.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/heart_fields.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/hierarchical_Org_Chart.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/hqdefault.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/hypothesis_testing.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/image206.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image207.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image208.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image210.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image211.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image212.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image213.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image216.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image218.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image219.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image220.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image221.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image231.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image233.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image239.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image240.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image241.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image244.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image254.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image260.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image266.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image267.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image268.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/image271.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/image275.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image278.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image281.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image282.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image284.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image286.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image287.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image288.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image289.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image291.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image296.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image297.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image298.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image300.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image301.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image303.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image307.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image308.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image309.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image310.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image311.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image316.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image317.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image318.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image319.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image320.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image322.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image323.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image324.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image328.png', title : 'Unknown', url : ''},
           {image : './slides_unval/image330.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image331.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image335.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image336.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/image337.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/inside_hostile.png', title : 'Unknown', url : ''},
           {image : './slides_unval/i_quit.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/jellyfish.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/kapow.png', title : 'Unknown', url : ''},
           {image : './slides_unval/key_map.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/kolb.png', title : 'Unknown', url : ''},
           {image : './slides_unval/learning_methods.png', title : 'Unknown', url : ''},
           {image : './slides_unval/Leave_a_Legacy.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/lego_death.png', title : 'Unknown', url : ''},
           {image : './slides_unval/lemons_correlation.gif', title : 'Unknown', url : ''},
           {image : './slides_unval/love_pain.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/low_risk.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/manufacturing_variation.png', title : 'Unknown', url : ''},
           {image : './slides_unval/many_books.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/match.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/metrics.gif', title : 'Unknown', url : ''},
           {image : './slides_unval/metrics_dartboard.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/metronome.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/mob_programming.png', title : 'Unknown', url : ''},
           {image : './slides_unval/modified_spiral.png', title : 'Unknown', url : ''},
           {image : './slides_unval/more.png', title : 'Unknown', url : ''},
           {image : './slides_unval/My_Name_Is_Irrelevant.png', title : 'Unknown', url : ''},
           {image : './slides_unval/new_experience.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/no_Bugs.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/no_pants.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/own_your_destiny.png', title : 'Unknown', url : ''},
           {image : './slides_unval/pain_of_regret.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/path_more_travelled.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/people_first.png', title : 'Unknown', url : ''},
           {image : './slides_unval/pexels-photo.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/phone_and_laptop.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/phone_box.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture10.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture11.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture12.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture13.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture14.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture15.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture16.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture17.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture18.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture19.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture2.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture20.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture21.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture22.png', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture23.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture25.png', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture3.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture4.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture43.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture44.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture45.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture46.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture47.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture48.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture49.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture5.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture50.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture51.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture6.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture7.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture8.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Picture9.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/pile_of_paper.png', title : 'Unknown', url : ''},
           {image : './slides_unval/pill_in_reflection.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/plan_b.png', title : 'Unknown', url : ''},
           {image : './slides_unval/public-domain-images-free-stock-photos-animals-farm-horses-1000x668.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/public-domain-images-free-stock-photos-bicycle-bike-black-and-white-1000x667.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/quote_1.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/random_funny___2_by_guppy22-d5irouc.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/reduce_risk.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/red_pill.png', title : 'Unknown', url : ''},
           {image : './slides_unval/refactoring_fail.png', title : 'Unknown', url : ''},
           {image : './slides_unval/santa_tomb.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/serve.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/sharks.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/ship_is.png', title : 'Unknown', url : ''},
           {image : './slides_unval/sign_not_in_use.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/sleepy_drawings.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/soldiers.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/stages_of_proficiency.png', title : 'Unknown', url : ''},
           {image : './slides_unval/starbucks_cups.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/stonework.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/straw_camel.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/stress_correlations.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/stretch_mind.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/striped_pants.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/suitcase_organizer.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/teamwork.png', title : 'Unknown', url : ''},
           {image : './slides_unval/test_tubes.png', title : 'Unknown', url : ''},
           {image : './slides_unval/text_on_bike.png', title : 'Unknown', url : ''},
           {image : './slides_unval/think_pair_share.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/thirst.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/three_fingers.png', title : 'Unknown', url : ''},
           {image : './slides_unval/thumbs_up.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/tied_up.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/trustworthy.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/Value.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/value_stacking.png', title : 'Unknown', url : ''},
           {image : './slides_unval/valve_org_charts.png', title : 'Unknown', url : ''},
           {image : './slides_unval/wait.png', title : 'Unknown', url : ''},
           {image : './slides_unval/waterfall.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/waterfall_planning.png', title : 'Unknown', url : ''},
           {image : './slides_unval/wearing_pants_men.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/web20.png', title : 'Unknown', url : ''},
           {image : './slides_unval/what_focus.png', title : 'Unknown', url : ''},
           {image : './slides_unval/what_is_leadership.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/where_we_come_from.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/whisky.jpeg', title : 'Unknown', url : ''},
           {image : './slides_unval/why_bother.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/work_cell_u_shaped.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/world_changing.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/wormhole.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/wrong_way.jpg', title : 'Unknown', url : ''},
           {image : './slides_unval/young_hero.jpg', title : 'Unknown', url : ''},
		   ],
       guaranteedSlides: [
         {image : './slides/prata-bozz.jpg', title : 'Prata Bozz', url : ''},
         {image : './slides/cupcake-bozz.jpg', title : 'Cupcake Bozz', url : ''},
       ]

	});
});

function load_topics(topic) {
  if (topic == "Agile") {
	$( "#topics" ).val(topics.Agile.join("\n"));
  } else {
	$( "#topics" ).val(topics.Freeform.join("\n"));
  }
}

function pick_topic() {
  $("#intro")[0].style.display = "none";
  $("#play")[0].style.display = "block";
  $("#your_topic").text(my_topics[Math.floor(Math.random() * my_topics.length)]);
  $("#your_topic").quickfit({max:30});
}

// Insert a jump to a random guaranteed image at a random point in the presentation.
function insert_random_guaranteed(){
  activeIndex = vars.current_slide;
  if (isNaN(activeIndex)) {
    activeIndex = 0;
  }
  presentationLength = $("#duration").val() / (api.getSlideInterval() / 1000);
  insertIndex = Math.floor((Math.random() * presentationLength));
  restoreIndex = activeIndex + insertIndex;
  insertTime = insertIndex * api.getSlideInterval();
  restoreTime = (insertIndex + 1) * api.getSlideInterval();

  if (insertIndex == 0) {
    // insert after the transition time so goTo won't abort.
    insertTime += 500;
    // restore later so the picture stays the full amount of time.
    restoreTime += 500;
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

function play_pk() {
  $("#count_down")[0].style.display = "block";
  $("#play")[0].style.display = "none";
  $("#count_down").text(3);
  setTimeout(function(){
	$("#count_down").text(2);
  }, 1000);
  setTimeout(function(){
	$("#count_down").text(1);
	api.nextSlide();
	// Do this here so the most recent value of current_slide is obtained.
	// Prevents slide repeats caused by restoring to a previously seen image.
	insert_random_guaranteed();
  }, 2000);
  setTimeout(function(){
	$("#count_down")[0].style.display = "none";
  }, 3000);
  setTimeout(function(){
	$("#count_down").text("Thank you!");
	$("#count_down")[0].style.display = "block";
  }, ($("#duration").val() * 1000)+3000);
  setTimeout(function(){
	$("#count_down").text();
	$("#count_down")[0].style.display = "none";
	pick_topic();
  }, ($("#duration").val() * 1000)+8000);
};

$( document ).ready( function() {
  load_topics($( "#topic" ).val());
	$( "#topic" ).change(function() {
	  load_topics($( this ).val());
	});

	$( "#go" ).click(function() {
	  my_topics = $("#topics").val().split("\n");
	  pick_topic();
	});

	$( "#again" ).click(function() {
	  my_topics = $("#topics").val().split("\n");
	  pick_topic();
	});

	$( "#playbut" ).click(function() {
	  play_pk();
	});
});
