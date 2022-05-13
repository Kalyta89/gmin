import React from "react";
import { IntlContextConsumer } from "gatsby-plugin-intl";

import "./index.scss";

const FeasibilityTables = ({
  feasibilityItems,
  buttonLabel,
  buttonLink,
  file,
  onDownloadClick,
}) => {
  const numberFormat = new Intl.NumberFormat("en-US");
  const xUnitFormat = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumSignificantDigits: 2,
  });
  const percentFormat = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
  });
  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <div className="overflow-x-scroll lg:overflow-x-auto pb-2 md:pb-0">
          <div className="feasibility-wrapper feasibility-grid-area font-table text-text mx-auto">
            <div className="grid-feasibility-top-border-table-area border-input border-t mt-3 pb-4 md:pb-8"></div>
            <div className="grid-scenario-gold-price-title-area bg-table-header text-secondary uppercase py-2">
              {currentLocale === "fr"
                ? "Scénario (prix de l'or)"
                : "Scenario (Gold Price)"}
            </div>
            <div className="grid-feasibility-down-side-area bg-table-header text-secondary uppercase text-center py-2">
              {currentLocale === "fr" ? "Inconvé nient" : "Downside"}
            </div>
            <div className="grid-feasibility-base-area text-secondary uppercase text-center bg-secondary border-input border-l border-t border-r py-2">
              {currentLocale === "fr" ? "Base" : "Base"}
            </div>
            <div className="grid-feasibility-spot-area text-secondary bg-table-header uppercase text-center py-2">
              {currentLocale === "fr" ? "Endroit" : "Spot"}
            </div>
            <div className="grid-feasibility-upside-area text-secondary bg-table-header uppercase text-center py-2">
              {currentLocale === "fr" ? "À l'envers" : "Upside"}
            </div>
            <div className="grid-gold-price-name-area font-light text-secondary uppercase border-input bg-table-header border-b py-1">
              {currentLocale === "fr" ? "Prix de l'or" : "Gold Price"}
            </div>
            <div className="grid-gold-price-currency-area text-center text-secondary uppercase font-light bg-table-header border-input border-b py-1">
              {currentLocale === "fr" ? "USD / once" : "USD / OZ"}
            </div>
            <div className="grid-gold-first-price-area text-center font-light text-secondary uppercase bg-table-header border-input border-b py-1">
              {currencyFormat.format(feasibilityItems.goldFirstPrice)}
            </div>
            <div className="grid-gold-second-price-area text-center font-light text-secondary uppercase bg-secondary border-input border-l border-b border-r py-1">
              {currencyFormat.format(feasibilityItems.goldSecondPrice)}
            </div>
            <div className="grid-gold-third-price-area text-center font-light text-secondary uppercase bg-table-header border-input border-b py-1">
              {currencyFormat.format(feasibilityItems.goldThirdPrice)}
            </div>
            <div className="grid-gold-fourth-price-area text-center font-light text-secondary uppercase bg-table-header border-input border-b py-1">
              {currencyFormat.format(feasibilityItems.goldFourthPrice)}
            </div>
            <div className="grid-after-tax-npv-area font-light pb-2 pt-1">
              {currentLocale === "fr"
                ? "VAN après impôt (5%)"
                : "After-Tax NPV (5%)"}
            </div>
            <div className="grid-after-tax-npv-currency-area text-center text-table-unit font-light pb-2 pt-1">
              {currentLocale === "fr" ? "MM USD" : "USD MM"}
            </div>
            <div className="grid-after-tax-npv-first-price-area text-center font-light pb-2 pt-1">
              {currencyFormat.format(feasibilityItems.afterTaxNpvFirstPrice)}
            </div>
            <div className="grid-after-tax-npv-second-price-area text-center bg-secondary border-input border-l border-r font-light pb-2 pt-1">
              {currencyFormat.format(feasibilityItems.afterTaxNpvSecondPrice)}
            </div>
            <div className="grid-after-tax-npv-third-price-area text-center font-light pb-2 pt-1">
              {currencyFormat.format(feasibilityItems.afterTaxNpvThirdPrice)}
            </div>
            <div className="grid-after-tax-npv-fourth-price-area text-center font-light pb-2 pt-1">
              {currencyFormat.format(feasibilityItems.afterTaxNpvFourthPrice)}
            </div>
            <div className="grid-after-tax-irr-area font-light border-input border-b py-1">
              {currentLocale === "fr" ? "TRI après impôt" : "After-Tax IRR"}
            </div>
            <div className="grid-after-tax-irr-percent-area text-center text-table-unit font-light border-input border-b py-1">
              %
            </div>
            <div className="grid-after-tax-irr-first-percent-area text-center font-light border-input border-b py-1">
              {percentFormat.format(feasibilityItems.afterTaxIrrFirstPercent)}
            </div>
            <div className="grid-after-tax-irr-second-percent-area text-center bg-secondary font-light border-input border-b border-l border-r py-1">
              {percentFormat.format(feasibilityItems.afterTaxIrrSecondPercent)}
            </div>
            <div className="grid-after-tax-irr-third-percent-area text-center font-light border-input border-b py-1">
              {percentFormat.format(feasibilityItems.afterTaxIrrThirdPercent)}
            </div>
            <div className="grid-after-tax-irr-fourth-percent-area text-center font-light border-input border-b py-1">
              {percentFormat.format(feasibilityItems.afterTaxIrrFourthPercent)}
            </div>
            <div className="grid-lom-free-cash-flow-area font-light pb-1 pt-2">
              {currentLocale === "fr"
                ? "Flux de trésorerie disponible de LOM"
                : "LOM Free Cash Flow"}
            </div>
            <div className="grid-lom-free-cash-flow-currency-area font-light text-table-unit text-center pb-1 pt-2">
              {currentLocale === "fr" ? "MM USD" : "USD MM"}
            </div>
            <div className="grid-lom-free-cash-flow-first-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(
                feasibilityItems.lomFreeCashFlowFirstPrice,
              )}
            </div>
            <div className="grid-lom-free-cash-flow-second-price-area font-light text-center bg-secondary border-input border-l border-r pb-1 pt-2">
              {currencyFormat.format(
                feasibilityItems.lomFreeCashFlowSecondPrice,
              )}
            </div>
            <div className="grid-lom-free-cash-flow-third-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(
                feasibilityItems.lomFreeCashFlowThirdPrice,
              )}
            </div>
            <div className="grid-lom-free-cash-flow-fourth-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(
                feasibilityItems.lomFreeCashFlowFourthPrice,
              )}
            </div>
            <div className="grid-lom-ebitda-area font-light pb-1 pt-2">
              {currentLocale === "fr" ? "EBITDA de LOM" : "LOM EBITDA"}
            </div>
            <div className="grid-lom-ebitda-currency-area font-light text-table-unit text-center pb-1 pt-2">
              {currentLocale === "fr" ? "MM USD" : "USD MM"}
            </div>
            <div className="grid-lom-ebitda-first-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomEbitdaFirstPrice)}
            </div>
            <div className="grid-lom-ebitda-second-price-area font-light text-center bg-secondary border-input border-l border-r pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomEbitdaSecondPrice)}
            </div>
            <div className="grid-lom-ebitda-third-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomEbitdaThirdPrice)}
            </div>
            <div className="grid-lom-ebitda-fourth-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomEbitdaFourthPrice)}
            </div>
            <div className="grid-payback-period-area font-light border-input border-b py-1">
              {currentLocale === "fr" ? "Remboursement" : "Payback"}
            </div>
            <div className="grid-payback-period-unit-area font-light text-center text-table-unit uppercase border-input border-b py-1">
              {currentLocale === "fr" ? "Années" : "Years"}
            </div>
            <div className="grid-payback-period-first-year-area font-light text-center border-input border-b py-1">
              {numberFormat.format(feasibilityItems.paybackPeriodFirstYear)}{" "}
            </div>
            <div className="grid-payback-period-second-year-area font-light text-center bg-secondary border-input border-l border-r border-b py-1">
              {numberFormat.format(feasibilityItems.paybackPeriodSecondYear)}{" "}
            </div>
            <div className="grid-payback-period-third-year-area text-center font-light border-input border-b py-1">
              {numberFormat.format(feasibilityItems.paybackPeriodThirdYear)}{" "}
            </div>
            <div className="grid-payback-period-fourth-year-area text-center font-light border-input border-b py-1">
              {numberFormat.format(feasibilityItems.paybackPeriodFourthYear)}{" "}
            </div>
          </div>

          <div className="feasibility-wrapper feasibility-second-table-grid-area font-table text-text mt-10">
            <div className="grid-description-area text-secondary uppercase border-input border-b border-t py-2">
              {currentLocale === "fr" ? "La description" : "Description"}
            </div>
            <div className="grid-description-units-area text-center text-secondary uppercase border-input border-b border-t py-2">
              {currentLocale === "fr" ? "Unités" : "Units"}
            </div>
            <div className="grid-description-empty-area border-input border-b border-t py-2"></div>
            <div className="grid-description-value-area text-right text-secondary uppercase border-input border-b border-t py-2 pr-8">
              {currentLocale === "fr" ? "Gmin 2022 fs" : "Gmin 2022 fs"}
            </div>
            <div className="grid-production-data-area text-dark-blue font-bold uppercase pb-1 pt-2">
              {currentLocale === "fr"
                ? "Données de production (période d'exploitation)"
                : "Production Data (Operations Period)"}
            </div>
            <div className="grid-mine-life-area font-light py-1">
              {currentLocale === "fr" ? "La vie des mines" : "Mine Life"}
            </div>
            <div className="grid-mine-life-unit-area font-light text-center py-1">
              {currentLocale === "fr" ? "Années" : "Years"}
            </div>
            <div className="grid-mine-life-value-area font-light text-right py-1 pr-8">
              {feasibilityItems.mineLifeValue}
            </div>
            <div className="grid-mill-throughput-area font-light  pb-1 pt-2">
              {currentLocale === "fr"
                ? "Débit de fraisage moyen"
                : "Average Milling Throughput"}
            </div>
            <div className="grid-mill-throughput-unit-area text-center font-light  pb-1 pt-2">
              TPD
            </div>
            <div className="grid-mill-throughput-value-area text-right font-light pb-1 pt-2 pr-8">
              {numberFormat.format(feasibilityItems.millThroughputValue)}
            </div>
            <div className="grid-mill-throughput-second-area font-light pb-1 pt-2">
              {currentLocale === "fr"
                ? "Débit de fraisage moyen"
                : "Average Milling Throughput"}
            </div>
            <div className="grid-mill-throughput-second-unit-area text-center font-light pb-1 pt-2">
              Mt / {currentLocale === "fr" ? "An" : "Year"}
            </div>
            <div className="grid-mill-throughput-second-value-area text-right font-light pb-1 pt-2 pr-8">
              {numberFormat.format(feasibilityItems.millThroughputSecondValue)}
            </div>
            <div className="grid-strip-ratio-area font-light py-1">
              {currentLocale === "fr" ? "Rapport de dénudage" : "Strip Ratio"}
            </div>
            <div className="grid-strip-ratio-unit-area text-center font-light py-1">
              {currentLocale === "fr" ? "Déchets : Minerai" : "Waste : Ore"}
            </div>
            <div className="grid-strip-ratio-value-area text-right font-light py-1 pr-8">
              {numberFormat.format(feasibilityItems.stripRatioValue)}
            </div>
            <div className="grid-pre-strip-tonnage-area font-light py-1">
              {currentLocale === "fr"
                ? "Tonnage avant décapage"
                : "Pre-Strip Tonnage"}
            </div>
            <div className="grid-pre-strip-tonnage-unit-area text-center font-light py-1">
              Mt
            </div>
            <div className="grid-pre-strip-tonnage-value-area text-right font-light py-1 pr-8">
              {numberFormat.format(feasibilityItems.preStripTonnageValue)}
            </div>
            <div className="grid-total-tonnage-area font-light py-1">
              {currentLocale === "fr"
                ? "Tonnage total (hors pré-dénudage)"
                : "Total Tonnage (Exclusive Of Pre-Strip)"}
            </div>
            <div className="grid-total-tonnage-unit-area text-center font-light py-1">
              Mt
            </div>
            <div className="grid-total-tonnage-value-area text-right font-light py-1 pr-8">
              {numberFormat.format(feasibilityItems.totalTonnageValue)}
            </div>
            <div className="grid-one-tonnage-milled-area font-light py-1">
              {currentLocale === "fr"
                ? "Un tonnage usiné"
                : "One Tonnage Milled"}
            </div>
            <div className="grid-one-tonnage-milled-unit-area text-center font-light py-1">
              Mt
            </div>
            <div className="grid-one-tonnage-milled-value-area text-right font-light py-1 pr-8">
              {numberFormat.format(feasibilityItems.oneTonnageMilledValue)}
            </div>
            <div className="grid-gold-head-grade-area font-light py-1">
              {currentLocale === "fr"
                ? "Grade de tête d'or"
                : "Gold Head Grade"}
            </div>
            <div className="grid-gold-head-grade-unit-area text-center font-light py-1">
              G/t
            </div>
            <div className="grid-gold-head-grade-value-area text-right font-light py-1 pr-8">
              {numberFormat.format(feasibilityItems.goldHeadGradeValue)}
            </div>
            <div className="grid-contained-gold-area font-light py-1">
              {currentLocale === "fr" ? "Or contenu" : "Contained Gold"}
            </div>
            <div className="grid-contained-gold-unit-area text-center font-light py-1">
              K Oz
            </div>
            <div className="grid-contained-gold-value-area text-right font-light py-1 pr-8">
              {numberFormat.format(feasibilityItems.containedGoldValue)}
            </div>
            <div className="grid-recovery-area font-light py-1">
              {currentLocale === "fr" ? "Récupération" : "Recovery"}
            </div>
            <div className="grid-recovery-unit-area text-center font-light py-1">
              %
            </div>
            <div className="grid-recovery-value-area text-right font-light py-1 pr-8">
              {percentFormat.format(feasibilityItems.recoveryValue)}
            </div>
            <div className="grid-total-gold-production-area font-light py-1">
              {currentLocale === "fr"
                ? "Production totale d'or"
                : "Total Gold Production"}
            </div>
            <div className="grid-total-gold-production-unit-area text-center font-light py-1">
              K Oz
            </div>
            <div className="grid-total-gold-production-value-area text-right font-light py-1 pr-8">
              {numberFormat.format(feasibilityItems.totalGoldProductionValue)}
            </div>
            <div className="grid-average-annual-gold-area font-light py-1">
              {currentLocale === "fr"
                ? "Production d'or annuelle moyenne"
                : "Average Annual Gold Production"}
            </div>
            <div className="grid-average-annual-gold-unit-area text-center font-light py-1">
              K Oz
            </div>
            <div className="grid-average-annual-gold-value-area text-right font-light py-1 pr-8">
              {numberFormat.format(feasibilityItems.averageAnnualGoldValue)}
            </div>
            <div className="grid-first-five-full-years-area font-light py-1 pl-4">
              {currentLocale === "fr"
                ? "Cinq premières années complètes"
                : "First Five Full Years"}
            </div>
            <div className="grid-first-five-full-years-unit-area text-center font-light py-1">
              K Oz
            </div>
            <div className="grid-first-five-full-years-value-area text-right font-light py-1 pr-8">
              {numberFormat.format(feasibilityItems.firstFiveFullYearsValue)}
            </div>
            <div className="grid-operating-costs-area text-dark-blue uppercase font-bold border-input border-t pb-1 pt-2">
              {currentLocale === "fr"
                ? "Coûts d'exploitation (Moyenne Lom)"
                : "Operating Costs (Average Lom)"}
            </div>
            <div className="grid-mining-costs-first-area font-light py-1">
              {currentLocale === "fr" ? "Coûts miniers" : "Mining Costs"}
            </div>
            <div className="grid-mining-costs-first-unit-area text-center font-light py-1">
              USD/t {currentLocale === "fr" ? "Miné" : "Mined"}
            </div>
            <div className="grid-mining-costs-first-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(feasibilityItems.miningCostsFirstValue)}
            </div>
            <div className="grid-mining-costs-second-area font-light py-1">
              {currentLocale === "fr" ? "Coûts miniers" : "Mining Costs"}
            </div>
            <div className="grid-mining-costs-second-unit-area text-center font-light py-1">
              USD/t {currentLocale === "fr" ? "Usiné" : "Milled"}
            </div>
            <div className="grid-mining-costs-second-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(feasibilityItems.miningCostsSecondValue)}
            </div>
            <div className="grid-processing-cost-area font-light py-1">
              {currentLocale === "fr"
                ? "Coût de traitement"
                : "Processing Cost"}
            </div>
            <div className="grid-processing-cost-unit-area text-center font-light py-1">
              USD/t {currentLocale === "fr" ? "Usiné" : "Milled"}
            </div>
            <div className="grid-processing-cost-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(feasibilityItems.processingCostValue)}
            </div>
            <div className="grid-ga-cost-area font-light py-1">
              {currentLocale === "fr"
                ? "Frais généraux et administratifs"
                : "G&A Cost"}
            </div>
            <div className="grid-ga-cost-unit-area text-center font-light py-1">
              USD/t {currentLocale === "fr" ? "Usiné" : "Milled"}
            </div>
            <div className="grid-ga-cost-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(feasibilityItems.gACostValue)}
            </div>
            <div className="grid-total-site-costs-first-area font-light py-1">
              {currentLocale === "fr"
                ? "Coûts totaux du site"
                : "Total Site Costs"}
            </div>
            <div className="grid-total-site-costs-first-unit-area text-center font-light py-1">
              USD/t {currentLocale === "fr" ? "Usiné" : "Milled"}
            </div>
            <div className="grid-total-site-costs-first-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(feasibilityItems.totalSiteCostsFirstValue)}
            </div>
            <div className="grid-total-site-costs-second-area font-light py-1">
              {currentLocale === "fr"
                ? "Coûts totaux du site"
                : "Total Site Costs"}
            </div>
            <div className="grid-total-site-costs-second-unit-area text-center font-light py-1">
              USD/oz
            </div>
            <div className="grid-total-site-costs-second-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(
                feasibilityItems.totalSiteCostsSecondValue,
              )}
            </div>
            <div className="grid-total-operating-costs-area font-light py-1">
              {currentLocale === "fr"
                ? "Coûts d'exploitation totaux"
                : "Total Operating Costs"}
            </div>
            <div className="grid-total-operating-costs-unit-area text-center font-light py-1">
              USD/oz
            </div>
            <div className="grid-total-operating-costs-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(feasibilityItems.totalOperatingCostsValue)}
            </div>
            <div className="grid-aisc-area font-light pb-2 pt-1">
              {currentLocale === "fr" ? "AISC" : "AISC"}
            </div>
            <div className="grid-aisc-unit-area text-center font-light pb-2 pt-1">
              USD/oz
            </div>
            <div className="grid-aisc-value-area text-right font-light pb-2 pt-1 pr-8">
              {currencyFormat.format(feasibilityItems.aiscValue)}
            </div>
            <div className="grid-capital-costs-area text-dark-blue font-bold uppercase border-input border-t pb-1 pt-2">
              {currentLocale === "fr" ? "Coûts en capital" : "Capital Costs"}
            </div>
            <div className="grid-initial-capital-area font-light py-1">
              {currentLocale === "fr"
                ? "Le capital initial"
                : "Initial Capital"}
            </div>
            <div className="grid-initial-capital-unit-area text-center font-light py-1">
              {currentLocale === "fr" ? "MM USD" : "USD MM"}
            </div>
            <div className="grid-initial-capital-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(feasibilityItems.initialCapitalValue)}
            </div>
            <div className="grid-sustaining-capital-area font-light py-1">
              {currentLocale === "fr"
                ? "Capital de maintien de la durée de vie de la mine"
                : "Life of Mine Sustaining Capital"}
            </div>
            <div className="grid-sustaining-capital-unit-area text-center font-light py-1">
              {currentLocale === "fr" ? "MM USD" : "USD MM"}
            </div>
            <div className="grid-sustaining-capital-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(feasibilityItems.sustainingCapitalValue)}
            </div>
            <div className="grid-closure-costs-area font-light py-1">
              {currentLocale === "fr" ? "Coûts de fermeture" : "Closure Costs"}
            </div>
            <div className="grid-closure-costs-unit-area text-center font-light py-1">
              {currentLocale === "fr" ? "MM USD" : "USD MM"}
            </div>
            <div className="grid-closure-costs-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(feasibilityItems.closureCostsValue)}
            </div>
            <div className="grid-capital-costs-before-tax-area text-dark-blue py-1">
              {currentLocale === "fr"
                ? "Coûts en capital avant impôt"
                : "Capital Costs Before Tax"}
            </div>
            <div className="grid-capital-costs-before-tax-unit-area text-dark-blue text-center py-1">
              {currentLocale === "fr" ? "MM USD" : "USD MM"}
            </div>
            <div className="grid-capital-costs-before-tax-value-area text-dark-blue text-right py-1 pr-8">
              {currencyFormat.format(
                feasibilityItems.capitalCostsBeforeTaxValue,
              )}
            </div>
            <div className="grid-net-taxes-payable-area font-light py-1">
              {currentLocale === "fr"
                ? "Taxes nettes à payer"
                : "Net Taxes Payable"}
            </div>
            <div className="grid-net-taxes-payable-unit-area text-center font-light py-1">
              {currentLocale === "fr" ? "MM USD" : "USD MM"}
            </div>
            <div className="grid-net-taxes-payable-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(feasibilityItems.netTaxesPayableValue)}
            </div>
            <div className="grid-total-capital-area text-dark-blue py-1">
              {currentLocale === "fr"
                ? "Coûts d'investissement totaux"
                : "Total Capital Costs"}
            </div>
            <div className="grid-total-capital-unit-area text-center text-dark-blue py-1">
              {currentLocale === "fr" ? "MM USD" : "USD MM"}
            </div>
            <div className="grid-total-capital-value-area text-dark-blue text-right py-1 pr-8">
              {currencyFormat.format(feasibilityItems.totalCapitalValue)}
            </div>
            <div className="grid-financial-evaluation-area text-dark-blue uppercase font-bold border-input border-t pb-1 pt-2">
              {currentLocale === "fr"
                ? "Évaluation financière"
                : "Financial Evaluation"}
            </div>
            <div className="grid-gold-price-assumption-area font-light py-1">
              {currentLocale === "fr"
                ? "Hypothèse du prix de l'or"
                : "Gold Price Assumption"}
            </div>
            <div className="grid-gold-price-assumption-unit-area text-center font-light py-1">
              USD/oz
            </div>
            <div className="grid-gold-price-assumption-value-area text-right font-light py-1 pr-8">
              {currencyFormat.format(feasibilityItems.goldPriceAssumptionValue)}
            </div>
            <div className="grid-brl-fx-assumption-area font-light py-1">
              {currentLocale === "fr"
                ? "USD: hypothèse de change BRL"
                : "USD: BRL FX Assumption"}
            </div>
            <div className="grid-brl-fx-assumption-unit-area text-center font-light py-1">
              X
            </div>
            <div className="grid-brl-fx-assumption-value-area text-right font-light py-1 pr-8">
              {xUnitFormat.format(feasibilityItems.brlFxAssumptionValue)}
            </div>
            <div className="grid-after-tax-npv-second-area text-dark-blue py-1">
              {currentLocale === "fr"
                ? "VAN après impôt (5%)"
                : "After-Tax NPV (5%)"}
            </div>
            <div className="grid-after-tax-npv-second-unit-area text-dark-blue text-center py-1">
              {currentLocale === "fr" ? "MM USD" : "USD MM"}
            </div>
            <div className="grid-after-tax-npv-second-value-area text-dark-blue text-right py-1 pr-8">
              {currencyFormat.format(feasibilityItems.afterTaxNpvSecondValue)}
            </div>
            <div className="grid-after-tax-irr-second-area text-dark-blue py-1">
              {currentLocale === "fr" ? "TRI après impôt" : "After-Tax IRR"}
            </div>
            <div className="grid-after-tax-irr-second-unit-area text-dark-blue text-center py-1">
              %
            </div>
            <div className="grid-after-tax-irr-second-value-area text-dark-blue text-right py-1 pr-8">
              {percentFormat.format(feasibilityItems.afterTaxIrrSecondValue)}
            </div>
            <div className="grid-payback-area text-dark-blue py-1">
              {currentLocale === "fr" ? "Remboursement" : "Payback"}
            </div>
            <div className="grid-payback-unit-area text-dark-blue text-center py-1">
              {currentLocale === "fr" ? "Années" : "Years"}
            </div>
            <div className="grid-payback-value-area text-dark-blue text-right py-1 pr-8">
              {numberFormat.format(feasibilityItems.paybackValue)}
            </div>
          </div>
          <div className="feasibility-wrapper pt-6 md:pt-12 pb-4">
            <div className="grid justify-items-center">
              <button
                onClick={() => {
                  onDownloadClick(file || buttonLink || "/");
                }}
                className="feasibility-button font-xs uppercase"
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </IntlContextConsumer>
  );
};

export default FeasibilityTables;
