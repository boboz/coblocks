/**
 * WordPress dependencies
 */
const { SVG, Path, G } = wp.components;

/**
 * Block user interface icons
 */
const icons = {};

icons.menuItem = (
	<SVG
		className="components-coblocks-svg"
		height="14"
		viewBox="0 0 14 14"
		width="14"
		xmlns="http://www.w3.org/2000/svg"
	>
		<G
			fill="none"
			fill-rule="evenodd"
			transform="translate(-.296875)"
		>
			<Path d="m0 0h14v14h-14z" />
			<Path
				d="m.92485099 13.8456845c1.18168444 1.0642985 9.10914361-3.6546135 10.28300231-5.64234758.5634522-.95473842-.1017344-2.35554316-1.1895101-3.4746218 1.2364645-.8217011 2.3242402 1.7373109 3.3572359 1.19733589.4695435-.25042319.7747468-1.02516995.5478007-1.50253916-.4069377-.84517827-1.760788-.84517827-2.6763978-.9469127.6495351-.15651449 2.2068543-.8217011 2.2381572-1.76078807.0313029-.71996668-.8843069-1.54166778-1.6042735-1.45558481-.9469127.10956015-1.2912446 1.47123626-1.6120993 2.34771744-.0391287-.55562646-.1565145-1.77643953-.76692106-2.30858881-.81387538-.71214096-1.79209097-.03912863-1.81556815.8217011-.0313029 1.04082139 2.20685439 1.61992503 1.50253916 2.87204099-1.18951017-.9156098-2.5903149-1.41645618-3.49027325-.89213262-.38346051.24259746-.8217011.71214095-1.27559314 1.32254748.69648951.73561813 1.65905365 1.61992503 2.41814896 2.12859714.15651449.10956015.20346884.32868044.08608297.48519494-.10956015.16434022-.32868044.20346884-.48519494.09390869-.77474675-.52432356-1.72165945-1.39297901-2.42597468-2.12077141-.35215761.52432356-.71214095 1.11907864-1.04864712 1.74513662.66518661.67301234 1.51036488 1.43210764 2.18337722 1.88599968.15651449.10956014.19564311.32868044.08608297.48519493-.10956015.16434022-.32868044.20346885-.49302066.0939087-.66518661-.45389204-1.45558481-1.15820727-2.12077142-1.81556815-1.38515328 2.73117791-2.4024975 5.81451351-1.69818227 6.44057151z"
				fill="currentColor"
			/>
		</G>
	</SVG>
);

icons.glutenFree = (
	<SVG
		height="14"
		viewBox="0 0 14 14"
		width="14"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path d="m6.99766252.00002487c-3.85852931 0-6.99766252 3.13913321-6.99766252 6.99766252s3.13913321 6.99766251 6.99766252 6.99766251c3.85857908 0 6.99771228-3.1391332 6.99771228-6.99766251s-3.1391332-6.99766252-6.99771228-6.99766252zm-.16527708 8.72190053c-.1740675.18691119-.36012079.35314565-.65887034.49870337-.29879929.14560746-.67575489.21838011-1.13207283.21838011-.58016696 0-1.06856305-.18033392-1.43575843-.54106394-.36724512-.36068029-.56548313-.82895915-.56548313-1.40479929v-.99086679c0-.5736643.19144938-1.04139609.54459503-1.40318295.35308348-.36179928.81523268-.54269271 1.37153996-.54269271.57799112 0 1.02444938.14072113 1.33193961.42208881.30746536.28142984.46633925.6577016.47285435 1.11614565l-.00465009.02587389h-.89634813c-.01741918-.27353464-.0977762-.45774778-.24119538-.60442452-.14340675-.14666429-.35313322-.22316696-.62905507-.22316696-.29121492 0-.51775133.1107691-.69588454.33546537-.17819538.2247087-.25912434.5123428-.25912434.86619715v.99646181c0 .36036945.08417407.65290231.26889698.87761102.18467318.22469627.42943695.33699467.74233571.33699467.22163765 0 .40621136-.02271581.54097691-.06824689.13470337-.04548135.20091119-.10180462.31281172-.16898224v-.86832327h-.88277087v-.6589698h1.81527531v1.78079751zm4.11545296-3.37229663h-2.36234462v1.31793961h2.02664302v.70870338h-2.02664302v1.97690941h-.93250444v-4.71225577h3.29484906z" />
	</SVG>
);

icons.vegetarian = (
	<SVG
		height="18"
		viewBox="0 0 18 18"
		width="18"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="m.29488995 17.8015943c1.51930857 1.3683839 11.71175615-4.6987887 13.22100305-7.2544468.7244385-1.22752086-.1308014-3.02855552-1.5293702-4.46737092 1.58974-1.05647284 2.9883089 2.23368544 4.3164462 1.53943186.6036987-.32197268.9961029-1.31807564.7043152-1.93183606-.5232056-1.08665778-2.2638704-1.08665778-3.441083-1.21745918.8351166-.20123292 2.8373842-1.05647285 2.8776308-2.26387038.0402466-.92567145-1.136966-1.98214429-2.0626375-1.87146618-1.2174591.14086304-1.6601716 1.89158947-2.0726991 3.01849384-.0503082-.71437688-.2012329-2.28399368-.9860413-2.96818561-1.0464112-.9156098-2.30411695-.05030823-2.33430189 1.05647284-.04024658 1.33819894 2.83738419 2.08276075 1.93183609 3.69262413-1.52937024-1.17721259-3.3304049-1.82115795-4.48749421-1.14702766-.49302066.31191103-1.05647284.9156098-1.64004832 1.7004182.89548651.94579474 2.13306898 2.08276075 3.10904866 2.73676775.20123292.14086305.2616028.42258914.11067811.62382206-.14086305.21129457-.42258914.2616028-.62382206.12073976-.99610297-.6741303-2.21356215-1.79097302-3.11911031-2.72670611-.45277407.67413029-.9156098 1.4388154-1.34826058 2.24374709.85523992.86530157 1.9418977 1.84128127 2.80719927 2.42485667.20123293.1408631.25154116.4225892.11067811.6238221-.14086305.2112946-.42258914.2616028-.63388371.1207398-.85523992-.5835755-1.87146618-1.4891237-2.7267061-2.33430194-1.78091137 3.51151454-3.08892536 7.47580304-2.18337721 8.28073474z"
			fillRule="evenodd"
		/>
	</SVG>
);

icons.spicy = (
	<SVG
		height="18"
		viewBox="0 0 18 18"
		width="18"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="m6.42857143 11.814845c-1.14837923 1.2471524-1.79672242 3.3088707-1.94503154 6.185155-2.79750264-.7772099-4.48353989-3.2093657-4.48353989-6.0371114 0-4.76263563 3.60857176-5.79732963 3.19071462-11.9628886.78714296.01369448 3.9678567 1.93929045 4.56142846 6.51096418.62167351-.65045468.93894923-2.80369415.81928582-3.68457578 2.8228569 2.25882831 4.285714 5.15901471 4.285714 8.3947159 0 3.2026027-1.6730476 5.9184005-4.4842629 6.7649668-.14968088-2.8690124-.79778374-4.9260878-1.94430857-6.1712261z"
			fillRule="evenodd"
			transform="translate(2.5)"
		/>
	</SVG>
);

export default icons;
