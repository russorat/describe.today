var words = [
"fab",
"fabled",
"fabulous",
"facetious",
"facilitative",
"factitious",
"factual",
"fainthearted",
"fair",
"faithful",
"fallacious",
"famed",
"famous",
"fanatic",
"fancy",
"fantabulous",
"fantastic",
"farfetched",
"fascinating",
"fashionable",
"fastidious",
"fateful",
"fattening",
"fatuous",
"favorable",
"fearless",
"featherbrained",
"feisty",
"felicitous",
"felonious",
"fermentable",
"ferocious",
"fervent",
"festive",
"fiddling",
"fidgety",
"fiendish",
"fierce",
"fiery",
"fighting",
"fine",
"fit",
"fizzy",
"flabbergasted",
"flabby",
"flagrant",
"flamboyant",
"flameproof",
"flaming",
"flammable",
"flashy",
"flatbottomed",
"flatfooted",
"flattering",
"flaunty",
"flavorful",
"flawless",
"flippant",
"flirtatious",
"floppy",
"floral",
"flossy",
"flourishing",
"flowery",
"flowing",
"fluctuating",
"fluent",
"fluffy",
"fluid",
"flukey",
"foamy",
"focused",
"folksy",
"fond",
"foolhardy",
"foolproof",
"footloose",
"forcible",
"foremost",
"foreseeable",
"foreshadowing",
"foresightful",
"formidable",
"forthright",
"fortuitous",
"fortunate",
"foxy",
"frank",
"freaky",
"free",
"freehearted",
"freewheeling",
"fresh",
"fried",
"friendly",
"frilly",
"frolicky",
"frolicsome",
"frothy",
"fruitful",
"fueled",
"fugly",
"fulfilled",
"full",
"functional",
"funded",
"funky",
"funny",
"futuristic",
"fun",

"macabre",
"macaronic",
"macedonian",
"macerative",
"machiavellian",
"machinelike",
"macho",
"macrencephalic",
"macrencephalous",
"macro",
"macrobiotic",
"macrocephalic",
"macrocephalous",
"macrocosmic",
"macroeconomic",
"macromolecular",
"macroscopic",
"macroscopical",
"maculate",
"mad",
"madagascan",
"madcap",
"maddened",
"maddening",
"made",
"magenta",
"maggoty",
"magic",
"magical",
"magisterial",
"magnanimous",
"magnetic",
"magnetised",
"magnetized",
"magnificent",
"magnified",
"magniloquent",
"magyar",
"maiden",
"maidenlike",
"maidenly",
"mailed",
"maimed",
"main",
"mainstreamed",
"maintainable",
"maintained",
"majestic",
"major",
"majuscular",
"majuscule",
"makeshift",
"maladaptive",
"maladjusted",
"maladjustive",
"maladroit",
"malapropos",
"malarial",
"malawian",
"malay",
"malayan",
"malaysian",
"malcontent",
"male",
"maledict",
"malefic",
"maleficent",
"malevolent",
"malformed",
"malfunctioning",
"malian",
"malicious",
"malign",
"malignant",
"malleable",
"malnourished",
"malodorous",
"malodourous",
"malposed",
"malted",
"maltese",
"malthusian",
"maltreated",
"mammalian",
"mammary",
"mammoth",
"manageable",
"managerial",
"manchurian",
"mancunian",
"mandaean",
"mandatory",
"mandean",
"mandibular",
"mandibulate",
"mandibulofacial",
"maneuverable",
"manful",
"mangey",
"mangled",
"mangy",
"maniac",
"maniacal",
"manic",
"manichaean",
"manichean",
"manichee",
"maniclike",
"manifest",
"manifold",
"manipulable",
"manipulative",
"manky",
"manlike",
"manly",
"manned",
"mannered",
"mannerly",
"mannish",
"manoeuvrable",
"manorial",
"manque",
"mansard",
"mantic",
"mantled",
"manual",
"manufactured",
"manx",
"many",
"maoist",
"maplelike",
"marauding",
"marbled",
"marbleised",
"marbleized",
"marginal",
"marian",
"marine",
"marital",
"maritime",
"marked",
"marketable",
"markovian",
"marly",
"marmoreal",
"marmorean",
"maroc",
"maroon",
"marooned",
"marred",
"marriageable",
"married",
"marshy",
"marsupial",
"martial",
"martian",
"marvellous",
"marvelous",
"marxist",
"masculine",
"masked",
"masochistic",
"masonic",
"masoretic",
"mass",
"massive",
"masted",
"master",
"mastered",
"masterful",
"masterless",
"masterly",
"mastoid",
"mastoidal",
"mat",
"matched",
"matching",
"matchless",
"mated",
"mateless",
"material",
"materialistic",
"maternal",
"maternalistic",
"matey",
"mathematical",
"matriarchal",
"matriarchic",
"matricentric",
"matrilineal",
"matrilinear",
"matrimonial",
"matronly",
"matt",
"matte",
"matted",
"maturational",
"mature",
"matured",
"matutinal",
"maudlin",
"mauritanian",
"mauritian",
"mauve",
"maverick",
"mawkish",
"maxi",
"maxillary",
"maxillodental",
"maxillofacial",
"maxillomandibular",
"maximal",
"maximising",
"maximizing",
"maximum",
"mayoral",
"mazed",
"mazy",
"meager",
"meagerly",
"meagre",
"mealy",
"mealymouthed",
"mean",
"meandering",
"meaning",
"meaningful",
"meaningless",
"meanspirited",
"measly",
"measurable",
"measured",
"measureless",
"meatless",
"meaty",
"mechanic",
"mechanical",
"mechanised",
"mechanistic",
"mechanized",
"mecopterous",
"meddlesome",
"meddling",
"mediaeval",
"medial",
"median",
"mediate",
"mediated",
"mediatorial",
"mediatory",
"medical",
"medicative",
"medicinal",
"medicolegal",
"medieval",
"mediocre",
"meditative",
"mediterranean",
"medium",
"medullary",
"medullated",
"medusoid",
"meek",
"meet",
"megakaryocytic",
"megalithic",
"megaloblastic",
"megalomaniacal",
"megalomanic",
"megascopic",
"meiotic",
"melancholic",
"melancholy",
"melanesian",
"meliorative",
"mellifluous",
"mellisonant",
"mellow",
"mellowed",
"melodic",
"melodious",
"melodramatic",
"meltable",
"melted",
"melting",
"membered",
"memberless",
"membranous",
"memorable",
"menacing",
"mendacious",
"mendelian",
"mendicant",
"menial",
"meningeal",
"menopausal",
"mensal",
"menstrual",
"mensurable",
"mensural",
"mental",
"mentholated",
"mephistophelean",
"mephistophelian",
"mephitic",
"mercantile",
"mercenary",
"mercerised",
"mercerized",
"merchantable",
"merciful",
"merciless",
"mercurial",
"mercuric",
"mercurous",
"mere",
"meretricious",
"merged",
"merging",
"meridian",
"meridional",
"meritable",
"merited",
"meritless",
"meritocratic",
"meritorious",
"merovingian",
"merry",
"mesenteric",
"meshed",
"meshuga",
"meshugga",
"meshugge",
"meshuggeneh",
"meshuggener",
"mesial",
"mesic",
"mesmeric",
"mesmerised",
"mesmerized",
"mesmerizing",
"mesoamerican",
"mesoblastic",
"mesodermal",
"mesolithic",
"mesomorphic",
"mesonic",
"mesophytic",
"mesozoic",
"messianic",
"messy",
"metabolic",
"metabolous",
"metacarpal",
"metacentric",
"metagrabolised",
"metagrabolized",
"metagrobolised",
"metagrobolized",
"metal",
"metallic",
"metallike",
"metalloid",
"metallurgic",
"metallurgical",
"metameric",
"metamorphic",
"metamorphous",
"metaphoric",
"metaphorical",
"metaphysical",
"metastable",
"metastatic",
"metatarsal",
"meteoric",
"meteoritic",
"meteoritical",
"meteorologic",
"meteorological",
"methodical",
"methodist",
"methodological",
"methylated",
"meticulous",
"metonymic",
"metonymical",
"metric",
"metrical",
"metrological",
"metropolitan",
"mettlesome",
"mexican",
"miasmal",
"miasmic",
"micaceous",
"michelangelesque",
"micro",
"microbial",
"microbic",
"microcephalic",
"microcephalous",
"microcosmic",
"microcrystalline",
"microeconomic",
"microelectronic",
"micrometeoric",
"micrometeoritic",
"micropylar",
"microscopic",
"microscopical",
"microsomal",
"mid",
"middle",
"middlemost",
"middling",
"midget",
"midi",
"midland",
"midmost",
"midway",
"midweekly",
"midwestern",
"miffed",
"mighty",
"migrant",
"migrational",
"migratory",
"milanese",
"milch",
"mild",
"militant",
"militarised",
"militaristic",
"militarized",
"military",
"milkless",
"milklike",
"milky",
"milled",
"millenarian",
"millenary",
"millennial",
"millennian",
"million",
"millionth",
"mimetic",
"mimic",
"minacious",
"minatory",
"mincing",
"minded",
"mindful",
"mindless",
"mined",
"mineral",
"mingy",
"mini",
"miniature",
"minimal",
"minimalist",
"minimized",
"minimum",
"miniscule",
"ministerial",
"ministrant",
"minoan",
"minor",
"mint",
"minty",
"minus",
"minuscular",
"minuscule",
"minute",
"miotic",
"miraculous",
"mired",
"mirky",
"mirrored",
"mirrorlike",
"mirthful",
"mirthless",
"miry",
"misanthropic",
"misanthropical",
"misappropriated",
"misbegot",
"misbegotten",
"misbranded",
"miscellaneous",
"mischievous",
"miscible",
"miserable",
"miserly",
"misfortunate",
"misguided",
"mishnaic",
"mislabeled",
"mislaid",
"misleading",
"mismatched",
"mismated",
"misogynic",
"misogynistic",
"misogynous",
"misplaced",
"misrelated",
"misrepresented",
"missed",
"misshapen",
"missing",
"missional",
"missionary",
"mistakable",
"mistaken",
"mistreated",
"mistrustful",
"misty",
"misunderstood",
"misused",
"mithraic",
"mithraistic",
"mitigable",
"mitigated",
"mitigative",
"mitigatory",
"mitotic",
"mitral",
"mixable",
"mixed",
"mnemonic",
"mnemotechnic",
"mnemotechnical",
"moated",
"mobbish",
"mobile",
"moblike",
"mock",
"mocking",
"mod",
"modal",
"model",
"modeled",
"moderate",
"moderating",
"moderato",
"modern",
"moderne",
"modernised",
"modernistic",
"modernized",
"modest",
"modifiable",
"modified",
"modish",
"modular",
"modulated",
"mohammedan",
"moire",
"moist",
"molal",
"molar",
"moldable",
"molded",
"moldovan",
"moldy",
"molecular",
"molten",
"momentaneous",
"momentary",
"momentous",
"monacan",
"monandrous",
"monarchal",
"monarchic",
"monarchical",
"monastic",
"monastical",
"monatomic",
"monaural",
"monecious",
"monegasque",
"moneran",
"monestrous",
"monetary",
"moneyed",
"moneyless",
"moneymaking",
"mongol",
"mongolian",
"mongoloid",
"monied",
"monistic",
"monitory",
"monkish",
"mono",
"monoatomic",
"monocarboxylic",
"monocarpic",
"monochromatic",
"monochrome",
"monochromic",
"monochromous",
"monocled",
"monoclinal",
"monoclinic",
"monoclinous",
"monoclonal",
"monocotyledonous",
"monodic",
"monodical",
"monoecious",
"monoestrous",
"monogamous",
"monogenic",
"monogynic",
"monogynous",
"monoicous",
"monolingual",
"monolithic",
"monomaniacal",
"monometallic",
"monomorphemic",
"mononuclear",
"mononucleate",
"monophonic",
"monophysite",
"monophysitic",
"monoploid",
"monopolistic",
"monopteral",
"monosemous",
"monosyllabic",
"monotheistic",
"monotone",
"monotonic",
"monotonous",
"monotypic",
"monounsaturated",
"monovalent",
"monovular",
"monozygotic",
"monstrous",
"montane",
"monthlong",
"monthly",
"montserratian",
"monumental",
"moody",
"moonless",
"moonlike",
"moonlit",
"moonstruck",
"moony",
"moorish",
"moot",
"moraceous",
"moral",
"moralistic",
"moravian",
"morbid",
"morbific",
"morbilliform",
"mordacious",
"mordant",
"more",
"moresque",
"morganatic",
"moribund",
"mormon",
"moroccan",
"moronic",
"morose",
"morphemic",
"morphologic",
"morphological",
"morphophonemic",
"mortal",
"mortgaged",
"mortified",
"mortifying",
"mortuary",
"mosaic",
"moslem",
"mosstone",
"mossy",
"most",
"motherless",
"motherlike",
"motherly",
"mothproof",
"mothy",
"motile",
"motional",
"motionless",
"motivated",
"motivating",
"motivational",
"motivative",
"motive",
"motiveless",
"motley",
"motor",
"motored",
"motorial",
"motorised",
"motorized",
"motorless",
"mottled",
"mouldy",
"mountainous",
"mounted",
"mournful",
"mourning",
"mouselike",
"mousey",
"mousy",
"mouthless",
"mouthlike",
"movable",
"moveable",
"moved",
"moving",
"mown",
"mozambican",
"mozartean",
"mozartian",
"much",
"muciferous",
"mucilaginous",
"mucinoid",
"mucinous",
"mucky",
"mucocutaneous",
"mucoid",
"mucoidal",
"mucopurulent",
"mucosal",
"mucose",
"mucous",
"muddied",
"muddled",
"muddleheaded",
"muddy",
"muffled",
"muggy",
"muhammadan",
"mulish",
"mullioned",
"multicellular",
"multicolor",
"multicolored",
"multicolour",
"multicoloured",
"multicultural",
"multidimensional",
"multiethnic",
"multifaceted",
"multifactorial",
"multifarious",
"multiform",
"multilane",
"multilateral",
"multilevel",
"multilingual",
"multinational",
"multinomial",
"multinucleate",
"multiparous",
"multipartite",
"multiphase",
"multiple",
"multiplex",
"multiplicative",
"multiplied",
"multipotent",
"multipurpose",
"multiracial",
"multistorey",
"multistoried",
"multistory",
"multitudinous",
"multivalent",
"multivariate",
"mum",
"mundane",
"municipal",
"munificent",
"mural",
"murdered",
"murderous",
"murine",
"murky",
"murmuring",
"murmurous",
"muscovite",
"muscular",
"musculoskeletal",
"mushy",
"musical",
"musicological",
"musing",
"musky",
"muslim",
"mussy",
"must",
"mustached",
"mustachioed",
"musty",
"mutable",
"mutafacient",
"mutagenic",
"mutant",
"mutational",
"mutative",
"mute",
"muted",
"mutilated",
"mutinous",
"mutual",
"mutualist",
"muzzy",
"myalgic",
"mycenaean",
"myelic",
"myelinated",
"myelinic",
"myeloid",
"myocardial",
"myoid",
"myopathic",
"myopic",
"myotic",
"myotonic",
"myriad",
"myrmecophagous",
"myrmecophilous",
"myrmecophytic",
"mysophobic",
"mysterious",
"mystic",
"mystical",
"mystified",
"mystifying",
"mythic",
"mythical",
"mythologic",
"mythological",

"sabahan",
"sabbatarian",
"sabbatic",
"sabbatical",
"sabertoothed",
"sabine",
"sable",
"saccadic",
"saccharine",
"sacculate",
"sacculated",
"sacerdotal",
"sacked",
"saclike",
"sacral",
"sacramental",
"sacred",
"sacrificeable",
"sacrificial",
"sacrilegious",
"sacrosanct",
"sad",
"saddled",
"sadducean",
"sadistic",
"sadomasochistic",
"safe",
"sagacious",
"sage",
"sagging",
"sagittal",
"sagittate",
"sagittiform",
"saharan",
"said",
"sainted",
"saintlike",
"saintly",
"salable",
"salacious",
"salamandriform",
"salaried",
"saleable",
"salient",
"salientian",
"saliferous",
"saline",
"salivary",
"sallow",
"salmon",
"salt",
"salted",
"saltish",
"saltlike",
"salty",
"salubrious",
"salutary",
"salvadoran",
"salvadorean",
"salvageable",
"salverform",
"salvific",
"salving",
"same",
"samoan",
"sanative",
"sanctified",
"sanctimonious",
"sanctionative",
"sanctioned",
"sanctioning",
"sandaled",
"sandalled",
"sandlike",
"sandpapery",
"sandy",
"sane",
"sanguinary",
"sanguine",
"sanguineous",
"sanious",
"sanitary",
"sanitised",
"sanitized",
"sapid",
"sapiens",
"sapient",
"sapiential",
"sapless",
"saponaceous",
"saponified",
"saporous",
"sapphic",
"sapphire",
"sapphirine",
"sappy",
"saprobic",
"saprophagous",
"saprophytic",
"saprozoic",
"sarawakian",
"sarcastic",
"sarcoid",
"sarcolemmal",
"sarcolemmic",
"sarcolemnous",
"sarcosomal",
"sardinian",
"sardonic",
"sartorial",
"sassy",
"satanic",
"satellite",
"satiable",
"satiate",
"satiated",
"satiny",
"satiric",
"satirical",
"satisfactory",
"satisfiable",
"satisfied",
"satisfying",
"saturated",
"saturnine",
"satyric",
"satyrical",
"saucy",
"saudi",
"saurian",
"saute",
"sauteed",
"savage",
"saved",
"saving",
"savorless",
"savory",
"savourless",
"savoury",
"saxatile",
"saxicoline",
"saxicolous",
"saxon",
"scabby",
"scabrous",
"scalable",
"scalar",
"scaled",
"scaleless",
"scalelike",
"scalene",
"scaley",
"scalic",
"scalloped",
"scaly",
"scandalmongering",
"scandalous",
"scandent",
"scandinavian",
"scant",
"scanty",
"scaphoid",
"scapose",
"scapular",
"scapulohumeral",
"scarce",
"scarecrowish",
"scared",
"scarlet",
"scarred",
"scary",
"scathing",
"scatological",
"scatterbrained",
"scattered",
"scattershot",
"scatty",
"scenic",
"scented",
"scentless",
"sceptered",
"sceptical",
"sceptred",
"scheduled",
"schematic",
"scheming",
"schismatic",
"schismatical",
"schizoid",
"schizophrenic",
"schmaltzy",
"schmalzy",
"scholarly",
"scholastic",
"schoolboyish",
"schoolgirlish",
"schoolwide",
"sciatic",
"scientific",
"scintillant",
"scintillating",
"sciolistic",
"sclerosed",
"sclerotic",
"scopal",
"scorbutic",
"scorched",
"scorching",
"scoreless",
"scorned",
"scornful",
"scotch",
"scotomatous",
"scots",
"scottish",
"scoundrelly",
"scoured",
"scowling",
"scrabbly",
"scraggly",
"scraggy",
"scrambled",
"scrappy",
"scratchy",
"scrawny",
"screaky",
"screaming",
"screechy",
"screwball",
"screwy",
"scrimpy",
"scrimy",
"scripted",
"scriptural",
"scrivened",
"scrofulous",
"scrotal",
"scrub",
"scrubbed",
"scrubby",
"scruffy",
"scrumptious",
"scrupulous",
"sculpted",
"sculptural",
"sculptured",
"sculpturesque",
"scummy",
"scurfy",
"scurrilous",
"scurrying",
"scurvy",
"scythian",
"seaborne",
"seafaring",
"seagirt",
"seagoing",
"sealed",
"seamanlike",
"seamanly",
"seamed",
"seamless",
"seamy",
"sear",
"searching",
"seared",
"searing",
"seasick",
"seasonable",
"seasonal",
"seasoned",
"seated",
"seaward",
"seaworthy",
"sebaceous",
"sec",
"secluded",
"second",
"secondary",
"secondhand",
"secret",
"secretarial",
"secretive",
"secretory",
"sectarian",
"sectional",
"sectioned",
"sectorial",
"secular",
"secure",
"sedate",
"sedative",
"sedentary",
"sedgelike",
"sedgy",
"sedimentary",
"seditious",
"seductive",
"sedulous",
"seeable",
"seeded",
"seedless",
"seedy",
"seeing",
"seeming",
"seemly",
"seeping",
"seething",
"segmental",
"segmented",
"segregated",
"seismal",
"seismic",
"seismologic",
"seismological",
"select",
"selected",
"selective",
"self",
"selfish",
"selfless",
"selfsame",
"seljuk",
"sellable",
"semantic",
"semestral",
"semestrial",
"semiabstract",
"semiannual",
"semiaquatic",
"semiarid",
"semiautobiographical",
"semiautomatic",
"semicentenary",
"semicentennial",
"semicircular",
"semicomatose",
"semiconducting",
"semiconductive",
"semiconscious",
"semidark",
"semidetached",
"semiempirical",
"semiformal",
"semihard",
"semiliquid",
"semiliterate",
"semilunar",
"semimonthly",
"seminal",
"seminiferous",
"seminude",
"semiofficial",
"semiopaque",
"semiotic",
"semiotical",
"semiparasitic",
"semipermanent",
"semipermeable",
"semipolitical",
"semiprecious",
"semiprivate",
"semipublic",
"semirigid",
"semiskilled",
"semisoft",
"semisolid",
"semisweet",
"semisynthetic",
"semite",
"semiterrestrial",
"semitic",
"semitransparent",
"semitropic",
"semitropical",
"semiweekly",
"sempiternal",
"senatorial",
"senecan",
"senegalese",
"senescent",
"senile",
"senior",
"sensate",
"sensational",
"sensationalistic",
"sensed",
"senseless",
"sensible",
"sensitised",
"sensitising",
"sensitive",
"sensitized",
"sensitizing",
"sensorial",
"sensorimotor",
"sensorineural",
"sensory",
"sensual",
"sensuous",
"sent",
"sentential",
"sententious",
"sentient",
"sentimental",
"sepaline",
"sepaloid",
"separable",
"separate",
"separated",
"separatist",
"separative",
"septal",
"septate",
"septic",
"septicemic",
"septrional",
"septuple",
"sepulchral",
"sequent",
"sequential",
"sequestered",
"sequined",
"seraphic",
"seraphical",
"serbian",
"sere",
"serendipitous",
"serene",
"serflike",
"serial",
"sericeous",
"sericultural",
"seriocomic",
"seriocomical",
"serious",
"serologic",
"serological",
"serous",
"serpentine",
"serrate",
"serrated",
"serried",
"serrulate",
"serviceable",
"servile",
"servo",
"servomechanical",
"sesquipedalian",
"sessile",
"set",
"setaceous",
"setose",
"settled",
"seven",
"sevenfold",
"seventeen",
"seventeenth",
"seventh",
"seventieth",
"seventy",
"severable",
"several",
"severe",
"severed",
"sewed",
"sewn",
"sexagenarian",
"sexagesimal",
"sexed",
"sexist",
"sexless",
"sextuple",
"sexual",
"sexy",
"seychellois",
"shabby",
"shackled",
"shaded",
"shadowed",
"shadowy",
"shady",
"shagged",
"shaggy",
"shakable",
"shakeable",
"shakedown",
"shaken",
"shakespearean",
"shakespearian",
"shaky",
"shallow",
"sham",
"shamanist",
"shamanistic",
"shambolic",
"shamed",
"shamefaced",
"shameful",
"shameless",
"shaped",
"shapeless",
"shapely",
"shaping",
"shared",
"sharing",
"sharp",
"sharpened",
"shattered",
"shattering",
"shatterproof",
"shaved",
"shaven",
"shavian",
"sheared",
"sheathed",
"shed",
"sheeny",
"sheepish",
"sheeplike",
"sheer",
"sheetlike",
"shelflike",
"shelfy",
"shelled",
"shellproof",
"sheltered",
"shelvy",
"shielded",
"shifting",
"shiftless",
"shifty",
"shimmery",
"shingly",
"shining",
"shinto",
"shintoist",
"shintoistic",
"shiny",
"shipboard",
"shipshape",
"shirty",
"shivering",
"shivery",
"shoaly",
"shockable",
"shocked",
"shocking",
"shod",
"shodden",
"shoddy",
"shoed",
"shoeless",
"shona",
"shopsoiled",
"shopworn",
"shoreward",
"shorn",
"short",
"shortened",
"shorthand",
"shortish",
"shortsighted",
"shot",
"shouldered",
"shouted",
"showery",
"showy",
"shredded",
"shrewd",
"shrewish",
"shrieked",
"shrill",
"shrimpy",
"shrinkable",
"shriveled",
"shrivelled",
"shrubby",
"shrunken",
"shuddering",
"shuddery",
"shuha",
"shut",
"shuttered",
"shy",
"siamese",
"siberian",
"sibilant",
"sibyllic",
"sibylline",
"sicilian",
"sick",
"sickening",
"sickish",
"sickly",
"side",
"sidearm",
"sidelong",
"sidereal",
"sidesplitting",
"sideways",
"sighted",
"sightless",
"sightly",
"sigmoid",
"sigmoidal",
"sign",
"signal",
"signed",
"significant",
"significative",
"sikh",
"silenced",
"silent",
"siliceous",
"silicious",
"silken",
"silklike",
"silky",
"silly",
"silty",
"silvan",
"silver",
"silverish",
"silvern",
"silvery",
"simian",
"similar",
"simple",
"simplex",
"simplistic",
"simulated",
"simultaneous",
"sincere",
"sinewy",
"sinful",
"singable",
"singaporean",
"singhalese",
"singing",
"single",
"singsong",
"singular",
"sinhala",
"sinhalese",
"sinister",
"sinistral",
"sinistrorsal",
"sinistrorse",
"sinitic",
"sinkable",
"sinless",
"sinning",
"sintered",
"sinuate",
"sinuous",
"sinusoidal",
"siouan",
"sissified",
"sissy",
"sissyish",
"sisterlike",
"sisterly",
"sisyphean",
"sitting",
"situated",
"six",
"sixfold",
"sixpenny",
"sixteen",
"sixteenth",
"sixth",
"sixtieth",
"sixty",
"sizable",
"size",
"sizeable",
"sized",
"sizzling",
"skanky",
"skeletal",
"skeptical",
"sketchy",
"skew",
"skewed",
"skilful",
"skilled",
"skillful",
"skim",
"skimmed",
"skimpy",
"skinless",
"skinned",
"skinnerian",
"skinny",
"skint",
"skintight",
"skirting",
"skittish",
"skyward",
"slack",
"slain",
"slaked",
"slanderous",
"slangy",
"slanted",
"slanting",
"slapdash",
"slaphappy",
"slapstick",
"slashed",
"slashing",
"slatey",
"slatternly",
"slaty",
"slaughterous",
"slav",
"slaveholding",
"slaveless",
"slavelike",
"slavic",
"slavish",
"slavonic",
"sleazy",
"sleek",
"sleeping",
"sleepless",
"sleepy",
"sleepyheaded",
"sleety",
"sleeved",
"sleeveless",
"slender",
"sliced",
"slick",
"slicked",
"sliding",
"slight",
"slighting",
"slim",
"slimed",
"slimy",
"slippered",
"slippery",
"slipping",
"slippy",
"slipshod",
"slithering",
"slithery",
"slivery",
"sloped",
"sloping",
"slopped",
"sloppy",
"sloshed",
"slothful",
"slouchy",
"sloughy",
"slovakian",
"slovenian",
"slovenly",
"slow",
"slowgoing",
"slubbed",
"sluggish",
"sluicing",
"slumberous",
"slumbery",
"slumbrous",
"slummy",
"slurred",
"slushy",
"sly",
"small",
"smaller",
"smallish",
"smarmy",
"smart",
"smashed",
"smashing",
"smelling",
"smelly",
"smiling",
"smitten",
"smoggy",
"smoked",
"smokeless",
"smoking",
"smoky",
"smoldering",
"smooth",
"smoothbore",
"smoothed",
"smoothened",
"smothered",
"smothering",
"smouldering",
"smudgy",
"smug",
"smuggled",
"smutty",
"snafu",
"snakelike",
"snaky",
"snappish",
"snappy",
"snarky",
"snarled",
"snarly",
"snazzy",
"sneak",
"sneaking",
"sneaky",
"sneering",
"sneezy",
"snide",
"sniffly",
"sniffy",
"snobbish",
"snobby",
"snoopy",
"snooty",
"snorty",
"snotty",
"snowbound",
"snowy",
"snub",
"snuff",
"snuffling",
"snuffly",
"snug",
"snuggled",
"soaked",
"soapy",
"soaring",
"sober",
"sobering",
"sobersided",
"sociable",
"social",
"socialised",
"socialist",
"socialistic",
"socialized",
"societal",
"sociobiologic",
"sociobiological",
"sociocultural",
"socioeconomic",
"sociolinguistic",
"sociological",
"sociopathic",
"socratic",
"sodden",
"sodding",
"soft",
"softened",
"softening",
"softheaded",
"softhearted",
"softish",
"soggy",
"soigne",
"soignee",
"soiled",
"solanaceous",
"solar",
"sold",
"soldierlike",
"soldierly",
"sole",
"soled",
"soleless",
"solemn",
"solicitous",
"solid",
"solidified",
"solitary",
"solo",
"solomonic",
"soluble",
"solvable",
"solved",
"solvent",
"somali",
"somalian",
"somatic",
"somatogenetic",
"somatogenic",
"somatosensory",
"somber",
"sombre",
"some",
"sometime",
"somniferous",
"somnific",
"somnolent",
"sonant",
"songful",
"songlike",
"sonic",
"sonorous",
"sonsie",
"sonsy",
"soothing",
"sooty",
"sophistic",
"sophistical",
"sophisticated",
"sophomore",
"soporiferous",
"soporific",
"soppy",
"sopranino",
"soprano",
"sorbed",
"sorbefacient",
"sorcerous",
"sordid",
"sore",
"sororal",
"sorrel",
"sorrowful",
"sorrowing",
"sorry",
"sorted",
"soteriological",
"sotho",
"sottish",
"soughing",
"sought",
"soulful",
"soulless",
"sound",
"soundable",
"sounding",
"soundless",
"soundproof",
"soupy",
"sour",
"soured",
"sourish",
"soused",
"south",
"southbound",
"southeast",
"southeasterly",
"southeastern",
"southeastward",
"southerly",
"southern",
"southernmost",
"southmost",
"southward",
"southwest",
"southwesterly",
"southwestern",
"southwestward",
"sovereign",
"soviet",
"sown",
"sozzled",
"spaced",
"spacey",
"spacial",
"spaciotemporal",
"spacious",
"spacy",
"spangled",
"spangly",
"spanish",
"spanking",
"spare",
"sparing",
"sparkling",
"sparkly",
"sparse",
"spartan",
"spasmodic",
"spastic",
"spatial",
"spatiotemporal",
"spattered",
"spatulate",
"spavined",
"spayed",
"speakable",
"speaking",
"special",
"specialised",
"specialistic",
"specialized",
"specifiable",
"specific",
"specified",
"specious",
"specked",
"speckled",
"speckless",
"spectacled",
"spectacular",
"spectral",
"spectrographic",
"spectrometric",
"spectroscopic",
"spectroscopical",
"specular",
"speculative",
"speechless",
"speedy",
"spellbinding",
"spellbound",
"spendable",
"spendthrift",
"spent",
"spermatic",
"spermicidal",
"spermous",
"spheric",
"spherical",
"spheroidal",
"sphingine",
"spic",
"spicate",
"spick",
"spicy",
"spiderlike",
"spiderly",
"spidery",
"spiffing",
"spiffy",
"spiked",
"spikelike",
"spiky",
"spinal",
"spindly",
"spineless",
"spinnable",
"spinnbar",
"spinose",
"spinous",
"spiny",
"spiral",
"spiraling",
"spirant",
"spirited",
"spiritless",
"spiritous",
"spiritual",
"spiritualist",
"spiritualistic",
"spirituous",
"spiteful",
"splanchnic",
"splashed",
"splashy",
"splattered",
"splay",
"splayfoot",
"splayfooted",
"splendid",
"splendiferous",
"splenetic",
"splenic",
"splinterless",
"splinterproof",
"splintery",
"split",
"splitting",
"splotched",
"spoilable",
"spoiled",
"spoilt",
"spoken",
"spondaic",
"spongelike",
"spongy",
"spontaneous",
"spooky",
"sporadic",
"sporogenous",
"sporting",
"sportive",
"sportsmanlike",
"sporty",
"spotless",
"spotted",
"spotty",
"spousal",
"spouting",
"sprawling",
"sprawly",
"spread",
"sprigged",
"sprightly",
"springless",
"springlike",
"springy",
"sprouted",
"spruce",
"spry",
"spumy",
"spunky",
"spurious",
"spurned",
"spurting",
"squab",
"squabby",
"squalid",
"squalling",
"squally",
"squamulose",
"squandered",
"square",
"squared",
"squarish",
"squashed",
"squashy",
"squat",
"squatty",
"squawky",
"squeaking",
"squeaky",
"squealing",
"squeamish",
"squeezable",
"squelched",
"squiffy",
"squiggly",
"squinched",
"squint",
"squinting",
"squinty",
"squirting",
"squishy",
"stabbing",
"stabile",
"stabilised",
"stabilising",
"stabilized",
"stabilizing",
"stable",
"staccato",
"stacked",
"staged",
"stagey",
"stagflationary",
"staggering",
"stagnant",
"stagy",
"staid",
"stainable",
"stained",
"stainless",
"stale",
"stalemated",
"stalinist",
"stalked",
"stalkless",
"stalwart",
"staminate",
"standard",
"standardised",
"standardized",
"standby",
"standing",
"standoffish",
"standpat",
"stannic",
"stannous",
"staphylococcal",
"staple",
"star",
"starboard",
"starchless",
"starchlike",
"starchy",
"staring",
"stark",
"starkers",
"starless",
"starlike",
"starlit",
"starred",
"starring",
"starry",
"starting",
"startled",
"startling",
"starved",
"starving",
"statant",
"stated",
"stateless",
"stately",
"statesmanlike",
"statesmanly",
"statewide",
"static",
"stationary",
"statistical",
"stative",
"statuary",
"statuesque",
"statute",
"statutory",
"staunch",
"steadfast",
"steadied",
"steady",
"steadying",
"stealthy",
"steamed",
"steaming",
"steamy",
"stearic",
"steely",
"steep",
"steepish",
"steerable",
"stellar",
"stellate",
"stemless",
"stemmatic",
"stemmed",
"stenographic",
"stenographical",
"stenosed",
"stenotic",
"stentorian",
"stepwise",
"stereo",
"stereophonic",
"stereoscopic",
"stereotyped",
"stereotypic",
"stereotypical",
"sterile",
"sterilised",
"sterilized",
"sterling",
"stern",
"sternal",
"sternutative",
"sternutatory",
"steroidal",
"stertorous",
"stewed",
"sticking",
"sticky",
"stiff",
"stifled",
"stifling",
"stigmatic",
"still",
"stillborn",
"stilly",
"stilted",
"stimulant",
"stimulated",
"stimulating",
"stimulative",
"stinging",
"stingless",
"stingy",
"stinking",
"stinky",
"stinting",
"stipendiary",
"stippled",
"stipulatory",
"stirred",
"stirring",
"stitched",
"stochastic",
"stock",
"stocked",
"stockinged",
"stocky",
"stodgy",
"stoic",
"stoical",
"stoichiometric",
"stolid",
"stoloniferous",
"stomachal",
"stomachic",
"stomatal",
"stomatous",
"stone",
"stoned",
"stoneless",
"stonelike",
"stony",
"stonyhearted",
"stooped",
"stooping",
"stoppable",
"stopped",
"stoppered",
"storeyed",
"storied",
"stormbound",
"stormproof",
"stormy",
"stout",
"stouthearted",
"stovepiped",
"straggling",
"straggly",
"straight",
"straightarrow",
"straightaway",
"straightforward",
"straightlaced",
"strained",
"straining",
"strait",
"straitlaced",
"stranded",
"strange",
"strangled",
"strapless",
"straplike",
"strapping",
"strategic",
"strategical",
"stratified",
"stravinskian",
"stravinskyan",
"straw",
"stray",
"straying",
"streaked",
"streaky",
"streaming",
"streamlined",
"streetwise",
"strengthened",
"strenuous",
"strep",
"streptococcal",
"streptococcic",
"stressed",
"stressful",
"stretch",
"stretchable",
"stretched",
"stretchy",
"striate",
"stricken",
"strict",
"strident",
"strikebound",
"striking",
"stringent",
"stringy",
"striped",
"stripped",
"stripy",
"strong",
"stroppy",
"struck",
"structural",
"structured",
"struggling",
"strung",
"stubbled",
"stubbly",
"stubborn",
"stubby",
"stuck",
"studded",
"studied",
"studious",
"stuffed",
"stuffy",
"stumpy",
"stung",
"stunned",
"stunning",
"stunted",
"stupefied",
"stupefying",
"stupendous",
"stupid",
"stuporous",
"sturdy",
"stygian",
"styleless",
"stylised",
"stylish",
"stylistic",
"stylized",
"styptic",
"suasible",
"suave",
"subacid",
"subacute",
"subalpine",
"subaltern",
"subaquatic",
"subaqueous",
"subarctic",
"subartesian",
"subatomic",
"subclavian",
"subclinical",
"subconscious",
"subcortical",
"subcutaneous",
"subduable",
"subdued",
"subdural",
"subfusc",
"subgross",
"subhuman",
"subjacent",
"subject",
"subjective",
"subjugable",
"subjugated",
"subjunctive",
"sublimate",
"sublimated",
"sublime",
"sublimed",
"subliminal",
"sublingual",
"subliterary",
"sublittoral",
"sublunar",
"sublunary",
"submarine",
"submerged",
"submergible",
"submersed",
"submersible",
"submissive",
"subnormal",
"subocean",
"suboceanic",
"subocular",
"suborbital",
"subordinate",
"subordinating",
"subordinative",
"subscribed",
"subscript",
"subsequent",
"subservient",
"subsidiary",
"subsidised",
"subsidized",
"subsonic",
"substandard",
"substantial",
"substantiating",
"substantiative",
"substantival",
"substantive",
"substitutable",
"substitute",
"subsurface",
"subterminal",
"subterranean",
"subterraneous",
"subtle",
"subtractive",
"subtropic",
"subtropical",
"suburban",
"suburbanised",
"suburbanized",
"subversive",
"succeeding",
"successful",
"successive",
"succinct",
"succinic",
"succulent",
"such",
"suchlike",
"suckled",
"suctorial",
"sudanese",
"sudden",
"sudorific",
"sudsy",
"suety",
"sufferable",
"suffering",
"sufficient",
"suffocating",
"suffocative",
"suffrutescent",
"suffusive",
"sufi",
"sugared",
"sugarless",
"sugary",
"suggestible",
"suggestive",
"suicidal",
"suitable",
"suited",
"sulcate",
"sulfuretted",
"sulfuric",
"sulfurized",
"sulfurous",
"sulky",
"sullen",
"sulphuretted",
"sulphuric",
"sulphurous",
"sultry",
"sumatran",
"sumerian",
"summary",
"summational",
"summative",
"summery",
"sumptuary",
"sumptuous",
"sunbaked",
"sunburned",
"sunburnt",
"sundried",
"sundry",
"sunk",
"sunken",
"sunless",
"sunlit",
"sunny",
"sunrise",
"sunset",
"sunstruck",
"suntanned",
"super",
"superable",
"superabundant",
"superannuated",
"superb",
"supercharged",
"supercilious",
"supercritical",
"supererogatory",
"superfatted",
"superficial",
"superfine",
"superfluous",
"superhuman",
"superimposed",
"superincumbent",
"superior",
"superjacent",
"superlative",
"superlunar",
"superlunary",
"supernal",
"supernatant",
"supernatural",
"supernaturalist",
"supernaturalistic",
"supernormal",
"supernumerary",
"superordinate",
"superpatriotic",
"superposable",
"supersaturated",
"superscript",
"supersensitised",
"supersensitive",
"supersensitized",
"supersonic",
"superstitious",
"supervised",
"supervisory",
"supine",
"supperless",
"supple",
"supplemental",
"supplementary",
"suppliant",
"supplicant",
"supplicatory",
"supportable",
"supported",
"supporting",
"supportive",
"supposable",
"supposed",
"suppositional",
"suppositious",
"supposititious",
"suppressed",
"suppressive",
"suppurative",
"supranational",
"supranormal",
"supraocular",
"supraorbital",
"suprasegmental",
"supreme",
"surd",
"sure",
"surefooted",
"surface",
"surficial",
"surgical",
"surging",
"surly",
"surmisable",
"surmountable",
"surmounted",
"surpassing",
"surpliced",
"surplus",
"surprised",
"surprising",
"surreal",
"surrealistic",
"surreptitious",
"surrogate",
"surrounded",
"surrounding",
"surviving",
"susceptible",
"suspect",
"suspected",
"suspended",
"suspenseful",
"suspensive",
"suspicious",
"sustainable",
"sustained",
"sustentacular",
"susurrant",
"susurrous",
"svelte",
"swagger",
"swaggering",
"swampy",
"swank",
"swanky",
"swart",
"swarthy",
"swashbuckling",
"swayback",
"swaybacked",
"swazi",
"swedish",
"sweeping",
"sweet",
"sweetened",
"sweetheart",
"sweetish",
"swell",
"swelled",
"sweltering",
"sweltry",
"swept",
"sweptback",
"sweptwing",
"swift",
"swimming",
"swingeing",
"swinging",
"swingy",
"swinish",
"swish",
"swishy",
"swiss",
"swollen",
"swooning",
"swordlike",
"sworn",
"sybaritic",
"sycophantic",
"syllabic",
"syllabled",
"syllogistic",
"sylphic",
"sylphlike",
"sylvan",
"symbiotic",
"symbolic",
"symbolical",
"symmetric",
"symmetrical",
"sympathetic",
"sympathomimetic",
"sympatric",
"sympetalous",
"symphonic",
"symphonious",
"symptomatic",
"symptomless",
"synaesthetic",
"synaptic",
"syncarpous",
"syncategorematic",
"synchronal",
"synchronic",
"synchronised",
"synchronized",
"synchronous",
"synclinal",
"syncopated",
"syncretic",
"syncretical",
"syncretistic",
"syncretistical",
"syndetic",
"synecdochic",
"synecdochical",
"synergetic",
"synergistic",
"synesthetic",
"synoecious",
"synoicous",
"synonymous",
"synoptic",
"synoptical",
"synovial",
"synsemantic",
"syntactic",
"syntactical",
"syntagmatic",
"synthetic",
"synthetical",
"syphilitic",
"syrian",
"syrupy",
"systematic",
"systemic",
"systolic",

"taboo",
"tacky",
"tactful",
"tactical",
"tactless",
"talebearing",
"talented",
"tameable",
"tangential",
"tangled",
"tangy",
"tantalizing",
"tantamount",
"tasteful",
"tasteless",
"tasty",
"techy",
"telepathic",
"telltale",
"temperamental",
"tenacious",
"tenderhearted",
"tentative",
"terrific",
"testy",
"ticklish",
"tidy",
"timeless",
"timely",
"timeserving",
"tingling",
"tipsy",
"tiptop",
"tireless",
"titanic",
"toasted",
"topnotch",
"towering",
"tranquil",
"transcendent",
"transfixed",
"transformable",
"trashy",
"treasured",
"treated",
"tremendous",
"trendsetting",
"trendy",
"triumphant",
"tropical",
"truehearted",
"trustworthy",
"truthful",
"tubby",
"tubular",
"twisted",

"thankful",
"theatrical",
"thematic",
"theoretical",
"therapeutic",
"thespian",
"thievish",
"thinking",
"thirsty",
"thoughtful",
"thrifty",
"thrilling",
"thriving",
"throwback",
"thunderstruck",
"thwarting",

"wacky",
"wakeful",
"walloping",
"wanton",
"warlike",
"warmhearted",
"warriorlike",
"watchful",
"watertight",
"wayward",
"wealthy",
"weeny",
"weird",
"welcoming",
"wheezy",
"whimsical",
"whisky",
"wholehearted",
"wholesome",
"whopping",
"wicked",
"wild",
"willful",
"windswept",
"winking",
"winning",
"wise",
"wishful",
"wispy",
"witty",
"wizardly",
"wonderful",
"wondrous",
"wonky",
"woozy",
"workable",
"worthwhile",
"wrathful"
]