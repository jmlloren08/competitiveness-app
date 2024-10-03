<?php

use App\Http\Controllers\BReadyDoingBusinessReportController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\CorruptionPerceptionsIndexController;
use App\Http\Controllers\DigitalQualityOfLifeIndexController;
use App\Http\Controllers\EconomicFreedomIndexController;
use App\Http\Controllers\EGovernmentDevelopmentIndexController;
use App\Http\Controllers\EnergyTransitionIndexController;
use App\Http\Controllers\EnvironmentalPerformanceIndexController;
use App\Http\Controllers\GlobalHealthSecurityIndexController;
use App\Http\Controllers\GlobalHungerIndexController;
use App\Http\Controllers\GlobalInnovationIndexController;
use App\Http\Controllers\GlobalTalentCompetitivenessIndexController;
use App\Http\Controllers\GovTechMaturityIndexController;
use App\Http\Controllers\ICTDevelopmentIndexController;
use App\Http\Controllers\LogisticsPerformanceIndexController;
use App\Http\Controllers\NetworkReadinessIndexController;
use App\Http\Controllers\PhilippinesReportsRankingController;
use App\Http\Controllers\PISAController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WorldCompetitivenessRankingController;
use App\Http\Controllers\WorldDigitalCompetitivenessRankingController;
use App\Http\Controllers\WorldGovernanceIndicatorsController;
use App\Http\Controllers\WorldTalentRankingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('/');

Route::get('/about', function () {
    return Inertia::render('AboutPage');
})->name('about');

Route::get('/reports', function () {
    return Inertia::render('ReportPage');
})->name('reports');

Route::get('/news', function () {
    return Inertia::render('NewsPage');
})->name('news');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUsPage');
})->name('contact-us');
Route::post('/contact-us', [ContactUsController::class, 'store']);

// generate reports
// general/wcy
Route::get('/reports/general/world-competitiveness-yearbook', function () {
    return Inertia::render('Reports/General/WorldCompetitivenessYearbook');
})->name('reports.general.wcy');
Route::get('/world-competitiveness-ranking', [WorldCompetitivenessRankingController::class, 'getWorldCompetitivenessRanking']);
Route::get('/get-ph-ranks-wcr', [WorldCompetitivenessRankingController::class, 'getPhRanksWCR']);
Route::get('/get-indicator-ranking-wcr', [WorldCompetitivenessRankingController::class, 'getIndicatorRankingWCR']);

// digital
Route::get('/reports/digital/digital-quality-of-life-index', function () {
    return Inertia::render('Reports/Digital/DigitalQualityOfLifeIndex');
})->name('reports.digital.dqli');

// digital/digital-quality-of-life-index
Route::get('/digital-quality-of-life-index', [DigitalQualityOfLifeIndexController::class, 'getDigitalQualityOfLifeIndex']);
Route::get('/get-ph-ranks-dqli', [DigitalQualityOfLifeIndexController::class, 'getPhRanksDQLI']);
Route::get('/get-indicator-ranking-dqli', [DigitalQualityOfLifeIndexController::class, 'getIndicatorRankingDQLI']);

// digital/govtech-maturity-index
Route::get('/reports/digital/govtech-maturity-index', function () {
    return Inertia::render('Reports/Digital/GovTechMaturityIndex');
})->name('reports.digital.gmi');
Route::get('/get-ph-ranks-gtmi', [GovTechMaturityIndexController::class, 'getPhRanksGTMI']);

// digital/ict-development-index
Route::get('/reports/digital/ict-development-index', function () {
    return Inertia::render('Reports/Digital/ICTDevelopmentIndex');
})->name('reports.digital.ictdi');
Route::get('/ict-development-index', [ICTDevelopmentIndexController::class, 'getICTDevelopmentIndex']);
Route::get('/get-ph-ranks-ictdi', [ICTDevelopmentIndexController::class, 'getPhRanksICTDI']);
Route::get('/get-indicator-ranking-ictdi', [ICTDevelopmentIndexController::class, 'getIndicatorRankingICTDI']);

