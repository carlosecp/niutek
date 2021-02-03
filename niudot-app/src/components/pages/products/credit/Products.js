import React, { Fragment } from "react";
import { useFormikContext, FieldArray } from "formik";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Dropdown, Text } from "../../utils/forms";
import RetractileForm from "../../utils/retractile_sections";

const Products = ({ options, loading }) => {
  const initialValues = {
    cargos: "",
    moneda: "",
    valor: 1,
    tipo: "",
  };

  const { values } = useFormikContext();

  const { productos } = values;

  return (
    <FieldArray
      name="productos"
      render={(arrayHelpers) => (
        <RetractileForm formTitle="Productos">
          {productos.map((_, index) => (
            <Fragment key={index}>
              <div className="flex justify-between items-center text-gray-gray">
                <h3 className="font-bold text-lg mt-3">Producto {index + 1}</h3>
                <div className="mr-4"></div>
                <FaTimes
                  className="cursor-pointer transform transition hover:rotate-90"
                  onClick={() => arrayHelpers.remove(index)}
                />
              </div>
              <div className="form-grid-layout">
                <Text
                  name={`productos.${index}.cargos`}
                  size="md"
                  label="Cargos"
                />
                <Dropdown
                  size="md"
                  name={`productos.${index}.moneda`}
                  label="Moneda"
                >
                  <option
                    value=""
                    selected={true}
                    disabled
                    label="Seleccione"
                  />
                  {loading ||
                    options.p_moneda.map((option) => (
                      <option
                        key={option.codigo}
                        value={option.descripcion}
                        label={option.descripcion}
                      />
                    ))}
                </Dropdown>
                <Text
                  name={`productos.${index}.valor`}
                  size="md"
                  label="Valor"
                />
                <Text name={`productos.${index}.tipo`} size="md" label="Tipo" />
              </div>
            </Fragment>
          ))}
          {productos.length < 2 && (
            <button
              type="button"
              onClick={() => arrayHelpers.push({ ...initialValues })}
              className="mt-3 btn bg-blue-blue btn-border-blue flex gap-2 items-center"
            >
              Agregar <FaPlus />
            </button>
          )}
        </RetractileForm>
      )}
    />
  );
};

export default Products;
