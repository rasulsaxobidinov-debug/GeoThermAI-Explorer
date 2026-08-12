import { useState } from "react";
import MapView from "./components/MapView";

const API_URL =
  import.meta.env.VITE_API_URL || "/api";


const translations = {
  en: {
    tagline: "Intelligent geothermal exploration",
    aiPlatform: "AI Exploration Platform",
    eyebrow: "AI • GEOTHERMAL EXPLORATION",
    heroTitle: "Discover geothermal",
    heroTitleAccent: " potential with AI.",
    heroDescription: "GeoThermAI Explorer integrates geological, geophysical and thermal information to support intelligent geothermal resource assessment.",
    startAnalysis: "Start Analysis",
    regionsAvailable: "study regions available",
    geothermal: "GEOTHERMAL",
    prospectivity: "PROSPECTIVITY",
    exploration: "EXPLORATION",
    intelligence: "INTELLIGENCE",
    regionalAnalysis: "Regional Analysis",
    explorePotential: "Explore geothermal potential",
    aiAssessment: "AI Assessment",
    probabilityScoring: "Probability & prospectivity scoring",
    spatialIntelligence: "Spatial Intelligence",
    mapInsights: "Map-based exploration insights",
    competitionVersion: "Competition MVP • Version 1.0",
    analysisTagline: "AI-powered geothermal exploration",
    systemReady: "System ready",
    back: "Back",
    analysisModule: "ANALYSIS MODULE",
    resourceAssessment: "Geothermal Resource Assessment",
    analysisDescription: "Select a study region and run an AI-assisted geothermal prospectivity assessment.",
    engineStatus: "ENGINE STATUS",
    ready: "READY",
    studyRegion: "Study Region",
    chooseRegion: "Choose region",
    runAnalysis: "Run AI Analysis",
    runningAnalysis: "Running Analysis...",
    newAnalysis: "New Analysis",
    analysisError: "Analysis Error",
    analysisMissing: "Analysis data is missing.",
    unableAnalysis: "Unable to complete analysis",
    selectRegion: "Please select a study region first.",
    analysisInProgress: "AI analysis in progress",
    processing: "Processing geothermal prospectivity for",
    spatialAnalysis: "SPATIAL ANALYSIS",
    prospectivityMap: "Geothermal Prospectivity Map",
    mapDescription: "Spatial visualization of geothermal prospects, thermal anomalies and geological structures.",
    selectedRegion: "SELECTED REGION",
    aiOutput: "AI OUTPUT",
    analysisResult: "Geothermal Analysis Result",
    resultDescription: "AI-assisted assessment generated for the selected study region.",
    completed: "Analysis completed",
    prospectivityIndex: "PROSPECTIVITY INDEX",
    overallProspectivity: "Overall geothermal prospectivity",
    geothermalProbability: "Geothermal Probability",
    probabilityDescription: "Estimated resource presence probability",
    temperatureForecast: "Temperature Forecast",
    temperatureDescription: "Estimated subsurface temperature",
    depthForecast: "Depth Forecast",
    depthDescription: "Estimated target depth",
    riskLevel: "Risk Level",
    riskDescription: "Exploration risk assessment",
    recommendation: "AI EXPLORATION RECOMMENDATION",
    highPriority: "High-priority geothermal exploration area",
    moderatePriority: "Moderate-priority exploration area",
    lowPriority: "Low-priority exploration area",
    demonstrates: "demonstrates a prospectivity index of",
    estimatedTemperature: "with an estimated temperature of",
    approximately: "at approximately",
    competitionOutput: "Competition MVP output:",
    disclaimer: "This assessment demonstrates the GeoThermAI Explorer analytical workflow. Values shown are demonstration results and should not be interpreted as confirmed geological exploration targets.",
    footerPlatform: "AI-powered geothermal exploration platform",
    high: "HIGH",
    moderate: "MODERATE",
    low: "LOW",
  },
  ru: {
    tagline: "Интеллектуальная геотермальная разведка",
    aiPlatform: "AI-платформа геотермальной разведки",
    eyebrow: "AI • ГЕОТЕРМАЛЬНАЯ РАЗВЕДКА",
    heroTitle: "Открывайте геотермальный",
    heroTitleAccent: " потенциал с помощью AI.",
    heroDescription: "GeoThermAI Explorer объединяет геологическую, геофизическую и термическую информацию для интеллектуальной оценки геотермальных ресурсов.",
    startAnalysis: "Начать анализ",
    regionsAvailable: "доступных регионов",
    geothermal: "ГЕОТЕРМАЛЬНАЯ ЭНЕРГИЯ",
    prospectivity: "ПЕРСПЕКТИВНОСТЬ",
    exploration: "РАЗВЕДКА",
    intelligence: "АНАЛИТИКА",
    regionalAnalysis: "Региональный анализ",
    explorePotential: "Оценка геотермального потенциала",
    aiAssessment: "AI-оценка",
    probabilityScoring: "Вероятность и индекс перспективности",
    spatialIntelligence: "Пространственная аналитика",
    mapInsights: "Анализ данных на карте",
    competitionVersion: "Конкурсный MVP • Версия 1.0",
    analysisTagline: "AI-платформа геотермальной разведки",
    systemReady: "Система готова",
    back: "Назад",
    analysisModule: "МОДУЛЬ АНАЛИЗА",
    resourceAssessment: "Оценка геотермальных ресурсов",
    analysisDescription: "Выберите регион исследования и запустите AI-анализ геотермальной перспективности.",
    engineStatus: "СТАТУС ДВИЖКА",
    ready: "ГОТОВ",
    studyRegion: "Регион исследования",
    chooseRegion: "Выберите регион",
    runAnalysis: "Запустить AI-анализ",
    runningAnalysis: "Выполняется анализ...",
    newAnalysis: "Новый анализ",
    analysisError: "Ошибка анализа",
    analysisMissing: "Данные анализа отсутствуют.",
    unableAnalysis: "Не удалось выполнить анализ",
    selectRegion: "Сначала выберите регион исследования.",
    analysisInProgress: "AI-анализ выполняется",
    processing: "Обработка геотермальной перспективности региона",
    spatialAnalysis: "ПРОСТРАНСТВЕННЫЙ АНАЛИЗ",
    prospectivityMap: "Карта геотермальной перспективности",
    mapDescription: "Пространственная визуализация геотермальных объектов, термических аномалий и геологических структур.",
    selectedRegion: "ВЫБРАННЫЙ РЕГИОН",
    aiOutput: "РЕЗУЛЬТАТ AI",
    analysisResult: "Результат геотермального анализа",
    resultDescription: "AI-оценка для выбранного региона исследования.",
    completed: "Анализ завершён",
    prospectivityIndex: "ИНДЕКС ПЕРСПЕКТИВНОСТИ",
    overallProspectivity: "Общая геотермальная перспективность",
    geothermalProbability: "Вероятность геотермального ресурса",
    probabilityDescription: "Расчётная вероятность наличия ресурса",
    temperatureForecast: "Прогноз температуры",
    temperatureDescription: "Расчётная температура недр",
    depthForecast: "Прогноз глубины",
    depthDescription: "Расчётная глубина цели",
    riskLevel: "Уровень риска",
    riskDescription: "Оценка риска геотермальной разведки",
    recommendation: "РЕКОМЕНДАЦИЯ AI ПО РАЗВЕДКЕ",
    highPriority: "Зона высокого приоритета для геотермальной разведки",
    moderatePriority: "Зона среднего приоритета для разведки",
    lowPriority: "Зона низкого приоритета для разведки",
    demonstrates: "имеет индекс перспективности",
    estimatedTemperature: "с расчётной температурой",
    approximately: "на глубине около",
    competitionOutput: "Результат конкурсного MVP:",
    disclaimer: "Эта оценка демонстрирует аналитический рабочий процесс GeoThermAI Explorer. Представленные значения являются демонстрационными результатами и не должны рассматриваться как подтверждённые геологические цели разведки.",
    footerPlatform: "AI-платформа геотермальной разведки",
    high: "ВЫСОКАЯ",
    moderate: "СРЕДНЯЯ",
    low: "НИЗКАЯ",
  },
  uz: {
    tagline: "Intellektual geotermal qidiruv",
    aiPlatform: "AI geotermal qidiruv platformasi",
    eyebrow: "AI • GEOTERMAL QIDIRUV",
    heroTitle: "Geotermal salohiyatni",
    heroTitleAccent: " AI yordamida kashf eting.",
    heroDescription: "GeoThermAI Explorer geologik, geofizik va termik maʼlumotlarni birlashtirib, geotermal resurslarni intellektual baholashni qo‘llab-quvvatlaydi.",
    startAnalysis: "Tahlilni boshlash",
    regionsAvailable: "tadqiqot hududi mavjud",
    geothermal: "GEOTERMAL",
    prospectivity: "ISTIQBOLLILIK",
    exploration: "QIDIRUV",
    intelligence: "ANALITIKA",
    regionalAnalysis: "Hududiy tahlil",
    explorePotential: "Geotermal salohiyatni o‘rganish",
    aiAssessment: "AI baholash",
    probabilityScoring: "Ehtimollik va istiqbollilik indeksi",
    spatialIntelligence: "Fazoviy analitika",
    mapInsights: "Xaritadagi qidiruv natijalari",
    competitionVersion: "Tanlov MVP • 1.0-versiya",
    analysisTagline: "AI asosidagi geotermal qidiruv",
    systemReady: "Tizim tayyor",
    back: "Orqaga",
    analysisModule: "TAHLIL MODULI",
    resourceAssessment: "Geotermal resurslarni baholash",
    analysisDescription: "Tadqiqot hududini tanlang va AI yordamida geotermal istiqbollilik tahlilini ishga tushiring.",
    engineStatus: "DVIGATEL HOLATI",
    ready: "TAYYOR",
    studyRegion: "Tadqiqot hududi",
    chooseRegion: "Hududni tanlang",
    runAnalysis: "AI tahlilini ishga tushirish",
    runningAnalysis: "Tahlil bajarilmoqda...",
    newAnalysis: "Yangi tahlil",
    analysisError: "Tahlil xatosi",
    analysisMissing: "Tahlil maʼlumotlari mavjud emas.",
    unableAnalysis: "Tahlilni bajarib bo‘lmadi",
    selectRegion: "Avval tadqiqot hududini tanlang.",
    analysisInProgress: "AI tahlili bajarilmoqda",
    processing: "Hududning geotermal istiqbolliligi qayta ishlanmoqda",
    spatialAnalysis: "FAZOVIY TAHLIL",
    prospectivityMap: "Geotermal istiqbollilik xaritasi",
    mapDescription: "Geotermal obyektlar, termik anomaliyalar va geologik tuzilmalarning fazoviy vizualizatsiyasi.",
    selectedRegion: "TANLANGAN HUDUD",
    aiOutput: "AI NATIJASI",
    analysisResult: "Geotermal tahlil natijasi",
    resultDescription: "Tanlangan tadqiqot hududi uchun AI yordamida shakllantirilgan baholash.",
    completed: "Tahlil yakunlandi",
    prospectivityIndex: "ISTIQBOLLILIK INDEKSI",
    overallProspectivity: "Umumiy geotermal istiqbollilik",
    geothermalProbability: "Geotermal resurs ehtimoli",
    probabilityDescription: "Resurs mavjudligining hisoblangan ehtimoli",
    temperatureForecast: "Harorat prognozi",
    temperatureDescription: "Yer osti haroratining hisoblangan qiymati",
    depthForecast: "Chuqurlik prognozi",
    depthDescription: "Maqsadli qatlamning hisoblangan chuqurligi",
    riskLevel: "Xavf darajasi",
    riskDescription: "Geotermal qidiruv xavfi bahosi",
    recommendation: "AI QIDIRUV TAVSIYASI",
    highPriority: "Geotermal qidiruv uchun yuqori ustuvor hudud",
    moderatePriority: "Qidiruv uchun o‘rtacha ustuvor hudud",
    lowPriority: "Qidiruv uchun past ustuvor hudud",
    demonstrates: "istiqbollilik indeksi",
    estimatedTemperature: "hisoblangan harorat",
    approximately: "taxminan",
    competitionOutput: "Tanlov MVP natijasi:",
    disclaimer: "Ushbu baholash GeoThermAI Explorer analitik ish jarayonini namoyish etadi. Ko‘rsatilgan qiymatlar demo natijalar bo‘lib, tasdiqlangan geologik qidiruv nishonlari sifatida talqin qilinmasligi kerak.",
    footerPlatform: "AI asosidagi geotermal qidiruv platformasi",
    high: "YUQORI",
    moderate: "O‘RTACHA",
    low: "PAST",
  },
};