// digital/e-government-development-index
Route::get('/reports/digital/e-government-development-index', function () {
    return Inertia::render('Reports/Digital/EGovernmentDevelopmentIndex');
})->name('reports.digital.egdi');
Route::get('/e-government-development-index', [EGovernmentDevelopmentIndexController::class, 'getEGovernmentDevelopmentIndex']);
Route::get('/get-ph-ranks-egdi', [EGovernmentDevelopmentIndexController::class, 'getPhRanksEGDI']);
Route::get('/get-indicator-ranking-egdi', [EGovernmentDevelopmentIndexController::class, 'getIndicatorRankingEGDI']);

// digital/network-readiness-index
Route::get('/reports/digital/network-readiness-index', function () {
    return Inertia::render('Reports/Digital/NetworkReadinessIndex');
})->name('reports.digital.nri');
Route::get('/network-readiness-index', [NetworkReadinessIndexController::class, 'getNetworkReadinessIndex']);
Route::get('/get-ph-ranks-nri', [NetworkReadinessIndexController::class, 'getPhRanksNRI']);
Route::get('/get-indicator-ranking-nri', [NetworkReadinessIndexController::class, 'getIndicatorRankingNRI']);

// digital/world-digital-competitiveness-ranking
Route::get('/reports/digital/world-digital-competitiveness-ranking', function () {
    return Inertia::render('Reports/Digital/WorldDigitalCompetitivenessRanking');
})->name('reports.digital.wdcr');
Route::get('/get-digital-wdcr-philippine-ranking', [WorldDigitalCompetitivenessRankingController::class, 'getDigitalWDCRPhilippineRanking']);
Route::get('/get-digital-wdcr-view-the-ranking', [WorldDigitalCompetitivenessRankingController::class, 'getDigitalWDCRViewTheRanking']);
Route::get('/get-digital-wdcr-indicator-ranking', [WorldDigitalCompetitivenessRankingController::class, 'getDigitalWDCRIndicatorRanking']);

// education talent & innovation/pisa
Route::get('/reports/educationtalent&innovation/programme-for-international-student-assessment', function () {
    return Inertia::render('Reports/EducationTalent&Innovation/ProgrammeForInternationalStudentAssessment');
})->name('reports.educationtalent&innovation.pisa');
Route::get('/get-eti-pisa-philippine-ranking', [PISAController::class, 'getETIPISAPhilippineRanking']);
Route::get('/get-eti-pisa-indicator-ranking', [PISAController::class, 'getETIPISAIndicatorRanking']);

// education talent & innovation/gii
Route::get('/reports/educationtalent&innovation/global-innovation-index', function () {
    return Inertia::render('Reports/EducationTalent&Innovation/GlobalInnovationIndex');
})->name('reports.educationtalent&innovation.gii');
Route::get('/get-eti-gii-philippine-ranking', [GlobalInnovationIndexController::class, 'getETIGIIPhilippineRanking']);
Route::get('/get-eti-gii-view-the-ranking', [GlobalInnovationIndexController::class, 'getETIGIIViewTheRanking']);
Route::get('/get-eti-gii-indicator-ranking', [GlobalInnovationIndexController::class, 'getETIGIIIndicatorRanking']);

// education talent & innovation/gtci
Route::get('/reports/educationtalent&innovation/global-talent-competitiveness-index', function () {
    return Inertia::render('Reports/EducationTalent&Innovation/GlobalTalentCompetitivenessIndex');
})->name('reports.educationtalent&innovation.gtci');
Route::get('/get-eti-gtci-philippine-ranking', [GlobalTalentCompetitivenessIndexController::class, 'getETIGTCIPhilippineRanking']);
Route::get('/get-eti-gtci-view-the-ranking', [GlobalTalentCompetitivenessIndexController::class, 'getETIGTCIViewTheRanking']);
Route::get('/get-eti-gtci-indicator-ranking', [GlobalTalentCompetitivenessIndexController::class, 'getETIGTCIIndicatorRanking']);

