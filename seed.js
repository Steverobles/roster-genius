require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Player = require('./models/player');


(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Quarterbacks', sortOrder: 10},
    {name: 'Running Backs', sortOrder: 20},
    {name: 'Wide Receivers', sortOrder: 30},
    {name: 'Tight Ends', sortOrder: 40},
    {name: 'Kickers', sortOrder: 50},
    {name: 'Team Defenses', sortOrder: 60},
  ]);

  await Player.deleteMany({});
  const players = await Player.create([
    {name: 'Patrick Mahomes(KC)', category: categories[0], tier: 1},
    {name: 'Jalen Hurts(PHI)', category: categories[0], tier: 1},
    {name: 'Josh Allen(BUF)', category: categories[0], tier: 1},
    {name: 'Lamar Jackson(BAL)', category: categories[0], tier: 2},
    {name: 'Joe Burrow(CIN)', category: categories[0], tier: 2},
    {name: 'Justin Fields(CHI)', category: categories[0], tier: 2},
    {name: 'Justin Herbert(LAC)', category: categories[0], tier: 2},
    {name: 'Trevor Lawrence(JAC)', category: categories[0], tier: 2},
    {name: 'Deshaun Watson(CLE)', category: categories[0], tier: 3},
    {name: 'Daniel Jones(NYG)', category: categories[0], tier: 3},
    {name: 'Dak Prescott(DAL)', category: categories[0], tier: 3},
    {name: 'Tua Tagovailoa(MIA)', category: categories[0], tier: 3},
    {name: 'Geno Smith(SEA)', category: categories[0], tier: 3},
    {name: 'Kirk Cousins(MIN)', category: categories[0], tier: 3},
    {name: 'Anthony Richardson(IND)', category: categories[0], tier: 3},
    {name: 'Aaron Rodgers(GB)', category: categories[0], tier: 3},
    {name: 'Jared Goff(DET)', category: categories[0], tier: 4},
    {name: 'Russell Wilson(DEN)', category: categories[0], tier: 4},
    {name: 'Derek Carr(NO)', category: categories[0], tier: 4},
    {name: 'Kenny Pickett(PIT)', category: categories[0], tier: 4},
    {name: 'Jordan Love(GB)', category: categories[0], tier: 4},
    {name: 'Matthew Stafford(LAR)', category: categories[0], tier: 4},
    {name: 'Brock Purdy(SF)', category: categories[0], tier: 4},
    {name: 'Sam Howell(WAS)', category: categories[0], tier: 4},
    {name: 'Bryce Young(CAR)', category: categories[0], tier: 4},
    {name: 'Ryan Tannehill(TEN)', category: categories[0], tier: 4},
    {name: 'Jimmy Garrapolo(LV)', category: categories[0], tier: 4},
    {name: 'Mac Jones(NE)', category: categories[0], tier: 4},
    {name: 'CJ Stroud(HOU)', category: categories[0], tier: 4},
    {name: 'Christain MaCaffrey(SF)', category: categories[1], tier: 1},
    {name: 'Nick Chubb(CLE)', category: categories[1], tier: 1},
    {name: 'Austin Ekeler(LAC)', category: categories[1], tier: 1},
    {name: 'Bijan Robinson(ATL)', category: categories[1], tier: 1},
    {name: 'Derrick Henry(TEN)', category: categories[1], tier: 2},
    {name: 'Tony Pollard(DAL)', category: categories[1], tier: 2},
    {name: 'Saquon Barkley(NYG)', category: categories[1], tier: 2},
    {name: 'Josh Jacobs(LV)', category: categories[1], tier: 2},
    {name: 'Joe Mixon(CIN)', category: categories[1], tier: 3},
    {name: 'Najee Harris(PIT)', category: categories[1], tier: 3},
    {name: 'Rhamondre Stevenson(NE)', category: categories[1], tier: 3},
    {name: 'Travis Etienne Jr.(JAC)', category: categories[1], tier: 3},
    {name: 'Jahmyr Gibbs(DET)', category: categories[1], tier: 3},
    {name: 'Aaron Jones(GB)', category: categories[1], tier: 3},
    {name: 'Kenneth Walker(SEA)', category: categories[1], tier: 3},
    {name: 'Dameon Pierce(HOU)', category: categories[1], tier: 4},
    {name: 'J.K. Dobbins(BAL)', category: categories[1], tier: 4},
    {name: 'Miles Sanders(CAR)', category: categories[1], tier: 4},
    {name: 'Breece Hall(NYJ)', category: categories[1], tier: 4},
    {name: 'Alexander Mattison(MIN)', category: categories[1], tier: 4},
    {name: 'Cam Akers(LAR)', category: categories[1], tier: 4},
    {name: 'James Connor(AZ)', category: categories[1], tier: 4},
    {name: 'David Montgomery(DET)', category: categories[1], tier: 4},
    {name: 'James Cook(BUF)', category: categories[1], tier: 4},
    {name: 'Jonathan Taylor(IND)', category: categories[1], tier: 4},
    {name: 'Rachaad White(TB)', category: categories[1], tier: 4},
    {name: 'Javonte Williams(DEN)', category: categories[1], tier: 4},
    {name: 'Isiah Pacheco(KC)', category: categories[1], tier: 4},
    {name: 'Alvin Kamara(NO)', category: categories[1], tier: 5},
    {name: 'Dalvin Cook(NYJ)', category: categories[1], tier: 5},
    {name: 'Khalil Herbert(CHI)', category: categories[1], tier: 5},
    {name: 'Deandre Swift(PHI)', category: categories[1], tier: 5},
    {name: 'Brian Robinson(WAS)', category: categories[1], tier: 5},
    {name: 'AJ Dillon(GB)', category: categories[1], tier: 5},
    {name: 'Antonio Gibson(WAS)', category: categories[1], tier: 5},
    {name: 'Samaje Perine(DEN)', category: categories[1], tier: 5},
    {name: 'Jamaal Williams(NO)', category: categories[1], tier: 5},
    {name: 'Zach Charbonnet(SEA)', category: categories[1], tier: 5},
    {name: 'Rashaad Penny(PHI)', category: categories[1], tier: 5},
    {name: 'Raheem Mostert(MIA)', category: categories[1], tier: 6},
    {name: 'Elijah Mitchell(SF)', category: categories[1], tier: 6},
    {name: 'Damien Harris(BUF)', category: categories[1], tier: 6},
    {name: 'Tyler Allgeier(ATL)', category: categories[1], tier: 6},
    {name: 'Jaylen Warren(PIT)', category: categories[1], tier: 6},
    {name: 'Ezekiel Elliott(NE)', category: categories[1], tier: 6},
    {name: 'Devin Singletary(HOU)', category: categories[1], tier: 6},
    {name: 'Justin Jefferson(MIN)', category: categories[2], tier: 1},
    {name: 'JaMaar Chase(CIN)', category: categories[2], tier: 1},
    {name: 'Tyreek Hill(MIA)', category: categories[2], tier: 1},
    {name: 'Stefon Diggs(BUF)', category: categories[2], tier: 2},
    {name: 'A.J. Brown(PHI)', category: categories[2], tier: 2},
    {name: 'CeDee Lamb(DAL)', category: categories[2], tier: 2},
    {name: 'Davante Adams(LV)', category: categories[2], tier: 2},
    {name: 'Amon-Ra St.Brown(DET)', category: categories[2], tier: 2},
    {name: 'Coopoer Kupp(LAR)', category: categories[2], tier: 2},
    {name: 'Garrett Wilson(NYJ)', category: categories[2], tier: 2},
    {name: 'Jaylen Waddle(MIA)', category: categories[2], tier: 3},
    {name: 'Chris Olave(NO)', category: categories[2], tier: 3},
    {name: 'Tee Higgins(CIN)', category: categories[2], tier: 3},
    {name: 'DeVonta Smith(PHI)', category: categories[2], tier: 3},
    {name: 'Amari Cooper(CLE)', category: categories[2], tier: 3},
    {name: 'Deebo Samuel(SF)', category: categories[2], tier: 3},
    {name: 'DK Metcalf(SEA)', category: categories[2], tier: 4},
    {name: 'Calvin Ridley(ATL)', category: categories[2], tier: 4},
    {name: 'DJ Moore(CHI)', category: categories[2], tier: 4},
    {name: 'Christain Watson(GB)', category: categories[2], tier: 4},
    {name: 'Keenan Allen(LAC)', category: categories[2], tier: 4},
    {name: 'Brandon Aiyuk(SF)', category: categories[2], tier: 4},
    {name: 'DeAndre Hopkins(TEN)', category: categories[2], tier: 4},
    {name: 'Terry McLaurin(WAS)', category: categories[2], tier: 4},
    {name: 'Drake London(ATL)', category: categories[2], tier: 5},
    {name: 'Mike Williams(LAC)', category: categories[2], tier: 5},
    {name: 'Tyler Lockett(SEA)', category: categories[2], tier: 5},
    {name: 'Mike Evans(TB)', category: categories[2], tier: 5},
    {name: 'Christain Kirk(JAC)', category: categories[2], tier: 5},
    {name: 'Jahan Dotson(WAS)', category: categories[2], tier: 5},
    {name: 'Dionte Johnson(PIT)', category: categories[2], tier: 5},
    {name: 'Chris Godwin(TB)', category: categories[2], tier: 5},
    {name: 'George Pickens(PIT)', category: categories[2], tier: 5},
    {name: 'Jerry Jeudy(DEN))', category: categories[2], tier: 5},
    {name: 'Gabe Davis(BUF)', category: categories[2], tier: 5},
    {name: 'Marquise Brown(ARI)', category: categories[2], tier: 5},
    {name: 'Michael Pittman(IND)', category: categories[2], tier: 5},
    {name: 'Jordan Addison(MIN)', category: categories[2], tier: 5},
    {name: 'Courland Sutton(DEN)', category: categories[2], tier: 6},
    {name: 'Brandin Cooks(DAL)', category: categories[2], tier: 6},
    {name: 'Jaxon Smith-Nigba(SEA)', category: categories[2], tier: 6},
    {name: 'Zay Flowers(BAL)', category: categories[2], tier: 6},
    {name: 'Treylon Burks(TEN)', category: categories[2], tier: 6},
    {name: 'Elijah Moore(CLE)', category: categories[2], tier: 6},
    {name: 'Rashod Bateman(BAL)', category: categories[2], tier: 6},
    {name: 'Skyy Moore(KC)', category: categories[2], tier: 6},
    {name: 'Quentin Johnston(LAC)', category: categories[2], tier: 6},
    {name: 'Michael Thomas(NO)', category: categories[2], tier: 6},
    {name: 'Kadarius Toney(KC)', category: categories[2], tier: 6},
    {name: 'Allen Lazard(NYJ)', category: categories[2], tier: 6},
    {name: 'Travis Kelce(KC)', category: categories[3], tier: 1},
    {name: 'Mark Andrews(BAL)', category: categories[3], tier: 1},
    {name: 'T.J. Hockenson(MIN)', category: categories[3], tier: 1},
    {name: 'Darren Waller(NYG)', category: categories[3], tier: 2},
    {name: 'George Kittle(SF)', category: categories[3], tier: 2},
    {name: 'Kyle Pitts(ATL)', category: categories[3], tier: 2},
    {name: 'Dallas Goedert(PHI)', category: categories[3], tier: 2},
    {name: 'Pat Freiermuth(PIT)', category: categories[3], tier: 2},
    {name: 'Evan Engram(JAC)', category: categories[3], tier: 2},
    {name: 'David Njoku(CLE)', category: categories[3], tier: 3},
    {name: 'Chigoziem Okonkwo(TEN)', category: categories[3], tier: 3},
    {name: 'Dalton Schultz(HOU)', category: categories[3], tier: 3},
    {name: 'Dalton Kincaid(BUF)', category: categories[3], tier: 3},
    {name: 'Tyler Higbee(LAR)', category: categories[3], tier: 3},
    {name: 'Cole Kmet(CHI)', category: categories[3], tier: 3},
    {name: 'Greg Dulcich(DEN)', category: categories[3], tier: 3},
    {name: 'Juwan Johnson(NO)', category: categories[3], tier: 3},
    {name: 'Gerald Everett(LAC)', category: categories[3], tier: 3},
    {name: 'Sam LaPorta(DET)', category: categories[3], tier: 4},
    {name: 'Irv Smith Jr.(CIN)', category: categories[3], tier: 4},
    {name: 'Taysom Hill(NO)', category: categories[3], tier: 4},
    {name: 'Hunter Henry(NE)', category: categories[3], tier: 4},
    {name: 'Dawson Knox(BUF)', category: categories[3], tier: 4},
    {name: 'Hayden Hurt(CAR)', category: categories[3], tier: 4},
    {name: 'Justin Tucker(BAL)', category: categories[4], tier: 1},
    {name: 'Tyler Bass(BUF)', category: categories[4], tier: 1},
    {name: 'Harrison Butker(KC)', category: categories[4], tier: 1},
    {name: 'Evan McPherson(CIN)', category: categories[4], tier: 1},
    {name: 'Daniel Carlson(LV)', category: categories[4], tier: 2},
    {name: 'Younghoe Koo(ATL)', category: categories[4], tier: 2},
    {name: 'Jaon Sanders(MIA)', category: categories[4], tier: 2},
    {name: 'Jason Myers(SEA)', category: categories[4], tier: 2},
    {name: 'Jake Elliott(PHI)', category: categories[4], tier: 2},
    {name: 'Brandon McManus(JAC)', category: categories[4], tier: 3},
    {name: 'Greg Zurlein(NYJ)', category: categories[4], tier: 3},
    {name: 'Greg Joseph(MIN)', category: categories[4], tier: 3},
    {name: 'Graham Gano(NYG)', category: categories[4], tier: 3},
    {name: 'Will Lutz(DEN)', category: categories[4], tier: 3},
    {name: 'Jake Moody(SF)', category: categories[4], tier: 3},
    {name: 'San Francisco 49ers', category: categories[5], tier: 1},
    {name: 'Dallas Cowboys', category: categories[5], tier: 1},
    {name: 'Philadelphia Eagles', category: categories[5], tier: 1},
    {name: 'Buffalo Bills', category: categories[5], tier: 2},
    {name: 'New York Jets', category: categories[5], tier: 2},
    {name: 'New England Patriots', category: categories[5], tier: 2},
    {name: 'Baltimore Ravens', category: categories[5], tier: 2},
    {name: 'Pittsburgh Steelers', category: categories[5], tier: 3},
    {name: 'Denver Broncos', category: categories[5], tier: 3},
    {name: 'Kansas City Chiefs', category: categories[5], tier: 3},
    {name: 'New Orleans Saints', category: categories[5], tier: 3},
    {name: 'Miami Dolphins', category: categories[5], tier: 3},
    {name: 'Washington Commanders', category: categories[5], tier: 3},
    {name: 'Cincinnati Bengals', category: categories[5], tier: 4},
    {name: 'Cleveland Browns', category: categories[5], tier: 4},
    {name: 'Green Bay Packers', category: categories[5], tier: 4},
    {name: 'Los Angeles Chargers', category: categories[5], tier: 4},
    {name: 'Jacksonville Jaguars', category: categories[5], tier: 4},
    {name: 'Tampa Bay Buccaneers', category: categories[5], tier: 4},
    {name: 'Seattle Seahawks', category: categories[5], tier: 4},
    {name: 'Indianapolis Colts', category: categories[5], tier: 4},
    {name: 'Carolina Panthers', category: categories[5], tier: 4},
    {name: 'Tennessee Titans', category: categories[5], tier: 4},
    {name: 'New York Giants', category: categories[5], tier: 4},
    {name: 'Detroit Lions', category: categories[5], tier: 4},
    {name: 'Los Angeles Rams', category: categories[5], tier: 4},
    {name: 'Minnesota Vikings', category: categories[5], tier: 4},
    {name: 'Atlanta Falcons', category: categories[5], tier: 4},
    {name: 'Arizona Cardinals', category: categories[5], tier: 4},
    {name: 'Houston Texans', category: categories[5], tier: 4},
    {name: 'Chicago Bears', category: categories[5], tier: 4},
    {name: 'Las Vegas Raiders', category: categories[5], tier: 4},
  ]);

  console.log(players)

  process.exit();

})();