function LanguageSwitcher({ language, onChange }) {
  return (
    <div className="language-switcher" aria-label="Language selector">
      {["uz", "ru", "en"].map((code) => (
        <button
          key={code}
          type="button"
          className={`language-button ${language === code ? "active" : ""}`}
          onClick={() => onChange(code)}
          aria-pressed={language === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

const regions = [
  "Tashkent",
  "Samarkand",
  "Bukhara",
  "Navoi",
  "Jizzakh",
  "Surkhandarya",
  "Kashkadarya",
  "Fergana",
  "Andijan",
  "Namangan",
  "Syrdarya",
  "Khorezm",
  "Karakalpakstan",
];

const getProspectivityLevel = (value) => {
  if (value >= 0.8) return "HIGH";
  if (value >= 0.6) return "MODERATE";
  return "LOW";
};

const getRiskClass = (risk) => {
  return String(risk || "").toLowerCase();
};

const formatScore = (value) => {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "—";
  }

  return number.toFixed(2);
};

function App() {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [region, setRegion] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [language, setLanguage] = useState(() => localStorage.getItem("geothermai-language") || "en");
  const t = translations[language] || translations.en;

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    localStorage.setItem("geothermai-language", nextLanguage);
  };

  const runAnalysis = async () => {
    if (!region) {
      setError(t.selectRegion);
      return;
    }

    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const response = await fetch(`${API_URL}/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ region }),
      });

      if (!response.ok) {
        let message = `Backend returned ${response.status}`;

        try {
          const errorData = await response.json();

          if (errorData?.detail) {
            message = errorData.detail;
          }
        } catch {
          // Keep default error message.
        }

        throw new Error(message);
      }

      const data = await response.json();

      if (!data.analysis) {
        throw new Error(t.analysisMissing);
      }

      setAnalysis(data.analysis);
    } catch (err) {
      setError(`${t.unableAnalysis}: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetAnalysis = () => {
    setRegion("");
    setAnalysis(null);
    setError("");
  };

  const openAnalysis = () => {
    setShowAnalysis(true);
    setError("");
  };

  if (!showAnalysis) {
    return (
      <main className="landing-page">
        <div className="landing-background-grid" />

        <header className="landing-header">
          <div className="brand">
            <img
            className="brand-logo"
            src="/logo.png"
            alt="GeoThermAI Explorer"
          />

            <div>
              <div className="brand-name">
                GeoThermAI Explorer
              </div>

              <div className="brand-tagline">
                {t.tagline}
              </div>
            </div>
          </div>

          <div className="header-actions">
            <div className="header-status">
              <span className="status-dot" />
              {t.aiPlatform}
            </div>
            <LanguageSwitcher language={language} onChange={changeLanguage} />
          </div>
        </header>

        <section className="hero-section">
          <div className="hero-content">
            <div className="eyebrow">
              {t.eyebrow}
            </div>

            <h1>
              {t.heroTitle}
              <span>{t.heroTitleAccent}</span>
            </h1>

            <p className="hero-description">
              {t.heroDescription}
            </p>

            <div className="hero-actions">
              <button
                className="primary-button hero-button"
                onClick={openAnalysis}
              >
                {t.startAnalysis}
                <span className="button-arrow">→</span>
              </button>

              <div className="hero-note">
                <span>13</span>
                {t.regionsAvailable}
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbital-ring ring-one" />
            <div className="orbital-ring ring-two" />
            <div className="orbital-ring ring-three" />

            <div className="earth-core">
              <div className="core-glow" />
              <div className="core-label">
                <strong>AI</strong>
                <span>{t.geothermal}</span>
              </div>
            </div>

            <div className="floating-card card-top">
              <span className="floating-label">
                {t.prospectivity}
              </span>
              <strong>AI</strong>
            </div>

            <div className="floating-card card-bottom">
              <span className="floating-label">
                {t.exploration}
              </span>
              <strong>{t.intelligence}</strong>
            </div>
          </div>
        </section>

        <section className="feature-strip">
          <div className="feature-item">
            <div className="feature-icon">01</div>
            <div>
              <strong>{t.regionalAnalysis}</strong>
              <span>{t.explorePotential}</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">02</div>
            <div>
              <strong>{t.aiAssessment}</strong>
              <span>{t.probabilityScoring}</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">03</div>
            <div>
              <strong>{t.spatialIntelligence}</strong>
              <span>{t.mapInsights}</span>
            </div>
          </div>
        </section>

        <footer className="landing-footer">
          <span>GeoThermAI Explorer</span>
          <span>{t.competitionVersion}</span>
        </footer>
      </main>
    );
  }

  const prospectivityLevel = analysis
    ? getProspectivityLevel(analysis.prospectivity_index)
    : null;

  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="brand">
          <img
            className="brand-logo"
            src="/logo.png"
            alt="GeoThermAI Explorer"
          />

          <div>
            <div className="brand-name">
              GeoThermAI Explorer
            </div>

            <div className="brand-tagline">
              {t.analysisTagline}
            </div>
          </div>
        </div>

        <div className="header-actions">
          <div className="header-status">
            <span className="status-dot" />
            {t.systemReady}
          </div>

          <LanguageSwitcher language={language} onChange={changeLanguage} />

          <button
            className="secondary-button"
            onClick={() => {
              setShowAnalysis(false);
              resetAnalysis();
            }}
          >
            ← {t.back}
          </button>
        </div>
      </header>

      <section className="analysis-header">
        <div>
          <div className="section-label">
            {t.analysisModule}
          </div>

          <h1>
            {t.resourceAssessment}
          </h1>

          <p>
            {t.analysisDescription}
          </p>
        </div>

        <div className="analysis-status-card">
          <span className="status-dot" />
          <div>
            <small>{t.engineStatus}</small>
            <strong>{t.ready}</strong>
          </div>
        </div>
      </section>

      <section className="control-panel">
        <div className="control-field">
          <label htmlFor="region">
            {t.studyRegion}
          </label>

          <select
            id="region"
            value={region}
            onChange={(event) => {
              setRegion(event.target.value);
              setAnalysis(null);
              setError("");
            }}
            disabled={loading}
          >
            <option value="">
              {t.chooseRegion}
            </option>

            {regions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button
          className="primary-button analyze-button"
          onClick={runAnalysis}
          disabled={loading || !region}
        >
          {loading ? (
            <>
              <span className="loading-spinner" />
              {t.runningAnalysis}
            </>
          ) : (
            <>
              {t.runAnalysis}
              <span className="button-arrow">→</span>
            </>
          )}
        </button>

        {analysis && (
          <button
            className="secondary-button new-analysis-button"
            onClick={resetAnalysis}
          >
            {t.newAnalysis}
          </button>
        )}
      </section>

      {error && (
        <div className="error-box">
          <div className="error-icon">!</div>

          <div>
            <strong>{t.analysisError}</strong>
            <span>{error}</span>
          </div>
        </div>
      )}

      {loading && (
        <div className="loading-box">
          <div className="loading-spinner large" />

          <div>
            <strong>
              {t.analysisInProgress}
            </strong>

            <span>
              {t.processing}{" "}
              <strong>{region}</strong>
            </span>
          </div>
        </div>
      )}

      <div className="analysis-workspace">
    <section className="map-section">
        <div className="section-heading">
          <div>
            <div className="section-label">
              {t.spatialAnalysis}
            </div>

            <h2>
              {t.prospectivityMap}
            </h2>

            <p className="section-description">
              {t.mapDescription}
            </p>
          </div>

          {region && (
            <div className="selected-region">
              <span>{t.selectedRegion}</span>
              <strong>{region}</strong>
            </div>
          )}
        </div>

        <MapView
          selectedRegion={region}
          analysis={analysis}
          language={language}
        />
      </section>

      {analysis && (
        <section className="result-section">
          <div className="section-heading result-heading">
            <div>
              <div className="section-label">
                {t.aiOutput}
              </div>

              <h2>
                {t.analysisResult}
              </h2>

              <p className="section-description">
                {t.resultDescription}
              </p>
            </div>

            <div className="completed-badge">
              <span>✓</span>
              {t.completed}
            </div>
          </div>

          <div className="ai-dashboard">
            <div className="prospectivity-card">
              <div className="dashboard-label">
                {t.prospectivityIndex}
              </div>

              <div className="prospectivity-value">
                {formatScore(
                  analysis.prospectivity_index
                )}
              </div>

              <div
                className={`prospectivity-level ${prospectivityLevel.toLowerCase()}`}
              >
                {t[prospectivityLevel.toLowerCase()]}
              </div>

              <div className="prospectivity-bar">
                <div
                  className="prospectivity-fill"
                  style={{
                    width: `${Math.min(
                      Number(
                        analysis.prospectivity_index
                      ) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>

              <p>
                {t.overallProspectivity}
              </p>
            </div>

            <div className="ai-metrics">
              <div className="result-card highlight">
                <span>
                  {t.geothermalProbability}
                </span>

                <strong>
                  {Math.round(
                    Number(
                      analysis.geothermal_probability
                    ) * 100
                  )}
                  %
                </strong>

                <small>
                  {t.probabilityDescription}
                </small>
              </div>

              <div className="result-card">
                <span>
                  {t.temperatureForecast}
                </span>

                <strong>
                  {analysis.temperature_forecast} °C
                </strong>

                <small>
                  {t.temperatureDescription}
                </small>
              </div>

              <div className="result-card">
                <span>
                  {t.depthForecast}
                </span>

                <strong>
                  {analysis.depth_forecast} m
                </strong>

                <small>
                  {t.depthDescription}
                </small>
              </div>

              <div className="result-card">
                <span>
                  {t.riskLevel}
                </span>

                <strong
                  className={`risk-value risk-${getRiskClass(
                    analysis.risk_level
                  )}`}
                >
                  {t[String(analysis.risk_level || "").toLowerCase()] || String(analysis.risk_level).toUpperCase()}
                </strong>

                <small>
                  {t.riskDescription}
                </small>
              </div>
            </div>
          </div>

          <div className="recommendation-panel">
            <div className="recommendation-icon">
              ⌖
            </div>

            <div>
              <div className="dashboard-label">
                AI {t.exploration} RECOMMENDATION
              </div>

              <h3>
                {prospectivityLevel === "HIGH"
                  ? t.highPriority
                  : prospectivityLevel === "MODERATE"
                  ? t.moderatePriority
                  : t.lowPriority}
              </h3>

              <p>
                <strong>{region}</strong> {t.demonstrates}{" "}
                <strong>
                  {formatScore(
                    analysis.prospectivity_index
                  )}
                </strong>{" "}
                {t.estimatedTemperature}{" "}
                <strong>
                  {analysis.temperature_forecast} °C
                </strong>{" "}
                {t.approximately}{" "}
                <strong>
                  {analysis.depth_forecast} m
                </strong>.
              </p>
            </div>
          </div>

          <div className="analysis-disclaimer">
            <strong>{t.competitionOutput}</strong>{" "}
            {t.disclaimer}
          </div>
        </section>
      )}

      </div>
      <footer className="app-footer">
        <span>GeoThermAI Explorer</span>
        <span>
          {t.footerPlatform}
        </span>
        <span>Competition MVP • v1.0</span>
      </footer>
    </main>
  );
}

export default App;