Route::get('/reports/educationtalent&innovation/world-talent-ranking', function () {
    return Inertia::render('Reports/EducationTalent&Innovation/WorldTalentRanking');
})->name('reports.educationtalent&innovation.wtr');
Route::get('/get-eti-wtr-philippine-ranking', [WorldTalentRankingController::class, 'getETIWTRPhilippineRanking']);
Route::get('/get-eti-wtr-view-the-ranking', [WorldTalentRankingController::class, 'getETIWTRViewTheRanking']);
Route::get('/get-eti-wtr-indicator-ranking', [WorldTalentRankingController::class, 'getETIWTRIndicatorRanking']);

// energy & environment
Route::get('/reports/energy&environment/energy-transition-index', function () {
    return Inertia::render('Reports/Energy&Environment/EnergyTransitionIndex');
})->name('reports.energy&environment.eti');
Route::get('/get-ee-eti-philippine-ranking', [EnergyTransitionIndexController::class, 'getEEETIPhilippineRanking']);
Route::get('/get-ee-eti-view-the-ranking', [EnergyTransitionIndexController::class, 'getEEETIViewTheRanking']);
Route::get('/get-ee-eti-indicator-ranking', [EnergyTransitionIndexController::class, 'getEEETIIndicatorRanking']);

Route::get('/reports/energy&environment/environmental-performance-index', function () {
    return Inertia::render('Reports/Energy&Environment/EnvironmentalPerformanceIndex');
})->name('reports.energy&environment.epi');
Route::get('/get-ee-epi-philippine-ranking', [EnvironmentalPerformanceIndexController::class, 'getEEEPIPhilippineRanking']);
Route::get('/get-ee-epi-view-the-ranking', [EnvironmentalPerformanceIndexController::class, 'getEEEPIViewTheRanking']);
Route::get('/get-ee-epi-indicator-ranking', [EnvironmentalPerformanceIndexController::class, 'getEEEPIIndicatorRanking']);

// governance
Route::get('/reports/governance/b-ready-doing-business-report', function () {
    return Inertia::render('Reports/Governance/BReadyDoingBusinessReport');
})->name('reports.governance.brdbr');
Route::get('/get-governance-brdbr-philippine-ranking', [BReadyDoingBusinessReportController::class, 'getGovernanceBrdbrPhilippineRankings']);

// governance/corruption/perceptions
Route::get('/reports/governance/corruption-perceptions-index', function () {
    return Inertia::render('Reports/Governance/CorruptionPerceptionsIndex');
})->name('reports.governance.cpi');
Route::get('/get-governance-cpi-philippine-ranking', [CorruptionPerceptionsIndexController::class, 'getGovernanceCPIPhilippineRanking']);

// governance/wgi/Economic Freedom
Route::get('/reports/governance/economic-freedom-index', function () {
    return Inertia::render('Reports/Governance/EconomicFreedomIndex');
})->name('reports.governance.efi');
Route::get('/get-governance-efi-philippine-ranking', [EconomicFreedomIndexController::class, 'getGovernanceEFIPhilippineRanking']);

// governance/wgi/Voice and Accountability
Route::get('/reports/governance/worldwide-governance-indicators/voice-and-accountability', function () {
    return Inertia::render('Reports/Governance/WGI/WGIVoiceAndAccountability');
})->name('reports.governance.voiceandaccountability');
Route::get('/get-governance-wgi-voice-and-accountability-philippine-ranking', [WorldGovernanceIndicatorsController::class, 'getGovernanceWgiVoiceAndAccountabilityPhilipineRanking']);

// governance/wgi/Political Stability and Absence of Violence/Terrorism
Route::get('/reports/governance/worldwide-governance-indicators/political-stability-and-absence-of-violence/terrorism', function () {
    return Inertia::render('Reports/Governance/WGI/WGIPsavt');
})->name('reports.governance.psavt');
Route::get('/get-governance-wgi-psavt-philippine-ranking', [WorldGovernanceIndicatorsController::class, 'getGovernanceWgiPSAVTPhilipineRanking']);

