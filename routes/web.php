<?php

use App\Http\Controllers\DigitalQualityOfLifeIndexController;
use App\Http\Controllers\EGovernmentDevelopmentIndexController;
use App\Http\Controllers\GovTechMaturityIndexController;
use App\Http\Controllers\ICTDevelopmentIndexController;
use App\Http\Controllers\NetworkReadinessIndexController;
use App\Http\Controllers\PhilippinesReportsRankingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WorldCompetitivenessRankingController;
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

// generate reports
// general
Route::get('/reports/general/world-competitiveness-yearbook', function () {
    return Inertia::render('Reports/General/WorldCompetitivenessYearbook');
})->name('reports.general.wcy');

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
Route::get('/world-competitiveness-ranking', [WorldCompetitivenessRankingController::class, 'getWorldCompetitivenessRanking']);
Route::get('/get-ph-ranks-wcr', [WorldCompetitivenessRankingController::class, 'getPhRanksWCR']);
Route::get('/get-indicator-ranking-wcr', [WorldCompetitivenessRankingController::class, 'getIndicatorRankingWCR']);

// education talent & innovation
Route::get('/reports/educationtalent&innovation/programme-for-international-student-assessment', function () {
    return Inertia::render('Reports/EducationTalent&Innovation/ProgrammeForInternationalStudentAssessment');
})->name('reports.educationtalent&innovation.pisa');

Route::get('/reports/educationtalent&innovation/global-innovation-index', function () {
    return Inertia::render('Reports/EducationTalent&Innovation/GlobalInnovationIndex');
})->name('reports.educationtalent&innovation.gii');

Route::get('/reports/educationtalent&innovation/global-talent-competitiveness-index', function () {
    return Inertia::render('Reports/EducationTalent&Innovation/GlobalTalentCompetitivenessIndex');
})->name('reports.educationtalent&innovation.gtci');

Route::get('/reports/educationtalent&innovation/world-talent-ranking', function () {
    return Inertia::render('Reports/EducationTalent&Innovation/WorldTalentRanking');
})->name('reports.educationtalent&innovation.wtr');

// energy & environment
Route::get('/reports/energy&environment/energy-transition-index', function () {
    return Inertia::render('Reports/Energy&Environment/EnergyTransitionIndex');
})->name('reports.energy&environment.eti');

Route::get('/reports/energy&environment/environmental-performance-index', function () {
    return Inertia::render('Reports/Energy&Environment/EnvironmentalPerformanceIndex');
})->name('reports.energy&environment.epi');

// governance
Route::get('/reports/governance/b-ready-doing-business-report', function () {
    return Inertia::render('Reports/Governance/BReadyDoingBusinessReport');
})->name('reports.governance.brdbr');

Route::get('/reports/governance/corruption-perceptions-index', function () {
    return Inertia::render('Reports/Governance/CorruptionPerceptionsIndex');
})->name('reports.governance.cpi');

Route::get('/reports/governance/economic-freedom-index', function () {
    return Inertia::render('Reports/Governance/EconomicFreedomIndex');
})->name('reports.governance.efi');

Route::get('/reports/governance/worldwide-governance-indicators', function () {
    return Inertia::render('Reports/Governance/WorldwideGovernanceIndicators');
})->name('reports.governance.wgi');

// health & nutrition
Route::get('/reports/health&nutrition/global-health-security-index', function () {
    return Inertia::render('Reports/Health&Nutrition/GlobalHealthSecurityIndex');
})->name('reports.health&nutrition.ghsi');

Route::get('/reports/health&nutrition/global-hunger-index', function () {
    return Inertia::render('Reports/Health&Nutrition/GlobalHungerIndex');
})->name('reports.health&nutrition.ghi');

// trade
Route::get('/reports/trade/logistics-performance-index', function () {
    return Inertia::render('Reports/Trade/LogisticsPerformanceIndex');
})->name('reports.trade.lpi');

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

require __DIR__ . '/auth.php';
