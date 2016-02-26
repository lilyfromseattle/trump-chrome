walk(document.body);
function walk(node)
{
  // I stole this function from here:
  // http://is.gd/mwZp7E
  var child, next;
  switch ( node.nodeType )
  {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
    child = node.firstChild;
    while ( child )
    {
      next = child.nextSibling;
      walk(child);
      child = next;
    }
    break;
    case 3: // Text node
    handleText(node);
    break;
  }
}
function handleText(textNode)
{
  var names = ["A really relaxed guy",
  "An ambitious corn dog that escaped from the concession stand at a rural Alabama fairground, stole an unattended wig, hopped a freight train to Atlantic City and never looked back",
  "Orange asshat",
  "Four-time bankruptcy filer and seething hernia mass",
  "Bone-in ham",
  "Sun-dried tomato",
  "A shithead",
  "Adult blobfish",
  "Deflated football",
  "Fart-infused lump of raw meat",
  "Melting pig carcass",
  "Disgraced racist",
  "Talking comb-over",
  "Human equivalent of cargo pants that zip away into shorts",
  "Cheeto-dusted bloviator",
  "Fuzzy meat wad",
  "Bag of flour",
  "Human turd",
  "Not in any way sexist, you bimbos",
  "A man who cherishes women",
  "Future leader of the free world",
  "Decomposing ear of corn",
  "His own best parody",
  "A rich idiot ... willing to allow garbage to fall out of his mouth without batting a single golden lash",
  "Pond scum",
  "Noted troll",
  "The class clown that everyone wishes would be quiet and let the class learn",
  "Melting businessman",
  "The person still inexplicably leading the Republican presidential primary",
  "Wax museum figure on a very hot day",
  "Soggy burlap sack",
  "Bag of toxic sludge",
  "Your next president and ruler for life",
  "A brightly burning trash fire",
  "Impoverished urchin",
  "Aggressively stupid",
  "Great judgment-haver",
  "Man-sized sebaceous cyst",
  "Enlarged pee-splattered Sno Cone",
  "Empty popcorn bag rotting in the sun",
  "Man-shaped asbestos insulation board",
  "Hair plug swollen with rancid egg whites",
  "Inside-out lower intestine",
  "Dusty barrel of fermented peepee",
  "Usually reasonable burlap sack full of rancid Peeps",
  "Degloved zoo penis",
  "Presidential candidate and bargain bin full of yellowing Jean-Claude Van Damme movies",
  "Hairpiece come to life",
  "Normal-looking human man and entirely credible choice as future leader of the free world",
  "Decomposing pumpkin pie inhabited by vicious albino squirrels",
  "A dishrag that on closer inspection is alive with maggots",
  "Lead paint factory explosion",
  "Candied yam riddled with moldy spider carcasses",
  "Enraged Gak spill",
  "The shriveled pinto bean you had to pluck out of your Chipotle burrito basket",
  "Human-sized infectious microbe",
  "Poorly-trained circus orangutan",
  "Chester Cheetah impersonator",
  "Lumbering human-like tardigrade",
  "A tiny piece of dried cat poop that you found in your rug"]
  var v = textNode.nodeValue;
  v = v.replace(/\bDonald John Trump\b/g, names[Math.round(Math.random()*names.length)]);
  v = v.replace(/\bDonald Trump\b/g, names[Math.round(Math.random()*names.length)]);
  v = v.replace(/\bTrump\b/g, names[Math.round(Math.random()*names.length)]);
  v = v.replace(/\btrump\b/g, names[Math.round(Math.random()*names.length)]);
  v = v.replace(/\bDonald John\b/g, names[Math.round(Math.random()*names.length)]);
  v = v.replace(/\bDonald J\b/g, names[Math.round(Math.random()*names.length)]);

  textNode.nodeValue = v;
}