// governance/wgi/Government Effectivenes
Route::get('/reports/governance/worldwide-governance-indicators/government-effectiveness', function () {
    return Inertia::render('Reports/Governance/WGI/WGIGovernmentEffectiveness');
})->name('reports.governance.governmenteffectiveness');
Route::get('/get-governance-wgi-government-effectiveness-philippine-ranking', [WorldGovernanceIndicatorsController::class, 'getGovernanceWgiGovernmentEffectivenessPhilipineRanking']);

// governance/wgi/Regulatory Quality
Route::get('/reports/governance/worldwide-governance-indicators/regulatory-quality', function () {
    return Inertia::render('Reports/Governance/WGI/WGIRegulatoryQuality');
})->name('reports.governance.regulatoryquality');
Route::get('/get-governance-wgi-regulatory-quality-philippine-ranking', [WorldGovernanceIndicatorsController::class, 'getGovernanceWgiRegulatoryQualityPhilipineRanking']);

// governance/wgi/Rule of Law
Route::get('/reports/governance/worldwide-governance-indicators/rule-of-law', function () {
    return Inertia::render('Reports/Governance/WGI/WGIRuleOfLaw');
})->name('reports.governance.ruleoflaw');
Route::get('/get-governance-wgi-rule-of-law-philippine-ranking', [WorldGovernanceIndicatorsController::class, 'getGovernanceWgiRuleOfLawPhilipineRanking']);

// governance/wgi/Control of Corruption
Route::get('/reports/governance/worldwide-governance-indicators/control-of-corruption', function () {
    return Inertia::render('Reports/Governance/WGI/WGIControlOfCorruption');
})->name('reports.governance.controlofcorruption');
Route::get('/get-governance-wgi-control-of-corruption-philippine-ranking', [WorldGovernanceIndicatorsController::class, 'getGovernanceWgiControlOfCorruptionPhilipineRanking']);

// health & nutrition
Route::get('/reports/health&nutrition/global-health-security-index', function () {
    return Inertia::render('Reports/Health&Nutrition/GlobalHealthSecurityIndex');
})->name('reports.health&nutrition.ghsi');
Route::get('/get-hn-ghsi-philippine-ranking', [GlobalHealthSecurityIndexController::class, 'getHNGHSIPhilippineRanking']);
Route::get('/get-hn-ghsi-view-the-ranking', [GlobalHealthSecurityIndexController::class, 'getHNGHSIViewTheRanking']);
Route::get('/get-hn-ghsi-indicator-ranking', [GlobalHealthSecurityIndexController::class, 'getHNGHSIIndicatorRanking']);

// health & nutrition/global hunger index
Route::get('/reports/health&nutrition/global-hunger-index', function () {
    return Inertia::render('Reports/Health&Nutrition/GlobalHungerIndex');
})->name('reports.health&nutrition.ghi');
Route::get('/get-hn-ghi-philippine-ranking', [GlobalHungerIndexController::class, 'getHNGHIPhilippineRanking']);
Route::get('/get-hn-ghi-view-the-ranking', [GlobalHungerIndexController::class, 'getHNGHIViewTheRanking']);

// trade / logistics performance index
Route::get('/reports/trade/logistics-performance-index', function () {
    return Inertia::render('Reports/Trade/LogisticsPerformanceIndex');
})->name('reports.trade.lpi');
Route::get('/get-trade-lpi-philippine-ranking', [LogisticsPerformanceIndexController::class, 'getTradeLPIPhilippineRanking']);
Route::get('/get-trade-lpi-view-the-ranking', [LogisticsPerformanceIndexController::class, 'getTradeLPIViewTheRanking']);
Route::get('/get-trade-lpi-indicator-ranking', [LogisticsPerformanceIndexController::class, 'getTradeLPIIndicatorRanking']);

// fetch data for chart and table to homepage
Route::get('/phils-reports-ranking', [PhilippinesReportsRankingController::class, 'getPhilippinesReportsRanking']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// disable the login and register url if someone try to modify the url in the browser
Route::permanentRedirect('/404', '/login');
Route::permanentRedirect('/404', '/register');
Route::permanentRedirect('/404', '/password/reset');
