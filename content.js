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
  var names = ["a really relaxed guy",
  "an ambitious corn dog that escaped from the concession stand at a rural Alabama fairground, stole an unattended wig, hopped a freight train to Atlantic City and never looked back",
  "orange asshat",
  "four-time bankruptcy filer and seething hernia mass",
  "bone-in ham",
  "sun-dried tomato",
  "a shithead",
  "adult blobfish",
  "deflated football",
  "fart-infused lump of raw meat",
  "melting pig carcass",
  "disgraced racist",
  "talking comb-over",
  "human equivalent of cargo pants that zip away into shorts",
  "cheeto-dusted bloviator",
  "fuzzy meat wad",
  "bag of flour",
  "human turd",
  "not in any way sexist, you bimbos",
  "a man who cherishes women",
  "future leader of the free world",
  "decomposing ear of corn",
  "his own best parody",
  "a rich idiot ... willing to allow garbage to fall out of his mouth without batting a single golden lash",
  "pond scum",
  "noted troll",
  "the class clown that everyone wishes would be quiet and let the class learn",
  "melting businessman",
  "the person still inexplicably leading the Republican presidential primary",
  "wax museum figure on a very hot day",
  "soggy burlap sack",
  "bag of toxic sludge",
  "your next president and ruler for life",
  "a brightly burning trash fire",
  "impoverished urchin",
  "aggressively stupid",
  "great judgment-haver",
  "man-sized sebaceous cyst",
  "enlarged pee-splattered Sno Cone",
  "empty popcorn bag rotting in the sun",
  "man-shaped asbestos insulation board",
  "hair plug swollen with rancid egg whites",
  "inside-out lower intestine",
  "dusty barrel of fermented peepee",
  "usually reasonable burlap sack full of rancid Peeps",
  "degloved zoo penis",
  "presidential candidate and bargain bin full of yellowing Jean-Claude Van Damme movies",
  "hairpiece come to life",
  "normal-looking human man and entirely credible choice as future leader of the free world",
  "decomposing pumpkin pie inhabited by vicious albino squirrels",
  "a dishrag that on closer inspection is alive with maggots",
  "lead paint factory explosion",
  "candied yam riddled with moldy spider carcasses",
  "enraged Gak spill",
  "the shriveled pinto bean you had to pluck out of your Chipotle burrito basket",
  "human-sized infectious microbe",
  "poorly-trained circus orangutan",
  "Chester Cheetah impersonator",
  "lumbering human-like tardigrade",
  "a tiny piece of dried cat poop that you found in your rug",
  "the boy who cried lawsuit",
  "a clown made of mummified foreskin and cotton candy",
  "short-fingered vulgarian",
  "a shitty lifestyle brand",
  "boorish, monosyllabic TV tyrant with the attention span of an Xbox-playing 11-year-old",
  "a person you would never, ever have sex with",
  "sentient fart",
  "a hairball from an orange cat",
  "a cylon sent to destroy us all",
  "real life Mr. Burns",
  "a painful case of hemorrhoids",
  "an orangutan's taint",
  "a man clearly in posession of a micropenis",
  "pubic louse",
  "persistent yeast infection",
  "poopy diaper",
  "sewer monster",
  "a man with a totally natural looking complexion",
  "Mr. Tinyhands",
  "spray tan enthusiast",
  "the oldest Jersey Shore cast member",
  "Lord Voldemort IRL",
  "adult baby",
  "literally the worst human ever",
  "real life Ebenezer Scrooge",
  "a deeply insecure man",
  "America's greatest shame"
]






  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var v = textNode.nodeValue;
  v = v.replace(/\b\. Donald John Trump's\b|\b\. Donald Trump's\b|\b\. Trump's\b|\b\. trump's\b|\b\. Donald John's\b|\b\. Donald J's\b/g, ". " + capitalizeFirstLetter(names[Math.round(Math.random()*names.length)]) + "'s");
  v = v.replace(/\bDonald John Trump's\b|\bDonald Trump's\b|\bTrump's\b|\btrump's\b|\bDonald John's\b|\bDonald J's\b/g, names[Math.round(Math.random()*names.length)] + "'s");
  v = v.replace(/\bDonald John Trump\b|\bDonald Trump\b|\bDonald Dru\b|\bTrump\b|\bTrump\b|\bDonald John\b|\bDonald J\b/g, "Donald Trump, " + names[Math.round(Math.random()*names.length)] + ",");
  v = v.replace(/,\./g, ".")
  v = v.replace(/,'/g, "'")
  v = v.replace(/,,/g, ",")
  v = v.replace(/,:/g, ":")

  textNode.nodeValue = v;
}
