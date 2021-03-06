import Attributes from './attributes';
import Characterstics from './characterstics';
import Skills from './skills';

type StoryId = Number;
type Skill = String;
type Characteristic = String;

export enum SkillDifficulty {
  normal = 'Normal',
  hard = 'Hard',
  extreme = 'Extreme',
}

export interface StoryOption {
  text?: String;
  goto: StoryId
  requiresSecret?: String;
}

export interface SkillUp {
  skill: Skill;
  text?: String;
}

export interface StoryRoll {
  text?: String;
  skill?: Skill;
  difficulty?: SkillDifficulty,
  characteristic?: Characteristic;
  succeed: StoryId;
  succeedText?: String;
  fail: StoryId;
  failText?: String;
  fumble?: StoryId;
}

export interface AttrChange {
  attribute: String;
  text?: String;
  decrease?: String;
  increase?: String;
}

export interface StoryItem {
  id: StoryId;
  text: String;
  options?: StoryOption[];
  rolls?: StoryRoll[];
  skillUp?: SkillUp;
  attributeChange?: AttrChange[];
  gainSecret?: String;
}

const THE_END = {
  id: 999999999999999,
  text: 'The End.',
  options: [{ text: 'Start Over.', goto: 1 }]
}

export const story: StoryItem[] = [
  {
    id: 1,
    text: `The sun is high in the sky, a merciless ball of heat. You feel scorched by the time you reach the bus halt in front of Osborn’s Drug Store. It’s a relief to put down your heavy cases and take off your hat for a moment. You fan your face. It has been a long summer here, in your hometown, and yet a curiously empty one.
    You look across the street at the grubby butcher’s shop, the grocers with its faded awning, and the shabby tobacconist. Mistrustful faces glare at you as they pass, eyeing your clothes and luggage. It was your parents’ choice to live here, not yours. You were happy down south as a child, among Providence’s white-walled houses and leafy churchyards. Perhaps this new job in Arkham will supply the change you need.
    Yet everybody you know in the world lives here. You know nobody in Arkham, not one soul. You ask yourself one last time if you are doing the right thing.
    The answer is here. None of your supposed friends have come to see you off. You are alone. Whatever challenges lie in Arkham, it will be a new life, and a brave one.
    A small gray motor coach approaches and rattles to a stop. You put your hat back on and pick up your cases.`,
    options: [ { goto: 263 } ],
  },
  {
    id: 2,
    text: `You put up a spirited resistance, but the man’s bulk and determination wear you down. Finally he lands a crushing blow and you drop. Blackness floods in.
    Later, you are dimly aware of your legs being lifted and your back scraping against the ground as you are dragged off.`,
    attributeChange: [{
      attribute: Attributes.HIT_POINTS,
      increase: '1',
    }],
    options: [{ goto: 108 }],
  },
  {
    id: 3,
    text: `Your morning exertions have left you hungry. You roam the streets of Emberhead looking for sustenance. There is nothing resembling the busy cafés of your hometown, or anything that might be called a restaurant.
    It is beginning to look like you will have to get supplies from the general store when May Ledbetter comes down the street with a girl trailing in her wake. This must be Ruth. As she notices you, she races past her mother and approaches you with a smile. This is a different Ruth from the shy creature of last night.
    As she reaches you, she stops and stretches her arms up in celebration. She looks up into your eyes. Abruptly the smile drops from her face and she looks several years older.
    “Get out before the festival,” she hisses. “Get out!” She blinks hard, then scuttles back towards her mother.
    May approaches, wrapping an arm around her daughter’s shoulders. She smiles. “How are you getting on? Have you found transport?”
    Startled, you explain the frustrations of the situation.
    “I’d try Mr. Winters in the village hall. He’s always in of an afternoon. You’ll be hungry by now? Help yourself to any food in the house. The door’s not locked.”
    You glance at Ruth where she has squirreled herself behind her mother’s leg. Her eyes implore you to silence.`,
    options: [
      {
        text: 'Ask Ruth about what she said.',
        goto: 9,
      },
      {
        text: 'Ask May about what Ruth said.',
        goto: 15,
      },
      {
        text: 'Say nothing.',
        goto: 22,
      },
    ]
  },
  {
    id: 4,
    text: `After a moment, you hear footsteps inside the house. A bolt is drawn back and the wooden door swings open. A figure with loose curls and a rough-looking housedress peers at you. Her gaze takes in your traveling suit and your cases. Her voice has a slight Irish lilt.
    “Hello. Should I take it as you’re looking for a room for the night?”
    You enquire as to her rates, suppressing a grimace. As far as you’ve seen, the village does not offer you many alternatives. “Oh, you’ll find them very reasonable,” she says. “You look
    tired. I’m May. Come inside and we’ll talk over a cup of tea.” The Ledbetter house feels cramped, with a low ceiling and simple fittings. But it is well kept and a cheerful fire crackles in the grate. The aroma of the tea is soothing and the cup
    warms your fingers.
    “Have you come to Emberhead for the festival?” asks May.`,
    options: [
      {
        text: 'Explain what happened with Silas and the coach',
        goto: 14
      },
      {
        text: 'Ask about the festival.',
        goto: 21,
      },
    ],
  },
  {
    id: 5,
    text: `The beasts fan out around you and black fear rises in your chest. One darts close, snapping and hissing. You lash out with a foot. It pulls its head back with a snarl of hatred. Their thick musk fills your nostrils as they circle, waiting for the moment to strike...
    The animals ignite around you.
    You stare as they go up like candles, red and purple flames licking their fur. Those terrible eyes stare through a curtain of fire, flesh, and fat consumed by the unnatural blaze. And they howl, their hunting calls twisted into a fierce dirge of pain.
    You turn away, gasping in the thick fumes, haunted by the shrieks of the beasts as you grope through the young trees. Your vision blurs, swims. Your legs are weak—`,
    attributeChange: [{
      attribute: Attributes.SANITY_POINTS,
      decrease: '1d3',
    }],
    options: [{ goto: 13 }]
  },
  {
    id: 6,
    text: `You wander the streets of Emberhead without any particular destination in mind. The village is built on a relatively flat upland with splendid views. To the north, the hazy tips of the White Mountains reach for the heavens; to the south, the sparkling waters of Lake Winnipesaukee touch the horizon.
    The village itself takes less than five minutes to cross from edge to edge. You arrived on the winding road to the west. The only other road leaves to the south, following a lower ridge of land as it turns east. In the southwest of the village, an open grassy space borders a ruined church, its graveyard cresting the cliffs. To the northeast, the three main thoroughfares meet at a raised black metal structure. It looms, stark against the blue sky.`,
    options: [
      {
        text: 'Ask about trasnport to the local general store.',
        goto: 16
      },
      {
        text: 'Seek out the village hall.',
        goto: 84,
      },
      {
        text: 'Walk down to the lower level and check out the eastern road.',
        goto: 115
      },
      {
        text: 'Examine the large metal structure.',
        goto: 57
      },
      {
        text: 'Explore the church.',
        goto: 34,
      },
      {
        text: 'Look for local people with their own transport needs',
        goto: 96,
      },
    ]
  },
  {
    id: 7,
    text: `As you approach the southern road that descends to the lower ridge, you see four villagers blocking the route, with farm tools and clubs. You veer off and head towards the west road. Your heart sinks as you see exactly the same scene at the other exit from the village. You are trapped.`,
    options: [
      {
        text: 'Try to talk your way past one of the guard groups.',
        goto: 119,
      },
      {
        text: 'Try to slip past in disquise.',
        goto: 125
      }
    ]
  },
  {
    id: 8,
    text: 'The driver smokes and watches as you drag your cases to the back of the motor coach. The rack is set inconveniently high on the vehicle. You get a grip on the heavier case.',
    options: [
      {
        text: 'Continue if your Size is at least 40.',
        goto: 23,
      },
      {
        text: 'Continue if your Size is higher than 40.',
        goto: 38,
      },
    ]
  },
  {
    id: 9,
    text: `You crouch down and ask Ruth what she meant.
    “It’s scary at the festival,” Ruth says. “It’s bright and hot and the flames go all over!” Her face and voice are both childlike. This abrupt shift is disturbing. You suppose all children do
    unfathomable things.
    May rolls her eyes and tousles her daughter’s hair. Ruth
    looks at the ground.`,
    options: [
      { goto: 22 },
    ],
  },
  {
    id: 10,
    text: `“Through your sacrifice the village will be reborn,” says the first dancer.
    “You pass from earth to air for all our sakes,” says the second.
    “I’ve weakened the chains,” says the third. “Don’t try to escape until the flames are high enough to hide you.”
    You stare at the third dancer. In that inky visage you clearly discern the frightened features of Ruth Ledbetter.
    Their dance weaves off and disappears behind the buildings.`,
    options: [
      { goto: 18 },
    ],
  },
  {
    id: 11,
    text: `The village hall overlooks the lower north ridge of the village. You walk along Silbury Street to find it, conscious of the oppressive black metal structure framed at the end of the road. The shutters of the hall are open and some windows left ajar. There is no knocker, but a little bell over the entrance tinkles as you push the front door.
    Inside, a sturdy door to your right is marked PRIVATE. To your left, an opening leads through to a bright room. You take a few steps inside. Benches line the walls and there are two noticeboards mounted between the windows.`,
    options: [
      {
        goto: 17,
        text: 'Examine the noticeboards closer.',
      },
      {
        goto: 24,
        text: 'Knock on the closed door.',
      },
    ],
  },
  {
    id: 12,
    text: `You sidestep and slip out of the workshop. As the artisan follows, you swing the door into his face. He staggers back, a hand to his nose. You take the opportunity to flee. You can investigate further if you would like. But perhaps it would be wiser to leave town.`,
    skillUp: { skill: Skills.DODGE },
    options: [{ goto: 120 }]
  },
  {
    id: 13,
    text: `The skin of your face feels warm. There is a mattress beneath you. You blink against the sunlight. A blurred figure swims in your vision.
    “You’re awake. It’s May. May Ledbetter.”
    You shift and pain wracks your body. You feel bruised, and your head throbs. May comes into focus.
    “You’re lucky to be alive. A farmer found you in the small hours, lying by the road. Patched you up and brought you back on his cart. Said you were in the middle of the woods somewhere? Best take it easy today. I’ll look in on you later.”
    The farmer and his cart are long gone, of course. You snooze for a little longer.`,
    attributeChange: [{
      attribute: Attributes.HIT_POINTS,
      increase: '1',
    }],
    options: [
      {
        goto: 64,
        text: 'You have received First Aid while unconscious, continue.',
      }
    ]
  },
  {
    id: 14,
    text: `May shakes her head and you glimpse a moment of deep- seated anger in her green eyes.
    “He always drives too fast. Thinks the road is made for him and him alone. He hit a mare some years back, that was a terrible thing. You should have seen the state of the coach. You’d be surprised at the damage done.”
    She sips her tea and gazes past you, into the corner of the room.
    “With living here, though, we can’t afford to antagonize the man. He’s about the only link we have to the world at large. And he’s not a bad soul at heart. I suppose that going the same route for fifteen years makes a man careless. You have to forgive him.”
    May goes silent for a long moment. Then her eyes flick back to you.
    “But you didn’t come here to listen to me blather, and you must be hungry. I can rustle you up a bit of stew. How would that be?”
    You ask again about her rates, and May names a price so low you accept it without hesitation. The room is small but comfortable, and the stew dark and hearty. After dinner, you have a couple of hours before your usual bedtime.`,
    options: [
      {
        text: 'Talk to may some more.',
        goto: 31,
      },
      {
        text: 'Walk around outside and get your bearings.',
        goto: 75,
      },
      {
        text: 'Turn in for an early night.',
        goto: 63,
      },
    ]
  },
  {
    id: 15,
    text: `You ask May why Ruth wants you to leave town. She gives her daughter a hard stare. Ruth looks at the ground.
    May says, “Ruth doesn’t like it when we have guests in the house. But she needs to learn that we don’t always get what we want in life. Sometimes we have to do things we might not best like. But they’re necessary, all the same.”
    May shakes her head at you and then nods back in the direction of the house. You catch a hint of emotion in those green eyes.`,
    options: [{ goto: 22 }]
  },
  {
    id: 16,
    text: `The general store is on a corner beside the main road, just before it plunges to the south. The shopkeeper is a brisk, immense lady with a starched apron and strong shoulders. She looks hard at your unfamiliar face.
    “Transport? There’s a motor coach comes through twice a week. Missed it? Hmm. Truck brings in my supplies every second Tuesday, but he’s not due until next week.” She shrugs.
    It seems Emberhead is content to keep its distance from the outside world.`,
    options: [
      {
        text: 'You have enough money to buy one or two inexpensive everyday items here. Note them down on your investigator sheet. Remember the year is 1927! The shop stocks no weapons except a dusty hunting knife, which you may purchase if you want.',
        goto: 25,
      }
    ]
  },
  {
    id: 17,
    text: `The floorboards creak beneath you as you cross the room. You feel a slight spring in your step. Perhaps this room is used as a gymnasium for the village children.
    One noticeboard appears to be for the adults of the community, and one for the children. The former looks neglected, featuring handwritten advertisements for household items and a yellowed note about telegraph pricing. There is nothing about the festival.
    The children’s noticeboard has a schedule for weekly crèche services, and a number of paintings obviously done by the children themselves. Most are incoherent, though colorful. As best you can tell, they depict fireworks, or perhaps the tale of Joseph from the Book of Genesis. One has lost a pin and hangs upside down. It shows a giant bird attacking Emberhead. Or it might simply be that the artist has not yet mastered the subtleties of scale.`,
    rolls: [
      {
        skill: Skills.SPOT_HIDDEN,
        succeed: 30,
        fail: 37
      }
    ]
  },
  {
    id: 18,
    text: `As you arrive beneath the beacon, ten villagers close in on you. Working with surprising coordination, they immobilize you and lift you up the blackened iron stairs to the raised platform. You cannot help but shiver at the sight of the central framework, twisted from past blazes, and what you can now clearly see to be fastening points for chain. None of the eyes meet yours as they lash you to the metal.
    The village sings now, something rhythmic and ancient, carved from odd syllables. A second group ascends to the Beacon, carrying the three red-draped bodies. With reverence, they arrange their burdens in a triangle around your feet. Then they withdraw, leaving you alone with the dead, shin-deep in a sea of kindling.`,
    options: [
      { goto: 33 },
    ]
  },
  {
    id: 19,
    text: `You block May’s exit and demand to know what is really going on. You see real fear in her eyes.
    “It was nothing,” she says. “Just something to help you sleep. For your own sake. Tomorrow will be such a big day for you, you see...”
    You press your advantage, demanding a full explanation.
    “Please,” she says. “Understand. I’ve my daughter to think of. I already lost my husband.”
    She wriggles around you and flees to her room.`,
    skillUp: { skill: Skills.INTIMIDATE },
    options: [
      {
        text: 'Secure your door with a chair and get some sleep.',
        goto: 58,
      },
      {
        text: 'Stay awake all night.',
        goto: 52,
      },
    ]
  },
  {
    id: 20,
    text: `The artisan sniffs, trying to clear his nose of blood. He seems to slip in and out of consciousness. You loom over him, threatening further violence unless he talks about the bodies.
    “Just... villagers,” he rasps. “Died... natural. We save them for... the Festival.”
    His eyes close and his head lolls to the side. You can close him up in the workshop while you think about your next move.`,
    options: [{ goto: 120 }],
  },
  {
    id: 21,
    text: `“Well now, I suppose the Festival is about the only reason folks come to Emberhead. I thought you had maybe come to study it or take photographs. Well, it’s not tomorrow night but the night after. I suppose it looks very strange to a passerby.”
    May tops up your tea. The spout chinks against your cup.
    “We’ve got the Beacon, you see. One night every year there’s a torch-lit procession and we light the Beacon on the cliffs. You’ve never seen the like of it. They say it keeps the spirit of the village alive for another year. It’s a celebration. A celebration...”
    She tails off for a moment, and blinks.
    “But you didn’t come here to listen to me blather, and you must be hungry. I can rustle you up a bit of stew. How would that be?” You ask again about her rates, and May names a price so low you accept it without hesitation. The room is small but comfortable, and the stew dark and hearty. After dinner, you
    have a couple of hours before your usual bedtime.`,
    options: [
      {
        text: 'Talk to may some more.',
        goto: 31,
      },
      {
        text: 'Walk around and get your bearings.',
        goto: 75,
      },
      {
        text: 'Turn in for an early night.',
        goto: 63
      }
    ]
  },
  {
    id: 22,
    text: `You take your leave of the Ledbetters and head towards their house. The door opens easily. In the low kitchen you make a meal from stodgy bread and leftover stew. A little window offers a view to the mountains.
    If you learned one thing this morning, it was that Emberhead’s streets hold little to occupy the visitor from out of town. But there are still about five hours of daylight remaining. You could take some provisions and the bare essentials from your luggage, and set out in the hope of reaching another settlement before dark. Or you could ask advice from this Mr. Winters.`,
    options: [
      {
        text: 'Prepare and walk out of town.',
        goto: 28,
      },
      {
        text: 'Head to the village hall instead.',
        goto: 11,
      }
    ],
  },
  {
    id: 23,
    text: `You struggle for a few seconds before the driver comes up beside you and lends a hand, still puffing on his cigarette. “Heavy bags for a small ‘un,” he remarks. You judge it best to respond with a simple thanks.`,
    options: [{ goto: 233 }]
  },
  {
    id: 24,
    text: `You raise your hand to knock on the door, but it opens before you can complete the movement. The middle-aged gentleman behind it takes an involuntary step back, adjusting his spectacles. You hasten to apologize and introduce yourself. He steadies himself and peers at you.
    “I see. I’m Clyde Winters. Just visiting, you say? And you’ve come to see me? Hmm! Care for some coffee? I usually take a cup around this time of the afternoon.”
    His invitation seems genuine enough and a good opportunity to ask any questions that are on your mind.`,
    options: [{ goto: 43 }]
  },
  {
    id: 25,
    text: `You are beginning to get your bearings in Emberhead. Would you like to explore some more?
    You may choose another option from those below. Do not repeat a previous choice.`,
    options: [
      {
        text: 'Continue when you have tried four options (or before that if you are ready to move on).',
        goto: 3,
      },
      {
        text: 'Ask about transport at the local general store.',
        goto: 16
      },
      {
        text: 'Seek out the village hall.',
        goto: 84,
      },
      {
        text: 'Walk down to the lower level and check out the eastern road.',
        goto: 115,
      },
      {
        text: 'Examine the large metal structure.',
        goto: 57
      },
      {
        text: 'Explore the church.',
        goto: 34,
      },
      {
        text: 'Look for local people with their own transport needs.',
        goto: 96,
      }
    ]
  },
  {
    id: 26,
    text: `You drift awake in the morning light. The sun is already high but you do not feel well rested. You find yourself preoccupied with little details of the room: the wood grain of the doorjamb, or a chipped handle on the wardrobe.
    As you swing out of bed, your stomach gives a lurch and you lean too far over, nearly tumbling to the floor. You blink for a moment. Perhaps you have an illness coming on. You get carefully to your feet. The air in the room is heavy and fragrant. You stare out of the window until you feel steady enough to leave.`,
    options: [
      {
        text: 'Your skill rolls today suffer a penalty. Roll the “tens” percentage die twice and take the higher result. This does not apply to Luck, Sanity, or damage rolls.',
        goto: 64,
      }
    ]
  },
  {
    id: 27,
    text: `The door scrapes, wrenching you back into the moment. Orange light spills into the house from blazing torches held at the threshold. Two large villagers step in and grab you. At least, you assume they are villagers. They wear heavy black cloaks, and their faces and hands are painted entirely black, save only for a red triangle centered on their left eye.
    You try to drag your legs, but they reach under your arms and lift you bodily from the bed. Outside, it seems that the whole village has congregated to see you. Every single one has a blackened face with the red triangle motif. Torches sputter and spill fire.
    You struggle, but you can see physical resistance is hopeless. You are marched to the central street and turned to face the Beacon.`,
    options: [{ goto: 117 }]
  },
  {
    id: 28,
    text: `You take money, water, and some sandwiches. It seems polite to leave May Ledbetter a note explaining the situation and that you will return for your bags as soon as possible. The sky is flecked with cloud but shows no sign of imminent rain.
    A couple of villagers watch as you descend on the southern road and follow it around to the east. The black metal structure looms on the promontory above. You shiver as you pass the lower huts and head out of Emberhead.
    After the miserable, enclosed streets of Emberhead, you are refreshed by the open air and sense of progress. An hour later, however, the empty road ceases to be a novelty. You have just entered the first patch of woodland when you hear an eerie, lilting howl from the north.`,
    rolls: [
      {
        skill: Skills.NATURAL_WORLD,
        succeed: 35,
        fail: 41,
      },
    ]
  },
  {
    id: 29,
    text: `The northern side of the village is bustling and you are unlikely to remain hidden there for long. You head in the direction of the church, and then move up the east side, behind the houses. A drop looms on your right. One particular section of ground is quite narrow and you have to hug the building for support.`,
    options: [
      {
        text: 'Give up this approach.',
        goto: 120
      },
      {
        text: 'To continue, compare your SIZ to your DEX, if your DEX is higher.',
        goto: 42
      },
    ],
    rolls: [
      {
        text: 'If your SIZ is higher, make a SIZ roll.',
        characteristic: Characterstics.SIZ,
        succeed: 42,
        fail: 36,
      }
    ]
  },
  {
    id: 30,
    text: `As the afternoon sun hits the floor you notice something curious. The boards under the windows are newer than the boards in the center of the floor. The frames also show signs of having been replaced in the recent past. Perhaps rain leaked in and rotted the wood.`,
    skillUp: {
      skill: Skills.SPOT_HIDDEN,
    },
    options: [{ goto: 37 }]
  },
  {
    id: 31,
    text: `May talks about life in Emberhead. “In her letters my sister always asks if I’m not bored, living in such a small place. She lives in New York. Then she writes about how frightened she is to walk home at night! I ask you.”
    You mention your hopes for a new life in Arkham. May doesn’t seem to hear you.
    “It’s a small place here, yes, but that means we have real community. Everybody’s face is known. Everybody works together. Nobody is excluded. Except those who choose to exclude themselves, of course. I couldn’t live anywhere else now.”`,
    rolls: [
      {
        skill: Skills.CHARM,
        succeed: 39,
        fail: 51
      }
    ]
  },
  {
    id: 31,
    text: `Anger flashes in May’s eyes. “Would you strike a woman in her own house?” she snaps. “Eighteen people live on this street. If I scream, every one of them will come running.”
    She scrambles from the guest room and into her bedroom. You consider pursuing the issue, but decide against it.`,
    options: [
      {
        text: 'Secure your door with a chair and get some sleep.',
        goto: 58,
      },
      {
        text: 'Stay awake all night',
        goto: 52
      }
    ]
  },
  {
    id: 33,
    text: `It seems the entire village is gathered around the Beacon to watch you burn. Behind the face paint, you recognize May Ledbetter, and—yes, that is Silas the coach driver standing at her side. The audacity and scale of the deception staggers you.
    A man steps up on a dais and raises his hands with quiet authority. The frame of his spectacles obscures the red triangle on his face.
    “So we draw here together again on this night, as we do each year, and we give thanks to the one who will preserve the village against the fire of the void. You will be taken by the Ones From Above in our stead. Your death will bring life to our streets and bounty to our fields. It will safeguard our children and our elders alike for another year. We salute you.” He bows his head.
    All around the Beacon, bearers step forward and lift their torches to the edge of the raised platform. A ring of tiny flames flicker up around the perimeter. As they wink, the singing of the villagers drops into an unearthly rhythm.`,
    options: [
      {
        text: 'Throw all your remaining strength against the bonds',
        goto: 44
      },
      {
        text: 'Wait and see what happens.',
        goto: 40
      }
    ]
  },
  {
    id: 34,
    text: `You cross the street towards the church. As you glance to your left, your gaze alights on the large metal structure. Something bothers you about its positioning. You back up and look again. Yes! Emberhead’s central thoroughfare points directly at the structure. This seems too precise to be a coincidence.
    You press on and draw into the shadow of the church. The building is in a sorry state. The top of the steeple is missing, a ragged gash of splintered boards marking its absence, and the floors beneath it have collapsed. It appears to have torn through the roof of the main building as it fell. Only the back half is still intact. The white paint, which once covered the church, has yellowed and peeled.
    It seems safe enough to explore the rear section. Old pews are stacked against the wall, choked with mildew. Most of the windows are broken. You guess this church has been disused for about twenty years. There is little more to interest you.`,
    rolls: [
      {
        skill: Skills.RIDE,
        text: 'You may have a bonus die; roll the "tens" percentage die twice and take the lower results.',
        succeed: 46,
        fail: 25,
      },
    ]
  },
  {
    id: 35,
    text: `The call is that of a coyote, common in this area. The sound can be frightening, particularly at night, but coyotes have learned to avoid humans. You can proceed without fear.`,
    skillUp: { skill: Skills.NATURAL_WORLD },
    options: [{ goto: 54 }]
  },
  {
    id: 36,
    text: `The turf crumbles beneath your feet and the edge of the cliff collapses. Your stomach lurches as you feel yourself drop.`,
    rolls: [
      {
        skill: Skills.CLIMB,
        succeed: 48,
        fail: 55
      }
    ]
  },
  {
    id: 37,
    text: `The door scrapes behind you. A middle-aged, bespectacled gentleman appears in the doorway. “May I help you?”
    You explain you are visiting on May Ledbetter’s recommendation.
    “Ah. Well, I’m Clyde Winters. I’m not sure I can help you, but... would you care for some coffee? I’m partial to a cup in the afternoon.”
    He gestures to the open door behind him. This seems like a worthwhile opportunity, and you are a little thirsty.`,
    options: [{ goto: 43 }]
  },
  {
    id: 38,
    text: `The driver continues to enjoy his cigarette, watching with keen interest as you struggle with the cases. You grit your teeth and heave the second one into place. Perhaps the residents of Arkham will have better manners.`,
    options: [{ goto: 233 }]
  },
  {
    id: 39,
    text: `As the hour wears on, May’s upbeat manner descends into something more reflective.
    “It’s not always easy. I’m a widow, you know. We have a little money, and of course I appreciate the custom of travelers like yourself. I know we’ll never starve as long as we live here. But I don’t see myself marrying again. I know every man in this village. I know them too well, if you see what I mean.”
    Her mouth twists briefly, then she yawns and pushes a hand through her hair.
    “Time for me to turn in. When would you like your breakfast?”`,
    skillUp: { skill: Skills.CHARM },
    options: [{ goto: 63 }]
  },
  {
    id: 40,
    text: `The flames snake across the kindling, catching and rising. Smoke rises and it becomes difficult to see the villagers. The three bodies surrounding you catch fire, blazing with sooty red flames. You begin to cough as the smoke enters your lungs, and fight down the urge to panic.`,
    options: [
      {
        text: 'If you have learned a strange chant and which to try it, this is the moment. Otherwise continue.',
        goto: 65
      }
    ]
  },
  {
    id: 41,
    text: `You hesitate. You have grown up in the familiar landscape of the town. Wild animals are a little outside your experience. Is it unwise to head on into the unknown by yourself?`,
    options: [
      {
        text: 'Press on.',
        goto: 54,
      },
      {
        text: 'Return to the safety of Emberhead.',
        goto: 47
      }
    ]
  },
  {
    id: 42,
    text: `The turf sinks beneath your feet and stones crumble from its edge. Alarmed, you grip the building and ease yourself forward. Finally you have a good spot to watch the Beacon.`,
    options: [{ goto: 61 }]
  },
  {
    id: 43,
    text: `You step through the door marked PRIVATE. The other side of the village hall is in marked contrast to the public space. The room is compact, lined with shelves of books and file alcoves. One corner is reserved for a tiny pantry and what is presumably a water closet.
    You study Mr. Winters as he fills the percolator. Although thin on top, his hair is oiled and neatly swept back. His suit is a sober affair, and well-tailored even if the cut is a little old- fashioned. A lesser man working alone might have loosened his bow tie for comfort.
    On the desk against the opposite wall, you notice what looks like a telegraph set.`,
    options: [
      {
        text: 'Ask about the telegraph immediately.',
        goto: 56,
      },
      {
        text: 'Make small talk with Mr. Winters first.',
        goto: 49
      }
    ]
  },
  {
    id: 44,
    text: `You’re tired, and your flesh ought to be insufficient against the dark iron of the chains. Yet you can feel them give a little. There is a weakness in one of the links.`,
    rolls: [
      {
        characteristic: Characterstics.STR,
        succeed: 53,
        fail: 40
      }
    ]
  },
  {
    id: 45,
    text: `You awake with a jolt, wrestling the blankets, ready for attack— The Ledbetter guest room is quiet, painted with morning light. There is nobody here but you. You release the blankets
    and wait for your heart to stop hammering.`,
    options: [{ goto: 64 }]
  },
  {
    id: 46,
    text: `The interior smells of earth and decay. But you catch an additional, distinctive whiff about the place: the scent of horses. You search around and in a dark corner find both the remnant of a hoof mark and some dried droppings. This ruined church was used as a stable—and quite recently. Where are the horses now?`,
    options: [{ goto: 25 }]
  },
  {
    id: 47,
    text: `A second call answers the first. You imagine yourself cornered by wolves in the forest, torn and bleeding on the ground as the leader stands over you, saliva dripping from between its glistening, pointed teeth. That merciless mouth flashes towards your neck.
    The return walk to town seems longer than the outward leg. You try not to keep looking behind you. As you ascend, the sun has dipped in the sky. You still have enough time to try the village hall.`,
    options: [{ goto: 11 }]
  },
  {
    id: 48,
    text: `You throw a hand up. Your fingers wrap around a protrusion on the building. It holds your weight long enough for you to get solid ground under your feet. You look down. The drop is about twenty feet. That was close.`,
    skillUp: { skill: Skills.CLIMB },
    options: [{ goto: 61 }]
  },
  {
    id: 49,
    text: `The pot begins to gurgle as you exchange pleasantries with Winters. “Living here? It’s a trade-off, like so much in life.” He looks pastyouatahighshelf.“Icouldwishforaccesstoaproperlibrary, of course. But I know myself well enough. I’m strictly a dabbler. And the cities...” His face wrinkles in distaste. “Too many people. Everybodyrushingandshouting.Wehaveaspecialplaceherein Emberhead. And someone must accept responsibility for keeping it so. That was my father before me. And now the duty falls to
    me.” He lifts his chin and straightens up.
    “This evening, as the sun sets, look out at the landscape around
    the village. We have peace up here, halfway to the stars. Are we not privileged? Is this not worth the hardships we must accept?” He looks at you speculatively. This seems a good time to
    ask about the telegraph.`,
    options: [{ goto: 56 }]
  },
  {
    id: 50,
    text: `The flames draw closer as you bring Arbogast’s chant to mind. It is hard to clear your head as the heat grows beneath your feet. You cough and splutter, but you sustain the words. Finally you reach the key passage, and even as your clothes catch fire, you yell for the third time: Ph’nglui mglw’nafh Cthugha Fomalhaut n’gha-ghaa naf ’l thagn! Iä! Cthugha!`,
    options: [{ goto: 270 }]
  },
  {
    id: 51,
    text: `As the hour wears on, you are amused to hear May transform into a sort of tired tourist guide.
    “Of course the views from here are spectacular on a good day. A clear view all the way round. If you’re a painter you’ll be right at home. If your tastes run more to the artisan, there are workshops on Silbury Street. Just at the end here and turn right. They’re not set up for visitors, you understand? But you’ll see the real craftsmen at work. The genuine article. Now, if you’re looking for freshly baked bread...”
    It seems a shame to point out that you intend to be on the road again shortly. You let May continue until she begins to yawn. “Would you listen to me yapping? Time to turn in. When
    would you like your breakfast?”`,
    options: [{ goto: 63 }]
  },
  {
    id: 52,
    text: `You stare out the window and watch as the sun reaches the horizon, bathing the village in sickly orange. It has been a long night and you feel stiff and irritable. You rub your eyes.
    A few minutes later, you hear May bustling in the kitchen. Then the front door opens and closes.`,
    options: [
      {
        text: 'Make a CON roll. If you fail, your skill rolls today suffer a penalty. Roll the "tens" percentage die twice and take the higher result. This does not apply to Luck, Sanity or damage rolls. Continue.',
        goto: 64,
      }
    ]
  },
  {
    id: 53,
    text: `As tongues of fire lick towards you through the kindling, you close your eyes and heave on the chains. They give a little more, then—clack. One side of the chain drops. You wriggle in the coils, loosening the bond even as heat singes your ankles.
    The man on the dais stares at your movements. Then he picks two youths from the crowd and points directly at you.
    Just as you shrug the chain off and step free from the ironwork, the youths mount the blazing platform. Flames spread up their trousers. As their cloaks catch, they dive at you.`,
    rolls: [
      {
        skill: Skills.DODGE,
        succeed: 109,
        fail: 123,
      }
    ]
  },
  {
    id: 54,
    text: `A second call answers the first, but it sounds further away. You follow the road through woodland. Branches lean over the road. The foliage is quite beautiful, from gold to russet and a deep, rich red. Fallen leaves crunch beneath your feet.
    After about half an hour, you emerge from the trees. The road makes a lazy curve around foothills ahead, into another patch of woodland. A rough track seems to offer a short cut through the woods.`,
    options: [
      {
        text: 'Head up the hill to try to spot another settlement.',
        goto: 60
      },
      {
        text: 'Try the track.',
        goto: 85,
      },
      {
        text: 'Stick to the safety of the road.',
        goto: 103
      }
    ]
  },
  {
    id: 55,
    text: `You lunge for a handhold. Your fingers scrabble against the wall. In a second you are dropping, dropping hard to the stony ground—`,
    attributeChange: [{
      attribute: Attributes.HIT_POINTS,
      text: 'Take 2d6 damage as you hit the ground.',
      decrease: '2D6'
    }],
    options: [
      {
        text: 'If this is equal to or greater than your half of your full hit points. Continue.',
        goto: 67
      },
      {
        text: 'If not. Continue.',
        goto: 73
      }
    ]
  },
  {
    id: 56,
    text: `“The telegraph? Mmm. Much as we value our isolation, we do need the link sometimes... you were hoping to send a message? I must apologize. The line has been down for two weeks. I reported the fault, but of course, they’re not so speedy when the problem lies in a rural area. I’m expecting a repair the day after next. I do appreciate how frustrating this must be. The coach is due, in what, three days? But I think he’s going west. Perhaps you might engage a wagon? One of the farmers might...”
    You explain that you have asked a few of the residents already, but to no avail.
    “I tell you what.” Winters pours you a steaming cup of coffee. The dark liquid smells rich and strong. “When the repair crew arrive I’ll ask them to take you back with them. How would that be? They might want a dollar or two to grease the wheels...”
    The day after tomorrow? It’s less than ideal. But it’s the first real opportunity you’ve had.`,
    options: [
      {
        text: 'Thank Winters and Leave.',
        goto: 180
      },
      {
        text: 'Ask about his library.',
        goto: 62
      }
    ]
  },
  {
    id: 57,
    text: `You walk up The Approach, the most central of the village’s major streets. It points directly at the odd metal structure. As you emerge from the shade of the nearby buildings, you are greeted by a magnificent panorama spread from the north to the southeast. The last colors of fall tint the hills in a sleepy gold.
    The structure, by contrast, is made from uncompromising iron, singed black. It supports an immense curved platform at the level of your head. Further struts snake up to a central point. It looks like they may have been some kind of sculpture at one time, but are now twisted and melted beyond recognition.
    An older gentleman passes, looking up at you with rheumy eyes. “Are you here for the Festival?” he asks. “That’s the Beacon. When they light it, night after next, you’ll be able to see it ten miles away.” He gives a little nod of satisfaction, then moves on, leaning on his walking stick.
    Now you notice bundles of wood, tied and stacked against the buildings nearby. Perhaps this Festival would be an interesting diversion. But you really must head to Arkham as soon as possible.`,
    rolls: [
      {
        skill: Skills.SPOT_HIDDEN,
        succeed: 69,
        fail: 25
      }
    ]
  },
  {
    id: 58,
    text: `You awaken to the sound of feet in the street outside. Your night’s rest has brought a new determination. Today, you will meet Emberhead on your own terms.`,
    attributeChange: [{
      attribute: Attributes.HIT_POINTS,
      increase: '1',
    }],
    options: [{ goto: 64 }]
  },
  {
    id: 59,
    text: `A desperate yell awakens you. You feel yourself slide from the seat as the driver spins the wheel and the motor coach plunges off the road. Too late, you reach for the seat in front. You fall into the aisle and your ribs crash against the edge of the seat opposite. Breath rushes out of you. The coach stops with a thump.
    Your driver leaps from his seat into the road. As you sprawl, dizzy, in the aisle, you hear a string of incendiary curses.
    The driver climbs back into the cab and sees you on the floor. He looks concerned and assists you back into your seat. You see what has happened now. A Fordson tractor has stopped in the road and he had to swerve to avoid this steel obstacle.
    “Sorry,” he says. “All them fields and he has to pick the road to park. You all right?”
    You don’t think anything’s broken. But you’ll have a colorful bruise for the next few days. He backs the coach up a little and threads it around the tractor, glaring at the farmer.`,
    attributeChange: [{
      attribute: Attributes.HIT_POINTS,
      decrease: '1',
    }],
    options: [{ goto: 71 }]
  },
  {
    id: 60,
    text: `The gentle incline is misleading, and your forehead is damp by the time you reach the top of the hill. You pause for a moment to get your breath back, and look east. The valley ahead is thick with forest, although you catch glimpses of a narrow waterway. There is still no sign of a settlement. That might be something on the horizon—a spire, maybe? But it is surely another eight or nine hours’ walk.
    You look back at Emberhead. The hilltop village is black, a rough silhouette against the shimmering orb of sunset.`,
    rolls: [
      {
        skill: Skills.ARCHAEOLOGY,
        succeed: 66,
        fail: 72
      }
    ]
  },
  {
    id: 61,
    text: `You lie concealed in the grass and watch the activity around the Beacon. Villagers bring in yet more bundles of tinder and stack them in neat piles. Another shift passes the bundles up to a pair of men standing on the raised platform of the Beacon. They are constructing a triangular structure, resembling a gigantic campfire.
    As you watch, you are struck by the manner of the laborers. This is their Festival. You would expect a cheerful atmosphere and some light-hearted conversation. Yet the faces of some show resignation and detachment; others, a naked dread.
    You watch for a good half hour before you slip away.`,
    options: [{ goto: 120 }]
  },
  {
    id: 62,
    text: `You make a small but flattering remark about a couple of the volumes on his shelves. Winters blushes with pleasure.
    “Well, of course they’re not my personal collection. They belong to the village,” he says. “But I did select most of the recent items. This is the community’s library, you see. I put up the PRIVATE sign to stop people just wandering in from meetings in the other room. But this is really a public space.”
    You scan the shelves. There is a sparse but respectable collection on mathematics and the sciences, passable sections on history and arts, and a shelf of literature. He has a few lowbrow novels tucked away in a corner, with tatty copies of Bizarre Tales magazine.
    “Quality does not always equate to popularity, I’m afraid.” Winters gives you an apologetic smile.`,
    options: [
      {
        text: 'Take the time for some research in the library.',
        goto: 68
      },
      {
        text: 'Leave while it is still light outside.',
        goto: 180
      }
    ]
  },
  {
    id: 63,
    text: `As May stands, you hear a clunk behind you. You look over your shoulder, but all you can see is a wooden door, securely closed.
    May tuts. “The young lady of the house. She’ll have been listening to us. Ruth! Come and greet our guest.”
    There is a short pause, then the door creaks open. Two wide eyes peer at you from the gap, between tousled hair and a rough nightgown.
    “What do you say?”
    The eyes blink. “Pleased to meet you.”
    “Now get back to bed.”
    The door closes again.
    “My daughter Ruth. Ten years this summer. She’s a delight and a torment all in one. Don’t worry, she sleeps in with me. She’ll not disturb you. Good night now.”
    You retire to your room. It is a little chilly, but you are too tired to worry about lighting the fire. The sheets are clean and the bed soon warms up. The silence outside is strange after living in a town for so long, but you soon drop off.`,
    options: [{ goto: 154 }]
  },
  {
    id: 64,
    text: `The Ledbetter kitchen is empty, although bread and eggs have been laid out for your breakfast. There is a note from May explaining that she has taken Ruth out for a few hours.`,
    options: [
      {
        text: 'If you were involved in a fight in the village last night and want to investigate the aftermath.',
        goto: 70
      },
      {
        text: 'Otherwise, continue.',
        goto: 78
      }
    ]
  },
  {
    id: 65,
    text: `Flames lick at your legs. Your eyes water. You are shrouded in smoke. It might be your imagination, but you think you can feel a slight give in the chains. You throw yourself against them, giving no thought to how they bite into your wrists.`,
    attributeChange: [{
      attribute: Attributes.HIT_POINTS,
      decrease: '1d6',
    }],
    rolls: [
      {
        characteristic: Characterstics.STR,
        succeed: 93,
        fail: 77
      }
    ]
  },
  {
    id: 66,
    text: `The position of the sun bothers you. It reminds you of something from one of the journals; an article about stone circles in England, was it? You check your position with the mountains in the north, closing your eyes to visualize the layout of Emberhead from your explorations this morning. The metal structure is the key, positioned on the bluff as it is. Yes, it seems entirely possible.
    You can’t be sure without taking a proper bearing and consulting the tables, of course. But if your guess is correct, the central thoroughfare in Emberhead is positioned so that during the summer solstice, the rays of the rising sun will shine through the metal structure and directly down the center of the street.
    Perhaps this is just wild speculation. But something feels correct about it.`,
    skillUp: { skill: Skills.ARCHAEOLOGY },
    options: [{ goto: 79 }]
  },
  {
    id: 67,
    text: `You land at an awkward angle and feel something break. You reach beneath you. Your fingertips come back wet. Black walls smear in from the edges of your vision.`,
    rolls: [
      {
        characteristic: Characterstics.CON,
        succeed: 82,
        fail: 92,
        failText: 'If you fail or your hit points reach zero.'
      }
    ]
  },
  {
    id: 68,
    text: `Winters is happy for you to spend the rest of the afternoon in study and offers you an upright but comfortable chair. You have enough time to pursue one line of research in depth.`,
    options: [
      {
        text: 'Read about the history of the area.',
        goto: 74,
      },
      {
        text: 'Read about the Festival.',
        goto: 81
      },
      {
        text: 'Read something from the sciences.',
        goto: 88
      },
      {
        text: 'Read some of the weird fiction.',
        goto: 94
      }
    ]
  },
  {
    id: 69,
    text: `As you walk away from the iron structure, you notice something strange about the construction of the village. All the wooden dwellings are concentrated in the west and southwest. To the east and northeast, closest to the Beacon, the buildings are formed from dark brick and clay. Does this mean the settlement began at the Beacon, and spread west?`,
    skillUp: { skill: Skills.SPOT_HIDDEN },
    options: [{ goto: 25 }]
  },
  {
    id: 70,
    text: `You feel skittish as you approach the spot where you and Arbogast were attacked. Your memory of the encounter is shaky, but you remember one or two vivid images.
    At first you think there is nothing to see: no discarded weapons or figures lying unconscious. But upon closer examination, you find sticky, congealed patches and blackened lines in the grass.
    If the village had a police station you could go there. But something tells you events have gone beyond that.`,
    options: [{ goto: 78 }]
  },
  {
    id: 71,
    text: `You resume your journey. The driver takes the curves with more caution than before. He glances over his shoulder at you a couple of times.
    “Sorry about before,” he says. “That fella was dumber than a hog. I’m Silas. What’s your name?”
    The accident was at least as much Silas’s fault as the farmer’s. But it doesn’t seem shrewd to antagonize the man while he is driving you through the middle of nowhere.
    <i>Make up a name for your character and record it on your investigator sheet. You may add your age; for the purposes of this adventure your character should probably be aged between 23 and 36.</i>
    The coach turns onto a narrower road, which weaves uphill through woodland. Silas becomes chatty.
    “Going to Arkham, eh? Can’t say I ever heard of the place. Went to Boston once. Didn’t like it. Too much hustle and bustle. You got family there? A special someone waiting?”
    The afternoon is wearing on. You see no harm in confiding in Silas about your new life.
    “A job, eh? What’s your line?”`,
    options: [
      { text: 'Tell Silas you are an Antiquarian.', goto: 102 },
      { text: 'Tell Silas you are a Doctor of Medicine.', goto: 226 },
      { text: 'Tell Silas you are a Journalist.', goto: 239 },
      { text: 'Tell Silas you are a Private Investigator.', goto: 249 },
      { text: 'Tell Silas you are a Professor.', goto: 265 },
    ]
  },
  {
    id: 72,
    text: `You feel a sting of self-doubt at the thought of your cases back on that hill, abandoned in the care of a woman you had never met twenty-four hours ago. They contain all of your worldly possessions save what you stand up in.
    Yet a piece of you delights in this foolhardy expedition, with no map and precious few supplies, striking further into the unknown as night falls. Your life has been sheltered until now. There is a certain joy in this dangerous freedom.`,
    options: [{ goto: 79 }]
  },
  {
    id: 73,
    text: `You crash to the ground. The breath rushes from your lungs. Blood trickles from your head.`,
    options: [
      { text: 'If our hit points have reached zero.', goto: 92 },
      { text: 'Otherwise, continue.', goto: 82 }
    ]
  },
  {
    id: 74,
    text: `There is no single book on the history of the area, and you have to put together a picture from a variety of slim, specialized volumes. There seems some suggestion that the hill upon which Emberhead is built was a place of reverence for the Abnaki, or Abenaki, a native tribe whose name means “people of the dawnlands.”The tribe made an annual journey to the hill “as the leaves turned the deepest hue of sunset.”There are some references to sun rituals performed in the
    area but these are not convincingly attributed.
    The region was caught up in King George’s War, and in
    1746 British colonial forces counterattacked in response to a raid by the Wabanaki Confederacy, which included the Abenaki. The King’s men gave no quarter and the few survivors among the natives were driven from the area permanently.
    There seems no confirmed date when Emberhead itself was founded, although there are accounts of settlers on the hill from shortly after the end of the Revolutionary War.`,
    options: [{ goto: 99 }]
  },
  {
    id: 75,
    text: `May’s brow creases when you announce your intention to take a stroll. “Mind how you go,” she says. “Emberhead’s surrounded by cliffs and we don’t have your fancy street lamps here. Take the lantern and watch your step.”
    Outside, you see what she means. The sky is overcast and only a few glimmers of moonlight peek from the clouds. Without the heavy lantern you would be walking in near-total darkness. You cannot hope to get an overview of the village tonight.
    May’s street is a narrow passage hemmed in by squat, dark dwellings. At the end, however, it opens up. A wide thoroughfare leads off to your right. A crude sign names it Silbury Street. To the left, a few yards away, your light picks out the crooked posts of a simple fence, and beyond that, the ground drops away into darkness. You take a couple of steps closer, but you can see nothing. Air from below cools your face. Then some instinct makes you look around.`,
    options: [{ goto: 86 }]
  },
  {
    id: 76,
    text: `The distinctive whiff from the powder recalls a demonstration of dangerous herbs from one of your old professors. Although there is probably more than one component, you are fairly sure that the powder contains henbane, which has soporific and hallucinogenic properties.
    You extinguish the small mound of powder and scatter it throughout the grate.`,
    skillUp: {
      skill: Skills.SCIENCE,
      text: 'Place a checkmark beside Science(Botany)',
    },
    options: [
      { text: 'Get some sleep.', goto: 58 },
      { text: 'Stay awake all night.', goto: 52 }
    ]
  },
  {
    id: 77,
    text: `The chains give a little more. You feel that you could overcome them, if you only had a little more time—
    But as you feel the flesh of your legs char, the fire spreads up your jacket and licks at your face. And you know you have run out of time.`,
    options: [
      {
        text: 'You have burned to death in the Beacon.',
        goto: THE_END.id,
      }
    ]
  },
  {
    id: 78,
    text: `You make a quiet circuit of the village, pausing in unobtrusive places to watch the villagers. It is rather busy for this time in the morning. Yawning locals stream back and forward along the roads, carrying bundles of split logs to the site of what you’ve heard referred to as the Beacon. You see two figures already up in its superstructure, arranging the wood. The Festival bonfire will be most impressive. But do you intend to stay to see it? You suspect by now that something is amiss here.
    While the villagers are distracted, you may do some illicit investigation. Or you may simply leave town without looking back.`,
    options: [
      { text: 'Search May Ledbetter\'s bedroom.', goto: 83 },
      { text: 'Go alone to the village hall.', goto: 126 },
      { text: 'Take a closer look at the artisans\' courtyard.', goto: 219 },
      { text: 'Spy on activity at the Beacon.', goto: 29 },
      { text: 'Slip down to the east road and flee for good.', goto: 7 }
    ]
  },
  {
    id: 79,
    text: `You return to the road and resume your walk east. At least, you hope you are still heading east. The curves of the road become disorienting when the light begins to fade. Clouds hide the stars. It seems you will not reach another settlement before dark, and you feel weariness in your legs. The air is much cooler now.`,
    rolls: [
      {
        skill: Skills.LISTEN,
        difficulty: SkillDifficulty.hard,
        succeed: 240,
        fail: 234,
      }
    ]
  },
  {
    id: 80,
    text: `You clear your throat and begin the ritual you found in the strange book, pronouncing the strange syllables as best you can. You know the fire is slipping ever closer by the touch of heat on your face, yet you put your panic aside and concentrate on completing the chant.
    As you speak the weird words, you become aware that the song of the villagers has shifted and they, too, are chanting. Your stomach lurches. You are chanting exactly the same sounds!
    The flames catch your clothes and you are wracked by excruciating pain. You lift your head, trying to hold it out of the pitiless fire, and what you see takes you out of your agony for a moment. Because the stars themselves are falling, plunging from the sky to rain on Emberhead.
    You dimly notice the villagers switch to a different chant. But your body is ablaze, and for a moment you fancy that you, too, are a star. Then everything goes molten white.`,
    options: [
      { text: 'You have burned to death in the Beacon.', goto: THE_END.id }
    ]
  },
  {
    id: 81,
    text: `You are not surprised to find there is no published work on Emberhead’s Festival. Winters pokes around and finds a cased monograph, handwritten on yellowing paper by a Dr. Aniolowski. “An acquaintance of my father’s, I believe,” Winters says.
    The manuscript is somewhat difficult to read and you make slow progress. Aniolowski speculates that the Festival has its origin in Pagan rites brought over by Celtic settlers, which celebrate the ancient festivals of Beltane, Samhuinn, Imbolc, and Lughnasadh. There is some discussion of the struggle between the seasons and a couple of oblique references to “the alignment” in Emberhead. Aniolowski suggests that the meaning of the Festival slowly changed around the turn of the century.
    The monograph terminates mid-sentence at the end of page 28, just as it begins to discuss the modern practices. You ask Winters if he has the remaining pages.
    “No. I’m afraid those have been misplaced,” he says. “Perhaps they are still in the library somewhere, but...” He shrugs. “I must make the time for a thorough stock take.”`,
    options: [{ goto: 99 }]
  },
  {
    id: 82,
    text: `After five minutes, you are able to climb to your feet and stagger, leaning on the cliff for support. You emerge from behind a shack. Two passing villagers see you and run to your assistance. Each slings one of your arms around their shoulders and they walk you back up to the Emberhead plateau. You are too badly hurt to struggle.
    One of the local women takes you to a house and tends to your wounds. The cool touch of a wet towel is welcome. Yet the men stand by, watching. And when she is done, they step out and lock the door.
    You succumb to a wave of fatigue.`,
    options: [{ goto: 108 }]
  },
  {
    id: 83,
    text: `Despite her hospitality, you do not trust May Ledbetter. You return to her house quite openly. Where else would you go?
    Inside, the dwelling is still empty. You rap on the bedroom door and wait. Silence. You ease it open.
    The Ledbetter bedroom is in marked contrast to your own, neat space. Dirty clothes are piled about the floor. On a rough quilt lie schoolbooks and cheap novels. You notice a raggedy old doll discarded down the side of the bed.`,
    rolls: [
      { skill: Skills.SPOT_HIDDEN, succeed: 95, fail: 89 }
    ]
  },
  {
    id: 84,
    text: `The village hall backs against a cliff at the east end of Silbury Street. It’s the largest building you’ve seen so far in Emberhead. It is, however, locked and shuttered. You walk around it, peering through gaps in the shutters. There seems to be one large room, presumably for community meetings, and a smaller annex that serves as an office and archive. One of the windows is bricked up. Back at the main door, you can see no posted opening hours.
    “Mr. Winters doesn’t open up mornings, this time of year,” says a gray-garbed woman passing by. “Best come back this afternoon.”
    You ask whether the office has a telegraph. “Don’t know.” She shrugs. “Who would we call?” You will have to try again later.`,
    options: [{ goto: 25 }]
  },
  {
    id: 85,
    text: `You set off along the track and make good progress. A few mossy tree stumps mark the route and you wonder if its course was planned. However, after about ten minutes, the boughs draw closer and it becomes harder to pick out a way forward. Just as you think you can see the path open up ahead, you miss your footing.`,
    rolls: [
      { characteristic: Characterstics.LUCK, succeed: 91, fail: 97 }
    ]
  },
  {
    id: 86,
    text: `An ink-black figure stands in the road, about twenty yards behind you. It stares at you. You form the sudden impression that it will run at you and throw you over the cliff edge. This is unsettling.
    Seeing it has been spotted, the figure slips down an alley.`,
    options: [
      { text: 'Return to the safety of the Ledbetter house.', goto: 100 },
      { text: 'Confront the dark figure.', goto: 121 }
    ]
  },
  {
    id: 87,
    text: `You round an outcrop to find the man has disappeared. The ridge extends much further to the west, and the outer edge leads to a dangerous drop. You have lost him.`,
    rolls: [
      { skill: Skills.SPOT_HIDDEN, succeed: 181, fail: 160 }
    ]
  },
  {
    id: 88,
    text: `The volumes you select from the science section seem rather dry until you try one on astronomy. There is a leaflet inside issued by the Astronomical Society of the Pacific (San Francisco) speculating on the possibility of life on Mars, the fourth planet of the Solar System. It seems generally agreed that, although the planet holds no permanent bodies of water like Earth’s lakes and seas, it has polar caps which grow during the Martian winter and reduce during its summer. Furthermore, there is another seasonal change in the dark areas of the southern hemisphere, where the color shifts from green to brown, possibly an indication of vegetation. Opinion is divided, but life on Mars seems to be a possibility. Perhaps Mr. Wells’ story is not, after all, so far-fetched.
    “An astronomer?” Winters gives an approving nod. “Emberhead is an ideal spot from which to observe the night sky. Even Fomalhaut is visible at the moment, for a few days. Follow down the right-hand side of Pegasus and you may catch it above the horizon. I wish we had a proper telescope.”`,
    options: [{ goto: 99 }]
  },
  {
    id: 89,
    text: `You go through the Ledbetters’ drawers. The only item of interest you find is a wedding photograph. May’s husband was a wiry man with a square chin. Despite the formality of the pose, you can see the affection between them. You feel a pang of guilt at your intrusion. Also, May might return at any time.`,
    rolls: [
      {
        skill: Skills.SPOT_HIDDEN,
        text: 'If you wish to push the Spot Hidden roll, make the roll again.',
        succeed: 95,
        fail: 101
      }
    ],
    options: [
      { text: 'If you would rather not risk it, continue.', goto: 120 }
    ],
  },
  {
    id: 90,
    text: `You clear your throat and begin the ritual you found in the strange book, pronouncing the strange syllables as best you can. You know the fire is slipping ever closer by the touch of heat on your face, yet you put your panic aside and concentrate on completing the chant.
    As you speak the weird words, you become aware that the song of the villagers has shifted and they, too, are chanting. An eerie tingling builds in your palms and temples.`,
    options: [
      {
        text: 'You are casting a spell. You may commit up to 10 magic points to this spell. If you have less than 10 magic points, you may spend hit points on top of the magic points—but not so many that you are reduced to 0 hit points. Decide how many points to commit, then continue.',
        goto: 198
      }
    ]
  },
  {
    id: 91,
    text: `A root snags your ankle and you topple. Long grass cushions the impact and you climb back to your feet with no serious harm done. Your jacket will need some attention with a stiff brush and sponge at the next opportunity.
    Ahead, you see the road again. This has not been as much of a shortcut as you hoped.`,
    options: [{ goto: 79 }]
  },
  {
    id: 92,
    text: `The cliff seems to fold over you. Pain fades out as your consciousness slips away.`,
    options: [
      {
        text: 'You have bled to death from your wounds after falling from the cliffs at Emberhead!',
        goto: THE_END.id
      }
    ]
  },
  {
    id: 93,
    text: `Desperation lends you strength and you yank at what you guess to be the weak point in the chain. It breaks! You throw the chain off, stumbling across one of the red-shrouded corpses, heading away from the watching villagers. You cough. Your hair and eyebrows smolder.`,
    attributeChange: [{
      attribute: Attributes.HIT_POINTS,
      decrease: '1d6'
    }],
    options: [{ goto: 137 }]
  },
  {
    id: 94,
    text: `Winters raises an eyebrow when you settle down with the tatty magazines, but says nothing. The stories in Bizarre Tales are fanciful affairs, of prisons in orbit, devils imprisoning middle- aged women and mechanical spiders traveling between planets through radio waves.
    You become immersed in a science fiction story, in which unfathomable stilt-men stride through a steaming swamp beneath the moon’s surface, in thrall to floating, mesmeric brains. The improbable, eerie tale amuses and relaxes you, and puts your recent difficulties into context.`,
    attributeChange: [{
      attribute: Attributes.SANITY_POINTS,
      increase: '1',
    }],
    options: [{ goto: 99 }]
  },
  {
    id: 95,
    text: `You notice scrapes on the floorboards corresponding to the legs of the bed. With effort, you slide the bed away. There is a rug spread beneath it, and beneath the rug, a trapdoor. You ease it open. The dark space beneath is some kind of cellar.`,
    options: [
      { text: 'Descend into the cellar.', goto: 114 },
      { text: 'Give this up.', goto: 120 }
    ]
  },
  {
    id: 96,
    text: `Not far from the Ledbetter house, on the north side of Silbury Street, there is an open courtyard. The rhythmic tattoo of a hammer seems to announce your approach.
    The courtyard is the busiest location you have yet seen in Emberhead. It is bordered by a ring of workshops. Some are brick buildings, some only rough huts. A blacksmith ceases to hammer, thrusting something red and glowing into a bucket of cold water. A weaver looks up from his loom, blinking at you for a moment before returning to his shuttle. A potter, engraver, and carpenter each work in their own space, exchanging friendly banter.
    You move among the artisans, chatting about their work. Eventually you bring up the question of export. Some of them send occasional packages with Silas. Some restrict their custom entirely to villagers. You receive no suggestions about alternative transport.`,
    rolls: [
      {
        skill: Skills.PSYCHOLOGY,
        succeed: 106,
        fail: 25
      }
    ]
  },
  {
    id: 97,
    text: `A root snags your ankle and you go down hard. You gasp as pain lances up your arm. A dead branch has pierced your forearm and made a gouge almost three inches long. Blood drips onto the grass.
    Ahead through the trees, you glimpse the road. Perhaps you should have stuck with it instead of striking off into the unknown.`,
    attributeChange: [{
      attribute: Attributes.HIT_POINTS,
      decrease: '1d3'
    }],
    options: [
      {
        text: 'You may attempt a First Aid roll. If you succeed, restore 1 hit point and check mark the small box beside the First Aid skill.',
        goto: 79
      }
    ]
  },
  {
    id: 98,
    text: `You are contemplating your next move when you see one villager, a bald man with a damaged ear, watching you intently. Some instinct makes you walk in the other direction. Then you see the others, ahead, and to your sides: a wary teenager, an evil-eyed matron, and a man hefting a club. They are not staring as obviously as the first, but they keep you under watch. And they are closing in. You cannot hope to overcome four of them at once.`,
    options: [
      {
        text: 'Try to lose them among the buildings.',
        goto: 158,
      },
      {
        text: 'Run for it.',
        goto: 164
      }
    ]
  },
  {
    id: 99,
    text: `The afternoon wears on. You have not quite finished your reading when Winters glances out of the window and stands up. He clears his throat.`,
    rolls: [
      {
        skill: Skills.CREDIT_RATING,
        succeed: 111,
        fail: 105,
      }
    ]
  },
  {
    id: 100,
    text: `You flee back down the narrow street, the lantern swinging in your grasp. You reach the door and pound it urgently. May is surprised to see you so soon.
    “The air up here can tire you out if you’re not used to it,” she says.
    You glance back once before you close the door. The dark figure is standing against the wall at the end of the street, still staring at you. Or is it? The murk may be deceiving your eyes. You slide the heavy bolt into place.
    May has settled back into her chair, but now she blinks and yawns. “I believe I’ll turn in. When would you like your breakfast?”`,
    options: [{ goto: 63 }]
  },
  {
    id: 101,
    text: `A shadow falls across you. “So,” May Ledbetter says. “You know.” You try to get to your feet. A mob of villagers spills from behind her and surrounds you. You struggle, but you cannot resist the sheer weight of their numbers. You are quickly
    overpowered.`,
    options: [{ goto: 108 }]
  },
  {
    id: 102,
    text: `You mention the assistant’s position you were offered at Arkham Rare Books and Maps on the strength of a recommendation by a distant friend of the family. Thinking about the treasures that must pass through that shop returns some of the excitement you felt upon receiving the letter of appointment. You feel a tingle in your palms; you cannot wait to get started.
    “Books, eh?” Silas takes the conversation no further. You get the feeling he is not much of a reader.
    Your Credit Rating skill is 20%.
    Your occupation skills are: Appraise, Art/Craft (specify a particular field), History, Library Use, Other Language (specify one), Spot Hidden, and one of either Charm, Fast Talk, Intimidate, or Persuade. You may also pick one other skill except Cthulhu Mythos as a personal specialty. Allocate the following values among these occupation skills, writing them in the large square beside each: 70%, 60%, 60%, 50%, 50%, 50%, 40%, 40%. Ignore any starting value already mentioned on the investigator sheet.`,
    options: [{ goto: 128 }]
  },
  {
    id: 103,
    text: `There is no guarantee that the track leads back to the road you are following. Better to stay on course, even if it takes longer. But you are uncomfortably aware of the sun setting behind you as you walk on.
    Fifteen minutes later, you are passing a natural clearing when you catch movement out of the corner of your eye. About thirty yards away, something large lingers at a trunk. It is about your height, and black with small, rounded ears. As you watch, it rears up on its hind legs. A bear! It seems most interested in the fruit hanging above it.`,
    options: [
      { text: 'Get a closer look at the bear.', goto: 110 },
      { text: 'Remain motionless.', goto: 116 },
      { text: 'Make a deliberate, slow retreat.', goto: 122 },
    ]
  },
  {
    id: 104,
    text: `You drink from the cup. It holds cool, refreshing water, which you gulp down. When it is empty, she turns to leave. You speak to her, but she steps outside and closes the door.
    Later, you try yelling. Your voice must be audible outside, but it has no effect. It seems the entire village is involved.`,
    options: [{ goto: 205 }]
  },
  {
    id: 105,
    text: `“I’m afraid I have some errands to run before dark. So I must close the library for today. I do hope you will return tomorrow afternoon if you are so inclined?”
    You leave the building with Winters, waiting as he locks up. You thank him for the coffee and the access to the library. He disappears off down an alley. You hope to be away from the village before tomorrow afternoon, but it’s good to know that there is a place you can occupy yourself.`,
    options: [{ goto: 180 }]
  },
  {
    id: 106,
    text: `One of the workshops is shut up. When you stray close to it, the repartee between the craftspeople becomes awkward— almost forced. Interesting.`,
    skillUp: { skill: Skills.PSYCHOLOGY },
    options: [{ goto: 25 }]
  },
  {
    id: 107,
    text: `The cliffside staircase! You melt back into the village. Eyes follow you as you go. Eventually you head back towards the Ledbetter house with a visible yawn. Alone for a moment, you slip down an alley and thread your way around the rear of the buildings.
    You find the spot and slip your feet over the side, feeling for the step and trying not to think of the twenty-foot drop beneath you. You grip the cold stone of the cliff. One step down, then another... Somebody rounds a nearby building and you pull your head out of sight.
    Sixty seconds later, your feet touch solid ground. The shacks nearby are shuttered. You move with light steps to the eastern road.`,
    options: [{ goto: 152 }]
  },
  {
    id: 108,
    text: `The fading light from a narrow window tells you afternoon is giving way to evening. Your hands are shackled behind your back so you cannot even lie down on the rough bed. A woman you have not seen before comes in. Her face is wrinkled and her eyes dull. They do not meet yours, but she puts a cup to your lips.`,
    options: [
      { text: 'Accept the drink.', goto: 104 },
      { text: 'Reject the drink.', goto: 113 }
    ]
  },
  {
    id: 109,
    text: `You slither from the grasp of the youths. Fire pours across their shoulders and ignites their hair. Curtains of smoke shroud you. Your legs are burning. You must get off the Beacon immediately.`,
    attributeChange: [{
      attribute: Attributes.HIT_POINTS,
      decrease: '1d6',
      text: 'Take 1D6 hit points of damage from the fire.'
    }],
    options: [{ goto: 137 }]
  },
  {
    id: 110,
    text: `You slink towards the bear, trying to remain obscured by the trees.`,
    rolls: [
      {
        skill: Skills.STEALTH,
        difficulty: SkillDifficulty.extreme,
        succeed: 143,
        fail: 129,
        fumble: 149
      }
    ]
  },
  {
    id: 111,
    text: `“I’m happy to leave you in charge for a half-hour or so.” He smiles. “Please don’t issue any books without a valid library card.”
    You thank Winters for his trust and continue with your reading for a time. As the light dims, you find yourself yawning in the closeness of the room. Perhaps it is time for a change of material.`,
    rolls: [
      {
        skill: Skills.SPOT_HIDDEN,
        succeed: 118,
        fail: 124
      }
    ]
  },
  {
    id: 112,
    text: `Your keen eyes pick it up after a couple of minutes of scanning the cliff face. There are a series of protruding rocks, combined with what look like man-made incisions. The effect is an ingenious hidden stairway that leads down the cliff. No doubt the dark figure used this to descend safely.
    You look along the lower shelf. You see only a few drab shacks, off to your right. This might have been an interesting find, were you not about to leave Emberhead for good.`,
    attributeChange: [{
      attribute: Attributes.SANITY_POINTS,
      increase: '1'
    }],
    gainSecret: 'northeasterly_cliff',
    skillUp: { skill: Skills.SPOT_HIDDEN },
    options: [{ goto: 192 }]
  },
  {
    id: 113,
    text: `You turn your face away, and when she tries again, you dash the cup from her hands using the side of your head. The clear liquid spills across the floor.
    The woman gives a half-shrug and turns to leave the room. You shout after her, but she gives no reaction.
    You soon become thirsty.`,
    options: [{ goto: 205 }]
  },
  {
    id: 114,
    text: `The daylight barely offers enough illumination to see, but a hot lantern during daytime would be very suspicious. You squeeze beneath the floor and glance around.
    Your first impression is that May keeps her junk here, for there are many boxes of different sizes piled in untidy heaps. It takes a few seconds before you realize they are all traveling trunks, or suitcases. There are about twenty of them.
    The implication hits you hard. Yet you maintain enough control to check the luggage tags. You count eight or nine different names before you stop. Scrambling back up to the bedroom, you close the trapdoor with trembling fingers, returning the bed to its place.`,
    options: [{ goto: 120 }]
  },
  {
    id: 115,
    text: `The air is fresh and the walk down to the lower ridge invigorating. You notice cultivated fields stretching through the lowlands around Emberhead, and among the crops some livestock, but no horses. Are you going to have to make your onward journey on foot?
    Further down, the road skirts the edge of the ridge and descends. There are a few scattered hovels here, with signs of habitation. They are set a substantial distance apart.
    As you examine them, a door opens, and an older man steps out. He wears a bedraggled suit, but carries a piece of cloth, which he tosses over his head like a hood. As he does this, he sees you and freezes.`,
    rolls: [
      {
        characteristic: Characterstics.LUCK,
        succeed: 127,
        fail: 135
      }
    ]
  },
  {
    id: 116,
    text: `You keep your breath shallow and watch the creature. It pauses and looks around the clearing.`,
    rolls: [
      {
        characteristic: Characterstics.LUCK,
        succeed: 136,
        fail: 129
      }
    ]
  },
  {
    id: 117,
    text: `The procession down The Approach is slow and formal, save when you sense weakness and yank at your captors. A chill touches you when you see three human shapes carried ahead of you, draped in red cloth. The Beacon looms larger and larger, its dreadful silhouette a black triangle pointing to the stars. A low drone begins among the cloaked figures—unbidden, the word mourners comes to mind. Smoke from their torches makes you cough. You feel heat on your face.
    As you reach the cleared area around the Beacon, three dancers break from the pack: young girls swinging balls of fire in spectacular arcs, drawing circles in the night air. One by one, they draw close to you and touch your forehead with sooty fingers. Each kisses you three times: on the left cheek, right cheek, then forehead. Then they whisper in your ear. The smell of kerosene fills your nostrils.`,
    rolls: [
      {
        characteristic: Characterstics.APP,
        succeed: 10,
        fail: 148
      }
    ]
  },
  {
    id: 118,
    text: `As you scan the shelves you try to move aside one of the three volumes of Walpole’s A Comprehensive Grammar of the Andean Peoples. It will not shift, and upon further inspection you find the three volumes are actually glued together and attached to the wall. Is this some kind of unobtrusive way to reinforce the shelves?
    You hear footsteps in the hall and, on instinct, move away from this curious discovery.`,
    skillUp: { skill: Skills.SPOT_HIDDEN },
    options: [{ goto: 124 }]
  },
  {
    id: 119,
    text: `The southern group appears less sharp than the western group. You stride up to them and explain they are needed at the Beacon. They look dubious. You offer to watch the road for them and hold out your hand for a pitchfork.
    “Nah. You come with us,” says the first one. His ape-like brow bends into a frown.`,
    rolls: [
      {
        skill: Skills.FAST_TALK,
        difficulty: SkillDifficulty.extreme,
        succeed: 132,
        fail: 139,
      }
    ]
  },
  {
    id: 120,
    text: `You feel a deepening unease about Emberhead and this day in particular.`,
    options: [
      { text: 'Once you have attempted three options below, continue.', goto: 98 },
      { text: 'Search May Ledbetters\'s bedroom.', goto: 83 },
      { text: 'Go along to the village hall.', goto: 126 },
      { text: 'Take a closer look at the artisans\' courtyard.', goto: 219 },
      { text: 'Spy on activity at the Beacon.', goto: 29 },
      { text: 'Slip down to the east road and flee for good.', goto: 7 }
    ]
  },
  {
    id: 121,
    text: `As you approach, the figure takes a pace back, then another. It slips down an alley between two buildings.`,
    rolls: [
      {
        skill: Skills.TRACK,
        text: 'To catch your target, you must make a Track roll.',
        succeed: 141,
        fail: 130
      }
    ]
  },
  {
    id: 122,
    text: `You’ve heard that bears are not aggressive, but why take the chance when you are alone, miles from help? You move away with careful, quiet steps. The bear shows no interest in you at all.`,
    options: [{ goto: 79 }]
  },
  {
    id: 123,
    text: `They bear you back into the center of the pyre. Their eyes are flecked with fervor and terror. Even as the flames spread over them and across your clothes, even as the heat builds and sears your flesh, even as smoke chokes you and your vision blurs, they hold you down in the flames. Your screams mingle with theirs as the fire does its work.`,
    options: [
      {
        text: 'You have burned to death while grappling two teenagers.',
        goto: THE_END.id,
      }
    ]
  },
  {
    id: 124,
    text: `The door opens and Winters re-enters the library. He wears a small, satisfied smile. His gaze shifts to you where you stand at the shelves. “Exhausted our stock already? Of course we accept donations.” He chuckles. “I’m afraid it’s closing time.”
    You leave the building with Winters and wait as he locks up. You thank him for the coffee and the access to the library. He strolls away down Silbury Street.`,
    options: [{ goto: 180 }]
  },
  {
    id: 125,
    text: `On the other side of May Ledbetter’s street you see a washing line with some baggy, crumpled clothes. It’s not a lot to work with, but you use your own clothes as stuffing, improvise a hat, and change your gait to a stooped shamble.
    Nobody gives you a second look as you limp towards the southern exit from the village. The guards are still at their station, scrutinizing passers-by. But they are beginning to look bored.`,
    rolls: [
      {
        skill: Skills.DISGUISE,
        difficulty: SkillDifficulty.hard,
        succeed: 146,
        fail: 139
      }
    ]
  },
  {
    id: 126,
    text: `Keeping away from the streets, you skirt the northern cliffs and approach the village hall from the rear. It is close to the Beacon and you will not be able to use the door unobserved. You check the windows. The one on the east side, facing the Beacon, is bricked up.
    A shutter is loose on the westernmost window and you are able to ease it open and slide inside, closing the shutter behind you. You drop into the village meeting room and pad through, passing through dim shafts of light and listening to the excited chatter of the locals from outside. The door opposite reads PRIVATE. Hearing nothing from the other side, you turn the handle.`,
    options: [{ goto: 133 }]
  },
  {
    id: 127,
    text: `The man looks up at the village, scanning the clifftops. You get a brief flash of his face. There is something unsettling about it. Then he turns to walk away from the road. But as he does, he raises a hand and slowly beckons to you.`,
    options: [
      { text: 'Follow the strange man.', goto: 142 },
      { text: 'Following the man seems unwise.', goto: 160 }
    ]
  },
  {
    id: 128,
    text: `You realize Silas hasn’t made a stop since the incident with the tractor. The motor coach winds its way uphill. However, your thoughts are interrupted as the road crests a ridge and you are treated to a magnificent view of the vista below.
    A creek snakes through the valley, breaking the rich autumn palette of the tree line. In the distance the White Mountains rise into hazy cloud. There is no settlement, not even a cabin, as far as the eye can see. Birds drift through the treetops, and you can just make out what might be two white-tailed deer lingering by the water.
    Perhaps you are making a mistake by moving to the city. Could you survive on your own in this lush wilderness?
    <i>You have a base ability in most skills, listed in brackets after the skill name on the investigator sheet. For instance, you have 20% in Climb and a base Dodge equal to half your DEX.
    Choose four skills, which are not your occupation skills (nor Cthulhu Mythos). These are your Personal Interest Skills. Boost each of these by 20 points.
    At this point you may like to calculate half and one-fifth values for each skill, in just the same way you did for your characteristics (see the table on page 23 of Book Two). Remember to round down. If you are bored of calculations, you can leave the math until it becomes necessary. Or, if you are using the interactive PDF version of the investigator sheet, you’ll see it does all the math for you!</i>`,
    options: [{ goto: 144 }]
  },
  {
    id: 129,
    text: `Something seems to spook the bear. It turns and shambles into the forest, away from you, its rump swinging. You wait for five minutes, but the animal does not return. Still, it was a fascinating creature to observe for the brief moments you had.`,
    options: [{ goto: 79 }]
  },
  {
    id: 130,
    text: `The figure moves fast, with almost silent steps. You are hampered with a heavy lantern in an unfamiliar environment. You emerge from the alley into a dusty courtyard, and can detect no sign of your quarry. You scratch around for a few minutes, but the figure has gone.
    It seems unwise to continue your stroll through unknown, dark streets while this threatening presence is abroad. You head back to the Ledbetter house. May lets you in and settles back in her chair. Soon she begins to yawn. “I believe I’ll turn in. When would you like your breakfast?”`,
    options: [{ goto: 63 }]
  },
  {
    id: 131,
    text: `You stroll the streets of Emberhead. Already it feels like you know every corner, every doorstep. There are simply not that many of them. When you emerge into an open space, the starfield above you is arresting. The streetlights of your hometown always interfered with the view, even on a clear night. But here, in this lofty blackness, a multitude of tiny diamonds shimmer between the more familiar stars.
    The spectacle occupies you for a few minutes. Upon returning your gaze to earth, you notice a dark figure pressed behind a house. A loose stone skitters behind you. A second figure stares from an alleyway.`,
    options: [
      { text: 'Retreat to safety of the Ledbetter house.', goto: 157 },
      { text: 'Confront the figures.', goto: 163 }
    ]
  },
  {
    id: 132,
    text: `Your impatience is convincing and one villager hands you his pitchfork. You move to the center of the road and hold the fork in a sentinel’s pose. The villagers shuffle off towards the Beacon, looking back a couple of times.
    Once they are out of sight, you ditch the bulky fork and sprint down the eastern road.`,
    options: [{ goto: 152 }]
  },
  {
    id: 133,
    text: `The room is lined with books. In the corner is a small water closet and pantry. A quick survey of the rest of the room reveals little, so you turn to the bookcase. The dim light makes it difficult to read the spines. Is there anything useful here?`,
    rolls: [
      {
        skill: Skills.SPOT_HIDDEN,
        text: 'Make a Spot Hidden Roll. If you have examined this bookshelf before, you may have a bonus die.',
        succeed: 147,
        fail: 140,
      }
    ]
  },
  {
    id: 134,
    text: `The coach putters through the countryside. At first, the interior is stifling and your stomach lurches with every bend in the road. However, the driver opens his window, and by switching seats you find a spot where the breeze hits your face. You soon relax into the journey, observing the quaint little hamlets that the coach serves. A heavy-set woman boards at one settlement and gives you a polite nod. She gets off at the next one.
    The road rises a little, passing cornfields and orchards. The leaves are turning and the trees are alive with glorious reds and golds. You have just begun to doze when the driver takes a tight bend at speed.
    <i>Add SIZ and CON together, then divide the total by 10, rounding down. This is the starting value for your hit points. Mark it on your investigator sheet. Your current total may drop, but it is unlikely to exceed the starting value.
    You also have a Luck score. Roll three six-sided dice. We call this “3D6.” Multiply your 3D6 roll result by 5 to get your beginning Luck score and mark it on your investigator sheet.
    Now you must make a roll against your DEX. Roll 1D100. This means rolling two ten-sided dice and using one value for the tens and one value for the units (unless one die is clearly a tens die, see Roleplaying Dice on page 4 for further details.)
    If you rolled equal to your DEX, or less, you passed the roll. If you rolled greater than your DEX, you failed the roll.
    You may be tempted to skip such rolls and simply pretend you always pass. But Call of Cthulhu is a game of mystery and horror. The terrible disasters that can befall your character are part of the fun. You will not necessarily have more fun if you pass every roll than you would have if you failed.</i>`,
    rolls: [
      {
        characteristic: Characterstics.DEX,
        succeed: 261,
        fail: 59
      }
    ]
  },
  {
    id: 135,
    text: `The strange man breaks into a run, fleeing from you along the ridge. His gait is lopsided, but his movements have a maniacal intensity.`,
    options: [
      { text: 'Give chase.', goto: 150 },
      { text: 'You have better things to do.', goto: 160 }
    ]
  },
  {
    id: 136,
    text: `The bear plunges its claws into the trunk and scales the tree with surprising agility. It steadies itself on a fork and proceeds to tear fruit from the branches, cramming the dark morsels— plums?—into its mouth.
    You watch for perhaps ten minutes, until the animal seems to tire of eating and drops from the tree to the ground. It looks around the clearing and yawns before heading off into the forest, its rump swinging.`,
    options: [
      {
        text: 'Watching the bear has been an educational experience. You may permanently add one skill point to you Natural World skill.',
        goto: 79
      }
    ]
  },
  {
    id: 137,
    text: `You leap from the conflagration on the far side of the Beacon. Your heart lurches momentarily at the sight of the sheer drop beneath you, but you land a few inches short of the edge. You roll to extinguish your burning clothes. Your lungs feel singed. Everything hurts. The chant of the villagers gathers in intensity. You peer around the Beacon. They don’t seem to have noticed your absence amidst the billowing smoke. Most of them are staring into the sky.
    You crawl as rapidly as you can for the cover of the nearest building.`,
    options: [{ goto: 156 }]
  },
  {
    id: 138,
    text: `In time, May returns to the kitchen and busies herself clearing up. To speak to Ruth, you will need to get May to leave for a short while. You help with the dishes and try to think of some ruse. In time, an idea comes and you ask about Silas and his friends in the village.
    May narrows her eyes. “He knows Troy on the other side of town,” she says. “Not sure I’d call them friends. More like an old feuding couple. But he probably spent last night at Troy’s place.”
    You ask May if she could visit Troy and ask if Silas mentioned any plans to return. May looks dubious. “Right now?” she asks.
    Without looking at your investigator sheet, decide how best to influence May: by appealing to her emotions; by explaining how further delay threatens your career; or by trying to rush her into compliance.`,
    rolls: [
      {
        skill: Skills.CHARM,
        succeed: 145,
        fail: 151,
      },
      {
        skill: Skills.PERSUADE,
        succeed: 145,
        fail: 151,
      },
      {
        skill: Skills.FAST_TALK,
        succeed: 145,
        fail: 151,
      },
    ]
  },
  {
    id: 139,
    text: `These locals are not as stupid as you think. They grab you and march you back into the center of the village.`,
    options: [{ goto: 108 }]
  },
  {
    id: 140,
    text: `Tucked between two books, you find a detailed map of the area around Emberhead (see page 33). It shows woodland, contours, and the two roads, east and west. Although no other settlements are marked, this may prove useful if you do decide to leave today.
    The clatter of activity around the Beacon seems to be building and you flinch at every conversation that gets too close to the building’s door. It feels the right time to retrace your steps, slipping away through the window.`,
    options: [{ goto: 120 }]
  },
  {
    id: 141,
    text: `The figure moves fast, with almost silent steps, but your instincts keep you on its tail. It slips through a dusty courtyard, veering off between iron fences. You close in as it darts around a corner.
    A breeze warns that you are close to a cliff edge. The flickering light from your lantern picks out its grassy lip as you charge in pursuit. You slow your pace, watching for unexpected voids beneath you. The watcher pulls further away, but rather than darting back into the maze of streets it makes for the cliff edge. You close in.
    The dark figure swings its head to stare at you once more. You receive a brief, uneasy impression of something wrong with its face.
    Then it leaps over the cliff edge.
    Your mouth drops open. You approach the edge, lantern swinging in the wind. Dim light plays on the rock face beneath you. Did you frighten somebody into suicide? Your gut says not. But you cannot explain what just happened.
    <i>Make a Sanity roll. If you fail, lose 1D2 Sanity points. You can roll this with an ordinary six-sided die: 1, 2, or 3 means lose 1 Sanity point, and 4, 5, or 6 means lose 2 Sanity points.</i>
    You find your way back to the Ledbetter house, the lantern trembling in your grasp. If May notices your unease, she says nothing. You feel weary.`,
    options: [{ goto: 63 }]
  },
  {
    id: 142,
    text: `You follow the man around the outcrop. He glances up, then steps between two rocks and vanishes!
    Closer inspection reveals a narrow channel leading into the cliff. There is just enough light to see a small, natural chamber within. You will be uncomfortably close to this man if you go inside.`,
    options: [
      { text: 'Follow him in.', goto: 191 },
      { text: 'Keep your distance.', goto: 160 }
    ]
  },
  {
    id: 143,
    text: `The bear plunges its claws into the trunk and scales the tree with surprising agility. It steadies itself on a fork and proceeds to tear fruit from the branches, cramming the dark morsels— plums?—into its mouth.
    You watch for perhaps ten minutes, until the animal seems to tire of eating and drops from the tree to the ground. It looks around the clearing and yawns before heading off into the forest, its rump swinging.`,
    options: [
      {
        text: 'Observing the bear from such close quarters has been an exceptional experience. You may permanently add two points to your Natural World skill.',
        goto: 79
      }
    ]
  },
  {
    id: 144,
    text: `The motor coach rattles on through the hills and Silas lapses into silence. The sky darkens behind you, pinks tinting the clouds as the sun descends. Finally a welcome sight comes into view: a settlement on the crest of a hill. This doesn’t look like the pictures you’ve seen of Ossipee. But perhaps you can persuade Silas to stop while you stretch your legs.
    Minutes later, a harsh stuttering from the engine interrupts your reverie. Silas frowns and rattles the gear stick. The motor coach falters in its ascent. Silas utters a curse you don’t recognize and grinds his teeth, struggling at the wheel. You seem to inch up the hill until you reach the first buildings, low dwellings constructed from a rough red stone. Silas wrestles the coach into a small bay off the road. He scrambles from his seat and makes for the engine compartment.`,
    rolls: [
      {
        skill: Skills.DRIVE_AUTO,
        succeed: 174,
        fail: 194,
      },
      {
        skill: Skills.PSYCHOLOGY,
        difficulty: SkillDifficulty.hard,
        succeed: 162,
        fail: 194
      }
    ]
  },
  {
    id: 145,
    text: `“Well... I suppose it will only take a few minutes.” May fetches a coat and heads out into the night. You give her time to get clear, then rap on the bedroom door. Nothing comes but silence. Then feet pad across the floor and the door opens a few inches. Ruth’s eyes stare through the gap, glancing from left to right. You explain her mother has left the house and ask what has been bothering her. Those eyes flick up to stare at you.
    "It's tomorrow," she whispers. "Same as every year. They took my da. They'll take you, if you let them."
    The conviction in her eyes is chilling. You press her. Who is she talking about?
    “All of them. Every one. They’ve been watching since you got here. You’re marked.” Her voice is hollow. “One year, when I’m older... they’ll take me.”
    You hear footsteps approaching from outside. Ruth’s eyes flash and the bedroom door slams. You turn back to drying the dishes. May enters and removes her coat.
    “That man is a waste of time,” she hisses, and heads through to the bedroom.`,
    options: [
      {
        text: 'You may check mark the small box beside the skill you used. Continue',
        goto: 157
      }
    ]
  },
  {
    id: 146,
    text: `One of the guards nods to you as you shuffle past. It is an effort to maintain this half-pace when your instincts tell you to run. But you keep it up until you are on the eastern road. Then you discard the disguise in a hole filled with mud.`,
    skillUp: { skill: Skills.DISGUISE },
    options: [{ goto: 152 }]
  },
  {
    id: 147,
    text: `You’re looking along the spines when you notice how close the bookcase is to the window on the north wall. From outside, there is a solid three or four feet between the edge of the window and the wall. And the bookcase covers the wall with the bricked-up window.
    Further examination reveals an ingenious arrangement of slipcases physically attached to the shelves. When you pull to the left, an entire section of the bookcase swings out.
    The clatter of activity around the Beacon seems to be building, and you flinch at every conversation that gets too close to the building’s door.`,
    options: [
      { text: 'Investigate behind the bookcase.', goto: 153 },
      { text: 'Close it and make your escape while you can.', goto: 120 }
    ]
  },
  {
    id: 148,
    text: `“Through your sacrifice the village will be reborn,” says the first dancer.
    “You pass from earth to air for all our sakes,” says the second. “Through incandescence may you find rapture,” says the third. Their dance weaves off and disappears behind the buildings.`,
    options: [{ goto: 18 }]
  },
  {
    id: 149,
    text: `As you draw close to the animal, you lose your balance and stumble against a young tree. Its trunk snaps with a sound like a rifle shot. The bear’s head swings around and those black eyes lock on you.
    It charges you with startling speed. Its onrushing mass is quite terrifying.`,
    options: [
      { text: 'Flee from the bear.', goto: 155 },
      { text: 'Stand your ground.', goto: 173 }
    ]
  },
  {
    id: 150,
    text: `You break from the road and pursue the man, feeling wild grass snatch at your feet. He sprints around the ridge, attempting to elude you behind the very rocks that support the metal structure, high above.`,
    rolls: [
      {
        characteristic: Characterstics.DEX,
        text: `To catch the man, you must make an opposed roll, with your DEX versus his. The man has DEX 38. He scores a Hard success on a roll of 19 and under, and an Extreme success on a roll of 7 and under. Make the man’s DEX roll, then make your DEX roll.
        Compare your level of success. An Extreme success beats a Hard success, which beats a Regular (normal) success, which beats a failure. If there is a draw, the higher skill value wins.`,
        succeed: 172,
        fail: 87
      }
    ]
  },
  {
    id: 151,
    text: `May frowns and shakes her head. “I’ll be happy to go see him in the morning. I must see to Ruth for now. She’s been a terrible handful today.” Her bedroom door closes with a heavy clunk.`,
    options: [{ goto: 157 }]
  },
  {
    id: 152,
    text: `The sun is low in the sky as you head east from the village, making for the safety of the woods. The Beacon breaks the horizon, imposing in silhouette. You maintain as fast a pace as you can until you reach the refuge of the tree line. Then you allow yourself to step off the road and take a breather.
    Almost two hours later, the sun sets. The darkness of the woods might be frightening, but your escape from Emberhead has given you new resolve. You strike on into the night.
    Not long afterwards, you hear hooves, approaching fast. Two sets. Your heart lifts—but they are coming from behind you.`,
    rolls: [
      {
        skill: Skills.STEALTH,
        succeed: 211,
        fail: 216
      }
    ]
  },
  {
    id: 153,
    text: `You squint into the darkness behind the bookcase. It is a small alcove, big enough for one person, and has a hidden shelf on either side. You cannot make out any titles in this light.`,
    options: [
      { text: 'Risk openeing one of the cliffside windows a little.', goto: 165 },
      { text: 'Grab a few books and leave.', goto: 159 }
    ]
  },
  {
    id: 154,
    text: `You dream of fire in the grate; coruscating colors shimmering through the dancing tongues of flame. At first they are tiny, almost microscopic, but they grow, and grow, until a kaleidoscopic inferno spills from the fireplace, spreading across the floor, up the sheets...
    You wake with a start. Daylight glints through the curtains. You get up and examine the grate, blinking the sleep from your eyes. It is quite cold. <i>If you have taken any damage, you may heal 1 hit point back for your night’s sleep.</i>`,
    options: [{ goto: 166 }]
  },
  {
    id: 155,
    text: `You scramble between the trees, fighting panic as you run for the road.`,
    rolls: [
      {
        characteristic: Characterstics.DEX,
        text: `To escape from the bear, you must make an opposed roll, with your DEX versus the bear’s. The bear has DEX 58. It scores a  Hard success on a roll of 29 and under, and an Extreme success on a roll of 11 and under. Make the bear’s DEX roll, then make your DEX roll.
        Compare your level of success. An Extreme success beats a Hard success, which beats a Regular (normal) success, which beats a failure. If there is a draw, the higher skill value wins.`,
        succeed: 161,
        fail: 167
      }
    ]
  },
  {
    id: 156,
    text: `With the villagers assembled at the Beacon, the streets are empty and you are able to pad away from the blaze. You must get out of town before they finish.
    The chanting seems to accelerate as you round the corner of the southern road. Here, parked against the side of the general store, you have your first piece of luck since reaching Emberhead. A bicycle! You learned to ride one of these in Providence.
    You settle into the saddle. Your burned flesh protests at the contact.`,
    options: [
      { text: 'Wait and observe going on at the Beacon.', goto: 168 },
      { text: 'Ride out of town immediately.', goto: 185 }
    ]
  },
  {
    id: 157,
    text: `The familiar surroundings of your guest room are becoming constrictive. The neat bed, small wardrobe, and dressing mirror have the feel of a prison cell about them. What are you still doing here in Emberhead? Your new life is elsewhere.
    You lie on the bed and stare at a small crack in the ceiling. You turn over the day’s events, thinking through the little details you spotted. You are certainly weary from the elevation and the fresh air. But do you still feel safe here?`,
    options: [
      { text: 'Let yourself fall asleep.', goto: 224 },
      { text: 'Stay awake.', goto: 230 }
    ]
  },
  {
    id: 158,
    text: `You dart down an alley, then turn and head in a completely different direction. Running feet sound behind you. For the first time you feel Emberhead’s cramped, chaotic streets work in your favor. You try to circle round towards the southern road.`,
    rolls: [
      {
        skill: Skills.STEALTH,
        succeed: 7,
        fail: 170
      }
    ]
  },
  {
    id: 159,
    text: `You slip from the building, clutching some of the more portable volumes. In the shadows behind the artisans’ courtyard, you examine them.
    To your disappointment two or three are in a script unknown to you. Another appears to be in Egyptian symbols. There is a spidery, handwritten copy of something named The Emerald Tablet. But perhaps most intriguing is a small book of strange poetry bound in black, published in Boston in 1919. The cover reads Azathoth and Others, by Edward Derby. You’ll have to hide the larger volumes, but you can pocket the Derby book.
    <i>The Derby volume will require about a week of study to fully comprehend. If you survive this adventure, you may read 171 for more information about it.</i>`,
    options: [{ goto: 120 }]
  },
  {
    id: 160,
    text: `You turn back to the road and your core business: getting out of Emberhead and onwards to Ossipee. The ridge gives you a good viewpoint from which you can see the course of the road. It winds with the hills, disappearing into woodland for a while before emerging further on. You lose sight of it somewhere towards a second patch of woodland. By your best estimation, that is at least six or seven miles distant. You see no other settlements or traffic.
    It may be worth taking a chance and walking. The weather is still mild. But you will need supplies before you attempt it.`,
    options: [{ goto: 25 }]
  },
  {
    id: 161,
    text: `Heart hammering in your chest, you outdistance the bear and make it to the road. You keep running for some minutes, until you are sure it has lost interest in you.`,
    options: [{ goto: 79 }]
  },
  {
    id: 162,
    text: `You sense a falseness to Silas’s actions. He is acting. Either he is not as aggravated about the breakdown as his behavior suggests, or perhaps the breakdown itself is an act.
    If this is a ruse to make you spend your time and money in a local shop, he will be sadly disappointed in your purchasing power.`,
    skillUp: { skill: Skills.PSYCHOLOGY },
    options: [{ goto: 194 }]
  },
  {
    id: 163,
    text: `You advance on one of the figures, calling out. It slips into the shadows. By the time you round the corner, it is nowhere to be seen. You turn to the other figure, feeling a simmering anger. As you approach, it also melts away. But behind you, in a dim yard, the first figure has reappeared.
    You could do this all night. The watchers know the village far better than you do. Perhaps it is enough to have shown them you will not be cowed. Frustrated, you head back to the Ledbetter house.`,
    options: [{ goto: 157 }]
  },
  {
    id: 164,
    text: `These people know their village better than you. You pick the biggest gap between them and sprint into it. They give chase. You find yourself heading for the southern road. As you approach, you see four villagers stationed in the middle of the road; clearly guards. You veer off towards the half-ruined church, already breathing hard.
    You slip inside the building through a broken window and duck under the elderly boards that slash the interior, making for the door on the other side. The door is quite intact, moldy, and locked.
    Two of your pursuers climb into the church through the window. The other two enter by the main door.
    “Give it up.” One thumps his club into his palm. “It’ll go better for you if you don’t resist.”They close in.
    You are getting low on options.`,
    options: [
      { text: 'Give yourself up.', goto: 108 },
      { text: 'Try to collapse a section of roof on them.', goto: 176 }
    ]
  },
  {
    id: 165,
    text: `Enough light spills into the room for you to make out titles. The contents of the alcove are quite different from the wider library; the books are much older, some are handwritten, and many are in strange scripts you do not recognize. You could spend a week in here just browsing through the bizarre volumes.`,
    rolls: [
      {
        skill: Skills.LIBRARY_USE,
        succeed: 177,
        fail: 184,
      },
      {
        skill: Skills.LIBRARY_USE,
        text: 'If you fail, you may push the roll by attempting it again.',
        succeed: 177,
        fail: 190
      }
    ]
  },
  {
    id: 166,
    text: `May seems to have no running water, but has supplied some in a ceramic jug. You freshen up at the washstand and go in. She cooks a hearty breakfast and leaves you in peace to eat. At about seven-thirty, you are paid up, packed, and ready to go. You bid May goodbye and she wishes you the best for your new career in Arkham.`,
    options: [
      { text: 'You suceeded at a skill roll last night, and wish to investigate further.', goto: 178 },
      { text: 'Otherwise, continue.', goto: 192 }
    ]
  },
  {
    id: 167,
    text: `You are less than ten paces from the road when the bear snarls, inches behind you, and its claws rip through your jacket.
    <i>Each claw is a separate attack. It hits you 35% of the time, and it does 2D6 worth of damage with each claw. If either claw does half, or more, of your original hit points in damage, you have taken a major wound.</i>`,
    options: [
      { text: 'After resolving both claw attacks, if you have taken a major would.', goto: 179 },
      { text: 'Otherwise, continue.', goto: 186 }
    ]
  },
  {
    id: 168,
    text: `After a quick glance around to be sure you are unobserved, you look back along the avenue. The entire village is intent upon the Beacon. Their chanting reaches a new, fevered pitch. You cannot say exactly why, but you get the impression something is wrong.The chant begins to break and the villagers sway.Then—
    FTOOM! Something incandescent thunders into the crowd in front of the Beacon, leaving a fiery trail in your vision. You feel the ground shudder beneath the bicycle. FTOOM! Another strikes nearby, scattering sparks. Now the chant falters and gives way to screams.
    Fire skims the buildings facing the Beacon. Smoke rolls through the streets. A woman staggers towards you, wailing. Her arm is on fire. She beats it against a wall.
    FTOOM! Another strike, out of your sight, towards the village hall. It’s time to go.`,
    options: [{ goto: 185 }]
  },
  {
    id: 169,
    text: `Arbogast leads you across the thoroughfares, slipping between houses. The metal structure looms at the end of the street. “Silent now,” he says. “But the Beacon will come alive tomorrow night.”
    He ushers you into a little alcove behind the village school. Arbogast glances behind you, then sits down. Again you feel uncomfortable in proximity to that scarred visage. One melted eyelid lifts.
    “You don’t have long. Understand this. I was the conduit, the interpreter. Before that fool Winters and his fancy words. The things which come to Emberhead care not for words. Those idiots think this is a ritual of sacrifice!” He spits on the grass. “It is a ritual of control. They know the words, but they do not comprehend the forces they call.” He sniffs and sits back. “No! You have no time for more questions. I will teach you how to end it, in the moment when all is lost. You can return this hill to the earth, to the death that came forty years ago. I have tried it myself. But...” his head sags, “I no longer have the concentration. The chant is simple; it I can teach you. But you must perform it with a clarity of mind that I have lacked for years.”`,
    options: [
      { text: 'Learn this strange chat.', goto: 175 },
      { text: 'You\'ve had enought of Arbogast.', goto: 182 }
    ]
  },
  {
    id: 170,
    text: `You turn a corner and walk straight into the formidable woman with the malevolent stare. She grabs your shoulders and bears down on you. As you struggle, the man with the club runs up with the teenager. You are quickly overcome.`,
    options: [{ goto: 108 }]
  },
  {
    id: 171,
    text: `It takes you a full week to absorb Derby’s poetry. His verses tell of something at the center of existence: an oscillating, consuming mass, which rips apart the very fabric of the universe. Its emissary, sometimes named the Faceless One, sometimes the Crawling Chaos, brings a terrible derangement to all it touches. The words have a certain quality: not of vivid imagination, but of helpless revelation.`,
    options: [
      {
        text: `As you spend time with the volume, you notice insidious connections between the poems, which begin to disturb you. Make a Sanity roll. Lose 1 point if you succeed, and 1D4 points if you fail. You may gain 4 points of Cthulhu Mythos skill. You will never again rest quite so easily.`,
        goto: THE_END.id
      }
    ]
  },
  {
    id: 172,
    text: `You draw close to the man. He glares over his shoulder and sees you. “Damn you,” he spits, and slows down. “Can’t you leave a fellow be?”
    You assure him you mean him no harm. “We can’t talk here,” he says. “Follow me.”`,
    options: [{ goto: 142 }]
  },
  {
    id: 173,
    text: `The bear is not impressed by your bravery. It rears up and swipes.
    <i>Conduct close combat referring to pages 18–19 of Book Two— you may need to refer to page 8 first to look up your damage bonus. The combatant with the higher DEX acts first. You will take
    one action each combat round. You may fight back (rolling your Fighting (Brawl)) or dodge (using Dodge) against each of the bear’s attacks. Combat rolls are opposed rolls: whoever gets the best level of success wins.
    The black bear has a DEX of 58, and 20 hit points. Its thick furry hide absorbs the first 3 points of damage you do in each round. On the first round, it attacks once with each claw. Its Claw skill is 35% (17% half / 7% one-fifth) and each successful hit does 2D6 damage. On the second round, it attacks with one claw and bites. Its Bite skill is 25% (12% half / 5% one-fifth) and does 1D8 damage. On the third round, it attacks with both claws again.
    If you have a knife or similar weapon, each successful hit you make does 1D4 plus your damage bonus. If you are unarmed, the damage is 1D3 plus your damage bonus.</i>`,
    options: [
      { text: 'If you take a major wound, make a CON roll. If you fail, continue.', goto: 193 },
      { text: 'If you are standing after three combat rounds, continue.', goto: 201 }
    ]
  },
  {
    id: 174,
    text: `The grinding noises you heard could of course indicate engine trouble, but they also seem consistent with bad gear selection and incorrect declutching. It seems highly unlikely that an experienced coach driver would suddenly get this wrong, even after a long day’s drive.
    If this is a ruse to make you spend your time and money in a local shop, Silas will be sadly disappointed in your purchasing power.`,
    skillUp: { skill: Skills.DRIVE_AUTO },
    options: [{ goto: 194 }]
  },
  {
    id: 175,
    text: `You feel very dislocated from reality, as you sit on a cliff top behind a school at night, learning a chant by rote from a madman. Arbogast is careful to teach you it in sections.
    He glances into the sky. “Won’t work right now. Cloud covering the star.” But he still takes care not to pronounce the whole thing at once. It has a rhythmic beginning and various elaborations, but the core passage is repeated three times:
    Ph’nglui mglw’nafh Cthugha Fomalhaut n’gha-ghaa naf ’l thagn! Iä! Cthugha!
    In time, Arbogast listens to your recital and nods. “Remember every sound. But never speak it if you have plans left on this Earth.”
    Arbogast leans back. “It will make you one with the Living—”`,
    gainSecret: 'arbogasts_ritual',
    options: [{ goto: 188 }]
  },
  {
    id: 176,
    text: `Even as you spin around and look for a weak point, you know this plan is deranged. Less than two days ago you were taking a coach ride to a new job, and now you are trying to demolish a church while still inside it.
    Under one section of partially collapsed roof, you see a wooden pillar that is already bowed. You snatch up a piece of broken ironwork.`,
    rolls: [
      {
        characteristic: Characterstics.STR,
        difficulty: SkillDifficulty.hard,
        succeed: 189,
        fail: 183
      }
    ]
  },
  {
    id: 177,
    text: `Most of the texts are too obscure for you to understand without an extended residency in a good library. You are drawn to a volume in a heavy slipcase, embossed with a dark red triangle. Its pages are in a spidery script, but the hand is neat enough that you can read it with effort.
    It seems to be one of a set of seven discussing elements: here sulfur, mercury, and salt are added to the four classical  elements. This book concerns fire. Flicking through the pages, you see astronomical diagrams, alchemical symbols, references to Dante, and speculations on the nature of damnation.
    Towards the end there is a discussion of fire ceremonies, and a transcription of two key rituals: Call Ye Celestial Flames and Command Ye Celestial Flames. You might be able to memorize one, but it will take time. Is this all nonsense, or is it worth risking discovery for?`,
    skillUp: { skill: Skills.LIBRARY_USE },
    options: [
      { text: 'Memorize Call Ye Celestial Flame.', goto: 197 },
      { text: 'Memorize Command Ye Celestrial Flame.', goto: 202 },
      { text: 'You\'ve already pushed your luck enough, replace the volume and leave.', goto: 120 }
    ]
  },
  {
    id: 178,
    text: `You retrace your steps of last night. A few villagers watch with polite curiosity as you thread your way along the northern cliffs, bags in tow. In time you think you have found the spot. Heart thudding in your chest, you peer over the edge.
    Nothing.
    With the benefit of daylight, you see the cliff is not the bottomless drop you imagined; it leads to a shelf some twenty yards below. It could still be a lethal tumble. But you see no body, no blood.`,
    rolls: [
      {
        skill: Skills.SPOT_HIDDEN,
        succeed: 112,
        fail: 192
      }
    ]
  },
  {
    id: 179,
    text: `Hot blood pours down your back. Your vision swims.`,
    rolls: [
      {
        characteristic: Characterstics.CON,
        succeed: 186,
        fail: 193
      }
    ]
  },
  {
    id: 180,
    text: `As the light fades, you return to the Ledbetter house and eat a light supper. May is unusually taciturn. Ruth’s eyes flick to yours several times during the meal. There is an urgency there you cannot quite interpret. Afterwards, May ushers the girl into their room.
    You have been in Emberhead for barely one whole day and you already feel confined by it, both geographically and socially. The evening seems to offer little.
    <i>If you have a previous appointment, this is the time to follow up.</i>`,
    options: [
      { text: 'Do some stargazing.', goto: 131 },
      { text: 'Attempt to speak to Ruth.', goto: 138 },
    ]
  },
  {
    id: 181,
    text: `Almost by accident, you discover a channel between two rocks that leads into the cliff face. The daylight is just enough to pick out a recessed chamber, and the man crouched there in silence, glaring at you.
    “Damn you,” he snarls. “Haven’t I been tormented enough?” However, he seems a little calmer.`,
    options: [
      { text: 'Enter his refuge.', goto: 191 },
      { text: 'You don\'t wish to risk it.', goto: 160 },
    ]
  },
  {
    id: 182,
    text: `Alarm flares in those eyes as you stand, and is quickly replaced by a fiery hatred. Arbogast leans close to your face.
    “Go then. And when the moment comes, remember I offered you the chance to touch eternity. I will not offer it again.”
    He stalks off in the direction of the east road.
    As you head back to the Ledbetter house, you think you hear a faint human cry, weak and desperate. But you cannot place its direction, and you can find nothing among the shadowed alleyways.`,
    options: [{ goto: 157 }]
  },
  {
    id: 183,
    text: `You beat the pillar with all your strength. The villagers draw back in alarm, then relax as they see you are having no effect whatsoever. They back you against the church wall. You swing your club for a few desperate seconds, but they overpower you and tear it from your fingers.`,
    options: [{ goto: 108 }]
  },
  {
    id: 184,
    text: `You are drawn to a small book of strange poetry bound in black, published in Boston in 1919. The cover reads Azathoth and Others, by Edward Derby. Unlike most of the other books, you can pocket the Derby book if you want.
    <i>The Derby volume will require about a week of study to fully comprehend. If you survive this adventure, you may read 171 for more information about it.</i>`,
    options: [{ goto: 120 }]
  },
  {
    id: 185,
    text: `It takes a moment to recapture the skill of riding the bicycle, but after the first turn to the east, there is a long downhill out of Emberhead. You hear screams and crackles above you, but concentrate on balancing and working the pedals in your weakened state. You’ve had too many hopes dashed in this abomination of a village. You keep your head down and ride away.
    Twenty minutes later, with no signs of pursuit, you stop for a breather at the top of a hill. You can see Emberhead rise in the distance. The entire village appears to be ablaze. The dark column of smoke above it will be visible for many miles—but if the village is as isolated as it seems, help is unlikely to arrive in time.
    You watch the place burn for five minutes.Thenyoumount the bicycle again and ride towards civilization, and dawn.`,
    options: [
      {
        text: 'Congratulations! You have survived this adventure.',
        goto: THE_END.id
      }
    ]
  },
  {
    id: 186,
    text: `You stagger to the roadside, breathing hard. Your legs feel weak on the solid ground. As you run, you risk a glance over your shoulder. The bear seems to have thought better of its pursuit and is moving off through the trees. You pause to catch your breath.`,
    options: [
      {
        text: `If your back has been hurt, you cannot effectively administer First Aid, particularly while a hostile bear is in the area. It will have to wait.`,
        goto: 79
      }
    ]
  },
  {
    id: 187,
    text: `The hidden staircase seems the obvious explanation. The man could have scaled it to reach Emberhead, above. By studying the cliff, you work out that you passed the steps perhaps forty yards back, while he was still in full view.`,
    rolls: [
      {
        skill: Skills.SPOT_HIDDEN,
        difficulty: SkillDifficulty.hard,
        succeed: 181,
        fail: 160
      }
    ]
  },
  {
    id: 188,
    text: `A black shape lunges from the dark. It wraps an arm around Arbogast’s throat and drags him backwards, out of the alcove. He grabs at the arm, kicking empty air. You see the gleam of a long blade in the moonlight.`,
    rolls: [
      {
        skill: Skills.DODGE,
        succeed: 195,
        fail: 203,
      }
    ]
  },
  {
    id: 189,
    text: `You smash the pillar at its most distorted point. You hear a crack, so you draw back your weapon and smash it again. The pillar buckles and snaps. Thunder sounds above your head. You have a frozen moment of satisfaction as your pursuers look up in synchronized, wide-eyed horror.
    Then the ceiling falls in.`,
    rolls: [
      {
        characteristic: Characterstics.LUCK,
        succeed: 204,
        fail: 196,
      }
    ]
  },
  {
    id: 190,
    text: `The door of the hall clatters open and a group of villagers flood in. They quickly surround you. An older gentleman in suit and bow tie stands behind them.
    “So there you are,” he drawls. “We were wondering where you had gone.” He gives a light wave of his hand. The villagers seize you.`,
    options: [{ goto: 108 }]
  },
  {
    id: 191,
    text: `With wary steps, you squeeze between rocky outcrops and enter the concealed chamber, almost banging your head on the low ceiling. The man settles back against the wall and watches until you draw close. Then he slides back his hood.`,
    options: [
      {
        text: 'Make a Sanity roll. If you fail, lose 1 Sanity. Then continue.',
        goto: 199
      }
    ]
  },
  {
    id: 192,
    text: `You are already tired of your heavy bags. Hopefully Silas has repaired the motor coach and you can resume your long journey. A sourpuss he might be, but the old driver seemed to understand his vehicle well enough. You pause to check your watch—still twenty minutes early—and round the final corner.
    The motor coach is gone.
    You put your bags down and search the area, trekking up and down slopes and around corners. At the edge of the village, you trace the long road back as it winds across the hills. Eight o’clock comes and goes. There is no coach to be seen.
    A passing villager notices your bags.
    “Looking for the bus? I heard him take off at first light. He’s due back in three or four days. If you need a place to stay, May Ledbetter rents a room.”The man raises his hat to you and strolls on into the village.
    You curse Silas under your breath. Perhaps he went for parts. But you wonder if the old goat has stranded you here on purpose.`,
    options: [{ goto: 218 }]
  },
  {
    id: 193,
    text: `Your legs fold beneath you and you collapse to the ground, a few steps short of the road. Blood fills your mouth. As you roll, you catch sight of the bear’s face, blurry and doubled. It plunges towards you, teeth bared—`,
    options: [
      { text: 'You have fallen unconcious and been torn to pieces by a bear. The odds were against you.', goto: THE_END.id }
    ]
  },
  {
    id: 194,
    text: `Silas opens the engine compartment open and sticks his head inside. The hot metal pops and sizzles. He pokes at various components, then withdraws and wipes his brow, smearing it with dark grease.
    “I ain’t sure what’s wrong. Might be the oil pressure. Might be something knocked off kilter when we took that spill. Can’t do much until the engine cools neither. And with the light failing... I reckon we’ll be here through the night.” He wipes his hands on a rag.
    The shadows from your surroundings are already long, and the air is chilly. You feel stiff from the journey and a night in the rickety coach sounds unappealing. Silas sees your dismay.
    “This here’s Emberhead. Miles from anyplace. I only come through twice a week. But the folks here are good people. May Ledbetter keeps a spare room. She’ll look after you. Up that alley, turn right, first house on the left.”
    He scratches his cheek, looks again into the engine compartment, and spits on the ground.
    “Meet me back here at eight in the morning and we’ll see how’s we stand.”`,
    options: [
      { text: 'Look for May Ledbetter\'s house.', goto: 267 },
      { text: 'Ask Silas where we will spend the night.', goto: 251 },
      { text: 'Challenge Silas about the breakdown.', goto: 257 }
    ]
  },
  {
    id: 195,
    text: `A second figure swings at you with some kind of blunt weapon. You shove it aside and scramble out, trying to find a more defensible position.
    A gurgle draws your attention. Arbogast has a hand clapped to his neck. Blood drips between the fingers and spills from his mouth. His assailant stabs again, the wet blade slicing Arbogast’s wrist even as it sinks into his neck. You see faces now, low faces daubed in some kind of tarry substance, eyes gleaming with hatred. Arbogast shoves his attacker off, staggering back, more blood cascading down his arm. The old half-man has willpower. He plants his feet, and raises a hand.`,
    rolls: [
      {
        characteristic: Characterstics.SAN,
        succeed: 210,
        fail: 217
      }
    ]
  },
  {
    id: 196,
    text: `An immense weight pounds you to the stone floor. Your neck snaps even as your skull shatters.`,
    options: [
      { text: 'You have been killed by a collapsing church roof! It was a bold but risky plan.', goto: THE_END.id }
    ]
  },
  {
    id: 197,
    text: `You try to commit the wording of Call Ye Celestial Flames to memory. According to the instructions, it will only be successful when the “Stars are Right.” There are diagrams and tables for calculating this period, but you do not have time for that right now.
    The full chant will take twenty seconds or so of single- minded concentration and apparently brings a terrible exhaustion to the user because of the distances involved.`,
    gainSecret: 'call_ye_celestial_flames',
    options: [{ goto: 207 }]
  },
  {
    id: 198,
    text: `You sense, rather than see, stars descend from the sky above you. From your flaming tether, you reach out to command the stars.`,
    rolls: [
      {
        text: 'Every magic point you committed gives you a 10% chance to succeed. So if you committed 6 magic points, you must make a 60% roll. Any roll of 96-00 is always a fail.',
        succeed: 209,
        succeedText: 'You succeed with Command Ye Celestial Flame.',
        fail: 40,
      }
    ],
  },
  {
    id: 199,
    text: `Some of the man’s face remains: a strip from the side of his jaw to his right eye socket is healthy and pale, if aged. But the left side is consumed by angry scar tissue. One eye droops, hooded by melted flesh, and the nostril on that side is pulled open to leave a gaping hole. The disfigured man studies your reaction with his one good eye.
    “Name’s Arbogast. Willard Arbogast. Guess I don’t need to ask what brings you to Emberhead.”`,
    options: [
      { text: 'You claim to have come for the Festival.', goto: 206 },
      { text: 'Admit that Silas has stranded you here.', goto: 214 }
    ]
  },
  {
    id: 200,
    text: `Arbogast is not at the appointed meeting place. You give him ten minutes, but he doesn’t show. You curse the old crank and head back towards May’s house.
    “Psssst.”
    A hand snakes from a doorway and grabs your arm. You jump at the sight of that half-face, glimpsed in starlight.
    “One of them’s near,” he whispers. “Watching. Come with me.”`,
    options: [{ goto: 169 }]
  },
  {
    id: 201,
    text: `The bear backs off, black eyes trained on you. It makes a low grumble in its throat, then turns and shambles into the trees.`,
    skillUp: {
      skill: Skills.FIGHTING_BRAWL,
      text: 'You have somehow survived a fight with a bear. You may check the box beside your Fighting(Brawl) skill.'
    },
    rolls: [
      {
        text: 'If the bear hurt you, you may attempt a First Aid roll.',
        skill: Skills.FIRST_AID,
        succeedText: 'If successful, restore 1 hit point.',
        succeed: 79,
        fail: 79,
      }
    ]
  },
  {
    id: 202,
    text: `You try to commit the wording of Command Ye Celestial Flames to memory. The text is full of strange characters and you can only make a best guess as to their pronunciation. The full chant will take twenty seconds or so. The commentary offers some advice:
    “Turn ye not yr eye from the fire, tho it dost Water from the Heat. And commit yr Heart and Mind in full to the path which ye intend to walk, lest ye falter at the Tryal.”`,
    gainSecret: 'command_ye_celestial_flame',
    options: [{ goto: 207 }]
  },
  {
    id: 203,
    text: `Something smashes you on the temple. You reel back. You hear Arbogast yell, and see the knife flash: one, two, three times, its shiny surface darkening with blood. Something strikes you again, and as you sink, flames leap from the ground, painting the night with infernal color. They pick out three dark figures...`,
    attributeChange: [{
      attribute: Attributes.HIT_POINTS,
      decrease: '1d6'
    }],
    options: [{ goto: 45 }]
  },
  {
    id: 204,
    text: `As you hoped, the body of the roof tips towards your assailants. It crashes to the ground, hiding them from view. Dust clouds billow in the air around you. You cannot see exactly what has happened, but you can hear a wail of agony. More than one, in fact.
    The collapse has opened a break between the stones. With delicate steps, you squeeze out of the church building.
    Villagers run towards the church from all directions. You crawl through the gravestones, keeping low in the overgrown grass. You head for the road. The sentries have joined the crowd at the church, and you are able to slip away down the eastern road.`,
    options: [{ goto: 152 }]
  },
  {
    id: 205,
    text: `As the light fades outside, your little prison becomes dark. You can hear much activity around the building. Occasionally an orange glow passes the window. The only comfortable position in the shackles seems to be to sit against the end of the bed with your arms hanging behind you.
    You need to concentrate and come up with a plan. There is clearly no escape from your bonds. You do not know exactly what your captors want from you, but you cannot ignore the fact that they have spent the entire day constructing a massive bonfire.`,
    options: [{ goto: 27 }]
  },
  {
    id: 206,
    text: `That swollen mouth gives a little twist upwards. “Yeah? Where’d you hear about it?”
    You say something vague about an article in the newspaper. “Newspapers must have changed since last time I read one.” There is something in his tone you don’t like much.`,
    options: [{ goto: 221 }]
  },
  {
    id: 207,
    text: `Tempting as it is to remove the book, it is too large to conceal. You slip it back onto the shelf and ease the bookcase back into place.
    Immediately, you hear the scratch of a key in the hall door. You sprint for the open window.`,
    rolls: [
      {
        characteristic: Characterstics.DEX,
        succeed: 213,
        fail: 190,
      }
    ]
  },
  {
    id: 208,
    text: `The echoing call comes again, and this time it is answered by something closer to you. This seems a good time to get off the ground.
    You select a tree with obvious footholds and a thick branch at about twice your height. You haul yourself up. You are not dressed for this.`,
    rolls: [
      {
        skill: Skills.CLIMB,
        succeed: 228,
        fail: 228,
        fumble: 222
      }
    ]
  },
  {
    id: 209,
    text: `The stars are alive. From above they see you, the center of a conflagration. They see Emberhead spread out from the Beacon, its small plateau facing a dark sky. And they hear the villagers begin the same chant you have just completed.`,
    attributeChange: [{
      attribute: Attributes.SANITY_POINTS,
      decrease: '1d3',
    }],
    options: [
      { text: 'Command the stars to depart.', goto: 255 },
      { text: 'Command the stars to free you.', goto: 243 },
      { text: 'Command the stars to incinerate the villagers.', goto: 231 }
    ]
  },
  {
    id: 210,
    text: `Arbogast howls, a choked, wet sound. He stabs his palm forward, fingers curled in a strange gesture.
    Fire springs from the ground at his feet, a flickering blue wave. It rushes in a stream, as if following a line of gasoline, directly towards each attacker. Hungry, it climbs their clothing. They shriek as the flames touch their flesh.
    Arbogast drops to one knee. His face is pale in the illumination from the fires. His head hangs forward. Yet even as his hand shudders, his eyes are alight with intractable will.
    The assailants scream as they flee in different directions, eerie light playing off the buildings as they pass. They leave behind a terrible pungency of seared flesh. Tiny shoots of fire dance in the grass for seconds longer, then vanish. Arbogast drops.`,
    options: [{ goto: 236 }]
  },
  {
    id: 211,
    text: `You press yourself against the biggest trunk you can find. Two horses draw near, their riders holding up lanterns. Branches cast a maze of shifting shadows across you as they pass. You get a momentary look at the face of one rider. He looks drawn and anxious. Then they head away to the east.
    Once you are sure they are out of earshot, you make your way through the woods. It seems wise to avoid the road.`,
    skillUp: { skill: Skills.STEALTH },
    options: [{ goto: 223 }]
  },
  {
    id: 212,
    text: `You are tempted to try the staircase now. But you remember Silas saying he only comes through Emberhead twice a week, and perhaps the second time he will be heading in the opposite direction. You can’t afford to miss the bus and become stranded here.`,
    options: [{ goto: 192 }]
  },
  {
    id: 213,
    text: `With a burst of speed you dart through the hall. As you hear the door open, you throw yourself through the open window. There is no time to cover your intrusion. But you think you weren’t actually spotted.`,
    options: [{ goto: 120 }]
  },
  {
    id: 214,
    text: `That swollen mouth gives a little twist downwards. “Son of a devil has rats’ blood.” His fingers tighten into a fist.`,
    options: [{ goto: 221 }]
  },
  {
    id: 215,
    text: `Unappealing as it is to keep walking through the dark, the idea of hiding up a tree while wild animals congregate to plan your slaughter is even less appealing. Sooner or later, this road must lead you to another settlement. You step up the pace.`,
    options: [
      { text: 'Flee into the woods.', goto: 229 },
      { text: 'Fight the riders.', goto: 235 },
    ]
  },
  {
    id: 216,
    text: `You press yourself against the biggest trunk you can find. Two horses draw near, their riders holding up lanterns. Branches cast a maze of shifting shadows across you as they pass.
    To your dismay, one rider pulls his horse up short. “Look! There!” He stabs a finger towards you.`,
    options: [
      { text: 'Flee into the woods.', goto: 229 },
      { text: 'Fight the riders', goto: 235 },
    ]
  },
  {
    id: 217,
    text: `Faces loom at you, thick with blood and lit by inferno. Someone claws at you, tears at your flesh, flames dancing in his terrified eyes. You fall back—`,
    attributeChange: [
      { attribute: Attributes.SANITY_POINTS, decrease: '1d3' },
      { attribute: Attributes.HIT_POINTS, decrease: '1d3' }
    ],
    options: [{ goto: 45 }]
  },
  {
    id: 218,
    text: `May is doing laundry, and looks surprised to see you again. “Forgot something?” When you explain the situation, she offers to store your bags while you try to arrange alternative transport. You are grateful to relinquish the load.
    “Nobody here has anything like a car.” She strokes her chin and narrows her eyes. “Maybe you could find somebody with a horse and a cart for your bags. I could ask around later. Try Mr. Winters at the village hall, he’ll know if anyone will. Or ask among the artisans. Their workshops are first left on Silbury Street.” She reaches over and squeezes your wrist. “Don’t worry, I won’t see you sleeping in the street, money or no money.”
    You thank May, and turn to face the village.`,
    options: [{ goto: 6 }]
  },
  {
    id: 219,
    text: `You approach around the back of the buildings in Emberhead’s northwestern corner. By this time in the morning, you would expect activity in the artisans’ courtyard, but the benches and anvils sit deserted. Your footsteps echo off the surrounding walls.
    One of the workshops is shut up and padlocked. You peek through the joints, but you can see nothing inside.`,
    options: [
      { text: 'Try to crack the padlock.', goto: 225 },
      { text: 'Pyscially break in to the locked workshop.', goto: 232 },
      { text: 'Move on to another area.', goto: 120 }
    ]
  },
  {
    id: 220,
    text: `You finally understand that your existence on Earth was a sham and you have been a star all along; hidden to walk among humans, holding back your radiance for fear of scorching them all where they stand. You smile and look to the sky.`,
    options: [
      { text: 'You have burned to death in the Beacon!', goto: THE_END.id }
    ]
  },
  {
    id: 221,
    text: `Arbogast fixes you with a lopsided yet intense stare. “You seek me out, eh?” He looks up at the cave ceiling. “Which one of them told you about me? Never mind, it don’t matter. Truth is, they fear what I know. They’d never come at me direct. Don’t want to end up like old Arbogast.” He giggles. The high- pitched sound is all the more grotesque coming from those bloated lips. Then, abruptly, his gaze turns to iron.
    “Emberhead died forty years ago. Shattered by flame, consumed by the stars themselves. The ancient hill was cleansed by inferno. And from the blackened ground came new life, as is the way of all things. The Abenaki knew.”
    Arbogast wipes his nose on his sleeve. “Except none of that happened. The flames were turned away. The necessary death postponed a year, and a year again. And now those up there—” He stabs a scrawny finger at the ceiling. “—think themselves saviors of the village. Think they can defy the Great Old Ones! Iä! Cthugha!” He shakes his head. “With strange aeons their lives matter less than the blink of an eye.”
    A fierce intelligence burns in his gaze. But you suspect Arbogast may be quite insane. Should his mood change, it would not be difficult for him to seize one of the loose rocks and crack your skull with it.`,
    options: [
      { text: 'Ask Arbogast about the Abenaki.', goto: 227 },
      { text: 'Ask him about the Great Old One.', goto: 237 },
      { text: 'Ask him about the villagers.', goto: 245 },
      { text: 'Leave while you still can.', goto: 253 }
    ]
  },
  {
    id: 222,
    text: `Halfway up, your hand slips on a mossy branch and you tumble to the ground. The breath rushes out of you.`,
    options: [
      { text: 'Take 1 hit point damage. If this reduces you to zero, continue.', goto: 13 },
      { text: 'Otherwise, make the climb with one eye on the weak branch.', goto: 228 }
    ]
  },
  {
    id: 223,
    text: `You emerge onto a hilltop and take a moment to check your bearings. The sun will set in the west behind Emberhead, so you need to head—
    As you look at the village, several miles away now, you see the Beacon ablaze, an orange glow that lights up the sky and the surrounding woodland. Smoke billows towards the heavens, where the stars form a twinkling canopy against the midnight blue of eternity.
    You watch the scene for a few minutes, then turn away to continue your journey. For a moment, you are left with a strange impression. You thought that as you turned, one of the stars above the village moved.
    But that would be madness.`,
    options: [
      {
        text: `Congratulations! You have survived this adventure. You may keep your investigator sheet and use it in another Call of Cthulhu scenario. If you have check-marked the small box beside any skills, you will have a chance to improve them through experience (see Book Two, page 22).`,
        goto: THE_END.id
      }
    ]
  },
  {
    id: 224,
    text: `Your eyelids are heavy and whatever your reservations, blackness soon takes you.
    You dream again of fire in the grate, a small theater of lights twinkling a tiny drama. The flames seem to consume nothing, almost to hang in the air. A moment later, they are around your sleeping form, filling the room with flickering colors: blue, yellow, red, purple. They dance on and around you. The little tongues brush your flesh...`,
    options: [{ goto: 26 }]
  },
  {
    id: 225,
    text: `You examine the padlock. It is old and not particularly secure. There are plenty of metal shavings around that could work as improvised picks. But can you really pick a lock?`,
    rolls: [
      {
        skill: Skills.LOCKSMITH,
        text: 'Make a Locksmith roll. You may double your skills for this roll only.',
        succeed: 244,
        succeedText: 'If you succeed, mark the small box beside the skill and continue.',
        fail: 238
      }
    ]
  },
  {
    id: 226,
    text: `You mention the residency you will be taking up at St. Mary’s Hospital. The institution is well regarded, and you are both thrilled and slightly uneasy at the range of patients and maladies it receives. Still, as an old professor of yours used to say, “By practice alone can you become expert.”
    “A doctor, eh? Folks’ll always be needing those.” Did you catch a note of distrust in Silas’s voice? Or are you just being paranoid?
    <i>Your Credit Rating skill is 30%.
    Your occupation skills are: First Aid, Other Language (Latin), Medicine, Psychology, Science (Biology), Science (Pharmacy). You may also pick two other skills (not Cthulhu Mythos) as relevant academic or personal specialties. Allocate the following values among these occupation skills, writing them in the large square beside each: 70%, 60%, 60%, 50%, 50%, 50%, 40%, 40%. Ignore any starting value already mentioned on the investigator sheet.</i>`,
    options: [{ goto: 128 }]
  },
  {
    id: 227,
    text: `“The Abenaki?” He frowns. “They knew this land and cherished it. They lived here in harmony for their allotted time. Air and earth, water and fire. They accepted every daybreak as a gift and they trod lightly on the land. Yet we came and we ended them. Their time is passed. Now ours, too, must end.”
    Arbogast runs a hand through his hair. A wide strip is missing on the left side, displaced by scar tissue. He climbs to his feet.`,
    options: [{ goto: 259 }]
  },
  {
    id: 228,
    text: `You ease yourself onto the widest branch you can see. It is less than comfortable, but you do at least feel safer in this elevated position.
    Night settles slowly around you. The woods come alive with small noises: scratching nearby, distant bird calls, and the gentle rustle of leaves. Although resigned to a long, tedious night of wakefulness, after a few hours you find yourself yawning. You loop your belt around the branch and your clothing, to hold yourself in place as best you can. Then you close your eyes.`,
    options: [{ goto: 246 }]
  },
  {
    id: 229,
    text: `Leaves slap at your face as you flee through the murk. The lanterns come after you, swinging between the trunks. But you are unencumbered and desperate, and you outdistance them with no trouble. Eventually, you watch them disappear into another section of the woods. You hear faint curses on the air, and then they are gone for good.`,
    options: [{ goto: 223 }]
  },
  {
    id: 230,
    text: `Sleep presses down on you. You blink it back and sit up, trying to think through your situation. Everything in Emberhead seems to be working to stop you leaving. Perhaps the answer is to strike out at first light, to walk as far and as fast as you can. You can always return for your possessions, and if you lose them, you have nothing so precious that it could not be replaced.
    A tiny creak draws your attention to the other side of the room.
    Slowly, almost silently, the doorknob is turning.`,
    options: [
      { text: 'Grab it and wrench the door open.', goto: 248 },
      { text: 'Pretend to be asleep.', goto: 254 }
    ]
  },
  {
    id: 231,
    text: `The smoke shifts for a moment and you see the villagers staring up at your immolation, cloaked and daubed with their ridiculous face paint. These people lured, tricked, and murdered you. You send the stars to bring your wrath.
    Suddenly there are among them a thousand points of light, illuminating them with celestial radiance, sparkling with the brilliance of distant suns. Their faces open in wonder, in delight, raising a hand to touch the lights—but everything the tiny lights touch, burns.
    Horror sweeps through the crowd. They run, screaming, as their flesh is singed and stripped from their bones, carving trails of ash into the ground with their dying steps. Every last one of them burns. The pitiless stars move among them and leave none alive.
    You shriek in pain as the fire consumes you. But you take one small satisfaction to the grave: Emberhead will never claim another victim.`,
    options: [
      { text: 'You have burned to death in the Beacon. But you took the entire village with you!', goto: THE_END.id }
    ]
  },
  {
    id: 232,
    text: `You examine the workshop. It is well constructed, but the wood has been weakened by years of sun and rain. You may be able to break it open with one fierce charge. You had better make it good, though. You can’t afford to attract attention with repeated tries.`,
    rolls: [
      {
        characteristic: Characterstics.STR,
        succeed: 244,
        fail: 238
      }
    ]
  },
  {
    id: 233,
    text: `The driver flicks his cigarette into the gutter and steps into the motor coach. Its engine coughs into life. You board, grateful that you will be the only passenger for the initial part of your trip at least. With mixed emotions, you watch from the window as the tired avenues of your old home slip behind you, receding into the distance. For a few minutes, you can still see the church spire over the brow of a low hill. Then the road dips and it, too, is gone.
    Arkham is your new home. You will travel there, and make a new start.
    <i>You will see two smaller boxes to the right of each characteristic value. Halve each value, rounding down, and write the result in the upper right box. Also, divide each value by 5, again rounding down, and write the result in the lower right box. We will use these numbers later. If you are using the interactive PDF version of the investigator sheet, you’ll see it does all of the math for you!
    In the strip below, you will see tracks that record Sanity and magic points. Beginning Sanity is equal to your original POW, and beginning magic points are the same as the value you’ve just assigned for POW divided by 5. Mark these on the tracks.</i>`,
    options: [{ goto: 134 }]
  },
  {
    id: 234,
    text: `Another cry splits the gloom. It is the same unearthly call you heard when you entered the first patch of woodland, but this time with a grating undertone that makes you shiver. It seems closer.`,
    options: [
      { text: 'Take refuge in a tree for the night.', goto: 208 },
      { text: 'Keep walking.', goto: 215 }
    ]
  },
  {
    id: 235,
    text: `One rider has problems dismounting. You square up to the other, an older man with desperation in his eyes.
    <i>Conductclosecombat,referringtopages18–19of BookTwo— you may need to refer to page 8 first to look up your damage bonus. The combatant with the higher DEX acts first. You and the rider will take one action each combat round. You may fight back (rolling your Fighting (Brawl)) or dodge (using your Dodge) against each attack. Combat rolls are opposed rolls: whoever gets the best level
    of success wins.
    The rider has a DEX of 32 and a Fighting (Brawl) skill of
    30% (15% half / 6% one-fifth). He has 9 hit points. Roll 1D6 every round. On an odd number he will attack, and on an even number he will dodge your attacks. His Dodge skill is 15% (7% half / 3% one-fifth). He has a small club that does 1D6 damage.
    If you have a knife or similar weapon, each successful hit you make does 1D4 plus your damage bonus. If you are unarmed, the damage is 1D3 plus your damage bonus.</i>`,
    options: [
      { text: 'If you reduce the man to 4 or fewer hit points, continue.', goto: 241 },
      { text: 'If you are reduced to 0 hit points, continue.', goto: 247 }
    ]
  },
  {
    id: 236,
    text: `The blood flow from the wounds in Arbogast’s neck has slowed to a trickle. His breath is shallow and fleeting. You can see his situation is hopeless. His eyes flutter, then close, as life departs. You mark a moment in respect. However, the attackers may come back. Who can you trust in this village?`,
    options: [
      { text: 'Fetch May here.', goto: 242 },
      { text: 'Return to the Ledbetter house and say nothing about the situation.', goto: 157 }
    ]
  },
  {
    id: 237,
    text: `A smile of sickly rapture comes over Arbogast’s scarred features.
    “The Great Old Ones? The Windwalker, Cthulhu, the Crawling Chaos. Like the rest of them, spread like gnats upon the Earth, you think your actions matter, yes? Your existence matters.” He shakes his head. “We are the dust that shifts in the breeze, the motes that drift in the last rays of sun. You are nothing. We are nothing.”
    He gathers himself into silence. Just when you think the sermon is over, he stirs.
    “Here you are closest to the living flame. Not that belching green column beloved of Kingsport. I mean It which preceded all life on Earth! It which lit the void while our world was formed! It has infinite fuel, infinite patience. It will consume all!”
    Arbogast runs a hand through his hair. A wide strip is missing on the left side, displaced by scar tissue. He climbs to his feet.
    <i>You may permanently add two points to your Cthulhu Mythos skill.</i>`,
    options: [{ goto: 259 }]
  },
  {
    id: 238,
    text: `You step back from the door and regard it in frustration. A crunching noise distracts you, and a human shadow falls on a nearby wall. Someone is approaching. You melt away in the other direction.`,
    options: [{ goto: 120 }]
  },
  {
    id: 239,
    text: `You mention the reporter’s job, which you secured at the Arkham Gazette on the strength of a few freelance pieces in your local newspaper. It will be a relief to get away from vapid society columns and whimsical stories! You understand the Gazette covers everything from the breakthroughs of researchers at Miskatonic University to the most sordid exploits of local ne’er-do-wells. It should be something to get your teeth into, at any rate.
    “A writer? For a newspaper?” Silas seems confused, as if he thought the stories somehow wrote themselves.
    <i>Your Credit Rating skill is 20%.
    Your occupation skills are: Art/Craft (Photography), History, Library Use, Own Language, Psychology, and one of either Charm, Fast Talk, Intimidate, or Persuade. You may also pick any two other skills (except Cthulhu Mythos) as personal specialties. Allocate the following values among these occupation skills, writing them in the large square beside each: 70%, 60%, 60%, 50%, 50%, 50%, 40%, 40%. Ignore any starting value already mentioned on the investigator sheet.</i>`,
    options: [{ goto: 128 }]
  },
  {
    id: 240,
    text: `You hear something from the road behind you. It is a dull clunk—perhaps a dead branch falling. You pause, but the sound does not repeat. You retrace a few paces and look down the road. There is nothing to see.`,
    skillUp: { skill: Skills.LISTEN },
    options: [{ goto: 234 }]
  },
  {
    id: 241,
    text: `You beat the first rider to the ground and turn, breathing hard, to confront his companion. Holding his lantern up, he examines his fallen friend, and reads the determined expression in your face. Then he looks back towards Emberhead, weaving his head left and right to see between the trees.
    “You win,” he says. “I reckon it’s too late by now, anyway.”
    He sets down his lantern and gathers up the other rider, slinging him over the horse with a grunt. Breathing hard, you watch him ride off. The lantern light becomes fainter and fainter, and finally winks out.`,
    skillUp: { skill: Skills.FIGHTING_BRAWL },
    options: [{ goto: 223 }]
  },
  {
    id: 242,
    text: `May comes to the door in a plain bed jacket. She stares as you begin your story of bloodshed and fire. Almost immediately she steps back and closes the bedroom door so Ruth does not hear.
    “Arbogast?” She shakes her head. “What possessed you to listen to his ravings?” She fetches a coat and lantern, and follows you through the night-shrouded village. When you reach the spot, you can see blood and scorch marks on the grass. But no body.
    May looks at you for a long moment. “We can enquire further in the morning. I can’t leave Ruth alone.” She turns away.`,
    options: [
      { text: 'You seem to have little option but to follow.', goto: 157 }
    ]
  },
  {
    id: 243,
    text: `The stars respond to your command, dropping and converging on the Beacon. You feel a moment of transcendent glory as your body is annihilated in white heat and light.`,
    options: [
      { text: 'You have burned to death in an otherworldly inferno.', goto: THE_END.id }
    ]
  },
  {
    id: 244,
    text: `You push aside the door and step inside the workshop. The air is cool against your face, and you see light glinting through the eaves. The center of the room features a raised slab with a slight slope. An indentation beneath it suggests something sits there. A basin perhaps? Prone shapes are racked against the far wall, covered with red cloth. They look... human...`,
    options: [
      { text: 'Investigate further.', goto: 250 },
      { text: 'You\'ve seen enough.', goto: 120 }
    ]
  },
  {
    id: 245,
    text: `Arbogast’s face twists, creasing the scarred cheek.
    “Pfuh! Their fathers and mothers knew the truth. They listened. They knew their doom and found their place within it. They looked into their own hearts and did the unspeakable. The current brood have the arrogance of children. Everything has been given to them, and they assume it always will.” He glares at the cave ceiling. “They would that I left, or died. That I took the old words with me. But mark what I say. Those who
    live in high places have further to fall.”
    Arbogast runs a hand through his hair. A wide strip is
    missing on the left side, displaced by scar tissue. He climbs to his feet.`,
    options: [{ goto: 259 }]
  },
  {
    id: 246,
    text: `In your dreams, the trees change position, lifting their roots from the ground, and shuffling to another spot before planting themselves again. This seems perfectly normal, companionable even. They start to glow, a greenish-yellow as the flames lick—
    Flames?
    The trees begin to scream.
    Tongues of flickering fire snake up the tree towards you. You
    scrabble at the belt which binds you to this pyre, coughing as the vapors fill your throat, choking—`,
    rolls: [
      {
        characteristic: Characterstics.SAN,
        succeed: 252,
        fail: 258
      }
    ]
  },
  {
    id: 247,
    text: `You drop to the ground among leaves and mud. Dizzy, you feel yourself dragged to a horse and draped over. A thick, animal smell fills your nostrils. There is a brief, sickening ride, where you drift in and out of consciousness... Then the horse stops. You see strange colors against its rump.
    “That’s that then,” says one rider. “What should we do with this ‘un?”
    “I guess we have to hide the body.” His companion sounds unsure.
    You find just enough strength to slide from the horse and stumble into the woods. The trunks loom towards you at strange angles and your legs carry you only a short distance. You fall. Your captors crash around in the leaves behind you.
    “...Leave it. Let’s go.”
    The horsemen’s steps become fainter, and shortly you hear a clattering of hooves. You lie where you fell, face down on the mossy ground. But come the morning, you struggle to your feet. You see, glinting through the trees, the first traces of the rising sun.`,
    options: [
      {
        text: `Congratulations! You have survived this adventure. You may keep your investigator sheet and use it in another Call of Cthulhu scenario. If you have check-marked the small box beside any skills, you will have a chance to improve them through experience (see Book Two, page 22).`,
        goto: THE_END.id
      }
    ]
  },
  {
    id: 248,
    text: `You heave the door open, ready for a confrontation.
    May stands on the other side, wrapped in her bed jacket.
    She steps back in alarm.
    “You seemed... not yourself,” she stammers. “I wanted to
    check up on you.”
    You assure May you are in fine health and watch as she
    returns to her own bedroom. Once the door has closed, you borrow a kitchen chair to wedge under your door handle. Perhaps this piece of fortification will permit you a few hours of restful sleep.`,
    options: [{ goto: 58 }]
  },
  {
    id: 249,
    text: `You skirt around the details of the profession in your usual way, mentioning only that you have helped the police to clear up various problems in the past. Your heart pounds a little faster as you think of the post you have secured at the Blackwood Detective Agency. You’ve had enough of investigating marital infidelity and bank clerks on the take; it sounds like the Blackwood Agency is just the opportunity you need to cut your teeth on some real villainy.
    Silas narrows his eyes, but he says nothing.
    <i>Your Credit Rating skill is 20%.
    Your occupation skills are: Art/Craft (Photography), Disguise, Law, Library Use, Psychology, Spot Hidden, and one of either Charm, Fast Talk, Intimidate, or Persuade. You may also pick any other skill (except Cthulhu Mythos) as a personal specialty. Allocate the following values among these occupation skills, writing them in the large square beside each: 70%, 60%, 60%, 50%, 50%, 50%, 40%, 40%. Ignore any starting value already mentioned on the investigator sheet.</i>`,
    options: [{ goto: 128 }]
  },
  {
    id: 250,
    text: `You approach the red-shrouded figures, expecting them at any moment to leap up and grab at you. There are three. Each has a label hanging from its toes:
    Benjamin Cramer, 1/19/1927 Abraham Hollingsworth, 4/22/1927 Marian Phipps, 8/6/1927
    You lift one corner of the shroud. Underneath, wrapped in tight bandages, is a thin but unmistakably human form. You are looking at three dead bodies. Embalmed dead bodies.
    <i>Make a Sanity roll. If you fail, lose 1D2 Sanity points.</i>`,
    options: [{ goto: 256 }]
  },
  {
    id: 251,
    text: `You ask about Silas’ plans. He gives the engine a sour glance before answering.
    “I’ve got acquaintances here in the village. Reckon one of ‘em owes me a favor. Enough for bed and breakfast, in any case.” He stares at his grubby hands. “Probably won’t stretch to a hot bath.”
    You don’t seem to have a lot of options. You fetch your cases from the back of the motor coach. The last thing you need is for all your worldly possessions to disappear into some stranger’s hovel overnight.`,
    options: [{ goto: 267 }]
  },
  {
    id: 252,
    text: `Something is not right here. Even as your fingers find the clasp of the belt and open it, some rational part of your mind recognizes that this fire does not look natural. And trees don’t move by themselves.
    The belt releases and you drop through air. Can you see figures there? Coming out of the dark—`,
    attributeChange: [
      { attribute: Attributes.HIT_POINTS, decrease: '1d3' }
    ],
    options: [{ goto: 13 }]
  },
  {
    id: 253,
    text: `You get to your feet and back away towards the daylight. Arbogast gives a savage smile as he sees you go.
    “Another who will not dare to listen. Frightened of truth. I will offer you one last piece of advice.”
    Daylight burns across that scarred face, crouched in the subterranean shadow.
    “Sleep not, stranger. Sleep not.”`,
    options: [{ goto: 160 }]
  },
  {
    id: 254,
    text: `You slide onto the bed and lie on your side, eyes closed. The hinges creak as the door opens. There is a long pause.
    A footfall sounds inside the room, then another. The steps are careful and feminine. You give it a moment, then open one eye a crack.
    May crouches with her back to you. She is fiddling with something in the fireplace.`,
    options: [
      { text: 'Confront May.', goto: 260 },
      { text: 'Wait and see what happens.', goto: 266 }
    ]
  },
  {
    id: 255,
    text: `Your word arrests the stars in their descent and holds them, scintillating, above the village. Then, one by one, they lift and rise. You hear a gasp from the villagers, a communal intake of breath, and for a moment, a deep sadness descends upon you. Then the unrelenting flames cover your body.`,
    options: [
      { text: 'You have burned to death in the Beacon!', goto: THE_END.id }
    ]
  },
  {
    id: 256,
    text: `“So! I thought you looked like a snoop. Like what you found, did you?”
    A burly villager fills the doorway, blocking out much of the daylight. You can make out a dark apron, and a thick beard. He steps forward, fist raised.`,
    options: [
      { text: 'Surrender without a fight.', goto: 108 },
      { text: 'Fight the artisan.', goto: 262 }
    ]
  },
  {
    id: 257,
    text: `You confront Silas with your suspicions. His brow darkens and he shows a mouthful of twisted teeth.
    “Ain’t that just like you city types,” he spits. “Thinking the worst of a man after he’s gone out his way to attend to your comfort!” He stalks around to the back of the coach and hauls your bags from the rack, dumping them on the ground at your feet. “Take them! Otherwise I guess you’ll be accusing me of thievery in the morning!”
    He marches off into the darkness, raging. That could have gone better.`,
    options: [{ goto: 267 }]
  },
  {
    id: 258,
    text: `The belt parts and you plunge into the conflagration. The ground rushes at you.`,
    attributeChange: [
      { attribute: Attributes.SANITY_POINTS, decrease: '1d2' },
      { attribute: Attributes.HIT_POINTS, decrease: '1d3' }
    ]
  },
  {
    id: 259,
    text: `Arbogast pauses in the shadows. “There’s something about you, something the previous ones never had. Perhaps you can make it through. If you want to hear more, meet me again after dark. Nine o’clock. The graveyard on the other side.” He lifts a gnarled finger. “Don’t be followed, else I won’t be there. This ain’t the time of year for a showdown.”
    Arbogast wipes his nose on his sleeve again. “Go now. Their eyes are on me. And stranger? Don’t try to run. You’ll never make it.”
    You emerge into the sunlight blinking and more than a little shaken.`,
    gainSecret: 'graveyard_appointment',
    options: [{ goto: 160 }]
  },
  {
    id: 260,
    text: `May jumps as you swing your legs off the bed and speak. “I... I thought you might be cold,” she stammers. “Thought
    I would light the fire...”
    She sweeps something away with the hand behind her. You
    stare, but can see nothing in the grate.
    “I shouldn’t have disturbed you. I’m sorry.” She stands to leave.`,
    rolls: [
      {
        skill: Skills.INTIMIDATE,
        succeed: 19,
        fail: 32
      }
    ]
  },
  {
    id: 261,
    text: `A desperate yell awakens you. You feel yourself slide from the seat as the driver spins the wheel and the motor-coach plunges off the road. You grab hold of the seat in front, just in time to prevent a painful fall. The coach stops with a thump.
    Now you see what has happened. A Fordson tractor has stopped in the road and your driver has had to swerve to avoid this steel obstacle. He leaps from his seat into the road, unleashing a string of curses at the farmer.
    You take a moment to catch your breath. Perhaps you should offer assistance? But the driver has already returned. He backs the coach up a little and threads it around the tractor, glaring at the farmer.`,
    options: [{ goto: 71 }]
  },
  {
    id: 262,
    text: `You struggle with the huge man. His fists come out of the darkness like hammers.
    <i>Conductclosecombat,referringtopages18–19of BookTwo— you may need to refer to page 8 first to look up your damage bonus. The combatant with the higher DEX acts first. You and the artisan will take one action each combat round. You may fight back (rolling your Fighting (Brawl) or dodge (using Dodge) against each attack. Combat rolls are opposed rolls: whoever gets the best
    level of success wins.
    The artisan has a DEX of 41 and a Fighting (Brawl) skill
    of 35% (17% half / 7% one-fifth). He has 12 hit points. He will attack you every combat round, and his successful hits do 1D3 + 1D4 damage.
    If you have a knife or similar weapon, each successful hit you make does 1D4 plus your damage bonus. If you are unarmed, the damage is 1D3 plus your damage bonus.
    After three rounds, you may attempt to circle round behind the man and escape. This requires a Hard DEX roll, and if you do not achieve a success on the roll, he may land another blow.</i>`,
    options: [
      { text: 'If you reduce the man to 6 or fewer hit points.', goto: 268 },
      { text: 'If you are reduced to 0 hit points.', goto: 2 },
      { text: 'If you successfully escape.', goto: 12 }
    ]
  },
  {
    id: 263,
    text: `Two young men with sullen expressions alight from the coach. One looks you up and down before heading away. The driver also steps down, glancing at you before crossing the road to visit the tobacconist. When he returns, he is rolling a cigarette between his yellowed fingers. He gives it a final twist and examines you as he reaches for his matchbox. He is a thin man in his fifties, dressed in a stained shirt with the bus company emblem. Yet his eyes are sharp in their dark sockets.
    “Where to?”
    You show him your ticket for Ossipee. From there you will connect to Rochester and Portsmouth, before the coastal line to Newburyport and, finally, Arkham. You should be able to afford a rail ticket for at least some of the way; otherwise this will be the first of many long bus trips.
    “Mmm-hm.”The driver scratches the match and lights his cigarette. The end flares as he takes a draw. Then he exhales and gestures to the back of the coach. “Luggage rack’s up there.”
    <i>Look at your investigator sheet. At the top, you have spaces for eight characteristics: Strength (STR), Constitution (CON), Power (POW), Dexterity (DEX), Appearance (APP), Size (SIZ), Intelligence (INT), and Education (EDU). Allocate the following values among them, writing them in the large square beside each: 40, 50, 50, 50, 60, 60, 70, 80. If you would like more information about what these characteristics mean,read page 7 of Book Two.</i>`,
    options: [{ goto: 8 }]
  },
  {
    id: 264,
    text: `The eerie howls draw closer. They come from either side. One calls and is answered by a grim chorus, thick and hungry. They have a strange, desperate edge.
    You are walking as fast as you can now. You hear your own breath, coming hard. The trees in this area are too young to support your weight. Perhaps you should just run. But how long could you run before you had to stop—
    A clump of low, dark bodies slink from the trees, blocking the road ahead. Each silhouette has high, pointed ears. Their eyes glint in the moonlight.`,
    rolls: [
      { characteristic: Characterstics.SAN, succeed: 269, fail: 5 }
    ]
  },
  {
    id: 265,
    text: `You explain you are joining the faculty at the renowned Miskatonic University. It’s only a junior position, with teaching and tutoring duties, but the institution is well regarded. Who knows where the appointment might lead? A symposium, a visiting lectureship, even one of its world-spanning expeditions.
    “Hmm.” Silas wrinkles his nose. “I had enough of book learning when I was a young ‘un. Still, I suppose it’s well enough for those who likes it.”
    <i>Your Credit Rating skill is 30%.
    Your occupation skills are: Library Use, Other Language (specify one), Own Language, and Psychology. You may also pick four other skills (not Cthulhu Mythos) as relevant academic or personal specialties. Allocate the following values among these occupation skills, writing them in the large square beside each: 70%, 60%, 60%, 50%, 50%, 50%, 40%, 40%. Ignore any starting value already mentioned on the investigator sheet.</i>`,
    options: [{ goto: 128 }]
  },
  {
    id: 266,
    text: `After another few moments, May glances round at you. Then you hear the soft scratch of a match being lit. She applies it to something in the grate and tiptoes from the room.
    Once you hear her bedroom door, you creep to the grate. A small mound of black powder, no bigger than a thimble, is burning there. It gives off heady fumes.`,
    rolls: [
      {
        text: 'You may make a Hard Science(Botany) roll.',
        skill: Skills.SCIENCE,
        difficulty: SkillDifficulty.hard,
        succeed: 76,
        fail: 266
      }
    ],
    options: [
      { text: 'Extinguish the poweder and sleep.', goto: 58 },
      { text: 'Stay awak through the night.', goto: 52 },
      { text: 'Relax and breathe the fumes out of curiosity.', goto: 26 },
    ],
  },
  {
    id: 267,
    text: `You drag your cases between the sullen buildings. You feel surprisingly weary, considering you have spent all day sitting down. Silas’ directions lead you to a modest dwelling with a slate roof. A nameplate reads LEDBETTER, and underneath, a sign in neat copperplate reads, LODGING ROOM. The lane around you is gloomy, but a lamp flickers in the window.
    A breeze chills your face. You’re not about to begin your new life by sleeping in the street. You rap on the weather- beaten door.`,
    options: [{ goto: 4 }]
  },
  {
    id: 268,
    text: `After a grueling exchange, you land a decisive blow and the man’s legs buckle. He slams to the floor, blood dripping down his apron. His eyes flicker.`,
    skillUp: { skill: Skills.FIGHTING_BRAWL },
    options: [
      { text: 'Interrogate the man about the embalmed bodies.', goto: 20 },
      { text: 'Leave him here and investigate elsewhere.', goto: 120 },
    ],
  },
  {
    id: 269,
    text: `Even as the beasts fan out around you, and black fear rises in your chest, you sense something is wrong here. The pack makes irritable, awkward movements; not the patient, predatory approach you might expect. They draw closer, circling you. You hear the rasp of their throats, smell their thick musky scent—
    They burst into flame.
    You gape, fumes filling your mouth and nostrils, as the creatures ignite. Eyes wild, their fur blazes, waves of red-tinged fire dripping from their slavering jaws. They howl, a woeful cacophony, and one springs at you with insane, burning eyes. You stagger back, gulping the choking vapors, and you fall—`,
    attributeChange: [
      { attribute: Attributes.SANITY_POINTS, decrease: '1' },
    ],
    options: [{ goto: 13 }]
  },
  {
    id: 270,
    text: `The swirling tongues of fire around you stop in mid-air. The people around the Beacon freeze, their black painted faces bleached and stripped, as a second sun opens in the air above Emberhead. In an instant, the people, the village, the hill, all are consumed; incinerated by impossible proximity to sheer combustion, the essence of fire.
    Though your body is bound to the Beacon, your being is freed. As a spark you race into space, catapulted through the vastness of the void. The stars burn past you with incomprehensible velocity. And then you are home.
    Forever you will dwell here, at Fomalhaut; where the flames ripple and flow through immense spaces to the rhythms of the universe; where planets themselves move and tilt through unutterable wheels of fire, bound to the clockwork chaos of the Living Flame.
    And among the flames, you will dance.`,
    options: [
      { text: 'You have single-handedly destroyed a section of New Hampshire about sixteen miles in diameter! This also killed you.', goto: THE_END.id }
    ]
  },
  THE_END,
]