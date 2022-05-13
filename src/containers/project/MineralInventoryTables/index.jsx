import React from "react";
import { IntlContextConsumer } from "gatsby-plugin-intl";

import "./index.scss";

const MineralInventoryTables = ({ mineralInventoryItems }) => {
  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <div className="w-full overflow-x-scroll lg:overflow-x-auto pb-2 md:pb-0">
          <div className="mineral-resources-wrapper mineral-reserves-grid-area font-table text-text my-2">
            <div className="mineral-reserves-grid-reserves-title-area text-secondary uppercase py-4 pr-2 lg:pr-0">
              {currentLocale === "fr" ? "Estimation des réserves minérales" : "Mineral reserve estimate"}
            </div>
            <div className="mineral-reserves-grid-tonnage-title-area text-right text-secondary uppercase py-4 pl-2 lg:pl-0">
              <span className="">
                {currentLocale === "fr" ? "Tonnage" : "Tonnage"}
              </span>
            </div>
            <div className="mineral-reserves-grid-grade-title-area text-right text-secondary uppercase py-4 pl-2 lg:pl-0">
              <span className="">
                {currentLocale === "fr" ? "Classe" : "Grade"}
              </span>
            </div>
            <div className="mineral-reserves-grid-contained-title-area text-right text-secondary uppercase py-4 pl-2 lg:pl-0">
              <span className="">
                {currentLocale === "fr" ? "Contenu" : "Contained"}
              </span>
            </div>
            <div className="mineral-reserves-grid-proven-area font-light py-2">
              {currentLocale === "fr" ? "Éprouvée" : "Proven"}
            </div>
            <div className="mineral-reserves-grid-proven-tonnage-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.ProvenTonnage)}
            </div>
            <div className="mineral-reserves-grid-proven-grade-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.ProvenGrade)}
            </div>
            <div className="mineral-reserves-grid-proven-contained-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.ProvenContained)}
            </div>
            <div className="mineral-reserves-grid-probable-area font-light py-2">
              {currentLocale === "fr" ? "Probable" : "Probable"}
            </div>
            <div className="mineral-reserves-grid-probable-tonnage-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.ProbableTonnage)}
            </div>
            <div className="mineral-reserves-grid-probable-grade-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.ProbableGrade)}
            </div>
            <div className="mineral-reserves-grid-probable-contained-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.ProbableContained)}
            </div>
            <div className="mineral-reserves-grid-total-reserves-area border-t border-b border-input my-2">
              {currentLocale === "fr" ? "P & P totaux" : "Total P & P"}
            </div>
            <div className="mineral-reserves-grid-total-reserves-tonnage-area text-right border-t border-b border-input my-2">
              {numberFormat.format(mineralInventoryItems.TotalReservesTonnage)}
            </div>
            <div className="mineral-reserves-grid-total-reserves-grade-area text-right border-t border-b border-input my-2">
              {numberFormat.format(mineralInventoryItems.TotalReservesGrade)}
            </div>
            <div className="mineral-reserves-grid-total-reserves-contained-area text-right border-t border-b border-input my-2">
              {numberFormat.format(
                mineralInventoryItems.TotalReservesContained,
              )}
            </div>
          </div>

          <div className="font-table-small text-text font-medium capitalize pt-2 pb-4">
            <div className="mb-2">
              {currentLocale === "fr"
                ? "Remarque : les définitions cim ont été suivies pour les réserves minérales. La date d'entrée en vigueur de cette estimation est le 10 décembre 2021. Les réserves minérales sont estimées pour un prix de l'or de 1400 $/Oz. Teneur de coupure des réserves minérales de 0,36 G/T. Une largeur de peau de dilution de 1 m a été considérée, ce qui donne une dilution minière moyenne de 5,5%. La densité apparente du minerai est variable avec une moyenne de 2,43 T/M3. Le rapport de dénudage moyen est de 3,36:1/ les nombres peuvent ne pas s'additionner en raison des arrondis."
                : "Note: cim definitions were followed for mineral reserves. Effective date of this estimate is december 10, 2021. Mineral reserves are estimated for a gold price of $1400/Oz. Mineral reserve cut-off grade of 0.36 G/T. A dilution skin width of 1 m was considered resulting in an average mining dilution of 5.5%. Bulk density of ore is variable with an average of 2.43 T/M3. The average strip ratio is 3.36:1/ numbers may not add due to rounding."}
            </div>
          </div>

          <div className="mineral-resources-wrapper mineral-resources-grid-area w-full font-table text-text my-2">
            <div className="mineral-resources-grid-reserves-title-area text-secondary uppercase py-4 pr-2 lg:pr-0">
              {currentLocale === "fr" ? "Estimation des ressources minérales" : "Mineral resource estimate"}
            </div>
            <div className="mineral-resources-grid-tonnage-title-area text-right text-secondary uppercase py-4 pl-2 lg:pl-0">
              <span className="">
                {currentLocale === "fr" ? "Tonnage" : "Tonnage"}
              </span>
            </div>
            <div className="mineral-resources-grid-grade-title-area text-right text-secondary uppercase py-4 pl-2 lg:pl-0">
              <span className="">
                {currentLocale === "fr" ? "Classe" : "Grade"}
              </span>
            </div>
            <div className="mineral-resources-grid-contained-title-area text-right text-secondary uppercase py-4 pl-2 lg:pl-0">
              <span className="">
                {currentLocale === "fr" ? "Contenu" : "Contained"}
              </span>
            </div>
            <div className="mineral-resources-grid-measured-area font-light py-2">
              {currentLocale === "fr" ? "Mesurée" : "Measured"}
            </div>
            <div className="mineral-resources-grid-measured-tonnage-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.MeasuredTonnage)}
            </div>
            <div className="mineral-resources-grid-measured-grade-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.MeasuredGrade)}
            </div>
            <div className="mineral-resources-grid-measured-contained-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.MeasuredContained)}
            </div>
            <div className="mineral-resources-grid-indicated-area font-light py-2">
              {currentLocale === "fr" ? "Indiqué" : "Indicated"}
            </div>
            <div className="mineral-resources-grid-indicated-tonnage-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.IndicatedTonnage)}
            </div>
            <div className="mineral-resources-grid-indicated-grade-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.IndicatedGrade)}
            </div>
            <div className="mineral-resources-grid-indicated-contained-area font-light text-right py-2">
              {numberFormat.format(mineralInventoryItems.IndicatedContained)}
            </div>
            <div className="mineral-resources-grid-total-mi-area border-t border-b border-input my-2">
              {currentLocale === "fr" ? "Total M + I" : "Total M + I"}
            </div>
            <div className="mineral-resources-grid-total-mi-tonnage-area text-right  border-t border-b border-input my-2">
              {numberFormat.format(mineralInventoryItems.TotalMiTonnage)}
            </div>
            <div className="mineral-resources-grid-total-mi-grade-area text-right border-t border-b border-input my-2">
              {numberFormat.format(mineralInventoryItems.TotalMiGrade)}
            </div>
            <div className="mineral-resources-grid-total-mi-contained-area text-right border-t border-b border-input my-2">
              {numberFormat.format(mineralInventoryItems.TotalMiContained)}
            </div>
            <div className="mineral-resources-grid-inferred-area font-light border-b border-input my-2">
              {currentLocale === "fr" ? "Inféré" : "Inferred"}
            </div>
            <div className="mineral-resources-grid-inferred-tonnage-area font-light text-right border-b border-input my-2">
              {numberFormat.format(mineralInventoryItems.InferredTonnage)}
            </div>
            <div className="mineral-resources-grid-inferred-grade-area font-light text-right border-b border-input my-2">
              {numberFormat.format(mineralInventoryItems.InferredGrade)}
            </div>
            <div className="mineral-resources-grid-inferred-contained-area font-light text-right border-b border-input my-2">
              {numberFormat.format(mineralInventoryItems.InferredContained)}
            </div>
          </div>

          <div className="font-table-small text-text font-medium capitalize pt-2 pb-1">
            <div className="mb-2">
              {currentLocale === "fr"
                ? "Remarque : les ressources minérales ne sont pas des réserves minérales et n'ont pas démontré leur viabilité économique. Tous les chiffres sont arrondis pour refléter l'exactitude relative des estimations. Les dosages ont été plafonnés le cas échéant. Les ressources minérales à ciel ouvert sont déclarées à une teneur de coupure de 0,30 G/T d'or. Les teneurs de coupure sont basées sur un prix de l'or de 1600USD l'once troy et des récupérations métallurgiques de 78% pour l'or dans la roche saprolite, 90% pour l'or dans la roche fraîche granitique et 82% pour l'or dans les résidus miniers artisanaux."
                : "Note: mineral resources are not mineral reserves and have not demonstrated economic viability. All figures are rounded to reflect the ralative accuracy of the estimates. Assays were capped where appropriate. Open pit mineral resources are reported at a cut-off grade of 0.30 G/T gold. The cut-off grades are based on a gold price of us$1,600 per troy ounce and metallurgical recoveries of 78% for gold in saprolite rock, 90% for gold in granite fresh rock, and 82% for gold in artisanal miner tailings."}
            </div>
          </div>
        </div>
      )}
    </IntlContextConsumer>
  );
};

export default MineralInventoryTables;
